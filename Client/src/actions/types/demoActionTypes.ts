import {DEMO} from './actionStringsTypes'

export interface DemoAction {
    type:typeof DEMO;
    payload:string
}
export type DemoActionTypes = DemoAction;