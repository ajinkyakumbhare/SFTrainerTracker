public with sharing class ContactSearchCls {
    public ContactSearchCls() {
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getAccounts(String actName){
        String keyString = '%'+actName+'%';
        return [select id,name from Contact where name like:keyString LIMIT 3];
    }
}