import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  executionDate: DS.attr('date'),
  successfully: DS.attr('boolean', { defaultValue: false }),
  maintenanceOperation: DS.belongsTo('maintenance-operation', { inverse: null, async: false }),
  scheduledMaintenanceOperation: DS.belongsTo('scheduled-maintenance-operation', { inverse: null, async: false }),
  factOfTheMaintenance: DS.belongsTo('fact-of-the-maintenance', { inverse: 'factOperationOfTheMaintenance', async: false })
});

export let ValidationRules = {
  executionDate: {
    descriptionKey: 'models.fact-operation-of-the-maintenance.validations.executionDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  successfully: {
    descriptionKey: 'models.fact-operation-of-the-maintenance.validations.successfully.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  maintenanceOperation: {
    descriptionKey: 'models.fact-operation-of-the-maintenance.validations.maintenanceOperation.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  scheduledMaintenanceOperation: {
    descriptionKey: 'models.fact-operation-of-the-maintenance.validations.scheduledMaintenanceOperation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  factOfTheMaintenance: {
    descriptionKey: 'models.fact-operation-of-the-maintenance.validations.factOfTheMaintenance.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФактОперацияТОE', 'fact-operation-of-the-maintenance', {
    executionDate: attr('Дата выполнения', { index: 0 }),
    successfully: attr('Успешно', { index: 1 }),
    maintenanceOperation: belongsTo('maintenance-operation', 'Операция ТО', {
      name: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    scheduledMaintenanceOperation: belongsTo('scheduled-maintenance-operation', 'План операция ТО', {
      executionDate: attr('Дата выполнения', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'executionDate' })
  });
};
