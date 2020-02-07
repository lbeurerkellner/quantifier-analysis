import { BodyBinding } from './../../src/instantiation-graph/body-matching';
import { QuantifierInstantiationNode, TermNode, getAstElement, FunctionApplicationNode, InstantiationNodeType, instantiatedPath, path } from './../../src/instantiation-graph/instantiation-graph';
import { Parser, Expr, NodeType, Constant, ExprNode, Formula, FunctionApplicationExpr } from './../../src/ast/parser';
import { expect } from 'chai';
import { bodyMatch } from '../../src/instantiation-graph/body-matching';
import { InstantiationGraph, findTerms } from '../../src/instantiation-graph/instantiation-graph';
import { completeBindings } from '../../src/instantiation-graph/operations';

describe('Body Matching', () => {
  it('should body match with identity binding', () => {
    const bindings = matchBody("f(x)", "f(x)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    expect(bindingFor(binding, "f0.x")).to.be.equal("f0.x");
  });

  it('should body match with single function application binding', () => {
    const bindings = matchBody("f(x)", "f(g(x))");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    expect(bindingFor(binding, "f0.x")).to.be.equal("g(f0.x)");
  });

  it('should body match with function application with multiple arguments', () => {
    const bindings = matchBody("f(x, y)", "f(g(x), g(x))");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    expect(bindingFor(binding, "f0.x")).to.be.equal("g(f0.x)");
    expect(bindingFor(binding, "f0.y")).to.be.equal("g(f0.x)");
  });

  it('should body match with function application with multiple arguments (one is identity binding)', () => {
    const bindings = matchBody("f(x, y)", "f(g(x), y)");
    expect(bindings).to.have.lengthOf(1);

    const binding = bindings[0];
    expect(bindingFor(binding, "f0.x")).to.be.equal("g(f0.x)");
    expect(bindingFor(binding, "f0.y")).to.be.equal("f0.y");
  });

  it('should not body match with insufficient structure', () => {
    const bindings = matchBody("f(x, g(y))", "f(x, y)");
    expect(bindings).to.have.lengthOf(0);
  });

  it('should not body match with distinct function names', () => {
    const bindings = matchBody("f(x, y)", "g(x, y)");
    expect(bindings).to.have.lengthOf(0);
  });
});


/** Synthesises a formula declaration with term as body. The formula automatically
 * includes all quantified variables mentioned in term. */
function synthesiseFormula(term : string) : string {
    const parser = new Parser();
    // preliminary parse, results in broken AST since not all variables in term
    // may be declared on formula-level
    const preliminaryAst = parser.parse("forall x {f(x)} " + term + ";");
    const variableNames = (Array.from(new Set(findTerms(preliminaryAst.formulas[0].body)))
      .filter(t => t.type && t.type === NodeType.CONSTANT) as Constant[])
      .map(c => c.name).join(", ");
    return `forall ${variableNames} {testPattern(${variableNames})} ${term};`;
  }

function matchBody(instantiatedTerm : string, formulaTerm : string) : BodyBinding[] {
    const termNode = instantiateTerm(instantiatedTerm);
    const astNode = parseTerm(formulaTerm);

    return bodyMatch(astNode, termNode);
}

function parseTerm(term : string) : Expr {
    const parser = new Parser();
    const ast = parser.parse(synthesiseFormula(term));
    return (ast.formulas[0].body as any)[0];
}

function parseFormula(formula : string) : Formula {
    const parser = new Parser();
    let ast = parser.parse(formula);
    return ast.formulas[0];
}

function instantiateFormula(formula : Formula) : QuantifierInstantiationNode {
    const bindings = new Map<string, TermNode>();
    const instantiationGraph : InstantiationGraph = new InstantiationGraph([formula]);
    completeBindings(formula, bindings);
    return instantiationGraph.instantiateFormula(formula, bindings);
}

function instantiateTerm(term : string) : TermNode {
    const parser = new Parser();
    const ast = parser.parse(synthesiseFormula(term));
    const termAstNode = findTerms(ast.formulas[0].body)[0]
    const q = instantiateFormula(ast.formulas[0]);
    
    const termNode = Array.from(q.instantiated.values())
        .find(termNode => getAstElement(termNode) === termAstNode);

    return termNode!;
}

function bindingFor(binding : BodyBinding, key : string) : string {
    const actualBinding = Array.from(binding.entries())
        .find(entry => {
            return instantiatedPath(entry[0]) == key
        });
    if (actualBinding) {
        return path(actualBinding[1] as any, new Map<string, TermNode>());
    }
    return  "<null>";
}