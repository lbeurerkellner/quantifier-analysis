import { Expr, FunctionApplicationExpr, ExprNode, Constant, BinaryOperation, NotExpr, Formula, Root } from './../../src/ast/parser';
import { expect } from 'chai';
import { Parser } from '../../src/ast/parser';
import { mapNodes, resolveNode, resolve } from '../../src/ast/ast-path';

describe('AST paths', () => {

  it('path for simple function application', () => {
    const fa = (parseTerm("f(x)") as any)[0] as FunctionApplicationExpr;
    const paths = mapNodes(fa);

    expect(paths.get(fa.args[0] as ExprNode)).to.equal(".args.0");
  });

  it('path for nested function application', () => {
    const fa = (parseTerm("f(f(x))") as any)[0] as FunctionApplicationExpr;
    const paths = mapNodes(fa);

    expect(paths.get(funcAppl(fa.args[0]).args[0] as ExprNode)).to.equal(".args.0.args.0");
  });

  it('path for multi-argument function application', () => {
    const fa = (parseTerm("f(x,y)") as any)[0] as FunctionApplicationExpr;
    const paths = mapNodes(fa);

    expect(paths.get(fa.args[1] as ExprNode)).to.equal(".args.1");
  });

  it('path for binary operands', () => {
    const andOp = (parseTerm("g(x) and (not f(x,y))") as any)[0] as BinaryOperation;
    const notFa = (andOp.rhs as any)[0].operand as FunctionApplicationExpr;
    const paths = mapNodes(andOp);

    expect(paths.get(notFa.args[1] as ExprNode)).to.equal(".rhs.0.operand.args.1");
  });

  it('body path from formula level', () => {
    const f = parseFormula("forall x {f(x)} g(x) and (not f(x,y));") as Formula;
    const paths = mapNodes(f);

    const gOfX = (f.body as any)[0].lhs as FunctionApplicationExpr;

    expect(paths.get(gOfX.args[0] as ExprNode)).to.equal("F0.body.0.lhs.args.0");
  });

  it('pattern path from formula level', () => {
    const f = parseFormula("forall x {f(x)} g(x) and (not f(x,y));") as Formula;
    const paths = mapNodes(f);

    const fOfX = (f.pattern as any)[0] as FunctionApplicationExpr;

    expect(paths.get(fOfX.args[0] as ExprNode)).to.equal("F0.pattern.0.args.0");
  });

  it('path from formula level (multiple formulas)', () => {
    const r = parseAst("F0: forall x {f(x)} g(x) and (not f(x,y));F1: forall x {f(x)} g(x) and (not f(x,y));") as Root;
    const f = r.formulas[1];
    
    const paths = mapNodes(f);

    const fOfX = (f.pattern as any)[0] as FunctionApplicationExpr;

    expect(paths.get(fOfX.args[0] as ExprNode)).to.equal("F1.pattern.0.args.0");
  });

  it('resolves path function application level', () => {
    const fa = (parseTerm("f(x,y)") as any)[0] as FunctionApplicationExpr;
    const path = "args.1";
    const node = resolveNode(fa, path.split("."), path.split("."));

    expect(node).to.be.equal(fa.args[1]);
  });

  it('resolves path nested function application level', () => {
    const fa = (parseTerm("f(g(y, x),y)") as any)[0] as FunctionApplicationExpr;
    const path = "args.0.args.1";
    const node = resolveNode(fa, path.split("."), path.split("."));

    expect(node).to.be.equal((fa as any).args[0].args[1]);
  });

  it('resolves path root level', () => {
    const root = parseAst("F0: forall x {f(x)} g(x) and (not f(x,y));F1: forall x {f(x)} g(x) and (not f(x,y));") as Root;
    const path = "F1.body.0.lhs.args.0";
    const node = resolve(root, path);

    expect(node).to.be.equal((root as any).formulas[1].body[0].lhs.args[0]);
  });
});

function parseTerm(term : string) : Expr {
  const parser = new Parser();
  const ast = parser.parse("F0: forall x {f(x)} " + term + ";");

  return ast.formulas[0].body;
}

function parseAst(s : string) : Root {
  const parser = new Parser();
  const ast = parser.parse(s);

  return ast;
}

function parseFormula(formula : string) : Formula {
    const parser = new Parser();
    let ast = parser.parse("F0: " + formula);
    return ast.formulas[0];
}

function funcAppl(e : Expr) : FunctionApplicationExpr {
  expect(e).to.not.be.a("array");

  const en = e as ExprNode;
  expect(en.type).to.equal("func_application");

  return en as FunctionApplicationExpr;
}