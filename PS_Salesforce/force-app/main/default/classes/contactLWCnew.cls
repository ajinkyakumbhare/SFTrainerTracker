public with sharing class contactLWCnew {
    public contactLWCnew() {
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContacts(String conName){
        String keyString = '%'+conName+'%';
        return [select id,name from Contact where name like:keyString LIMIT 3];
    }
}