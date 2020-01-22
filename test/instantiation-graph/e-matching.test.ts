import { FunctionApplicationNode, VariableNode, InstantiationNodeType } from './../../src/instantiation-graph/instantiation-graph';
import { Parser, Expr, FunctionApplicationExpr, Formula } from './../../src/ast/parser';
import { expect } from 'chai';
import { match } from '../../src/instantiation-graph/e-matching';
import { instantiateTerm, instantiateFormula } from '../../src/instantiation-graph/operations';

describe('E-Matching', () => {
  it('should match single function application', () => {
    const bindings = matchBinding("f(x)", "f(y)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    const xBinding = binding.get("x") as VariableNode;

    expect(xBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
    expect(xBinding.name).to.be.equal("y");
  });

  it('should match double function application', () => {
    const bindings = matchBinding("f(x)", "f(g(y))");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    const xBinding = binding.get("x") as FunctionApplicationNode;

    expect(xBinding.type).to.be.equal(InstantiationNodeType.FUNC_APPL);
    expect(xBinding.name).to.be.equal("g");

    const variable = (xBinding.arguments[0] as VariableNode);
    expect(variable.name).to.be.equal("y");
  });

  it('should not match different function application', () => {
    const bindings = matchBinding("f(x)", "g(y)");
    expect(bindings).to.have.lengthOf(0);
  });

  it('should not match different nested function application', () => {
    const bindings = matchBinding("f(f(x))", "f(g(y))");
    expect(bindings).to.have.lengthOf(0);
  });

  it('should match function application with two arguments', () => {
    const bindings = matchBinding("f(x, y)", "f(a, b)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    const xBinding = binding.get("x") as VariableNode;
    const yBinding = binding.get("y") as VariableNode;

    expect(xBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
    expect(xBinding.name).to.be.equal("a");

    expect(yBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
    expect(yBinding.name).to.be.equal("b");
  });

  it('should match function application with five arguments', () => {
    const bindings = matchBinding("f(a1, a2, a3, a4, a5)", "f(b1, b2, b3, b4, b5)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
  
    for (let idx of [1, 2, 3, 4, 5]) {
      const varBinding = binding.get("a"+idx) as VariableNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b"+idx);
    }
  });

  it('should match function application with mixed-type arguments', () => {
    const bindings = matchBinding("f(a1, a2)", "f(g(b1), b2)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
  
    {
      let varBinding = binding.get("a1") as FunctionApplicationNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.FUNC_APPL);
      expect(varBinding.name).to.be.equal("g");
      expect(varBinding.arguments).to.have.lengthOf(1);
      expect((varBinding.arguments[0] as VariableNode).name).to.be.equal("b1");
    }

    {
      let varBinding = binding.get("a2") as VariableNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b2");
    }
  });
  
  it('should match via equalities', () => {
    const bindings = matchBinding("f(f(a1), a2)", "f(b1, b2) and (b1 = f(b3))");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
  
    {
      let varBinding = binding.get("a1") as FunctionApplicationNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b3");
    }

    {
      let varBinding = binding.get("a2") as VariableNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b2");
    }
  });

  it('should match with multiple possible bindings via equalities', () => {
    const bindings = matchBinding("f(f(a1), a2)", "f(b1, b2) and (b1 = f(b3)) and (b2 = g(b3))");
    expect(bindings).to.have.lengthOf(2);

    const binding1 = bindings[0];
    {
      let varBinding = binding1.get("a1") as FunctionApplicationNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b3");
    }

    {
      let varBinding = binding1.get("a2") as VariableNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b2");
    }

    const binding2 = bindings[1];
    {
      let varBinding = binding2.get("a1") as FunctionApplicationNode;
      expect(varBinding.type).to.be.equal(InstantiationNodeType.VARIABLE);
      expect(varBinding.name).to.be.equal("b3");
    }

    {
      let varBinding = binding2.get("a2") as FunctionApplicationNode;
      expect(varBinding.name).to.be.equal("g");
      expect(varBinding.type).to.be.equal(InstantiationNodeType.FUNC_APPL);
      expect(varBinding.arguments).to.have.lengthOf(1);
      expect((varBinding.arguments[0] as VariableNode).name).to.be.equal("b3");
    }
  });
})

function parseTerm(term : string) : Expr {
  const parser = new Parser();
  const ast = parser.parse("forall x {f(x)} " + term + ";");

  return (ast.formulas[0].body as any)[0];
}

function parseFormula(formula : string) : Formula {
  const parser = new Parser();
  const ast = parser.parse(formula);

  return ast.formulas[0];
}

function matchBinding(pattern : string, term : string) {
  const astPattern = parseTerm(pattern) as FunctionApplicationExpr;
  const astFormula = parseFormula("forall x {f(x)} " + term + ";");
  const instantiatedFormula = instantiateFormula(astFormula);

  return match(astPattern, Array.from(instantiatedFormula.instantiated.values())[0]);
}