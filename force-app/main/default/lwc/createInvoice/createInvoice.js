import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateInvoice extends NavigationMixin(LightningElement) {
    handleListViewNavigation(){
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
              objectApiName: "Account",
              actionName: "list"
            }
        });
    }
}