import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  maintenanceProgram: DS.belongsTo('maintenance-program', { inverse: 'maintenanceOperation', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.maintenance-operation.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  maintenanceProgram: {
    descriptionKey: 'models.maintenance-operation.validations.maintenanceProgram.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОперацияТОE', 'maintenance-operation', {
    name: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ОперацияТОL', 'maintenance-operation', {
    name: attr('Наименование', { index: 0 })
  });
};
