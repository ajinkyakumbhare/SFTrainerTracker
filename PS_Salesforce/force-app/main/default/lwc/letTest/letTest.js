import { LightningElement } from 'lwc';

export default class InputText extends LightningElement {
    dateFieldValue;
    dateTimeFieldValue;
    timeFieldValue;
    colorFieldValue;
    fileUploadValue;
    textFieldValue;
    emailFieldValue;
    passwordFieldValue;
    phoneFieldValue;
    urlFieldValue;
    numberFieldValue;
    checkBoxFieldValue;
    checkBoxButtonFieldValue;
    toogleFieldValue;
    searchFieldValue;
    handleDateChange(event){
        this.dateFieldValue = event.target.value;
    }
    handleDateTimeChange(event){
        this.dateTimeFieldValue = event.target.value;
    }
    handleTimeChange(event){
        this.timeFieldValue = event.target.value;
    }
    handleColorChange(event){
        this.colorFieldValue = event.target.value;
    }
    handleFileChange(event){
        this.fileUploadValue = event.target.value;
    }
    handleTextChange(event){
        this.textFieldValue = event.target.value;
    }
    handleEmailChange(event){
        this.emailFieldValue = event.target.value;
    }
    handlePasswordChange(event){
        this.passwordFieldValue = event.target.value;
    }
    handlePhoneChange(event){
        this.phoneFieldValue = event.target.value;
    }
    handleUrlChange(event){
        this.urlFieldValue = event.target.value;
    }
    handleNumberChange(event){
        this.numberFieldValue = event.target.value;
    }
    handleCheckBoxChange(event){
        this.checkBoxFieldValue = event.target.checked;
    }
    handleCheckBoxButtonChange(event){
        this.checkBoxButtonFieldValue = event.target.checked;
    }
    handleToggleChange(event){
        this.toogleFieldValue = event.target.checked;
    }
    handleSearchChange(event){
        this.searchFieldValue = event.target.value;
    }
}