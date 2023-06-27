import { LightningElement } from 'lwc';
import myresource from '@salesforce/resourceUrl/mydata';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class StaticResDemo extends LightningElement {
    mytitle = 'Static Resource Demo';

    image1 = myresource + '/mydata/first.jpg';
    image2 = myresource + '/mydata/second.png';
    image3 = myresource + '/mydata/third.png';
    image4 = myresource + '/mydata/four.png';
    image5 = myresource + '/mydata/five.jpg';


    handeltost(event){
        const evt = new ShowToastEvent({
            title : 'Error Variant Tost',
            message : 'I am Khumed Khatib',
            variant: 'info',
            mode: 'dismissable'
        })
        this.dispatchEvent(evt);
    }
}

