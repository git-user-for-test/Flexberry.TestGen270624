import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  manufacturer: DS.belongsTo('organization', { inverse: null, async: false }),
  documents: DS.hasMany('document-to-the-model', { inverse: 'equipmentModel', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.equipment-model.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  manufacturer: {
    descriptionKey: 'models.equipment-model.validations.manufacturer.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  documents: {
    descriptionKey: 'models.equipment-model.validations.documents.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МодельОборудованияE', 'equipment-model', {
    name: attr('Наименование', { index: 0 }),
    manufacturer: belongsTo('organization', 'Производитель', {
      name: attr('Наименование производителя', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    documents: hasMany('document-to-the-model', 'Документы', {
      name: attr('Наименование', { index: 0 }),
      fileReference: attr('Ссылка на файл', { index: 1 })
    })
  });

  modelClass.defineProjection('МодельОборудованияL', 'equipment-model', {
    name: attr('Наименование', { index: 0 }),
    manufacturer: belongsTo('organization', 'Производитель', {
      name: attr('Производитель', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
