import { LightningElement,api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class Lwc_QuickAction extends LightningElement {
    @api recordId;
    @api objectApiName;
    closeAction(){
        debugger;
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}