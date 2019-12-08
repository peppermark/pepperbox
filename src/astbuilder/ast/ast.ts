import { CaseClass } from '../../extensions/caseclass'

enum TraverseType { start, leaf, end }

export abstract class AST extends CaseClass {
    public abstract traverse(f: (node: AST, visitType: TraverseType) => void): AST
    public abstract reduce<T>(initialValue: T, f: (accumulator: T, node: AST, visitType: TraverseType) => T): T

    public abstract toPeppermark(): string
}

export abstract class ASTLeafNode extends AST {
    public traverse(f: (node: AST, visitType: TraverseType) => void): AST {
        f(this, TraverseType.leaf)
        return this
    }

    public reduce<T>(initialValue: T, f: (accumulator: T, node: AST, visitType: TraverseType) => T): T {
        return f(initialValue, this, TraverseType.leaf)
    }

    /**
     * Evaluates and replaces all inlines
     * @param input any pure content string
     */
    protected interpretInlines(input: string): string {
        return input // TODO
    }
}

export abstract class ASTContainerNode extends AST {
    protected elements: AST[]

    public traverse(f: (node: AST, visitType: TraverseType) => void): AST {
        f(this, TraverseType.start)
        this.elements.forEach((el) => el.traverse(f))
        f(this, TraverseType.end)
        return this
    }

    public reduce<T>(initialValue: T, f: (accumulator: T, node: AST, visitType: TraverseType) => T): T {
        let value = f(initialValue, this, TraverseType.start)
        value = this.elements.reduce((accumulator, current) => current.reduce(accumulator, f), value)
        return f(value, this, TraverseType.end)
    }
}