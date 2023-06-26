import { LightningElement,api } from 'lwc';

export default class LifecyclehookExample extends LightningElement {
    @api message = 'Wellcome to CloudHAK';

    constructor(){
        super();
        this.message = this.message + 'Life cycleHook';
        console.log('Executing Consontructor');
    }
    connectedCallback(){
        console.log('in connected Callback');
    }
    disconnectedCallback(){
        console.log('in disconnected Callback');
    }
    renderedCallback(){
        console.log('in rendered Callback');
    }
}