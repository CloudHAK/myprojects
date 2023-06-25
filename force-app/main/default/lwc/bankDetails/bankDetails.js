import { LightningElement,api } from 'lwc';
import getbankDetails from '@salesforce/apex/bankDetailController.fetchBankDetails';

export default class BankDetails extends LightningElement {
    @api isLoading = false;
    ifsccode = '';
    ifscrecivedData;
    parseData = [];
    isButtonDisabled = true;
    expectedIFSCCodeLength = 11;

    handalifsc(event) {
        this.ifsccode = event.target.value;
        this.isButtonDisabled = this.ifsccode.length !== this.expectedIFSCCodeLength;
    }

    handalAPicall() {
        this.isLoading = true;
        console.log(this.ifsccode);
        if (this.ifsccode !== '') {
            getbankDetails({ifsc_code : this.ifsccode})
                .then(result => {
                    console.log(result);
                    this.ifscrecivedData = result;
                    this.isLoading = false;
                    
                })
                .catch(error => {
                    this.ifscrecivedData = null;
                    this.isLoading = false;
                });
        }
    }
    handalRESETCall(){
        this.ifsccode = '';
        this.ifscrecivedData = null;
        this.isButtonDisabled = true;
    }
    
}
