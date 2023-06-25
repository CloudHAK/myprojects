import { LightningElement, wire } from 'lwc';
import getAccountRecord from '@salesforce/apex/fetchAccountRecordLWC.myaccountRec';
export default class Fetchaccountrec extends LightningElement {

    @wire(getAccountRecord) myaccounts;
    
}
