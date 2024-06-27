import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  patronymic: DS.attr('string'),
  surname: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.employee.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  patronymic: {
    descriptionKey: 'models.employee.validations.patronymic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.employee.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'employee', {
    surname: attr('Фамилия', { index: 0 }),
    name: attr('Имя', { index: 1 }),
    patronymic: attr('Отчество', { index: 2 })
  });

  modelClass.defineProjection('СотрудникL', 'employee', {
    surname: attr('Фамилия', { index: 0 }),
    name: attr('Имя', { index: 1 }),
    patronymic: attr('Отчество', { index: 2 })
  });
};
