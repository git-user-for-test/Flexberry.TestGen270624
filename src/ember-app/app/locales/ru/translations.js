import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import DataLineTestGen270624MaintenanceOperationLForm from './forms/data-line-test-gen270624-maintenance-operation-l';
import DataLineTestGen270624PeriodicityLForm from './forms/data-line-test-gen270624-periodicity-l';
import DataLineTestGen270624ScheduledMaintenanceOperationLForm from './forms/data-line-test-gen270624-scheduled-maintenance-operation-l';
import DataLineTestGen270624ДоговорLForm from './forms/data-line-test-gen270624-договор-l';
import DataLineTestGen270624МодельОборудованияLForm from './forms/data-line-test-gen270624-модель-оборудования-l';
import DataLineTestGen270624ОборудованиеLForm from './forms/data-line-test-gen270624-оборудование-l';
import DataLineTestGen270624ОрганизацияLForm from './forms/data-line-test-gen270624-организация-l';
import DataLineTestGen270624ПланТОLForm from './forms/data-line-test-gen270624-план-т-о-l';
import DataLineTestGen270624ПрограммаТОLForm from './forms/data-line-test-gen270624-программа-т-о-l';
import DataLineTestGen270624РасположениеLForm from './forms/data-line-test-gen270624-расположение-l';
import DataLineTestGen270624СотрудникLForm from './forms/data-line-test-gen270624-сотрудник-l';
import DataLineTestGen270624СтатусОборудованияLForm from './forms/data-line-test-gen270624-статус-оборудования-l';
import DataLineTestGen270624ТипОборудованияLForm from './forms/data-line-test-gen270624-тип-оборудования-l';
import DataLineTestGen270624ФактТОLForm from './forms/data-line-test-gen270624-факт-т-о-l';
import DataLineTestGen270624PeriodicityEForm from './forms/data-line-test-gen270624-periodicity-e';
import DataLineTestGen270624ДоговорEForm from './forms/data-line-test-gen270624-договор-e';
import DataLineTestGen270624МодельОборудованияEForm from './forms/data-line-test-gen270624-модель-оборудования-e';
import DataLineTestGen270624ОборудованиеEForm from './forms/data-line-test-gen270624-оборудование-e';
import DataLineTestGen270624ОрганизацияEForm from './forms/data-line-test-gen270624-организация-e';
import DataLineTestGen270624ПланТОEForm from './forms/data-line-test-gen270624-план-т-о-e';
import DataLineTestGen270624ПрограммаТОEForm from './forms/data-line-test-gen270624-программа-т-о-e';
import DataLineTestGen270624РасположениеEForm from './forms/data-line-test-gen270624-расположение-e';
import DataLineTestGen270624СотрудникEForm from './forms/data-line-test-gen270624-сотрудник-e';
import DataLineTestGen270624СтатусОборудованияEForm from './forms/data-line-test-gen270624-статус-оборудования-e';
import DataLineTestGen270624ТипОборудованияEForm from './forms/data-line-test-gen270624-тип-оборудования-e';
import DataLineTestGen270624ФактТОEForm from './forms/data-line-test-gen270624-факт-т-о-e';
import ContractModel from './models/contract';
import DocumentToTheModelModel from './models/document-to-the-model';
import EmployeeModel from './models/employee';
import EquipmentModelModel from './models/equipment-model';
import EquipmentStatusModel from './models/equipment-status';
import EquipmentTypeModel from './models/equipment-type';
import FactOfTheMaintenanceModel from './models/fact-of-the-maintenance';
import FactOperationOfTheMaintenanceModel from './models/fact-operation-of-the-maintenance';
import HardwareModel from './models/hardware';
import LocationModel from './models/location';
import MaintenanceOperationModel from './models/maintenance-operation';
import MaintenancePlanModel from './models/maintenance-plan';
import MaintenanceProgramModel from './models/maintenance-program';
import OrganizationModel from './models/organization';
import PeriodicityModel from './models/periodicity';
import PurposeOfTheMaintenanceModelModel from './models/purpose-of-the-maintenance-model';
import ScheduledMaintenanceOperationModel from './models/scheduled-maintenance-operation';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'contract': ContractModel,
    'document-to-the-model': DocumentToTheModelModel,
    'employee': EmployeeModel,
    'equipment-model': EquipmentModelModel,
    'equipment-status': EquipmentStatusModel,
    'equipment-type': EquipmentTypeModel,
    'fact-of-the-maintenance': FactOfTheMaintenanceModel,
    'fact-operation-of-the-maintenance': FactOperationOfTheMaintenanceModel,
    'hardware': HardwareModel,
    'location': LocationModel,
    'maintenance-operation': MaintenanceOperationModel,
    'maintenance-plan': MaintenancePlanModel,
    'maintenance-program': MaintenanceProgramModel,
    'organization': OrganizationModel,
    'periodicity': PeriodicityModel,
    'purpose-of-the-maintenance-model': PurposeOfTheMaintenanceModelModel,
    'scheduled-maintenance-operation': ScheduledMaintenanceOperationModel
  },

  'application-name': 'Maintenance Management System',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Maintenance Management System',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Maintenance Management System',
          title: 'Maintenance'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        оборудование: {
          caption: 'Оборудование',
          title: 'Оборудование',
          'data-line-test-gen270624-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'data-line-test-gen270624-договор-l': {
            caption: 'Договоры',
            title: ''
          }
        },
        'журнал-т-о': {
          caption: 'Журнал ТО',
          title: 'Журнал ТО',
          'data-line-test-gen270624-программа-т-о-l': {
            caption: 'Программа ТО',
            title: ''
          },
          'data-line-test-gen270624-план-т-о-l': {
            caption: 'План ТО',
            title: ''
          },
          'data-line-test-gen270624-факт-т-о-l': {
            caption: 'Факт ТО',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'data-line-test-gen270624-periodicity-l': {
            caption: 'Периоды',
            title: ''
          },
          'data-line-test-gen270624-модель-оборудования-l': {
            caption: 'Модели оборудования',
            title: ''
          },
          'data-line-test-gen270624-организация-l': {
            caption: 'Организации',
            title: ''
          },
          'data-line-test-gen270624-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'data-line-test-gen270624-сотрудник-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'data-line-test-gen270624-статус-оборудования-l': {
            caption: 'Статусы оборудования',
            title: ''
          },
          'data-line-test-gen270624-тип-оборудования-l': {
            caption: 'Типы оборудования',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'data-line-test-gen270624-maintenance-operation-l': DataLineTestGen270624MaintenanceOperationLForm,
    'data-line-test-gen270624-periodicity-l': DataLineTestGen270624PeriodicityLForm,
    'data-line-test-gen270624-scheduled-maintenance-operation-l': DataLineTestGen270624ScheduledMaintenanceOperationLForm,
    'data-line-test-gen270624-договор-l': DataLineTestGen270624ДоговорLForm,
    'data-line-test-gen270624-модель-оборудования-l': DataLineTestGen270624МодельОборудованияLForm,
    'data-line-test-gen270624-оборудование-l': DataLineTestGen270624ОборудованиеLForm,
    'data-line-test-gen270624-организация-l': DataLineTestGen270624ОрганизацияLForm,
    'data-line-test-gen270624-план-т-о-l': DataLineTestGen270624ПланТОLForm,
    'data-line-test-gen270624-программа-т-о-l': DataLineTestGen270624ПрограммаТОLForm,
    'data-line-test-gen270624-расположение-l': DataLineTestGen270624РасположениеLForm,
    'data-line-test-gen270624-сотрудник-l': DataLineTestGen270624СотрудникLForm,
    'data-line-test-gen270624-статус-оборудования-l': DataLineTestGen270624СтатусОборудованияLForm,
    'data-line-test-gen270624-тип-оборудования-l': DataLineTestGen270624ТипОборудованияLForm,
    'data-line-test-gen270624-факт-т-о-l': DataLineTestGen270624ФактТОLForm,
    'data-line-test-gen270624-periodicity-e': DataLineTestGen270624PeriodicityEForm,
    'data-line-test-gen270624-договор-e': DataLineTestGen270624ДоговорEForm,
    'data-line-test-gen270624-модель-оборудования-e': DataLineTestGen270624МодельОборудованияEForm,
    'data-line-test-gen270624-оборудование-e': DataLineTestGen270624ОборудованиеEForm,
    'data-line-test-gen270624-организация-e': DataLineTestGen270624ОрганизацияEForm,
    'data-line-test-gen270624-план-т-о-e': DataLineTestGen270624ПланТОEForm,
    'data-line-test-gen270624-программа-т-о-e': DataLineTestGen270624ПрограммаТОEForm,
    'data-line-test-gen270624-расположение-e': DataLineTestGen270624РасположениеEForm,
    'data-line-test-gen270624-сотрудник-e': DataLineTestGen270624СотрудникEForm,
    'data-line-test-gen270624-статус-оборудования-e': DataLineTestGen270624СтатусОборудованияEForm,
    'data-line-test-gen270624-тип-оборудования-e': DataLineTestGen270624ТипОборудованияEForm,
    'data-line-test-gen270624-факт-т-о-e': DataLineTestGen270624ФактТОEForm
  },

});

export default translations;
