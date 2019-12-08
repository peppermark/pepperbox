import { PepperBoxDataObject } from './index'

declare global {
    interface Window {
        pepperBox: PepperBoxDataObject
    }
}