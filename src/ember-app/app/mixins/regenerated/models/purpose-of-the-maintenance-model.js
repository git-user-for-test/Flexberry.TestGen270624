import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  equipmentModel: DS.belongsTo('equipment-model', { inverse: null, async: false }),
  maintenanceProgram: DS.belongsTo('maintenance-program', { inverse: 'purposeOfTheMaintenanceModel', async: false })
});

export let ValidationRules = {
  equipmentModel: {
    descriptionKey: 'models.purpose-of-the-maintenance-model.validations.equipmentModel.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  maintenanceProgram: {
    descriptionKey: 'models.purpose-of-the-maintenance-model.validations.maintenanceProgram.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НазначениеТОДляМоделиE', 'purpose-of-the-maintenance-model', {
    equipmentModel: belongsTo('equipment-model', 'Модель оборудования', {
      name: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'name' })
  });
};
