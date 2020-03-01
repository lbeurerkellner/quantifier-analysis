import { BodyBinding, bodyMatch } from './../../src/instantiation-graph/body-matching';
import { FunctionApplicationNode, VariableNode, InstantiationNodeType, getAstElement, TermNode, QuantifierInstantiationNode, instantiatedPath, path } from './../../src/instantiation-graph/instantiation-graph';
import { Parser, Expr, FunctionApplicationExpr, Formula, NodeType, Constant, ExprNode } from './../../src/ast/parser';
import { expect } from 'chai';
import { match } from '../../src/instantiation-graph/e-matching';
import { InstantiationGraph, findTerms } from '../../src/instantiation-graph/instantiation-graph';
import {completeBindings, computeExpressionPaths} from '../../src/instantiation-graph/operations';

describe('Expression Paths', () => {
    it('should detect path synonym in case of renaming a variable by replacement', () => {
        const f0 = parseFormula("F0: forall x {f(x)} g(x);");
        const q = instantiateFormula(f0);
        const xVar = (Array.from(q.instantiated)
            .filter(n => (n as FunctionApplicationNode)?.arguments)[0] as any).arguments[0];

        const f1 = parseFormula("F1: forall y {h(y)} f(y);");
        const fOfY = (f1.body as any)[0];
        const plainBindings = completeBindings(f1, new Map());


        const paths = computeExpressionPaths(fOfY, 
            new Map([["F1.y", [xVar] as TermNode[]]]),
            plainBindings);
        
        expect(paths).to.contain("f(F0.x)");
        expect(paths).to.contain("f(F1.y)");
    });

    it('should detect path synonym in case of replaced expression as argument', () => {
    const f0 = parseFormula("F0: forall x {f(x)} g(x);");
        const q = instantiateFormula(f0);
        const xVar = (Array.from(q.instantiated)
            .filter(n => (n as FunctionApplicationNode)?.arguments)[0] as any).arguments[0];

        const f1 = parseFormula("F1: forall y {i(y)} g(h(y)) and f(h(y));");
        const g_h_y = (f1.body as any)[0].lhs;
        const plainBindings = completeBindings(f1, new Map());

        const paths = computeExpressionPaths(g_h_y, 
            new Map([["h(F1.y)", [xVar] as TermNode[]]]),
            plainBindings);
        
        expect(paths).to.contain("g(F0.x)");
        expect(paths).to.contain("g(h(F1.y))");
    });
})

/** Synthesises a formula declaration with term as body. The formula automatically
 * includes all quantified variables mentioned in term. */
function synthesiseFormula(term : string) : string {
    const parser = new Parser();
    // preliminary parse, results in broken AST since not all variables in term
    // may be declared on formula-level
    const preliminaryAst = parser.parse("F0: forall x {f(x)} " + term + ";");
    const variableNames = (Array.from(new Set(findTerms(preliminaryAst.formulas[0].body)))
      .filter(t => t.type && t.type === NodeType.CONSTANT) as Constant[])
      .map(c => c.name).join(", ");
    return `F0: forall ${variableNames} {testPattern(${variableNames})} ${term};`;
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