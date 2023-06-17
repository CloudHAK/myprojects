import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {
    firstvalue;
    secondvalue;
    result = '';
    handelfirstNumber(event){
        this.firstvalue = event.target.value;
    }
    handelsecondNumber(event){
        this.secondvalue = event.target.value;
    }

    handelAdd(event){
        this.result = parseInt(this.firstvalue) + parseInt(this.secondvalue);
    }
    handelSub(event){
        this.result = Number(this.firstvalue) - Number(this.secondvalue);
    }
    handelMul(event){
        this.result = Number(this.firstvalue) * Number(this.secondvalue);
    }
    handelDiv(event){
        this.result = Number(this.firstvalue) / Number(this.secondvalue);
    }

    handelreset(event){
        this.firstvalue = '';
        this.secondvalue = '';
        this.result = '';

    }

}