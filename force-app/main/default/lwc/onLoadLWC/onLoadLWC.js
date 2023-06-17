import { LightningElement } from 'lwc';

export default class OnLoadLWC extends LightningElement {
    inputvalue;

    connectedCallback(){
        this.inputvalue = 100;
    }
}