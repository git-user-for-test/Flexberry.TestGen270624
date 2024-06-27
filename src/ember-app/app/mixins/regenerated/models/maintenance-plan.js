import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  equipment: DS.belongsTo('hardware', { inverse: null, async: false }),
  scheduledMaintenanceOperation: DS.hasMany('scheduled-maintenance-operation', { inverse: 'maintenancePlan', async: false })
});

export let ValidationRules = {
  startDate: {
    descriptionKey: 'models.maintenance-plan.validations.startDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endDate: {
    descriptionKey: 'models.maintenance-plan.validations.endDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  equipment: {
    descriptionKey: 'models.maintenance-plan.validations.equipment.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  scheduledMaintenanceOperation: {
    descriptionKey: 'models.maintenance-plan.validations.scheduledMaintenanceOperation.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланТОE', 'maintenance-plan', {
    startDate: attr('Дата начала', { index: 0 }),
    endDate: attr('Дата окончания', { index: 1 }),
    equipment: belongsTo('hardware', 'Оборудование', {
      name: attr('Номер', { index: 3, hidden: true }),
      model: belongsTo('equipment-model', '', {
        name: attr('Модель оборудования', { index: 4 })
      }, { index: -1, hidden: true }),
      type: belongsTo('equipment-type', '', {
        name: attr('Тип оборудования', { index: 5 })
      }, { index: -1, hidden: true }),
      status: belongsTo('equipment-status', '', {
        name: attr('Статус оборудования', { index: 6 })
      }, { index: -1, hidden: true }),
      accountable: belongsTo('employee', '', {
        surname: attr('Фамилия ответственного', { index: 7 })
      }, { index: -1, hidden: true }),
      serviceContract: belongsTo('contract', '', {
        number: attr('Номер сервисного договора', { index: 8 })
      }, { index: -1, hidden: true }),
      location: belongsTo('location', '', {
        name: attr('Место расположения оборудования', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    scheduledMaintenanceOperation: hasMany('scheduled-maintenance-operation', 'Плановые операции ТО', {
      executionDate: attr('Дата выполнения', { index: 0 }),
      maintenanceOperation: belongsTo('maintenance-operation', 'Операция ТО', {
        name: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('ПланТОL', 'maintenance-plan', {
    startDate: attr('Дата начала', { index: 0 }),
    endDate: attr('Дата окончания', { index: 1 }),
    equipment: belongsTo('hardware', 'Номер', {
      name: attr('Номер', { index: 2 }),
      model: belongsTo('equipment-model', '', {
        name: attr('Модель', { index: 3 }),
        manufacturer: belongsTo('organization', '', {
          name: attr('Производитель', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
