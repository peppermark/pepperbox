import { buildAST } from './astbuilder/astbuilder'

export interface PepperBoxDataObject {
    buildAST
}

export const pepperBox: PepperBoxDataObject = {
    buildAST
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: TS2304
if (window) window.pepperBox = pepperBox
