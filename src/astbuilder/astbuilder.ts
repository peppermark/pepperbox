import { AST } from './ast/ast'

export interface ASTBuilder {
    buildAST: (input: string) => AST
}

export class ASTBuilderImpl implements ASTBuilder {
    public buildAST(input: string): AST {
        return {}
    }
}

export function buildAST(input: string): AST {
    return new ASTBuilderImpl().buildAST(input)
}