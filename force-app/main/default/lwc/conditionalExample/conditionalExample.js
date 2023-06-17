import { LightningElement } from 'lwc';

export default class ConditionalExample extends LightningElement {
    firstname = true;
    lastname =  false;
    mytitle = 'Conditional Rerending in LWC';
    myfirstName = 'KHUMED';
    mylastName = 'KHATIB';

    showFname(event){
        this.firstname = true;
        this.lastname = true;
    }
    showlname(event){
        this.firstname = false;
        this.lastname = false;
    }
}