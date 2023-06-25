public with sharing class fetchAccountRecordLWC {
    @AuraEnabled(Cacheable = true)
    public static list<Account> myaccountRec(){
        list<Account> lstAcc = New list<Account>();
        lstAcc = [Select Id,Name,Rating,Industry from Account limit 20];
        return lstAcc;
    }

    @AuraEnabled(Cacheable = true)
    public static list<lead> fetchleadRec(){
        try {
            list<Lead> myleadRec = new list<lead>();
            myleadRec = [select Id,FirstName,LastName,Rating,Email from Lead];
            return myleadRec;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> searchmyAccRec(string mysearchtext){
        try {
            string mykeyword = '%' + mysearchtext + '%';
            System.debug('Input Text ==> '+mysearchtext);
            List<Account> mylstAcc = New List<Account>();
            if(mysearchtext != null && mysearchtext != ''){
                mylstAcc = [select Id,Name,Rating,Industry from Account Where Name Like:mykeyword];
                return mylstAcc;
            }
            else{

                return null;
            }

        } catch (Exception e) {

            throw new AuraHandledException(e.getMessage());
        }
    }
}