import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оборудование.caption'),
          title: i18n.t('forms.application.sitemap.оборудование.title'),
          children: [{
            link: 'data-line-test-gen270624-оборудование-l',
            caption: i18n.t('forms.application.sitemap.оборудование.data-line-test-gen270624-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.оборудование.data-line-test-gen270624-оборудование-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'data-line-test-gen270624-договор-l',
            caption: i18n.t('forms.application.sitemap.оборудование.data-line-test-gen270624-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.оборудование.data-line-test-gen270624-договор-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.журнал-т-о.caption'),
          title: i18n.t('forms.application.sitemap.журнал-т-о.title'),
          children: [{
            link: 'data-line-test-gen270624-программа-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-программа-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-программа-т-о-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'data-line-test-gen270624-план-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-план-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-план-т-о-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'data-line-test-gen270624-факт-т-о-l',
            caption: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-факт-т-о-l.caption'),
            title: i18n.t('forms.application.sitemap.журнал-т-о.data-line-test-gen270624-факт-т-о-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'data-line-test-gen270624-periodicity-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-periodicity-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-periodicity-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'data-line-test-gen270624-модель-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-модель-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-модель-оборудования-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'data-line-test-gen270624-организация-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-организация-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'data-line-test-gen270624-расположение-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-расположение-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'data-line-test-gen270624-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-сотрудник-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'data-line-test-gen270624-статус-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-статус-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-статус-оборудования-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'data-line-test-gen270624-тип-оборудования-l',
            caption: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-тип-оборудования-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.data-line-test-gen270624-тип-оборудования-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})