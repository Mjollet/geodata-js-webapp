import { Contact } from './contact' ;

export interface Creator {

        _created: string ; 
        _id: string ; 
        _modified: string ; 
        _tag: string ;
        contact: Contact ;
}