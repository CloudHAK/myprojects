import { LightningElement} from 'lwc';

export default class Fromhtmltojs extends LightningElement {

    firstName;
    lastName;

    handlefirstName(event){
      this.firstName = event.target.value;
    }
    handlelastName(event){
        this.lastName = event.target.value;
    }

}