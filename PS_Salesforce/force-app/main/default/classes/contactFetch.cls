public class contactFetch {
 
    @AuraEnabled
    public static Contact createAccount(Contact acc) {
        system.debug('acc'+acc);
        insert acc;
        return acc;
    }
}