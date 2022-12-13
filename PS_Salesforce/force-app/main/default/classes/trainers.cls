public with sharing class trainers {
    @AuraEnabled
    public static List<Trainer_Skill__c> fetchApexClass(String searchKey){
        String key = '%' + searchKey + '%';
        try {
            return [SELECT Id, Skill__r.Name, Trainer__r.name FROM Trainer_Skill__c Where Skill__r.Name LIKE 'java script'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
 }