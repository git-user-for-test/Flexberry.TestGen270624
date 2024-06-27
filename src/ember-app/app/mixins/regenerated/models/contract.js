import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  number: DS.attr('string'),
  validityPeriod: DS.attr('date'),
  buyer: DS.belongsTo('organization', { inverse: null, async: false }),
  seller: DS.belongsTo('organization', { inverse: null, async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.contract.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  number: {
    descriptionKey: 'models.contract.validations.number.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  validityPeriod: {
    descriptionKey: 'models.contract.validations.validityPeriod.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  buyer: {
    descriptionKey: 'models.contract.validations.buyer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  seller: {
    descriptionKey: 'models.contract.validations.seller.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'contract', {
    number: attr('Номер', { index: 0 }),
    date: attr('Дата', { index: 1 }),
    validityPeriod: attr('Срок действия', { index: 2 }),
    buyer: belongsTo('organization', 'Покупатель', {
      name: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    seller: belongsTo('organization', 'Продавец', {
      name: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ДоговорL', 'contract', {
    number: attr('Номер', { index: 0 }),
    date: attr('Дата', { index: 1 }),
    validityPeriod: attr('Срок действия', { index: 2 }),
    buyer: belongsTo('organization', 'Наименование', {
      name: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    seller: belongsTo('organization', 'Наименование', {
      name: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
