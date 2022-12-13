public class changeOneNewComponent {
 
    @AuraEnabled
    public static Course_Offering__c createAccount(Course_Offering__c acc) {
        system.debug('acc'+acc);
        insert acc;
        return acc;
    }
}