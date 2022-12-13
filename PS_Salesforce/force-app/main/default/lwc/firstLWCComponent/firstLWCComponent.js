import { LightningElement,track,api } from 'lwc';
export default class HunterFileUpload extends LightningElement {
    @track lstAllFiles = [];
    @api recordId;
    get acceptedFormats() {
        return ['.pdf', '.jpg'];
    }
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const lstUploadedFiles = event.detail.files;
        lstUploadedFiles.forEach(fileIterator => this.lstAllFiles.push(fileIterator.name));
    }
}