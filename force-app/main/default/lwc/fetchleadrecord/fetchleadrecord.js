import { LightningElement ,wire} from 'lwc';
import getmyleadlist from '@salesforce/apex/fetchAccountRecordLWC.fetchleadRec';
export default class Fetchleadrecord extends LightningElement {

    leadlist;
    listbybuttonclick
    myerror;
    showLeadRecord = false;
    showLeadRecordbyButtonclick = false;
    
    connectedCallback() { //In Short Handler in LWC JS
        alert('in my connected call back');
        this.handelshowlead();
    }

    @wire(getmyleadlist)
    getmyleadRec({error , data}){
        if(data){
            console.log(data);
            this.leadlist = data;
            this.showLeadRecord = true;
            this.myerror = undefined;
        }
        else if(error){
            console.log(error);
            this.myerror = error;
            this.data = undefined;
        }
    }
    handelshowlead(event){
        getmyleadlist()
        .then(result => {
            this.listbybuttonclick = result;
            this.showLeadRecordbyButtonclick  = true;

        })
        .catch(error =>{
            alert('in Error Block');
        })
    }
}