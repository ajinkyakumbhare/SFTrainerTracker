import { LightningElement, track} from 'lwc';
import Course_Offering__c_OBJECT from '@salesforce/schema/Course_Offering__c';
import NAME_FIELD from '@salesforce/schema/Course_Offering__c.Course__c';
import STARTDATE_FIELD from '@salesforce/schema/Course_Offering__c.Start_Date_Time__c';
import ENDDATE_FIELD from '@salesforce/schema/Course_Offering__c.End_Date_Time__c';
import createAccount from '@salesforce/apex/createAcc.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordWithFieldIntigrity extends LightningElement {
    
dateTimeFieldValueStart;
dateTimeFieldValueEnd;

    @track Course__c = NAME_FIELD;
    @track Start_Date_Time__c = STARTDATE_FIELD;
    @track End_Date_Time__c = ENDDATE_FIELD;

    rec = {
        Course__c : this.Course__c,
        Start_Date_Time__c : this.Start_Date_Time__c,
        End_Date_Time__c : this.End_Date_Time__c
    }
 
    handleNameChange(event) {
        this.rec.Course__c = event.target.value;
        console.log("name1", this.rec.Course__c);
    }
    
    handleDateTimeChangestart(event){
        this.rec.Start_Date_Time__c = event.target.value;
        console.log("startdate", this.rec.Start_Date_Time__c);

    }

    handleDateTimeChangeend(event){
        this.rec.End_Date_Time__c = event.target.value;
        console.log("enddate", this.rec.End_Date_Time__c);
    }

    handleClick() {
        createAccount({ acc : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Course__c = '';
                    this.rec.Start_Date_Time__c = '';
                    this.rec.End_Date_Time__c = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}