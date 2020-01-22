import { Expr, FunctionApplicationExpr, ExprNode, Constant, BinaryOperation, NotExpr } from './../../src/ast/parser';
import { expect } from 'chai';
import { Parser } from '../../src/ast/parser';

describe('Parser', () => {

  it('should parse simple constant', () => {
    const fa = (parseTerm("x") as any)[0] as Constant;

    expect(fa.type).to.equal("constant");
    expect(fa.name).to.equal("x");
  });

  it('should parse simple function application', () => {
    const fa = (parseTerm("f(x)") as any)[0] as FunctionApplicationExpr;

    expect(fa.name).to.equal('f');
    expect(fa.args.length).to.equal(1);
    expect((fa.args[0] as ExprNode).type).to.equal("constant");
    expect((fa.args[0] as Constant).name).to.equal("x");
  });

  it('should parse a nested function application', () => {
    const fa = (parseTerm("f(f(x))") as any)[0] as FunctionApplicationExpr;

    expect(fa.name).to.equal('f');
    expect(fa.args).to.have.lengthOf(1);

    const nestedFa = funcAppl(fa.args[0]);

    expect(nestedFa.name).to.equal("f");
    expect(nestedFa.args).to.have.lengthOf(1);
    expect((nestedFa.args[0] as Constant).name).to.equal("x");
  });

  it('should parse equality expression', () => {
    const eqExpr = (parseTerm("f(x) = g(x)") as any)[0] as BinaryOperation;
    expect(eqExpr.type).to.equal('=');
    
    const lhs = eqExpr.lhs as FunctionApplicationExpr;
    const rhs = eqExpr.rhs as FunctionApplicationExpr;
    
    expect(lhs.type).to.equal("func_application");
    expect(rhs.type).to.equal("func_application");

    expect(lhs.name).to.equal("f");
    expect(rhs.name).to.equal("g");
  });

  it('should parse and-expression', () => {
    const andExpr = (parseTerm("f(x) and g(x)") as any)[0] as BinaryOperation;
    expect(andExpr.type).to.equal('and');
    
    const lhs = andExpr.lhs as FunctionApplicationExpr;
    const rhs = andExpr.rhs as FunctionApplicationExpr;
    
    expect(lhs.type).to.equal("func_application");
    expect(rhs.type).to.equal("func_application");

    expect(lhs.name).to.equal("f");
    expect(rhs.name).to.equal("g");
  });

  it('should parse or-expression', () => {
    const orExpr = (parseTerm("f(x) or g(x)") as any)[0] as BinaryOperation;
    expect(orExpr.type).to.equal('or');
    
    const lhs = orExpr.lhs as FunctionApplicationExpr;
    const rhs = orExpr.rhs as FunctionApplicationExpr;
    
    expect(lhs.type).to.equal("func_application");
    expect(rhs.type).to.equal("func_application");

    expect(lhs.name).to.equal("f");
    expect(rhs.name).to.equal("g");
  });

  it('should parse not-expression', () => {
    const notExpr = (parseTerm("not f(x)") as any)[0] as NotExpr;
    expect(notExpr.type).to.equal('not');
    
    const op = notExpr.operand as FunctionApplicationExpr;
    
    expect(op.type).to.equal("func_application");
    expect(op.name).to.equal("f");
  });

  it('should parse parenthesis', () => {
    const andExpr = (parseTerm("(f(x) = g(x)) and (h(x) = i(x))") as any)[0] as BinaryOperation;
    expect(andExpr.type).to.equal('and');
    
    const lhs = (andExpr.lhs as any)[0] as BinaryOperation;
    const rhs = (andExpr.rhs as any)[0] as BinaryOperation;

    expect(lhs.type).to.equal('=');
    expect(rhs.type).to.equal('=');
    
    expect(funcAppl(lhs.lhs).name).to.equal("f");
    expect(funcAppl(lhs.rhs).name).to.equal("g");

    expect(funcAppl(rhs.lhs).name).to.equal("h");
    expect(funcAppl(rhs.rhs).name).to.equal("i");
  });

  /* TODO: implement easier and more stable serialization (excluding location information from AST)
  it('should parse complex expression', () => {
    const expr = (parseTerm("x = x and ((f(x) = l) or (f(x) = x))") as any)[0] as Constant;
    console.log(JSON.stringify(expr));
  });*/
});

function parseTerm(term : string) : Expr {
  const parser = new Parser();
  const ast = parser.parse("forall x {f(x)} " + term + ";");

  return ast.formulas[0].body;
}

function funcAppl(e : Expr) : FunctionApplicationExpr {
  expect(e).to.not.be.a("array");

  const en = e as ExprNode;
  expect(en.type).to.equal("func_application");

  return en as FunctionApplicationExpr;
}