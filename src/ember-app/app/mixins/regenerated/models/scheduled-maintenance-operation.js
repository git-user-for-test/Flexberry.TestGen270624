import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  executionDate: DS.attr('date'),
  maintenanceOperation: DS.belongsTo('maintenance-operation', { inverse: null, async: false }),
  maintenancePlan: DS.belongsTo('maintenance-plan', { inverse: 'scheduledMaintenanceOperation', async: false })
});

export let ValidationRules = {
  executionDate: {
    descriptionKey: 'models.scheduled-maintenance-operation.validations.executionDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  maintenanceOperation: {
    descriptionKey: 'models.scheduled-maintenance-operation.validations.maintenanceOperation.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  maintenancePlan: {
    descriptionKey: 'models.scheduled-maintenance-operation.validations.maintenancePlan.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланОперацияТОE', 'scheduled-maintenance-operation', {
    executionDate: attr('Дата выполнения', { index: 0 }),
    maintenanceOperation: belongsTo('maintenance-operation', 'Операция ТО', {
      name: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ПланОперацияТОL', 'scheduled-maintenance-operation', {
    executionDate: attr('Дата выполнения', { index: 0 }),
    maintenanceOperation: belongsTo('maintenance-operation', 'Операция ТО', {
      name: attr('Наименование операции', { index: 2 })
    }, { index: 1, hidden: true })
  });
};
