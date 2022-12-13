public with sharing class cONC {
        @AuraEnabled
        public static Trainer_Offering__c createTrainer(Trainer_Offering__c tcc) {
            system.debug('tcc'+tcc);
            insert tcc;
            return tcc;
        }
    }