import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateOfCommissioning: DS.attr('date'),
  runDate: DS.attr('date'),
  productionDate: DS.attr('date'),
  operatingTime: DS.attr('number', { defaultValue: 0 }),
  name: DS.attr('string'),
  description: DS.attr('string'),
  warrantyPeriod: DS.attr('date'),
  supplyContract: DS.belongsTo('contract', { inverse: null, async: false }),
  location: DS.belongsTo('location', { inverse: null, async: false }),
  model: DS.belongsTo('equipment-model', { inverse: null, async: false }),
  accountable: DS.belongsTo('employee', { inverse: null, async: false }),
  serviceContract: DS.belongsTo('contract', { inverse: null, async: false }),
  status: DS.belongsTo('equipment-status', { inverse: null, async: false }),
  type: DS.belongsTo('equipment-type', { inverse: null, async: false })
});

export let ValidationRules = {
  dateOfCommissioning: {
    descriptionKey: 'models.hardware.validations.dateOfCommissioning.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  runDate: {
    descriptionKey: 'models.hardware.validations.runDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  productionDate: {
    descriptionKey: 'models.hardware.validations.productionDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  operatingTime: {
    descriptionKey: 'models.hardware.validations.operatingTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.hardware.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.hardware.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  warrantyPeriod: {
    descriptionKey: 'models.hardware.validations.warrantyPeriod.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  supplyContract: {
    descriptionKey: 'models.hardware.validations.supplyContract.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  location: {
    descriptionKey: 'models.hardware.validations.location.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  model: {
    descriptionKey: 'models.hardware.validations.model.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  accountable: {
    descriptionKey: 'models.hardware.validations.accountable.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  serviceContract: {
    descriptionKey: 'models.hardware.validations.serviceContract.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  status: {
    descriptionKey: 'models.hardware.validations.status.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.hardware.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'hardware', {
    name: attr('Номер', { index: 0 }),
    productionDate: attr('Дата производства', { index: 1 }),
    dateOfCommissioning: attr('Дата ввода в экспл', { index: 2 }),
    warrantyPeriod: attr('Срок гарантии', { index: 3 }),
    operatingTime: attr('Наработка', { index: 4 }),
    runDate: attr('Дата наработки', { index: 5 }),
    description: attr('Описание', { index: 6 }),
    type: belongsTo('equipment-type', 'Тип', {
      name: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'name' }),
    status: belongsTo('equipment-status', 'Статус', {
      name: attr('Наименование', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'name' }),
    accountable: belongsTo('employee', 'Ответственный', {
      surname: attr('Фамилия ответственного', { index: 12 }),
      name: attr('Имя ответственного', { index: 13 }),
      patronymic: attr('Отчество ответственного', { index: 14 })
    }, { index: 11, displayMemberPath: 'surname' }),
    serviceContract: belongsTo('contract', 'Сервисный договор', {
      number: attr('', { index: 16, hidden: true }),
      date: attr('Дата сервисного договора', { index: 17 }),
      validityPeriod: attr('Срок действия сервисного договора', { index: 18 })
    }, { index: 15, displayMemberPath: 'number' }),
    model: belongsTo('equipment-model', 'Модель', {
      name: attr('Наименование', { index: 20, hidden: true }),
      manufacturer: belongsTo('organization', '', {
        name: attr('Производитель модели', { index: 21 })
      }, { index: -1, hidden: true })
    }, { index: 19, displayMemberPath: 'name' }),
    supplyContract: belongsTo('contract', 'Договор поставки', {
      number: attr('Номер', { index: 23, hidden: true }),
      date: attr('Дата договора поставки', { index: 24 }),
      validityPeriod: attr('Срок действия договора поставки', { index: 25 })
    }, { index: 22, displayMemberPath: 'number' }),
    location: belongsTo('location', 'Место расположения', {
      name: attr('Наименование', { index: 27, hidden: true })
    }, { index: 26, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ОборудованиеL', 'hardware', {
    name: attr('Номер', { index: 0 }),
    productionDate: attr('Дата производства', { index: 1 }),
    dateOfCommissioning: attr('Дата ввода в экспл', { index: 2 }),
    warrantyPeriod: attr('Срок гарантии', { index: 3 }),
    operatingTime: attr('Наработка', { index: 4 }),
    runDate: attr('Дата наработки', { index: 5 }),
    description: attr('Описание', { index: 6 }),
    type: belongsTo('equipment-type', 'Тип', {
      name: attr('Тип', { index: 7 })
    }, { index: -1, hidden: true }),
    status: belongsTo('equipment-status', 'Статус', {
      name: attr('Статус', { index: 8 })
    }, { index: -1, hidden: true }),
    accountable: belongsTo('employee', 'Ответственный', {
      surname: attr('Ответственный', { index: 9 })
    }, { index: -1, hidden: true }),
    serviceContract: belongsTo('contract', 'Сервисный договор', {
      number: attr('Сервисный договор', { index: 10 })
    }, { index: -1, hidden: true }),
    model: belongsTo('equipment-model', 'Модель', {
      name: attr('Модель', { index: 11 })
    }, { index: -1, hidden: true }),
    supplyContract: belongsTo('contract', 'Договор поставки', {
      number: attr('Договор поставки', { index: 12 })
    }, { index: -1, hidden: true }),
    location: belongsTo('location', 'Расположение', {
      name: attr('Расположение', { index: 13 })
    }, { index: -1, hidden: true })
  });
};
