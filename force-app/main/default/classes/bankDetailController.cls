public with sharing class bankDetailController {
    @AuraEnabled(Cacheable = true)
    public static BankDetails fetchBankDetails(string ifsc_code){
        BankDetails result = New BankDetails();
        string apiUrl;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(apiUrl);
        request.setMethod('GET');
        try{
            httpResponse response = New httpResponse();
            response = http.send(request);
            if(response.getStatusCode() == 200){
                result = (BankDetails)JSON.deserialize(response.getBody(), BankDetails.class);
            }
            
        }catch(Exception e){
            return null;
        }
        return result;
    }

    public class BankDetails{
        public String BRANCH; //Delhi Nagrik Sehkari Bank IMPS
        public String CENTRE; //DELHI
        public String DISTRICT; //DELHI
        public String STATE; //MAHARASHTRA
        public String ADDRESS; //720, NEAR GHANTAGHAR, SUBZI MANDI, DELHI - 110007
        public String CONTACT; //+919560344685
        public boolean IMPS;
        public String CITY; //MUMBAI
        public boolean UPI;
        public String MICR; //110196002
        public boolean RTGS;
        public boolean NEFT;
        public String SWIFT; //
        public String ISO3166; //IN-MH
        public String BANK; //Delhi Nagrik Sehkari Bank
        public String BANKCODE; //DENS
        public String IFSC; //YESB0DNB002
    }
}