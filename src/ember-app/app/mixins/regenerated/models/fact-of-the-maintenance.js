import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  scanProtocol: DS.attr('string'),
  /**
    Non-stored property.

    @property successfully
  */
  successfully: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'successfullyCompute' method in model class (outside of this mixin) if you want to compute value of 'successfully' property.

    @method _successfullyCompute
    @private
    @example
      ```javascript
      _successfullyChanged: on('init', observer('successfully', function() {
        once(this, '_successfullyCompute');
      }))
      ```
  */
  _successfullyCompute: function() {
    let result = (this.successfullyCompute && typeof this.successfullyCompute === 'function') ? this.successfullyCompute() : null;
    this.set('successfully', result);
  },
  equipment: DS.belongsTo('hardware', { inverse: null, async: false }),
  maintenancePlan: DS.belongsTo('maintenance-plan', { inverse: null, async: false }),
  factOperationOfTheMaintenance: DS.hasMany('fact-operation-of-the-maintenance', { inverse: 'factOfTheMaintenance', async: false })
});

export let ValidationRules = {
  startDate: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.startDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endDate: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.endDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  scanProtocol: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.scanProtocol.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  successfully: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.successfully.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  equipment: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.equipment.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  maintenancePlan: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.maintenancePlan.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  factOperationOfTheMaintenance: {
    descriptionKey: 'models.fact-of-the-maintenance.validations.factOperationOfTheMaintenance.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФактТОE', 'fact-of-the-maintenance', {
    startDate: attr('Дата начала', { index: 0 }),
    endDate: attr('Дата окончания', { index: 1 }),
    scanProtocol: attr('Скан протокола', { index: 2 }),
    successfully: attr('Успешно', { index: 3 }),
    equipment: belongsTo('hardware', 'Оборудование', {
      name: attr('Номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' }),
    maintenancePlan: belongsTo('maintenance-plan', 'План ТО', {
      startDate: attr('Дата начала', { index: 7 }),
      endDate: attr('Дата окончания', { index: 8 }),
      equipment: belongsTo('hardware', '', {
        name: attr('Номер оборудования', { index: 9 }),
        type: belongsTo('equipment-type', '', {
          name: attr('Тип оборудования', { index: 10 })
        }, { index: -1, hidden: true }),
        model: belongsTo('equipment-model', '', {
          name: attr('Модель оборудования', { index: 11 }),
          manufacturer: belongsTo('organization', '', {
            name: attr('Производитель оборудования', { index: 12 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 6 }),
    factOperationOfTheMaintenance: hasMany('fact-operation-of-the-maintenance', 'Фактические операции ТО', {
      executionDate: attr('Дата выполнения', { index: 0 }),
      successfully: attr('Успешно', { index: 1 }),
      maintenanceOperation: belongsTo('maintenance-operation', 'Операция ТО', {
        name: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'name' }),
      scheduledMaintenanceOperation: belongsTo('scheduled-maintenance-operation', 'План операция ТО', {
        executionDate: attr('Дата выполнения', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'executionDate' })
    })
  });

  modelClass.defineProjection('ФактТОL', 'fact-of-the-maintenance', {
    startDate: attr('Дата начала', { index: 0 }),
    endDate: attr('Дата окончания', { index: 1 }),
    scanProtocol: attr('Скан протокола', { index: 2 }),
    successfully: attr('Успешно', { index: 3 }),
    equipment: belongsTo('hardware', 'Номер', {
      name: attr('Номер', { index: 4 }),
      model: belongsTo('equipment-model', '', {
        name: attr('Модель оборудования', { index: 5 }),
        manufacturer: belongsTo('organization', '', {
          name: attr('Производитель оборудования', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      type: belongsTo('equipment-type', '', {
        name: attr('Тип оборудования', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    maintenancePlan: belongsTo('maintenance-plan', 'Дата начала', {
      startDate: attr('Дата начала', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
