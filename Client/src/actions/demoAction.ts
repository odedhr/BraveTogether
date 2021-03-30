import * as types from './types/actionStringsTypes'
import {DemoActionTypes} from './types/demoActionTypes'

export const replaceNameDemo = (name:string):DemoActionTypes=>{
    return {
        type:types.DEMO,
        payload:name
    }

}