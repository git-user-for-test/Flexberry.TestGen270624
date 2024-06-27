import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  periodicity: DS.belongsTo('periodicity', { inverse: null, async: false }),
  purposeOfTheMaintenanceModel: DS.hasMany('purpose-of-the-maintenance-model', { inverse: 'maintenanceProgram', async: false }),
  maintenanceOperation: DS.hasMany('maintenance-operation', { inverse: 'maintenanceProgram', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.maintenance-program.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  periodicity: {
    descriptionKey: 'models.maintenance-program.validations.periodicity.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  purposeOfTheMaintenanceModel: {
    descriptionKey: 'models.maintenance-program.validations.purposeOfTheMaintenanceModel.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  maintenanceOperation: {
    descriptionKey: 'models.maintenance-program.validations.maintenanceOperation.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрограммаТОE', 'maintenance-program', {
    name: attr('Наименование', { index: 0 }),
    periodicity: belongsTo('periodicity', 'Периодичность', {
      name: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    purposeOfTheMaintenanceModel: hasMany('purpose-of-the-maintenance-model', 'Модели оборудования', {
      equipmentModel: belongsTo('equipment-model', 'Модель оборудования', {
        name: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'name' })
    }),
    maintenanceOperation: hasMany('maintenance-operation', 'Операции ТО', {
      name: attr('Наименование', { index: 0 })
    })
  });

  modelClass.defineProjection('ПрограммаТОL', 'maintenance-program', {
    name: attr('Наименование', { index: 0 }),
    periodicity: belongsTo('periodicity', 'Периодичность', {
      name: attr('Периодичность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
