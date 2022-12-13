import { LightningElement,wire,track } from 'lwc';
import getContacts from '@salesforce/apex/contactLWCnew.getContacts';
const DELAY = 300;
export default class Searchcontact extends LightningElement {
    contactName='';
    @track contactList =[];
    @wire(getContacts,{conName:'$contactName'}) 
    retrieveContact({error,data}){ 
        if(data){
            this.contactList = data;
        }
        else if(error){

        }
    }
    handleKeyChange(event){
        const searchString= event.target.value;
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(()=>{
            this.contactName =searchString;
        },DELAY);
    }
}