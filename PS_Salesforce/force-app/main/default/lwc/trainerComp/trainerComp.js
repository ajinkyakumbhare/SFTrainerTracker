import { LightningElement, wire } from 'lwc';

//import the named import
import { getObjectInfos } from 'lightning/uiObjectInfoApi';

//import references to multiple objects
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfosExample extends LightningElement {

	//wire the named import to a propery or function
    @wire(getObjectInfos, { objectApiNames: [ ACCOUNT_OBJECT, OPPORTUNITY_OBJECT ] })
    objectsInfo({error, data}){
    	if(data){
         console.log(data);
        }else{
         console.log(error);
        }
    }
}