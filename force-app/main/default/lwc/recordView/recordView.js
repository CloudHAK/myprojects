import { LightningElement ,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class RecordView extends LightningElement {
    @api objectApiName = 'Account';
    @api recordId;
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
}