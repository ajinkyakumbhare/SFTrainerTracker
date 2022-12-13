public with sharing class getRecordDataController {
    //@AuraEnabled is annotation enables LWC to access below apex method
    //(cacheable=true) is for caching the data on client side storage without 
    @AuraEnabled(cacheable=true)
     public static List<Contact> getAccounts() {
     return [SELECT Id, Name, Phone FROM Contact];
     }
   }