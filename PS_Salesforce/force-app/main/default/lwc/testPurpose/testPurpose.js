import { LightningElement, track} from 'lwc';
import Contact_OBJECT from '@salesforce/schema/Contact';
import createAccount from '@salesforce/apex/contactFetch.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LookupExample extends LightningElement {

    selectedCourseOffering;
    selectContact;
    clickedButtonLabel;

    handleCourseOfferingSelection(event){
        this.selectedCourseOffering = event.target.value;
    }
    handleContactSelection(event){
        this.selectContact = event.target.value;
    }

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
    saveButton() {  
        this.fileReader = new FileReader();  
        this.fileReader.onloadend = (() => {  
          this.fileContents = this.fileReader.result;  
          let base64 = 'base64,';  
          this.content = this.fileContents.indexOf(base64) + base64.length;  
          this.fileContents = this.fileContents.substring(this.content);  
          this.saveRecord();  
        });  
       this.fileReader.readAsDataURL(this.file);  
      } 

}