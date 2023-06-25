import { LightningElement } from 'lwc';
import getmyaccountRec from '@salesforce/apex/fetchAccountRecordLWC.searchmyAccRec';
export default class Searchrecordaccount extends LightningElement {
    searchText;
    myaccountdata;
    myerror;
    handalchnage(event){
        this.searchText = event.target.value;
    }
    fetchAccountRec(){
        if(this.searchText !== ''){
            getmyaccountRec({
                mysearchtext : this.searchText
            })
            .then( result =>{
                this.myaccountdata = result;
            })
            .catch(error =>{
                this.myaccountdata = null;
            })
        }
        else{
            alert('Please Enter Search Text Then Click the Button');
        }
    }
}