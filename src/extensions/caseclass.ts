interface Match {
    case: (className: string) => CaseThen
}

interface CaseThen {
    then: (f: () => void) => Match
}

export abstract class CaseClass {
    static _className = 'CaseClass'
    protected _classIdentifier = CaseClass._className

    public match: Match = {
        case: (className: string): CaseThen => {
            if (className == this._classIdentifier) {
                return {
                    then: (f: () => void): Match => {
                        f()
                        return this.match
                    }
                }
            } else {
                return {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    then: (f: () => void): Match => {
                        return this.match
                    }
                }
            }
        }
    }
}
