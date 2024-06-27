import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  fileReference: DS.attr('string'),
  equipmentModel: DS.belongsTo('equipment-model', { inverse: 'documents', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.document-to-the-model.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  fileReference: {
    descriptionKey: 'models.document-to-the-model.validations.fileReference.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  equipmentModel: {
    descriptionKey: 'models.document-to-the-model.validations.equipmentModel.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументКМоделиE', 'document-to-the-model', {
    name: attr('Наименование', { index: 0 }),
    fileReference: attr('Ссылка на файл', { index: 1 })
  });
};
