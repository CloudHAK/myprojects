import { LightningElement,api} from 'lwc';

export default class MyChild extends LightningElement {
    @api mycollegename;
    @api mycompanyname;
}