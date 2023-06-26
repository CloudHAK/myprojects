import { LightningElement } from 'lwc';
import saverecord from '@salesforce/apex/createAccountRecordLWC.saveAccountRecord';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class Createaccountrecord extends LightningElement {

    accRecordlst = {
        Rating : RATING_FIELD,
        Name : NAME_FIELD,
        Industry :INDUSTRY_FIELD
    };

    handelName(event){
        this.accRecordlst.Name = event.target.value;
        console.log(this.accRecordlst.Name);
    }
    handelRating(event){
        this.accRecordlst.Rating = event.target.value;
        console.log(this.accRecordlst.Rating);
    }
    handelindustry(event){
        this.accRecordlst.Industry = event.target.value;
        console.log(this.accRecordlst.Industry);
    }

    handalAccountSave(){
        
        console.log(this.accRecordlst);
        alert(this.accRecordlst.Name);
        saverecord({
            myAccountRec : this.accRecordlst
        })
        .then(result => { 
            alert('Account Record Inserted SuccessFully');
        })
        .catch(error => {
            alert('Account Record Failed');
        })
    }

}