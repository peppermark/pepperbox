import { AST } from './ast/ast'

interface ASTBuilder {
    buildAST: (input: string) => AST
}

class ASTBuilderImpl implements ASTBuilder {
    public buildAST(input: string): AST {
        return {}
    }
}

export function buildAST(input: string): AST {
    return new ASTBuilderImpl().buildAST(input)
}