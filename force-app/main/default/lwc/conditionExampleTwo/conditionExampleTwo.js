import { LightningElement } from 'lwc';

export default class ConditionExampleTwo extends LightningElement {

    get leapYear(){
        const d = new Date();
        let year = d.getFullYear();
        return this.handleLeapYearCalculation(year);
    }

    get notLeapYear(){
        const d = new Date();
        let year = d.getFullYear();
        return !this.handleLeapYearCalculation(year);
    }

    handleLeapYearCalculation(year){
        if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){

            return true;
        }
        else{
            return false;
        }
    }

}