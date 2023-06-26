public  class createAccountRecordLWC {
    @AuraEnabled
    public static void saveAccountRecord(Account myAccountRec){
        System.debug(myAccountRec);
        insert myAccountRec;
    }
}