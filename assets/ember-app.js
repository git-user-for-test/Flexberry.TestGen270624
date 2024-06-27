"use strict";



define('ember-app/adapters/application-offline', ['exports', 'ember-flexberry-data/adapters/offline', 'ember-app/config/environment'], function (exports, _offline, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _offline.default.extend({
    dbName: _environment.default.APP.offline.dbName
  });
});
define('ember-app/adapters/application', ['exports', 'ember-flexberry-data/mixins/adapter', 'ember-flexberry-data/adapters/odata', 'ember-app/config/environment'], function (exports, _adapter, _odata, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _odata.default.extend(_adapter.default, {
    host: _environment.default.APP.backendUrls.api
  });
});
define('ember-app/adapters/odata', ['exports', 'ember-flexberry-data/adapters/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _odata.default;
    }
  });
});
define('ember-app/adapters/offline', ['exports', 'ember-flexberry-data/adapters/offline'], function (exports, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offline.default;
    }
  });
});
define('ember-app/app', ['exports', 'ember-app/resolver', 'ember-load-initializers', 'ember-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-app/browserify', ['npm:dexie', 'npm:node-uuid'], function (_npmDexie, _npmNodeUuid) {
  'use strict';
});
define('ember-app/components/advlimit-dialog-content', ['exports', 'ember-flexberry/components/advlimit-dialog-content'], function (exports, _advlimitDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _advlimitDialogContent.default;
    }
  });
});
define('ember-app/components/block-slot', ['exports', 'ember-block-slots/components/block-slot'], function (exports, _blockSlot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockSlot.default;
    }
  });
});
define('ember-app/components/colsconfig-dialog-content', ['exports', 'ember-flexberry/components/colsconfig-dialog-content'], function (exports, _colsconfigDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _colsconfigDialogContent.default;
    }
  });
});
define('ember-app/components/filters-dialog-content', ['exports', 'ember-flexberry/components/filters-dialog-content'], function (exports, _filtersDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filtersDialogContent.default;
    }
  });
});
define('ember-app/components/flexberry-button', ['exports', 'ember-flexberry/components/flexberry-button'], function (exports, _flexberryButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryButton.default;
    }
  });
});
define('ember-app/components/flexberry-checkbox', ['exports', 'ember-flexberry/components/flexberry-checkbox'], function (exports, _flexberryCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryCheckbox.default;
});
define('ember-app/components/flexberry-colorpicker', ['exports', 'ember-flexberry/components/flexberry-colorpicker'], function (exports, _flexberryColorpicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryColorpicker.default;
    }
  });
});
define('ember-app/components/flexberry-ddau-checkbox', ['exports', 'ember-flexberry/components/flexberry-ddau-checkbox'], function (exports, _flexberryDdauCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDdauCheckbox.default;
    }
  });
});
define('ember-app/components/flexberry-ddau-slider', ['exports', 'ember-flexberry/components/flexberry-ddau-slider'], function (exports, _flexberryDdauSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDdauSlider.default;
    }
  });
});
define('ember-app/components/flexberry-dialog', ['exports', 'ember-flexberry/components/flexberry-dialog'], function (exports, _flexberryDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDialog.default;
    }
  });
});
define('ember-app/components/flexberry-dropdown', ['exports', 'ember-flexberry/components/flexberry-dropdown'], function (exports, _flexberryDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryDropdown.default;
});
define('ember-app/components/flexberry-error', ['exports', 'ember-flexberry/components/flexberry-error'], function (exports, _flexberryError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryError.default;
    }
  });
});
define('ember-app/components/flexberry-field', ['exports', 'ember-flexberry/components/flexberry-field'], function (exports, _flexberryField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryField.default;
});
define('ember-app/components/flexberry-file', ['exports', 'ember-flexberry/components/flexberry-file'], function (exports, _flexberryFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFile.default;
});
define('ember-app/components/flexberry-groupedit', ['exports', 'ember-flexberry/components/flexberry-groupedit'], function (exports, _flexberryGroupedit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryGroupedit.default;
});
define('ember-app/components/flexberry-icon', ['exports', 'ember-flexberry/components/flexberry-icon'], function (exports, _flexberryIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryIcon.default;
    }
  });
});
define('ember-app/components/flexberry-jsonarea', ['exports', 'ember-flexberry/components/flexberry-jsonarea'], function (exports, _flexberryJsonarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryJsonarea.default;
    }
  });
});
define('ember-app/components/flexberry-lookup', ['exports', 'ember-flexberry/components/flexberry-lookup'], function (exports, _flexberryLookup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryLookup.default;
});
define('ember-app/components/flexberry-menu', ['exports', 'ember-flexberry/components/flexberry-menu'], function (exports, _flexberryMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryMenu.default;
    }
  });
});
define('ember-app/components/flexberry-menuitem', ['exports', 'ember-flexberry/components/flexberry-menuitem'], function (exports, _flexberryMenuitem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryMenuitem.default;
    }
  });
});
define('ember-app/components/flexberry-objectlistview', ['exports', 'ember-flexberry/components/flexberry-objectlistview'], function (exports, _flexberryObjectlistview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryObjectlistview.default;
});
define('ember-app/components/flexberry-sidebar', ['exports', 'ember-flexberry/components/flexberry-sidebar'], function (exports, _flexberrySidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySidebar.default;
    }
  });
});
define('ember-app/components/flexberry-simpledatetime', ['exports', 'ember-flexberry/components/flexberry-simpledatetime'], function (exports, _flexberrySimpledatetime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySimpledatetime.default;
    }
  });
});
define('ember-app/components/flexberry-sitemap-guideline', ['exports', 'ember-flexberry/components/flexberry-sitemap-guideline'], function (exports, _flexberrySitemapGuideline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySitemapGuideline.default;
    }
  });
});
define('ember-app/components/flexberry-sitemap', ['exports', 'ember-flexberry/components/flexberry-sitemap'], function (exports, _flexberrySitemap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySitemap.default;
    }
  });
});
define('ember-app/components/flexberry-tab-bar', ['exports', 'ember-flexberry/components/flexberry-tab-bar'], function (exports, _flexberryTabBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTabBar.default;
    }
  });
});
define('ember-app/components/flexberry-text-cell', ['exports', 'ember-flexberry/components/flexberry-text-cell'], function (exports, _flexberryTextCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTextCell.default;
    }
  });
});
define('ember-app/components/flexberry-textarea', ['exports', 'ember-flexberry/components/flexberry-textarea'], function (exports, _flexberryTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryTextarea.default;
});
define('ember-app/components/flexberry-textbox', ['exports', 'ember-flexberry/components/flexberry-textbox'], function (exports, _flexberryTextbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryTextbox.default;
});
define('ember-app/components/flexberry-toggler', ['exports', 'ember-flexberry/components/flexberry-toggler'], function (exports, _flexberryToggler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryToggler.default;
});
define('ember-app/components/flexberry-tree', ['exports', 'ember-flexberry/components/flexberry-tree'], function (exports, _flexberryTree) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTree.default;
    }
  });
});
define('ember-app/components/flexberry-treenode', ['exports', 'ember-flexberry/components/flexberry-treenode'], function (exports, _flexberryTreenode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTreenode.default;
    }
  });
});
define('ember-app/components/flexberry-validationmessage', ['exports', 'ember-flexberry/components/flexberry-validationmessage'], function (exports, _flexberryValidationmessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryValidationmessage.default;
    }
  });
});
define('ember-app/components/flexberry-validationsummary', ['exports', 'ember-flexberry/components/flexberry-validationsummary'], function (exports, _flexberryValidationsummary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryValidationsummary.default;
    }
  });
});
define('ember-app/components/flexberry/validation-summary', ['exports', 'ember-flexberry/components/flexberry/validation-summary'], function (exports, _validationSummary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _validationSummary.default;
    }
  });
});
define('ember-app/components/form-load-time-tracker', ['exports', 'ember-flexberry/components/form-load-time-tracker'], function (exports, _formLoadTimeTracker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formLoadTimeTracker.default;
    }
  });
});
define('ember-app/components/groupedit-toolbar', ['exports', 'ember-flexberry/components/groupedit-toolbar'], function (exports, _groupeditToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _groupeditToolbar.default;
});
define('ember-app/components/highload-edit-form-menu', ['exports', 'ember-flexberry/components/highload-edit-form-menu'], function (exports, _highloadEditFormMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _highloadEditFormMenu.default;
    }
  });
});
define('ember-app/components/mobile/flexberry-file', ['exports', 'ember-flexberry/components/mobile/flexberry-file'], function (exports, _flexberryFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFile.default;
});
define('ember-app/components/mobile/flexberry-groupedit', ['exports', 'ember-flexberry/components/mobile/flexberry-groupedit'], function (exports, _flexberryGroupedit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryGroupedit.default;
});
define('ember-app/components/mobile/flexberry-objectlistview', ['exports', 'ember-flexberry/components/mobile/flexberry-objectlistview'], function (exports, _flexberryObjectlistview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryObjectlistview.default;
});
define('ember-app/components/mobile/flexberry-sitemap-guideline', ['exports', 'ember-flexberry/components/mobile/flexberry-sitemap-guideline'], function (exports, _flexberrySitemapGuideline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberrySitemapGuideline.default;
});
define('ember-app/components/mobile/object-list-view-row', ['exports', 'ember-flexberry/components/mobile/object-list-view-row'], function (exports, _objectListViewRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewRow.default;
});
define('ember-app/components/mobile/object-list-view', ['exports', 'ember-flexberry/components/mobile/object-list-view'], function (exports, _objectListView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListView.default;
});
define('ember-app/components/modal-dialog', ['exports', 'ember-flexberry/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modalDialog.default;
});
define('ember-app/components/object-list-view-cell', ['exports', 'ember-flexberry/components/object-list-view-cell'], function (exports, _objectListViewCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewCell.default;
});
define('ember-app/components/object-list-view-row', ['exports', 'ember-flexberry/components/object-list-view-row'], function (exports, _objectListViewRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewRow.default;
});
define('ember-app/components/object-list-view-single-column-cell', ['exports', 'ember-flexberry/components/object-list-view-single-column-cell'], function (exports, _objectListViewSingleColumnCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectListViewSingleColumnCell.default;
    }
  });
});
define('ember-app/components/object-list-view', ['exports', 'ember-flexberry/components/object-list-view'], function (exports, _objectListView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListView.default;
});
define('ember-app/components/olv-filter-interval', ['exports', 'ember-flexberry/components/olv-filter-interval'], function (exports, _olvFilterInterval) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _olvFilterInterval.default;
    }
  });
});
define('ember-app/components/olv-setconfigdialogbutton', ['exports', 'ember-flexberry/components/olv-setconfigdialogbutton'], function (exports, _olvSetconfigdialogbutton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _olvSetconfigdialogbutton.default;
    }
  });
});
define('ember-app/components/olv-toolbar', ['exports', 'ember-flexberry/components/olv-toolbar'], function (exports, _olvToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _olvToolbar.default;
});
define('ember-app/components/ui-message', ['exports', 'ember-flexberry/components/ui-message'], function (exports, _uiMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _uiMessage.default;
});
define('ember-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-app/components/yield-slot', ['exports', 'ember-block-slots/components/yield-slot'], function (exports, _yieldSlot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _yieldSlot.default;
    }
  });
});
define('ember-app/controllers/advlimit-dialog', ['exports', 'ember-flexberry/controllers/advlimit-dialog'], function (exports, _advlimitDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _advlimitDialog.default;
});
define('ember-app/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sitemap: Ember.computed('i18n.locale', function () {
      var i18n = this.get('i18n');

      return {
        nodes: [{
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
        }]
      };
    }),

    /**
      Locales supported by application.
       @property locales
      @type String[]
      @default ['ru', 'en']
    */
    locales: undefined,

    /**
      Handles changes in userSettingsService.isUserSettingsServiceEnabled.
       @method _userSettingsServiceChanged
      @private
    */
    _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function () {
      this.get('target.router').refresh();
    }),

    /**
      Initializes controller.
    */
    init: function init() {
      this._super.apply(this, arguments);

      var i18n = this.get('i18n');
      if (Ember.isNone(i18n)) {
        return;
      }

      this.set('locales', ['ru', 'en']);

      // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
      var shortCurrentLocale = this.get('i18n.locale').split('-')[0];
      var availableLocales = Ember.A(this.get('locales'));

      // Force current locale to be one of available,
      // if browser's current language is not supported by dummy application,
      // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
      if (!availableLocales.includes(shortCurrentLocale)) {
        i18n.set('locale', 'en');
      } else {
        i18n.set('locale', shortCurrentLocale);
      }
    },


    /**
      Service that triggers objectlistview events.
       @property objectlistviewEventsService
      @type Service
    */
    objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

    /**
      Service for managing the state of the application.
       @property appState
      @type AppStateService
    */
    appState: Ember.inject.service(),

    actions: {
      /**
        Call `updateWidthTrigger` for `objectlistviewEventsService`.
         @method actions.updateWidth
      */
      updateWidth: function updateWidth() {
        this.get('objectlistviewEventsService').updateWidthTrigger();
      },


      /**
        Toggles application sitemap's side bar.
         @method actions.toggleSidebar
      */
      toggleSidebar: function toggleSidebar() {
        var sidebar = Ember.$('.ui.sidebar.main.menu');
        sidebar.sidebar('toggle');
        sidebar.toggleClass('sidebar-mini');

        Ember.$('.full.height').toggleClass('content-opened');

        Ember.$('.sidebar.icon .text_menu').toggleClass('hidden');
        Ember.$('.sidebar.icon').toggleClass('text-menu-show');
        Ember.$('.sidebar.icon').toggleClass('text-menu-hide');
        Ember.$('.bgw-opacity').toggleClass('hidden');

        // For reinit overflowed tabs.
        Ember.$(window).trigger('resize');
      },


      /**
        Toggles application sitemap's side bar in mobile view.
         @method actions.toggleSidebarMobile
      */
      toggleSidebarMobile: function toggleSidebarMobile() {
        Ember.$('.ui.sidebar.main.menu').sidebar('toggle');

        Ember.$('.sidebar.icon').toggleClass('text-menu-show');
        Ember.$('.sidebar.icon').toggleClass('text-menu-hide');
        Ember.$('.sidebar.icon').toggleClass('hidden-text');
        Ember.$('.bgw-opacity').toggleClass('hidden');

        if (!this.get('_hideEventIsAttached')) {
          Ember.$('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
          this.set('_hideEventIsAttached', true);
        }
      }
    }
  });
});
define('ember-app/controllers/colsconfig-dialog', ['exports', 'ember-flexberry/controllers/colsconfig-dialog'], function (exports, _colsconfigDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _colsconfigDialog.default;
});
define('ember-app/controllers/data-line-test-gen270624-maintenance-operation-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default ''
     */
    editFormRoute: ''
  });
});
define('ember-app/controllers/data-line-test-gen270624-periodicity-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-periodicity-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-periodicity-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-periodicity-e'], function (exports, _dataLineTestGen270624PeriodicityE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624PeriodicityENewController = _dataLineTestGen270624PeriodicityE.default;
  exports.default = DataLineTestGen270624PeriodicityENewController;
});
define('ember-app/controllers/data-line-test-gen270624-periodicity-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-periodicity-e'
     */
    editFormRoute: 'data-line-test-gen270624-periodicity-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-scheduled-maintenance-operation-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default ''
     */
    editFormRoute: ''
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-договор-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ДоговорENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ДоговорENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-договор-e'
     */
    editFormRoute: 'data-line-test-gen270624-договор-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-модель-оборудования-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624МодельОборудованияENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624МодельОборудованияENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-модель-оборудования-e'
     */
    editFormRoute: 'data-line-test-gen270624-модель-оборудования-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-оборудование-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ОборудованиеENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ОборудованиеENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-оборудование-e'
     */
    editFormRoute: 'data-line-test-gen270624-оборудование-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-организация-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ОрганизацияENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ОрганизацияENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-организация-e'
     */
    editFormRoute: 'data-line-test-gen270624-организация-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-план-т-о-l',

    getCellComponent: function getCellComponent(attr, bindingPath, model) {
      var cellComponent = this._super.apply(this, arguments);
      if (attr.kind === 'belongsTo') {
        switch (model.modelName + '+' + bindingPath) {
          case 'scheduled-maintenance-operation+maintenanceOperation':
            cellComponent.componentProperties = {
              choose: 'showLookupDialog',
              remove: 'removeLookupValue',
              displayAttributeName: 'name',
              required: true,
              relationName: 'maintenanceOperation',
              projection: 'ОперацияТОL',
              autocomplete: true
            };
            break;

        }
      }

      return cellComponent;
    }
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ПланТОENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ПланТОENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-план-т-о-e'
     */
    editFormRoute: 'data-line-test-gen270624-план-т-о-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-программа-т-о-l',

    getCellComponent: function getCellComponent(attr, bindingPath, model) {
      var cellComponent = this._super.apply(this, arguments);
      if (attr.kind === 'belongsTo') {
        switch (model.modelName + '+' + bindingPath) {
          case 'purpose-of-the-maintenance-model+equipmentModel':
            cellComponent.componentProperties = {
              choose: 'showLookupDialog',
              remove: 'removeLookupValue',
              displayAttributeName: 'name',
              required: true,
              relationName: 'equipmentModel',
              projection: 'МодельОборудованияL',
              autocomplete: true
            };
            break;

        }
      }

      return cellComponent;
    }
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ПрограммаТОENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ПрограммаТОENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-программа-т-о-e'
     */
    editFormRoute: 'data-line-test-gen270624-программа-т-о-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-расположение-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624РасположениеENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624РасположениеENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-расположение-e'
     */
    editFormRoute: 'data-line-test-gen270624-расположение-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-сотрудник-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624СотрудникENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624СотрудникENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-сотрудник-e'
     */
    editFormRoute: 'data-line-test-gen270624-сотрудник-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-статус-оборудования-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624СтатусОборудованияENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624СтатусОборудованияENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-статус-оборудования-e'
     */
    editFormRoute: 'data-line-test-gen270624-статус-оборудования-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-тип-оборудования-l'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ТипОборудованияENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ТипОборудованияENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-тип-оборудования-e'
     */
    editFormRoute: 'data-line-test-gen270624-тип-оборудования-e'
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'data-line-test-gen270624-факт-т-о-l',

    getCellComponent: function getCellComponent(attr, bindingPath, model) {
      var cellComponent = this._super.apply(this, arguments);
      if (attr.kind === 'belongsTo') {
        switch (model.modelName + '+' + bindingPath) {
          case 'fact-operation-of-the-maintenance+maintenanceOperation':
            cellComponent.componentProperties = {
              choose: 'showLookupDialog',
              remove: 'removeLookupValue',
              displayAttributeName: 'name',
              required: true,
              relationName: 'maintenanceOperation',
              projection: 'ОперацияТОL',
              autocomplete: true
            };
            break;

          case 'fact-operation-of-the-maintenance+scheduledMaintenanceOperation':
            cellComponent.componentProperties = {
              choose: 'showLookupDialog',
              remove: 'removeLookupValue',
              displayAttributeName: 'executionDate',
              required: false,
              relationName: 'scheduledMaintenanceOperation',
              projection: 'ПланОперацияТОL',
              autocomplete: true
            };
            break;

        }
      }

      return cellComponent;
    }
  });
});
define('ember-app/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new', ['exports', 'ember-app/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e'], function (exports, _dataLineTestGen270624E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var DataLineTestGen270624ФактТОENewController = _dataLineTestGen270624E.default;
  exports.default = DataLineTestGen270624ФактТОENewController;
});
define('ember-app/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'data-line-test-gen270624-факт-т-о-e'
     */
    editFormRoute: 'data-line-test-gen270624-факт-т-о-e'
  });
});
define('ember-app/controllers/detail-edit-form', ['exports', 'ember-flexberry/controllers/detail-edit-form'], function (exports, _detailEditForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _detailEditForm.default;
    }
  });
});
define('ember-app/controllers/edit-form', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _editForm.default;
    }
  });
});
define('ember-app/controllers/filters-dialog', ['exports', 'ember-flexberry/controllers/filters-dialog'], function (exports, _filtersDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _filtersDialog.default;
});
define('ember-app/controllers/flexberry-file-view-dialog', ['exports', 'ember-flexberry/controllers/flexberry-file-view-dialog'], function (exports, _flexberryFileViewDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFileViewDialog.default;
});
define('ember-app/controllers/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _iISCaseberryLoggingObjectsApplicationLogE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogE.default;
    }
  });
});
define('ember-app/controllers/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _iISCaseberryLoggingObjectsApplicationLogL) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogL.default;
    }
  });
});
define('ember-app/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sitemap: Ember.computed('i18n.locale', function () {
      var i18n = this.get('i18n');

      return {
        nodes: [{
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
        }]
      };
    })
  });
});
define('ember-app/controllers/list-form', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listForm.default;
    }
  });
});
define('ember-app/controllers/lookup-dialog', ['exports', 'ember-flexberry/controllers/lookup-dialog'], function (exports, _lookupDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lookupDialog.default;
});
define('ember-app/controllers/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/controllers/new-platform-flexberry-services-lock-list'], function (exports, _newPlatformFlexberryServicesLockList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLockList.default;
    }
  });
});
define('ember-app/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant.default;
    }
  });
});
define('ember-app/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation.default;
    }
  });
});
define('ember-app/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('ember-app/helpers/app-version', ['exports', 'ember-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-app/helpers/array-contains', ['exports', 'ember-flexberry/helpers/array-contains'], function (exports, _arrayContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayContains.default;
    }
  });
  Object.defineProperty(exports, 'arrayContains', {
    enumerable: true,
    get: function () {
      return _arrayContains.arrayContains;
    }
  });
});
define('ember-app/helpers/array', ['exports', 'ember-flexberry/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
});
define('ember-app/helpers/block-params', ['exports', 'ember-block-slots/helpers/block-params'], function (exports, _blockParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockParams.default;
    }
  });
  Object.defineProperty(exports, 'blockParams', {
    enumerable: true,
    get: function () {
      return _blockParams.blockParams;
    }
  });
});
define('ember-app/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('ember-app/helpers/flexberry-enum', ['exports', 'ember-flexberry/helpers/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
});
define('ember-app/helpers/get-formatted', ['exports', 'ember-flexberry/helpers/get-formatted'], function (exports, _getFormatted) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getFormatted.default;
    }
  });
});
define('ember-app/helpers/get-with-dynamic-actions', ['exports', 'ember-flexberry/helpers/get-with-dynamic-actions'], function (exports, _getWithDynamicActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getWithDynamicActions.default;
    }
  });
});
define('ember-app/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('ember-app/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('ember-app/helpers/increase-number', ['exports', 'ember-flexberry/helpers/increase-number'], function (exports, _increaseNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _increaseNumber.default;
    }
  });
});
define('ember-app/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('ember-app/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('ember-app/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('ember-app/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('ember-app/helpers/is-blank', ['exports', 'ember-flexberry/helpers/is-blank'], function (exports, _isBlank) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBlank.default;
    }
  });
});
define('ember-app/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('ember-app/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('ember-app/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('ember-app/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('ember-app/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('ember-app/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('ember-app/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('ember-app/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('ember-app/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('ember-app/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('ember-app/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('ember-app/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('ember-app/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('ember-app/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('ember-app/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('ember-app/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('ember-app/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('ember-app/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('ember-app/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('ember-app/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('ember-app/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('ember-app/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('ember-app/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-app/helpers/readonly-cell', ['exports', 'ember-flexberry/helpers/readonly-cell'], function (exports, _readonlyCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _readonlyCell.default;
    }
  });
  Object.defineProperty(exports, 'readonlyCell', {
    enumerable: true,
    get: function () {
      return _readonlyCell.readonlyCell;
    }
  });
});
define('ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-app/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('ember-app/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('ember-app/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('ember-app/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('ember-app/initializers/allow-link-action', ['exports', 'ember-link-action/initializers/allow-link-action'], function (exports, _allowLinkAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _allowLinkAction.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _allowLinkAction.initialize;
    }
  });
});
define('ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-app/initializers/component-prop-types', ['exports', 'ember-prop-types/initializers/component-prop-types'], function (exports, _componentPropTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentPropTypes.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentPropTypes.initialize;
    }
  });
});
define('ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-app/initializers/ember-i18n-cp-validations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    // intentionally left blank to not break upgrade path
  }

  exports.default = {
    name: 'ember-i18n-cp-validations',
    initialize: initialize
  };
});
define('ember-app/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('ember-app/initializers/export-application-global', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-app/initializers/flexberry-enum', ['exports', 'ember-flexberry-data/initializers/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.initialize;
    }
  });
});
define('ember-app/initializers/i18n', ['exports', 'ember-flexberry/initializers/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _i18n.initialize;
    }
  });
});
define('ember-app/initializers/local-store', ['exports', 'ember-flexberry-data/initializers/local-store'], function (exports, _localStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStore.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStore.initialize;
    }
  });
});
define('ember-app/initializers/log', ['exports', 'ember-flexberry/initializers/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _log.initialize;
    }
  });
});
define('ember-app/initializers/moment', ['exports', 'ember-flexberry/initializers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _moment.initialize;
    }
  });
});
define('ember-app/initializers/offline-globals', ['exports', 'ember-flexberry-data/initializers/offline-globals'], function (exports, _offlineGlobals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offlineGlobals.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _offlineGlobals.initialize;
    }
  });
});
define('ember-app/initializers/perf', ['exports', 'ember-flexberry/initializers/perf'], function (exports, _perf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _perf.initialize;
    }
  });
});
define('ember-app/initializers/render-perf-logger', ['exports', 'ember-flexberry/initializers/render-perf-logger'], function (exports, _renderPerfLogger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _renderPerfLogger.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _renderPerfLogger.initialize;
    }
  });
});
define('ember-app/initializers/user-settings', ['exports', 'ember-flexberry/initializers/user-settings'], function (exports, _userSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _userSettings.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _userSettings.initialize;
    }
  });
});
define('ember-app/instance-initializers/block-slots', ['exports', 'ember-flexberry/instance-initializers/block-slots'], function (exports, _blockSlots) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockSlots.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _blockSlots.initialize;
    }
  });
});
define('ember-app/instance-initializers/default-user-setting', ['exports', 'ember-flexberry/instance-initializers/default-user-settings'], function (exports, _defaultUserSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultUserSettings.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _defaultUserSettings.initialize;
    }
  });
});
define('ember-app/instance-initializers/device', ['exports', 'ember-flexberry/instance-initializers/device'], function (exports, _device) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _device.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _device.initialize;
    }
  });
});
define("ember-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-app/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('ember-app/instance-initializers/i18n', ['exports', 'ember-flexberry/instance-initializers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _moment.initialize;
    }
  });
});
define('ember-app/instance-initializers/lock', ['exports', 'ember-flexberry/instance-initializers/lock'], function (exports, _lock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lock.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _lock.initialize;
    }
  });
});
define('ember-app/instance-initializers/log', ['exports', 'ember-flexberry/instance-initializers/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _log.initialize;
    }
  });
});
define('ember-app/instance-initializers/moment', ['exports', 'ember-flexberry/instance-initializers/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _i18n.initialize;
    }
  });
});
define('ember-app/instance-initializers/perf', ['exports', 'ember-flexberry/instance-initializers/perf'], function (exports, _perf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _perf.initialize;
    }
  });
});
define('ember-app/instance-initializers/set-singletons', ['exports', 'ember-flexberry-data/instance-initializers/set-singletons'], function (exports, _setSingletons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _setSingletons.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _setSingletons.initialize;
    }
  });
});
define('ember-app/locales/en/forms/data-line-test-gen270624-maintenance-operation-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Операция ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-periodicity-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Периодичность',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-periodicity-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Периодичность'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-scheduled-maintenance-operation-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Плановая операция ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Договор',
    'number-caption': 'Номер',
    'date-caption': 'Дата',
    'validityPeriod-caption': 'Срок действия',
    'buyer-caption': 'Покупатель',
    'seller-caption': 'Продавец'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Договор'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Модель оборудования',
    'name-caption': 'Наименование',
    'manufacturer-caption': 'Производитель',
    'documents-caption': 'Документы'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Модель оборудования'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Оборудование',
    'name-caption': 'Номер',
    'productionDate-caption': 'Дата производства',
    'dateOfCommissioning-caption': 'Дата ввода в экспл',
    'warrantyPeriod-caption': 'Срок гарантии',
    'operatingTime-caption': 'Наработка',
    'runDate-caption': 'Дата наработки',
    'description-caption': 'Описание',
    'accountable.surname-caption': 'Фамилия ответственного',
    'accountable.name-caption': 'Имя ответственного',
    'accountable.patronymic-caption': 'Отчество ответственного',
    'serviceContract.date-caption': 'Дата сервисного договора',
    'serviceContract.validityPeriod-caption': 'Срок действия сервисного договора',
    'model.manufacturer.name-caption': 'Производитель модели',
    'supplyContract.date-caption': 'Дата договора поставки',
    'supplyContract.validityPeriod-caption': 'Срок действия договора поставки',
    'type-caption': 'Тип',
    'status-caption': 'Статус',
    'accountable-caption': 'Ответственный',
    'serviceContract-caption': 'Сервисный договор',
    'model-caption': 'Модель',
    'supplyContract-caption': 'Договор поставки',
    'location-caption': 'Место расположения'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Оборудование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Организация',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Организация'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'План ТО',
    'startDate-caption': 'Дата начала',
    'endDate-caption': 'Дата окончания',
    'equipment.model.name-caption': 'Модель оборудования',
    'equipment.type.name-caption': 'Тип оборудования',
    'equipment.status.name-caption': 'Статус оборудования',
    'equipment.accountable.surname-caption': 'Фамилия ответственного',
    'equipment.serviceContract.number-caption': 'Номер сервисного договора',
    'equipment.location.name-caption': 'Место расположения оборудования',
    'equipment-caption': 'Оборудование',
    'scheduledMaintenanceOperation-caption': 'Плановые операции ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'План ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Программа ТО',
    'name-caption': 'Наименование',
    'periodicity-caption': 'Периодичность',
    'purposeOfTheMaintenanceModel-caption': 'Модели оборудования',
    'maintenanceOperation-caption': 'Операции ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Программа ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Расположение',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Расположение'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудник',
    'surname-caption': 'Фамилия',
    'name-caption': 'Имя',
    'patronymic-caption': 'Отчество'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудник'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Статус оборудования',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Статус оборудования'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Тип оборудования',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Тип оборудования'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Факт ТО',
    'startDate-caption': 'Дата начала',
    'endDate-caption': 'Дата окончания',
    'scanProtocol-caption': 'Скан протокола',
    'successfully-caption': 'Успешно',
    'maintenancePlan.startDate-caption': 'Дата начала',
    'maintenancePlan.endDate-caption': 'Дата окончания',
    'maintenancePlan.equipment.name-caption': 'Номер оборудования',
    'maintenancePlan.equipment.type.name-caption': 'Тип оборудования',
    'maintenancePlan.equipment.model.name-caption': 'Модель оборудования',
    'maintenancePlan.equipment.model.manufacturer.name-caption': 'Производитель оборудования',
    'equipment-caption': 'Оборудование',
    'maintenancePlan-caption': 'План ТО',
    'factOperationOfTheMaintenance-caption': 'Фактические операции ТО'
  };
});
define('ember-app/locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Факт ТО'
  };
});
define('ember-app/locales/en/models/contract', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДоговорE: {
        number: {
          __caption__: 'Номер'
        },
        date: {
          __caption__: 'Дата'
        },
        validityPeriod: {
          __caption__: 'Срок действия'
        },
        buyer: {
          __caption__: 'Покупатель',
          name: {
            __caption__: 'Наименование'
          }
        },
        seller: {
          __caption__: 'Продавец',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ДоговорL: {
        number: {
          __caption__: 'Номер'
        },
        date: {
          __caption__: 'Дата'
        },
        validityPeriod: {
          __caption__: 'Срок действия'
        },
        buyer: {
          __caption__: 'Наименование',
          name: {
            __caption__: 'Наименование'
          }
        },
        seller: {
          __caption__: 'Наименование',
          name: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      date: {
        __caption__: 'Дата'
      },
      number: {
        __caption__: 'Номер'
      },
      validityPeriod: {
        __caption__: 'Срок действия'
      },
      buyer: {
        __caption__: 'Покупатель'
      },
      seller: {
        __caption__: 'Продавец'
      }
    }
  };
});
define('ember-app/locales/en/models/document-to-the-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДокументКМоделиE: {
        name: {
          __caption__: 'Наименование'
        },
        fileReference: {
          __caption__: 'Ссылка на файл'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      fileReference: {
        __caption__: 'Ссылка на файл'
      },
      equipmentModel: {
        __caption__: 'equipmentModel'
      }
    }
  };
});
define('ember-app/locales/en/models/employee', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СотрудникE: {
        surname: {
          __caption__: 'Фамилия'
        },
        name: {
          __caption__: 'Имя'
        },
        patronymic: {
          __caption__: 'Отчество'
        }
      },
      СотрудникL: {
        surname: {
          __caption__: 'Фамилия'
        },
        name: {
          __caption__: 'Имя'
        },
        patronymic: {
          __caption__: 'Отчество'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Имя'
      },
      patronymic: {
        __caption__: 'Отчество'
      },
      surname: {
        __caption__: 'Фамилия'
      }
    }
  };
});
define('ember-app/locales/en/models/equipment-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      МодельОборудованияE: {
        name: {
          __caption__: 'Наименование'
        },
        manufacturer: {
          __caption__: 'Производитель',
          name: {
            __caption__: 'Наименование производителя'
          }
        },
        documents: {
          __caption__: 'Документы',
          name: {
            __caption__: 'Наименование'
          },
          fileReference: {
            __caption__: 'Ссылка на файл'
          }
        }
      },
      МодельОборудованияL: {
        name: {
          __caption__: 'Наименование'
        },
        manufacturer: {
          __caption__: 'Производитель',
          name: {
            __caption__: 'Производитель'
          }
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      manufacturer: {
        __caption__: 'Производитель'
      },
      documents: {
        __caption__: 'Документы'
      }
    }
  };
});
define('ember-app/locales/en/models/equipment-status', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СтатусОборудованияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      СтатусОборудованияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/equipment-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТипОборудованияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ТипОборудованияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/fact-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ФактТОE: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        scanProtocol: {
          __caption__: 'Скан протокола'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        equipment: {
          __caption__: 'Оборудование',
          name: {
            __caption__: 'Номер'
          }
        },
        maintenancePlan: {
          __caption__: 'План ТО',
          startDate: {
            __caption__: 'Дата начала'
          },
          endDate: {
            __caption__: 'Дата окончания'
          },
          equipment: {
            __caption__: '',
            name: {
              __caption__: 'Номер оборудования'
            },
            type: {
              __caption__: '',
              name: {
                __caption__: 'Тип оборудования'
              }
            },
            model: {
              __caption__: '',
              name: {
                __caption__: 'Модель оборудования'
              },
              manufacturer: {
                __caption__: '',
                name: {
                  __caption__: 'Производитель оборудования'
                }
              }
            }
          }
        },
        factOperationOfTheMaintenance: {
          __caption__: 'Фактические операции ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          },
          successfully: {
            __caption__: 'Успешно'
          },
          maintenanceOperation: {
            __caption__: 'Операция ТО',
            name: {
              __caption__: 'Наименование'
            }
          },
          scheduledMaintenanceOperation: {
            __caption__: 'План операция ТО',
            executionDate: {
              __caption__: 'Дата выполнения'
            }
          }
        }
      },
      ФактТОL: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        scanProtocol: {
          __caption__: 'Скан протокола'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        equipment: {
          __caption__: 'Номер',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель оборудования'
            },
            manufacturer: {
              __caption__: '',
              name: {
                __caption__: 'Производитель оборудования'
              }
            }
          },
          type: {
            __caption__: '',
            name: {
              __caption__: 'Тип оборудования'
            }
          }
        },
        maintenancePlan: {
          __caption__: 'Дата начала',
          startDate: {
            __caption__: 'Дата начала'
          }
        }
      }
    },
    validations: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      scanProtocol: {
        __caption__: 'Скан протокола'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      equipment: {
        __caption__: 'Оборудование'
      },
      maintenancePlan: {
        __caption__: 'План ТО'
      },
      factOperationOfTheMaintenance: {
        __caption__: 'Фактические операции ТО'
      }
    }
  };
});
define('ember-app/locales/en/models/fact-operation-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ФактОперацияТОE: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        },
        scheduledMaintenanceOperation: {
          __caption__: 'План операция ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          }
        }
      }
    },
    validations: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО'
      },
      scheduledMaintenanceOperation: {
        __caption__: 'План операция ТО'
      },
      factOfTheMaintenance: {
        __caption__: 'factOfTheMaintenance'
      }
    }
  };
});
define('ember-app/locales/en/models/hardware', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОборудованиеE: {
        name: {
          __caption__: 'Номер'
        },
        productionDate: {
          __caption__: 'Дата производства'
        },
        dateOfCommissioning: {
          __caption__: 'Дата ввода в экспл'
        },
        warrantyPeriod: {
          __caption__: 'Срок гарантии'
        },
        operatingTime: {
          __caption__: 'Наработка'
        },
        runDate: {
          __caption__: 'Дата наработки'
        },
        description: {
          __caption__: 'Описание'
        },
        type: {
          __caption__: 'Тип',
          name: {
            __caption__: 'Наименование'
          }
        },
        status: {
          __caption__: 'Статус',
          name: {
            __caption__: 'Наименование'
          }
        },
        accountable: {
          __caption__: 'Ответственный',
          surname: {
            __caption__: 'Фамилия ответственного'
          },
          name: {
            __caption__: 'Имя ответственного'
          },
          patronymic: {
            __caption__: 'Отчество ответственного'
          }
        },
        serviceContract: {
          __caption__: 'Сервисный договор',
          number: {
            __caption__: ''
          },
          date: {
            __caption__: 'Дата сервисного договора'
          },
          validityPeriod: {
            __caption__: 'Срок действия сервисного договора'
          }
        },
        model: {
          __caption__: 'Модель',
          name: {
            __caption__: 'Наименование'
          },
          manufacturer: {
            __caption__: '',
            name: {
              __caption__: 'Производитель модели'
            }
          }
        },
        supplyContract: {
          __caption__: 'Договор поставки',
          number: {
            __caption__: 'Номер'
          },
          date: {
            __caption__: 'Дата договора поставки'
          },
          validityPeriod: {
            __caption__: 'Срок действия договора поставки'
          }
        },
        location: {
          __caption__: 'Место расположения',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ОборудованиеL: {
        name: {
          __caption__: 'Номер'
        },
        productionDate: {
          __caption__: 'Дата производства'
        },
        dateOfCommissioning: {
          __caption__: 'Дата ввода в экспл'
        },
        warrantyPeriod: {
          __caption__: 'Срок гарантии'
        },
        operatingTime: {
          __caption__: 'Наработка'
        },
        runDate: {
          __caption__: 'Дата наработки'
        },
        description: {
          __caption__: 'Описание'
        },
        type: {
          __caption__: 'Тип',
          name: {
            __caption__: 'Тип'
          }
        },
        status: {
          __caption__: 'Статус',
          name: {
            __caption__: 'Статус'
          }
        },
        accountable: {
          __caption__: 'Ответственный',
          surname: {
            __caption__: 'Ответственный'
          }
        },
        serviceContract: {
          __caption__: 'Сервисный договор',
          number: {
            __caption__: 'Сервисный договор'
          }
        },
        model: {
          __caption__: 'Модель',
          name: {
            __caption__: 'Модель'
          }
        },
        supplyContract: {
          __caption__: 'Договор поставки',
          number: {
            __caption__: 'Договор поставки'
          }
        },
        location: {
          __caption__: 'Расположение',
          name: {
            __caption__: 'Расположение'
          }
        }
      }
    },
    validations: {
      dateOfCommissioning: {
        __caption__: 'Дата ввода в экспл'
      },
      runDate: {
        __caption__: 'Дата наработки'
      },
      productionDate: {
        __caption__: 'Дата производства'
      },
      operatingTime: {
        __caption__: 'Наработка'
      },
      name: {
        __caption__: 'Номер'
      },
      description: {
        __caption__: 'Описание'
      },
      warrantyPeriod: {
        __caption__: 'Срок гарантии'
      },
      supplyContract: {
        __caption__: 'Договор поставки'
      },
      location: {
        __caption__: 'Место расположения'
      },
      model: {
        __caption__: 'Модель'
      },
      accountable: {
        __caption__: 'Ответственный'
      },
      serviceContract: {
        __caption__: 'Сервисный договор'
      },
      status: {
        __caption__: 'Статус'
      },
      type: {
        __caption__: 'Тип'
      }
    }
  };
});
define('ember-app/locales/en/models/location', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      РасположениеE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      РасположениеL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОперацияТОE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ОперацияТОL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      maintenanceProgram: {
        __caption__: 'maintenanceProgram'
      }
    }
  };
});
define('ember-app/locales/en/models/maintenance-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПланТОE: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        equipment: {
          __caption__: 'Оборудование',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель оборудования'
            }
          },
          type: {
            __caption__: '',
            name: {
              __caption__: 'Тип оборудования'
            }
          },
          status: {
            __caption__: '',
            name: {
              __caption__: 'Статус оборудования'
            }
          },
          accountable: {
            __caption__: '',
            surname: {
              __caption__: 'Фамилия ответственного'
            }
          },
          serviceContract: {
            __caption__: '',
            number: {
              __caption__: 'Номер сервисного договора'
            }
          },
          location: {
            __caption__: '',
            name: {
              __caption__: 'Место расположения оборудования'
            }
          }
        },
        scheduledMaintenanceOperation: {
          __caption__: 'Плановые операции ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          },
          maintenanceOperation: {
            __caption__: 'Операция ТО',
            name: {
              __caption__: 'Наименование'
            }
          }
        }
      },
      ПланТОL: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        equipment: {
          __caption__: 'Номер',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель'
            },
            manufacturer: {
              __caption__: '',
              name: {
                __caption__: 'Производитель'
              }
            }
          }
        }
      }
    },
    validations: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      equipment: {
        __caption__: 'Оборудование'
      },
      scheduledMaintenanceOperation: {
        __caption__: 'Плановые операции ТО'
      }
    }
  };
});
define('ember-app/locales/en/models/maintenance-program', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПрограммаТОE: {
        name: {
          __caption__: 'Наименование'
        },
        periodicity: {
          __caption__: 'Периодичность',
          name: {
            __caption__: 'Наименование'
          }
        },
        purposeOfTheMaintenanceModel: {
          __caption__: 'Модели оборудования',
          equipmentModel: {
            __caption__: 'Модель оборудования',
            name: {
              __caption__: 'Наименование'
            }
          }
        },
        maintenanceOperation: {
          __caption__: 'Операции ТО',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ПрограммаТОL: {
        name: {
          __caption__: 'Наименование'
        },
        periodicity: {
          __caption__: 'Периодичность',
          name: {
            __caption__: 'Периодичность'
          }
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      periodicity: {
        __caption__: 'Периодичность'
      },
      purposeOfTheMaintenanceModel: {
        __caption__: 'Модели оборудования'
      },
      maintenanceOperation: {
        __caption__: 'Операции ТО'
      }
    }
  };
});
define('ember-app/locales/en/models/organization', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОрганизацияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ОрганизацияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/periodicity', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      PeriodicityE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      PeriodicityL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/purpose-of-the-maintenance-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      НазначениеТОДляМоделиE: {
        equipmentModel: {
          __caption__: 'Модель оборудования',
          name: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      equipmentModel: {
        __caption__: 'Модель оборудования'
      },
      maintenanceProgram: {
        __caption__: 'maintenanceProgram'
      }
    }
  };
});
define('ember-app/locales/en/models/scheduled-maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПланОперацияТОE: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ПланОперацияТОL: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование операции'
          }
        }
      }
    },
    validations: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО'
      },
      maintenancePlan: {
        __caption__: 'maintenancePlan'
      }
    }
  };
});
define('ember-app/locales/en/translations', ['exports', 'ember-flexberry/locales/en/translations', 'ember-app/locales/en/forms/data-line-test-gen270624-maintenance-operation-l', 'ember-app/locales/en/forms/data-line-test-gen270624-periodicity-l', 'ember-app/locales/en/forms/data-line-test-gen270624-scheduled-maintenance-operation-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', 'ember-app/locales/en/forms/data-line-test-gen270624-periodicity-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', 'ember-app/locales/en/models/contract', 'ember-app/locales/en/models/document-to-the-model', 'ember-app/locales/en/models/employee', 'ember-app/locales/en/models/equipment-model', 'ember-app/locales/en/models/equipment-status', 'ember-app/locales/en/models/equipment-type', 'ember-app/locales/en/models/fact-of-the-maintenance', 'ember-app/locales/en/models/fact-operation-of-the-maintenance', 'ember-app/locales/en/models/hardware', 'ember-app/locales/en/models/location', 'ember-app/locales/en/models/maintenance-operation', 'ember-app/locales/en/models/maintenance-plan', 'ember-app/locales/en/models/maintenance-program', 'ember-app/locales/en/models/organization', 'ember-app/locales/en/models/periodicity', 'ember-app/locales/en/models/purpose-of-the-maintenance-model', 'ember-app/locales/en/models/scheduled-maintenance-operation'], function (exports, _translations, _dataLineTestGen270624MaintenanceOperationL, _dataLineTestGen270624PeriodicityL, _dataLineTestGen270624ScheduledMaintenanceOperationL, _dataLineTestGen270624L, _dataLineTestGen270624L2, _dataLineTestGen270624L3, _dataLineTestGen270624L4, _dataLineTestGen270624L5, _dataLineTestGen270624L6, _dataLineTestGen270624L7, _dataLineTestGen270624L8, _dataLineTestGen270624L9, _dataLineTestGen270624L10, _dataLineTestGen270624L11, _dataLineTestGen270624PeriodicityE, _dataLineTestGen270624E, _dataLineTestGen270624E2, _dataLineTestGen270624E3, _dataLineTestGen270624E4, _dataLineTestGen270624E5, _dataLineTestGen270624E6, _dataLineTestGen270624E7, _dataLineTestGen270624E8, _dataLineTestGen270624E9, _dataLineTestGen270624E10, _dataLineTestGen270624E11, _contract, _documentToTheModel, _employee, _equipmentModel, _equipmentStatus, _equipmentType, _factOfTheMaintenance, _factOperationOfTheMaintenance, _hardware, _location, _maintenanceOperation, _maintenancePlan, _maintenanceProgram, _organization, _periodicity, _purposeOfTheMaintenanceModel, _scheduledMaintenanceOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var translations = {};
  Ember.$.extend(true, translations, _translations.default);

  Ember.$.extend(true, translations, {
    models: {
      'contract': _contract.default,
      'document-to-the-model': _documentToTheModel.default,
      'employee': _employee.default,
      'equipment-model': _equipmentModel.default,
      'equipment-status': _equipmentStatus.default,
      'equipment-type': _equipmentType.default,
      'fact-of-the-maintenance': _factOfTheMaintenance.default,
      'fact-operation-of-the-maintenance': _factOperationOfTheMaintenance.default,
      'hardware': _hardware.default,
      'location': _location.default,
      'maintenance-operation': _maintenanceOperation.default,
      'maintenance-plan': _maintenancePlan.default,
      'maintenance-program': _maintenanceProgram.default,
      'organization': _organization.default,
      'periodicity': _periodicity.default,
      'purpose-of-the-maintenance-model': _purposeOfTheMaintenanceModel.default,
      'scheduled-maintenance-operation': _scheduledMaintenanceOperation.default
    },

    'application-name': 'Maintenance Management System',

    forms: {
      loading: {
        'spinner-caption': 'Loading stuff, please wait for a moment...'
      },
      index: {
        greeting: 'Welcome to ember-flexberry test stand!'
      },

      application: {
        header: {
          menu: {
            'sitemap-button': {
              title: 'Menu'
            },
            'user-settings-service-checkbox': {
              caption: 'Use service to save user settings'
            },
            'show-menu': {
              caption: 'Show menu'
            },
            'hide-menu': {
              caption: 'Hide menu'
            },
            'language-dropdown': {
              caption: 'Application language',
              placeholder: 'Choose language'
            }
          },
          login: {
            caption: 'Login'
          },
          logout: {
            caption: 'Logout'
          }
        },

        footer: {
          'application-name': 'Maintenance Management System',
          'application-version': {
            caption: 'Addon version {{version}}',
            title: 'It is version of ember-flexberry addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          }
        },

        sitemap: {
          'application-name': {
            caption: 'Maintenance Management System',
            title: 'Maintenance Management System'
          },
          'application-version': {
            caption: 'Addon version {{version}}',
            title: 'It is version of ember-flexberry addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          },
          index: {
            caption: 'Home',
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
        'save-success-message-caption': 'Save operation succeed',
        'save-success-message': 'Object saved',
        'save-error-message-caption': 'Save operation failed',
        'delete-success-message-caption': 'Delete operation succeed',
        'delete-success-message': 'Object deleted',
        'delete-error-message-caption': 'Delete operation failed'
      },
      'data-line-test-gen270624-maintenance-operation-l': _dataLineTestGen270624MaintenanceOperationL.default,
      'data-line-test-gen270624-periodicity-l': _dataLineTestGen270624PeriodicityL.default,
      'data-line-test-gen270624-scheduled-maintenance-operation-l': _dataLineTestGen270624ScheduledMaintenanceOperationL.default,
      'data-line-test-gen270624-договор-l': _dataLineTestGen270624L.default,
      'data-line-test-gen270624-модель-оборудования-l': _dataLineTestGen270624L2.default,
      'data-line-test-gen270624-оборудование-l': _dataLineTestGen270624L3.default,
      'data-line-test-gen270624-организация-l': _dataLineTestGen270624L4.default,
      'data-line-test-gen270624-план-т-о-l': _dataLineTestGen270624L5.default,
      'data-line-test-gen270624-программа-т-о-l': _dataLineTestGen270624L6.default,
      'data-line-test-gen270624-расположение-l': _dataLineTestGen270624L7.default,
      'data-line-test-gen270624-сотрудник-l': _dataLineTestGen270624L8.default,
      'data-line-test-gen270624-статус-оборудования-l': _dataLineTestGen270624L9.default,
      'data-line-test-gen270624-тип-оборудования-l': _dataLineTestGen270624L10.default,
      'data-line-test-gen270624-факт-т-о-l': _dataLineTestGen270624L11.default,
      'data-line-test-gen270624-periodicity-e': _dataLineTestGen270624PeriodicityE.default,
      'data-line-test-gen270624-договор-e': _dataLineTestGen270624E.default,
      'data-line-test-gen270624-модель-оборудования-e': _dataLineTestGen270624E2.default,
      'data-line-test-gen270624-оборудование-e': _dataLineTestGen270624E3.default,
      'data-line-test-gen270624-организация-e': _dataLineTestGen270624E4.default,
      'data-line-test-gen270624-план-т-о-e': _dataLineTestGen270624E5.default,
      'data-line-test-gen270624-программа-т-о-e': _dataLineTestGen270624E6.default,
      'data-line-test-gen270624-расположение-e': _dataLineTestGen270624E7.default,
      'data-line-test-gen270624-сотрудник-e': _dataLineTestGen270624E8.default,
      'data-line-test-gen270624-статус-оборудования-e': _dataLineTestGen270624E9.default,
      'data-line-test-gen270624-тип-оборудования-e': _dataLineTestGen270624E10.default,
      'data-line-test-gen270624-факт-т-о-e': _dataLineTestGen270624E11.default
    }

  });

  exports.default = translations;
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-maintenance-operation-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Операция ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-periodicity-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Периодичность',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-periodicity-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Периодичность'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-scheduled-maintenance-operation-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Плановая операция ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Договор',
    'number-caption': 'Номер',
    'date-caption': 'Дата',
    'validityPeriod-caption': 'Срок действия',
    'buyer-caption': 'Покупатель',
    'seller-caption': 'Продавец'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Договор'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Модель оборудования',
    'name-caption': 'Наименование',
    'manufacturer-caption': 'Производитель',
    'documents-caption': 'Документы'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Модель оборудования'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Оборудование',
    'name-caption': 'Номер',
    'productionDate-caption': 'Дата производства',
    'dateOfCommissioning-caption': 'Дата ввода в экспл',
    'warrantyPeriod-caption': 'Срок гарантии',
    'operatingTime-caption': 'Наработка',
    'runDate-caption': 'Дата наработки',
    'description-caption': 'Описание',
    'accountable.surname-caption': 'Фамилия ответственного',
    'accountable.name-caption': 'Имя ответственного',
    'accountable.patronymic-caption': 'Отчество ответственного',
    'serviceContract.date-caption': 'Дата сервисного договора',
    'serviceContract.validityPeriod-caption': 'Срок действия сервисного договора',
    'model.manufacturer.name-caption': 'Производитель модели',
    'supplyContract.date-caption': 'Дата договора поставки',
    'supplyContract.validityPeriod-caption': 'Срок действия договора поставки',
    'type-caption': 'Тип',
    'status-caption': 'Статус',
    'accountable-caption': 'Ответственный',
    'serviceContract-caption': 'Сервисный договор',
    'model-caption': 'Модель',
    'supplyContract-caption': 'Договор поставки',
    'location-caption': 'Место расположения'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Оборудование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Организация',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Организация'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'План ТО',
    'startDate-caption': 'Дата начала',
    'endDate-caption': 'Дата окончания',
    'equipment.model.name-caption': 'Модель оборудования',
    'equipment.type.name-caption': 'Тип оборудования',
    'equipment.status.name-caption': 'Статус оборудования',
    'equipment.accountable.surname-caption': 'Фамилия ответственного',
    'equipment.serviceContract.number-caption': 'Номер сервисного договора',
    'equipment.location.name-caption': 'Место расположения оборудования',
    'equipment-caption': 'Оборудование',
    'scheduledMaintenanceOperation-caption': 'Плановые операции ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'План ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Программа ТО',
    'name-caption': 'Наименование',
    'periodicity-caption': 'Периодичность',
    'purposeOfTheMaintenanceModel-caption': 'Модели оборудования',
    'maintenanceOperation-caption': 'Операции ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Программа ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Расположение',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Расположение'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудник',
    'surname-caption': 'Фамилия',
    'name-caption': 'Имя',
    'patronymic-caption': 'Отчество'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудник'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Статус оборудования',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Статус оборудования'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Тип оборудования',
    'name-caption': 'Наименование'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Тип оборудования'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Факт ТО',
    'startDate-caption': 'Дата начала',
    'endDate-caption': 'Дата окончания',
    'scanProtocol-caption': 'Скан протокола',
    'successfully-caption': 'Успешно',
    'maintenancePlan.startDate-caption': 'Дата начала',
    'maintenancePlan.endDate-caption': 'Дата окончания',
    'maintenancePlan.equipment.name-caption': 'Номер оборудования',
    'maintenancePlan.equipment.type.name-caption': 'Тип оборудования',
    'maintenancePlan.equipment.model.name-caption': 'Модель оборудования',
    'maintenancePlan.equipment.model.manufacturer.name-caption': 'Производитель оборудования',
    'equipment-caption': 'Оборудование',
    'maintenancePlan-caption': 'План ТО',
    'factOperationOfTheMaintenance-caption': 'Фактические операции ТО'
  };
});
define('ember-app/locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Факт ТО'
  };
});
define('ember-app/locales/ru/models/contract', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДоговорE: {
        number: {
          __caption__: 'Номер'
        },
        date: {
          __caption__: 'Дата'
        },
        validityPeriod: {
          __caption__: 'Срок действия'
        },
        buyer: {
          __caption__: 'Покупатель',
          name: {
            __caption__: 'Наименование'
          }
        },
        seller: {
          __caption__: 'Продавец',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ДоговорL: {
        number: {
          __caption__: 'Номер'
        },
        date: {
          __caption__: 'Дата'
        },
        validityPeriod: {
          __caption__: 'Срок действия'
        },
        buyer: {
          __caption__: 'Наименование',
          name: {
            __caption__: 'Наименование'
          }
        },
        seller: {
          __caption__: 'Наименование',
          name: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      date: {
        __caption__: 'Дата'
      },
      number: {
        __caption__: 'Номер'
      },
      validityPeriod: {
        __caption__: 'Срок действия'
      },
      buyer: {
        __caption__: 'Покупатель'
      },
      seller: {
        __caption__: 'Продавец'
      }
    }
  };
});
define('ember-app/locales/ru/models/document-to-the-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДокументКМоделиE: {
        name: {
          __caption__: 'Наименование'
        },
        fileReference: {
          __caption__: 'Ссылка на файл'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      fileReference: {
        __caption__: 'Ссылка на файл'
      },
      equipmentModel: {
        __caption__: 'equipmentModel'
      }
    }
  };
});
define('ember-app/locales/ru/models/employee', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СотрудникE: {
        surname: {
          __caption__: 'Фамилия'
        },
        name: {
          __caption__: 'Имя'
        },
        patronymic: {
          __caption__: 'Отчество'
        }
      },
      СотрудникL: {
        surname: {
          __caption__: 'Фамилия'
        },
        name: {
          __caption__: 'Имя'
        },
        patronymic: {
          __caption__: 'Отчество'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Имя'
      },
      patronymic: {
        __caption__: 'Отчество'
      },
      surname: {
        __caption__: 'Фамилия'
      }
    }
  };
});
define('ember-app/locales/ru/models/equipment-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      МодельОборудованияE: {
        name: {
          __caption__: 'Наименование'
        },
        manufacturer: {
          __caption__: 'Производитель',
          name: {
            __caption__: 'Наименование производителя'
          }
        },
        documents: {
          __caption__: 'Документы',
          name: {
            __caption__: 'Наименование'
          },
          fileReference: {
            __caption__: 'Ссылка на файл'
          }
        }
      },
      МодельОборудованияL: {
        name: {
          __caption__: 'Наименование'
        },
        manufacturer: {
          __caption__: 'Производитель',
          name: {
            __caption__: 'Производитель'
          }
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      manufacturer: {
        __caption__: 'Производитель'
      },
      documents: {
        __caption__: 'Документы'
      }
    }
  };
});
define('ember-app/locales/ru/models/equipment-status', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СтатусОборудованияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      СтатусОборудованияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/equipment-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТипОборудованияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ТипОборудованияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/fact-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ФактТОE: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        scanProtocol: {
          __caption__: 'Скан протокола'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        equipment: {
          __caption__: 'Оборудование',
          name: {
            __caption__: 'Номер'
          }
        },
        maintenancePlan: {
          __caption__: 'План ТО',
          startDate: {
            __caption__: 'Дата начала'
          },
          endDate: {
            __caption__: 'Дата окончания'
          },
          equipment: {
            __caption__: '',
            name: {
              __caption__: 'Номер оборудования'
            },
            type: {
              __caption__: '',
              name: {
                __caption__: 'Тип оборудования'
              }
            },
            model: {
              __caption__: '',
              name: {
                __caption__: 'Модель оборудования'
              },
              manufacturer: {
                __caption__: '',
                name: {
                  __caption__: 'Производитель оборудования'
                }
              }
            }
          }
        },
        factOperationOfTheMaintenance: {
          __caption__: 'Фактические операции ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          },
          successfully: {
            __caption__: 'Успешно'
          },
          maintenanceOperation: {
            __caption__: 'Операция ТО',
            name: {
              __caption__: 'Наименование'
            }
          },
          scheduledMaintenanceOperation: {
            __caption__: 'План операция ТО',
            executionDate: {
              __caption__: 'Дата выполнения'
            }
          }
        }
      },
      ФактТОL: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        scanProtocol: {
          __caption__: 'Скан протокола'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        equipment: {
          __caption__: 'Номер',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель оборудования'
            },
            manufacturer: {
              __caption__: '',
              name: {
                __caption__: 'Производитель оборудования'
              }
            }
          },
          type: {
            __caption__: '',
            name: {
              __caption__: 'Тип оборудования'
            }
          }
        },
        maintenancePlan: {
          __caption__: 'Дата начала',
          startDate: {
            __caption__: 'Дата начала'
          }
        }
      }
    },
    validations: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      scanProtocol: {
        __caption__: 'Скан протокола'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      equipment: {
        __caption__: 'Оборудование'
      },
      maintenancePlan: {
        __caption__: 'План ТО'
      },
      factOperationOfTheMaintenance: {
        __caption__: 'Фактические операции ТО'
      }
    }
  };
});
define('ember-app/locales/ru/models/fact-operation-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ФактОперацияТОE: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        successfully: {
          __caption__: 'Успешно'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        },
        scheduledMaintenanceOperation: {
          __caption__: 'План операция ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          }
        }
      }
    },
    validations: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      successfully: {
        __caption__: 'Успешно'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО'
      },
      scheduledMaintenanceOperation: {
        __caption__: 'План операция ТО'
      },
      factOfTheMaintenance: {
        __caption__: 'factOfTheMaintenance'
      }
    }
  };
});
define('ember-app/locales/ru/models/hardware', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОборудованиеE: {
        name: {
          __caption__: 'Номер'
        },
        productionDate: {
          __caption__: 'Дата производства'
        },
        dateOfCommissioning: {
          __caption__: 'Дата ввода в экспл'
        },
        warrantyPeriod: {
          __caption__: 'Срок гарантии'
        },
        operatingTime: {
          __caption__: 'Наработка'
        },
        runDate: {
          __caption__: 'Дата наработки'
        },
        description: {
          __caption__: 'Описание'
        },
        type: {
          __caption__: 'Тип',
          name: {
            __caption__: 'Наименование'
          }
        },
        status: {
          __caption__: 'Статус',
          name: {
            __caption__: 'Наименование'
          }
        },
        accountable: {
          __caption__: 'Ответственный',
          surname: {
            __caption__: 'Фамилия ответственного'
          },
          name: {
            __caption__: 'Имя ответственного'
          },
          patronymic: {
            __caption__: 'Отчество ответственного'
          }
        },
        serviceContract: {
          __caption__: 'Сервисный договор',
          number: {
            __caption__: ''
          },
          date: {
            __caption__: 'Дата сервисного договора'
          },
          validityPeriod: {
            __caption__: 'Срок действия сервисного договора'
          }
        },
        model: {
          __caption__: 'Модель',
          name: {
            __caption__: 'Наименование'
          },
          manufacturer: {
            __caption__: '',
            name: {
              __caption__: 'Производитель модели'
            }
          }
        },
        supplyContract: {
          __caption__: 'Договор поставки',
          number: {
            __caption__: 'Номер'
          },
          date: {
            __caption__: 'Дата договора поставки'
          },
          validityPeriod: {
            __caption__: 'Срок действия договора поставки'
          }
        },
        location: {
          __caption__: 'Место расположения',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ОборудованиеL: {
        name: {
          __caption__: 'Номер'
        },
        productionDate: {
          __caption__: 'Дата производства'
        },
        dateOfCommissioning: {
          __caption__: 'Дата ввода в экспл'
        },
        warrantyPeriod: {
          __caption__: 'Срок гарантии'
        },
        operatingTime: {
          __caption__: 'Наработка'
        },
        runDate: {
          __caption__: 'Дата наработки'
        },
        description: {
          __caption__: 'Описание'
        },
        type: {
          __caption__: 'Тип',
          name: {
            __caption__: 'Тип'
          }
        },
        status: {
          __caption__: 'Статус',
          name: {
            __caption__: 'Статус'
          }
        },
        accountable: {
          __caption__: 'Ответственный',
          surname: {
            __caption__: 'Ответственный'
          }
        },
        serviceContract: {
          __caption__: 'Сервисный договор',
          number: {
            __caption__: 'Сервисный договор'
          }
        },
        model: {
          __caption__: 'Модель',
          name: {
            __caption__: 'Модель'
          }
        },
        supplyContract: {
          __caption__: 'Договор поставки',
          number: {
            __caption__: 'Договор поставки'
          }
        },
        location: {
          __caption__: 'Расположение',
          name: {
            __caption__: 'Расположение'
          }
        }
      }
    },
    validations: {
      dateOfCommissioning: {
        __caption__: 'Дата ввода в экспл'
      },
      runDate: {
        __caption__: 'Дата наработки'
      },
      productionDate: {
        __caption__: 'Дата производства'
      },
      operatingTime: {
        __caption__: 'Наработка'
      },
      name: {
        __caption__: 'Номер'
      },
      description: {
        __caption__: 'Описание'
      },
      warrantyPeriod: {
        __caption__: 'Срок гарантии'
      },
      supplyContract: {
        __caption__: 'Договор поставки'
      },
      location: {
        __caption__: 'Место расположения'
      },
      model: {
        __caption__: 'Модель'
      },
      accountable: {
        __caption__: 'Ответственный'
      },
      serviceContract: {
        __caption__: 'Сервисный договор'
      },
      status: {
        __caption__: 'Статус'
      },
      type: {
        __caption__: 'Тип'
      }
    }
  };
});
define('ember-app/locales/ru/models/location', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      РасположениеE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      РасположениеL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОперацияТОE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ОперацияТОL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      maintenanceProgram: {
        __caption__: 'maintenanceProgram'
      }
    }
  };
});
define('ember-app/locales/ru/models/maintenance-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПланТОE: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        equipment: {
          __caption__: 'Оборудование',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель оборудования'
            }
          },
          type: {
            __caption__: '',
            name: {
              __caption__: 'Тип оборудования'
            }
          },
          status: {
            __caption__: '',
            name: {
              __caption__: 'Статус оборудования'
            }
          },
          accountable: {
            __caption__: '',
            surname: {
              __caption__: 'Фамилия ответственного'
            }
          },
          serviceContract: {
            __caption__: '',
            number: {
              __caption__: 'Номер сервисного договора'
            }
          },
          location: {
            __caption__: '',
            name: {
              __caption__: 'Место расположения оборудования'
            }
          }
        },
        scheduledMaintenanceOperation: {
          __caption__: 'Плановые операции ТО',
          executionDate: {
            __caption__: 'Дата выполнения'
          },
          maintenanceOperation: {
            __caption__: 'Операция ТО',
            name: {
              __caption__: 'Наименование'
            }
          }
        }
      },
      ПланТОL: {
        startDate: {
          __caption__: 'Дата начала'
        },
        endDate: {
          __caption__: 'Дата окончания'
        },
        equipment: {
          __caption__: 'Номер',
          name: {
            __caption__: 'Номер'
          },
          model: {
            __caption__: '',
            name: {
              __caption__: 'Модель'
            },
            manufacturer: {
              __caption__: '',
              name: {
                __caption__: 'Производитель'
              }
            }
          }
        }
      }
    },
    validations: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      equipment: {
        __caption__: 'Оборудование'
      },
      scheduledMaintenanceOperation: {
        __caption__: 'Плановые операции ТО'
      }
    }
  };
});
define('ember-app/locales/ru/models/maintenance-program', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПрограммаТОE: {
        name: {
          __caption__: 'Наименование'
        },
        periodicity: {
          __caption__: 'Периодичность',
          name: {
            __caption__: 'Наименование'
          }
        },
        purposeOfTheMaintenanceModel: {
          __caption__: 'Модели оборудования',
          equipmentModel: {
            __caption__: 'Модель оборудования',
            name: {
              __caption__: 'Наименование'
            }
          }
        },
        maintenanceOperation: {
          __caption__: 'Операции ТО',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ПрограммаТОL: {
        name: {
          __caption__: 'Наименование'
        },
        periodicity: {
          __caption__: 'Периодичность',
          name: {
            __caption__: 'Периодичность'
          }
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      },
      periodicity: {
        __caption__: 'Периодичность'
      },
      purposeOfTheMaintenanceModel: {
        __caption__: 'Модели оборудования'
      },
      maintenanceOperation: {
        __caption__: 'Операции ТО'
      }
    }
  };
});
define('ember-app/locales/ru/models/organization', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОрганизацияE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      ОрганизацияL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/periodicity', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      PeriodicityE: {
        name: {
          __caption__: 'Наименование'
        }
      },
      PeriodicityL: {
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    validations: {
      name: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/purpose-of-the-maintenance-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      НазначениеТОДляМоделиE: {
        equipmentModel: {
          __caption__: 'Модель оборудования',
          name: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      equipmentModel: {
        __caption__: 'Модель оборудования'
      },
      maintenanceProgram: {
        __caption__: 'maintenanceProgram'
      }
    }
  };
});
define('ember-app/locales/ru/models/scheduled-maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПланОперацияТОE: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        }
      },
      ПланОперацияТОL: {
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование операции'
          }
        }
      }
    },
    validations: {
      executionDate: {
        __caption__: 'Дата выполнения'
      },
      maintenanceOperation: {
        __caption__: 'Операция ТО'
      },
      maintenancePlan: {
        __caption__: 'maintenancePlan'
      }
    }
  };
});
define('ember-app/locales/ru/translations', ['exports', 'ember-flexberry/locales/ru/translations', 'ember-app/locales/ru/forms/data-line-test-gen270624-maintenance-operation-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-periodicity-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-scheduled-maintenance-operation-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', 'ember-app/locales/ru/forms/data-line-test-gen270624-periodicity-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', 'ember-app/locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', 'ember-app/locales/ru/models/contract', 'ember-app/locales/ru/models/document-to-the-model', 'ember-app/locales/ru/models/employee', 'ember-app/locales/ru/models/equipment-model', 'ember-app/locales/ru/models/equipment-status', 'ember-app/locales/ru/models/equipment-type', 'ember-app/locales/ru/models/fact-of-the-maintenance', 'ember-app/locales/ru/models/fact-operation-of-the-maintenance', 'ember-app/locales/ru/models/hardware', 'ember-app/locales/ru/models/location', 'ember-app/locales/ru/models/maintenance-operation', 'ember-app/locales/ru/models/maintenance-plan', 'ember-app/locales/ru/models/maintenance-program', 'ember-app/locales/ru/models/organization', 'ember-app/locales/ru/models/periodicity', 'ember-app/locales/ru/models/purpose-of-the-maintenance-model', 'ember-app/locales/ru/models/scheduled-maintenance-operation'], function (exports, _translations, _dataLineTestGen270624MaintenanceOperationL, _dataLineTestGen270624PeriodicityL, _dataLineTestGen270624ScheduledMaintenanceOperationL, _dataLineTestGen270624L, _dataLineTestGen270624L2, _dataLineTestGen270624L3, _dataLineTestGen270624L4, _dataLineTestGen270624L5, _dataLineTestGen270624L6, _dataLineTestGen270624L7, _dataLineTestGen270624L8, _dataLineTestGen270624L9, _dataLineTestGen270624L10, _dataLineTestGen270624L11, _dataLineTestGen270624PeriodicityE, _dataLineTestGen270624E, _dataLineTestGen270624E2, _dataLineTestGen270624E3, _dataLineTestGen270624E4, _dataLineTestGen270624E5, _dataLineTestGen270624E6, _dataLineTestGen270624E7, _dataLineTestGen270624E8, _dataLineTestGen270624E9, _dataLineTestGen270624E10, _dataLineTestGen270624E11, _contract, _documentToTheModel, _employee, _equipmentModel, _equipmentStatus, _equipmentType, _factOfTheMaintenance, _factOperationOfTheMaintenance, _hardware, _location, _maintenanceOperation, _maintenancePlan, _maintenanceProgram, _organization, _periodicity, _purposeOfTheMaintenanceModel, _scheduledMaintenanceOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var translations = {};
  Ember.$.extend(true, translations, _translations.default);

  Ember.$.extend(true, translations, {
    models: {
      'contract': _contract.default,
      'document-to-the-model': _documentToTheModel.default,
      'employee': _employee.default,
      'equipment-model': _equipmentModel.default,
      'equipment-status': _equipmentStatus.default,
      'equipment-type': _equipmentType.default,
      'fact-of-the-maintenance': _factOfTheMaintenance.default,
      'fact-operation-of-the-maintenance': _factOperationOfTheMaintenance.default,
      'hardware': _hardware.default,
      'location': _location.default,
      'maintenance-operation': _maintenanceOperation.default,
      'maintenance-plan': _maintenancePlan.default,
      'maintenance-program': _maintenanceProgram.default,
      'organization': _organization.default,
      'periodicity': _periodicity.default,
      'purpose-of-the-maintenance-model': _purposeOfTheMaintenanceModel.default,
      'scheduled-maintenance-operation': _scheduledMaintenanceOperation.default
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
            title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
          }
        },

        sitemap: {
          'application-name': {
            caption: 'Maintenance Management System',
            title: 'Maintenance'
          },
          'application-version': {
            caption: 'Версия аддона {{version}}',
            title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
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
      'data-line-test-gen270624-maintenance-operation-l': _dataLineTestGen270624MaintenanceOperationL.default,
      'data-line-test-gen270624-periodicity-l': _dataLineTestGen270624PeriodicityL.default,
      'data-line-test-gen270624-scheduled-maintenance-operation-l': _dataLineTestGen270624ScheduledMaintenanceOperationL.default,
      'data-line-test-gen270624-договор-l': _dataLineTestGen270624L.default,
      'data-line-test-gen270624-модель-оборудования-l': _dataLineTestGen270624L2.default,
      'data-line-test-gen270624-оборудование-l': _dataLineTestGen270624L3.default,
      'data-line-test-gen270624-организация-l': _dataLineTestGen270624L4.default,
      'data-line-test-gen270624-план-т-о-l': _dataLineTestGen270624L5.default,
      'data-line-test-gen270624-программа-т-о-l': _dataLineTestGen270624L6.default,
      'data-line-test-gen270624-расположение-l': _dataLineTestGen270624L7.default,
      'data-line-test-gen270624-сотрудник-l': _dataLineTestGen270624L8.default,
      'data-line-test-gen270624-статус-оборудования-l': _dataLineTestGen270624L9.default,
      'data-line-test-gen270624-тип-оборудования-l': _dataLineTestGen270624L10.default,
      'data-line-test-gen270624-факт-т-о-l': _dataLineTestGen270624L11.default,
      'data-line-test-gen270624-periodicity-e': _dataLineTestGen270624PeriodicityE.default,
      'data-line-test-gen270624-договор-e': _dataLineTestGen270624E.default,
      'data-line-test-gen270624-модель-оборудования-e': _dataLineTestGen270624E2.default,
      'data-line-test-gen270624-оборудование-e': _dataLineTestGen270624E3.default,
      'data-line-test-gen270624-организация-e': _dataLineTestGen270624E4.default,
      'data-line-test-gen270624-план-т-о-e': _dataLineTestGen270624E5.default,
      'data-line-test-gen270624-программа-т-о-e': _dataLineTestGen270624E6.default,
      'data-line-test-gen270624-расположение-e': _dataLineTestGen270624E7.default,
      'data-line-test-gen270624-сотрудник-e': _dataLineTestGen270624E8.default,
      'data-line-test-gen270624-статус-оборудования-e': _dataLineTestGen270624E9.default,
      'data-line-test-gen270624-тип-оборудования-e': _dataLineTestGen270624E10.default,
      'data-line-test-gen270624-факт-т-о-e': _dataLineTestGen270624E11.default
    }

  });

  exports.default = translations;
});
define('ember-app/mixins/link-action', ['exports', 'ember-link-action/mixins/link-action'], function (exports, _linkAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkAction.default;
    }
  });
});
define('ember-app/mixins/regenerated/models/contract', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    date: _emberData.default.attr('date'),
    number: _emberData.default.attr('string'),
    validityPeriod: _emberData.default.attr('date'),
    buyer: _emberData.default.belongsTo('organization', { inverse: null, async: false }),
    seller: _emberData.default.belongsTo('organization', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    date: {
      descriptionKey: 'models.contract.validations.date.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date'), (0, _emberCpValidations.validator)('presence', true)]
    },
    number: {
      descriptionKey: 'models.contract.validations.number.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    validityPeriod: {
      descriptionKey: 'models.contract.validations.validityPeriod.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    buyer: {
      descriptionKey: 'models.contract.validations.buyer.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    seller: {
      descriptionKey: 'models.contract.validations.seller.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ДоговорE', 'contract', {
      number: (0, _attributes.attr)('Номер', { index: 0 }),
      date: (0, _attributes.attr)('Дата', { index: 1 }),
      validityPeriod: (0, _attributes.attr)('Срок действия', { index: 2 }),
      buyer: (0, _attributes.belongsTo)('organization', 'Покупатель', {
        name: (0, _attributes.attr)('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' }),
      seller: (0, _attributes.belongsTo)('organization', 'Продавец', {
        name: (0, _attributes.attr)('Наименование', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'name' })
    });

    modelClass.defineProjection('ДоговорL', 'contract', {
      number: (0, _attributes.attr)('Номер', { index: 0 }),
      date: (0, _attributes.attr)('Дата', { index: 1 }),
      validityPeriod: (0, _attributes.attr)('Срок действия', { index: 2 }),
      buyer: (0, _attributes.belongsTo)('organization', 'Наименование', {
        name: (0, _attributes.attr)('Наименование', { index: 3 })
      }, { index: -1, hidden: true }),
      seller: (0, _attributes.belongsTo)('organization', 'Наименование', {
        name: (0, _attributes.attr)('Наименование', { index: 4 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/document-to-the-model', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string'),
    fileReference: _emberData.default.attr('string'),
    equipmentModel: _emberData.default.belongsTo('equipment-model', { inverse: 'documents', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.document-to-the-model.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    fileReference: {
      descriptionKey: 'models.document-to-the-model.validations.fileReference.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    equipmentModel: {
      descriptionKey: 'models.document-to-the-model.validations.equipmentModel.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ДокументКМоделиE', 'document-to-the-model', {
      name: (0, _attributes.attr)('Наименование', { index: 0 }),
      fileReference: (0, _attributes.attr)('Ссылка на файл', { index: 1 })
    });
  };
});
define('ember-app/mixins/regenerated/models/employee', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string'),
    patronymic: _emberData.default.attr('string'),
    surname: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.employee.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    patronymic: {
      descriptionKey: 'models.employee.validations.patronymic.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    surname: {
      descriptionKey: 'models.employee.validations.surname.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('СотрудникE', 'employee', {
      surname: (0, _attributes.attr)('Фамилия', { index: 0 }),
      name: (0, _attributes.attr)('Имя', { index: 1 }),
      patronymic: (0, _attributes.attr)('Отчество', { index: 2 })
    });

    modelClass.defineProjection('СотрудникL', 'employee', {
      surname: (0, _attributes.attr)('Фамилия', { index: 0 }),
      name: (0, _attributes.attr)('Имя', { index: 1 }),
      patronymic: (0, _attributes.attr)('Отчество', { index: 2 })
    });
  };
});
define('ember-app/mixins/regenerated/models/equipment-model', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string'),
    manufacturer: _emberData.default.belongsTo('organization', { inverse: null, async: false }),
    documents: _emberData.default.hasMany('document-to-the-model', { inverse: 'equipmentModel', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.equipment-model.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    manufacturer: {
      descriptionKey: 'models.equipment-model.validations.manufacturer.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    documents: {
      descriptionKey: 'models.equipment-model.validations.documents.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('has-many')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('МодельОборудованияE', 'equipment-model', {
      name: (0, _attributes.attr)('Наименование', { index: 0 }),
      manufacturer: (0, _attributes.belongsTo)('organization', 'Производитель', {
        name: (0, _attributes.attr)('Наименование производителя', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' }),
      documents: (0, _attributes.hasMany)('document-to-the-model', 'Документы', {
        name: (0, _attributes.attr)('Наименование', { index: 0 }),
        fileReference: (0, _attributes.attr)('Ссылка на файл', { index: 1 })
      })
    });

    modelClass.defineProjection('МодельОборудованияL', 'equipment-model', {
      name: (0, _attributes.attr)('Наименование', { index: 0 }),
      manufacturer: (0, _attributes.belongsTo)('organization', 'Производитель', {
        name: (0, _attributes.attr)('Производитель', { index: 1 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/equipment-status', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.equipment-status.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('СтатусОборудованияE', 'equipment-status', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('СтатусОборудованияL', 'equipment-status', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/equipment-type', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.equipment-type.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТипОборудованияE', 'equipment-type', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('ТипОборудованияL', 'equipment-type', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/fact-of-the-maintenance', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    startDate: _emberData.default.attr('date'),
    endDate: _emberData.default.attr('date'),
    scanProtocol: _emberData.default.attr('string'),
    /**
      Non-stored property.
       @property successfully
    */
    successfully: _emberData.default.attr('boolean'),
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
    _successfullyCompute: function _successfullyCompute() {
      var result = this.successfullyCompute && typeof this.successfullyCompute === 'function' ? this.successfullyCompute() : null;
      this.set('successfully', result);
    },
    equipment: _emberData.default.belongsTo('hardware', { inverse: null, async: false }),
    maintenancePlan: _emberData.default.belongsTo('maintenance-plan', { inverse: null, async: false }),
    factOperationOfTheMaintenance: _emberData.default.hasMany('fact-operation-of-the-maintenance', { inverse: 'factOfTheMaintenance', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    startDate: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.startDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    endDate: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.endDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    scanProtocol: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.scanProtocol.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    successfully: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.successfully.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    equipment: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.equipment.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenancePlan: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.maintenancePlan.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    factOperationOfTheMaintenance: {
      descriptionKey: 'models.fact-of-the-maintenance.validations.factOperationOfTheMaintenance.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('has-many')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ФактТОE', 'fact-of-the-maintenance', {
      startDate: (0, _attributes.attr)('Дата начала', { index: 0 }),
      endDate: (0, _attributes.attr)('Дата окончания', { index: 1 }),
      scanProtocol: (0, _attributes.attr)('Скан протокола', { index: 2 }),
      successfully: (0, _attributes.attr)('Успешно', { index: 3 }),
      equipment: (0, _attributes.belongsTo)('hardware', 'Оборудование', {
        name: (0, _attributes.attr)('Номер', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'name' }),
      maintenancePlan: (0, _attributes.belongsTo)('maintenance-plan', 'План ТО', {
        startDate: (0, _attributes.attr)('Дата начала', { index: 7 }),
        endDate: (0, _attributes.attr)('Дата окончания', { index: 8 }),
        equipment: (0, _attributes.belongsTo)('hardware', '', {
          name: (0, _attributes.attr)('Номер оборудования', { index: 9 }),
          type: (0, _attributes.belongsTo)('equipment-type', '', {
            name: (0, _attributes.attr)('Тип оборудования', { index: 10 })
          }, { index: -1, hidden: true }),
          model: (0, _attributes.belongsTo)('equipment-model', '', {
            name: (0, _attributes.attr)('Модель оборудования', { index: 11 }),
            manufacturer: (0, _attributes.belongsTo)('organization', '', {
              name: (0, _attributes.attr)('Производитель оборудования', { index: 12 })
            }, { index: -1, hidden: true })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 6 }),
      factOperationOfTheMaintenance: (0, _attributes.hasMany)('fact-operation-of-the-maintenance', 'Фактические операции ТО', {
        executionDate: (0, _attributes.attr)('Дата выполнения', { index: 0 }),
        successfully: (0, _attributes.attr)('Успешно', { index: 1 }),
        maintenanceOperation: (0, _attributes.belongsTo)('maintenance-operation', 'Операция ТО', {
          name: (0, _attributes.attr)('Наименование', { index: 3, hidden: true })
        }, { index: 2, displayMemberPath: 'name' }),
        scheduledMaintenanceOperation: (0, _attributes.belongsTo)('scheduled-maintenance-operation', 'План операция ТО', {
          executionDate: (0, _attributes.attr)('Дата выполнения', { index: 5, hidden: true })
        }, { index: 4, displayMemberPath: 'executionDate' })
      })
    });

    modelClass.defineProjection('ФактТОL', 'fact-of-the-maintenance', {
      startDate: (0, _attributes.attr)('Дата начала', { index: 0 }),
      endDate: (0, _attributes.attr)('Дата окончания', { index: 1 }),
      scanProtocol: (0, _attributes.attr)('Скан протокола', { index: 2 }),
      successfully: (0, _attributes.attr)('Успешно', { index: 3 }),
      equipment: (0, _attributes.belongsTo)('hardware', 'Номер', {
        name: (0, _attributes.attr)('Номер', { index: 4 }),
        model: (0, _attributes.belongsTo)('equipment-model', '', {
          name: (0, _attributes.attr)('Модель оборудования', { index: 5 }),
          manufacturer: (0, _attributes.belongsTo)('organization', '', {
            name: (0, _attributes.attr)('Производитель оборудования', { index: 6 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        type: (0, _attributes.belongsTo)('equipment-type', '', {
          name: (0, _attributes.attr)('Тип оборудования', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true }),
      maintenancePlan: (0, _attributes.belongsTo)('maintenance-plan', 'Дата начала', {
        startDate: (0, _attributes.attr)('Дата начала', { index: 8 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/fact-operation-of-the-maintenance', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    executionDate: _emberData.default.attr('date'),
    successfully: _emberData.default.attr('boolean', { defaultValue: false }),
    maintenanceOperation: _emberData.default.belongsTo('maintenance-operation', { inverse: null, async: false }),
    scheduledMaintenanceOperation: _emberData.default.belongsTo('scheduled-maintenance-operation', { inverse: null, async: false }),
    factOfTheMaintenance: _emberData.default.belongsTo('fact-of-the-maintenance', { inverse: 'factOperationOfTheMaintenance', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    executionDate: {
      descriptionKey: 'models.fact-operation-of-the-maintenance.validations.executionDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date'), (0, _emberCpValidations.validator)('presence', true)]
    },
    successfully: {
      descriptionKey: 'models.fact-operation-of-the-maintenance.validations.successfully.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenanceOperation: {
      descriptionKey: 'models.fact-operation-of-the-maintenance.validations.maintenanceOperation.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    scheduledMaintenanceOperation: {
      descriptionKey: 'models.fact-operation-of-the-maintenance.validations.scheduledMaintenanceOperation.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    factOfTheMaintenance: {
      descriptionKey: 'models.fact-operation-of-the-maintenance.validations.factOfTheMaintenance.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ФактОперацияТОE', 'fact-operation-of-the-maintenance', {
      executionDate: (0, _attributes.attr)('Дата выполнения', { index: 0 }),
      successfully: (0, _attributes.attr)('Успешно', { index: 1 }),
      maintenanceOperation: (0, _attributes.belongsTo)('maintenance-operation', 'Операция ТО', {
        name: (0, _attributes.attr)('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'name' }),
      scheduledMaintenanceOperation: (0, _attributes.belongsTo)('scheduled-maintenance-operation', 'План операция ТО', {
        executionDate: (0, _attributes.attr)('Дата выполнения', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'executionDate' })
    });
  };
});
define('ember-app/mixins/regenerated/models/hardware', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    dateOfCommissioning: _emberData.default.attr('date'),
    runDate: _emberData.default.attr('date'),
    productionDate: _emberData.default.attr('date'),
    operatingTime: _emberData.default.attr('number', { defaultValue: 0 }),
    name: _emberData.default.attr('string'),
    description: _emberData.default.attr('string'),
    warrantyPeriod: _emberData.default.attr('date'),
    supplyContract: _emberData.default.belongsTo('contract', { inverse: null, async: false }),
    location: _emberData.default.belongsTo('location', { inverse: null, async: false }),
    model: _emberData.default.belongsTo('equipment-model', { inverse: null, async: false }),
    accountable: _emberData.default.belongsTo('employee', { inverse: null, async: false }),
    serviceContract: _emberData.default.belongsTo('contract', { inverse: null, async: false }),
    status: _emberData.default.belongsTo('equipment-status', { inverse: null, async: false }),
    type: _emberData.default.belongsTo('equipment-type', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    dateOfCommissioning: {
      descriptionKey: 'models.hardware.validations.dateOfCommissioning.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    runDate: {
      descriptionKey: 'models.hardware.validations.runDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    productionDate: {
      descriptionKey: 'models.hardware.validations.productionDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    operatingTime: {
      descriptionKey: 'models.hardware.validations.operatingTime.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    name: {
      descriptionKey: 'models.hardware.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    description: {
      descriptionKey: 'models.hardware.validations.description.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    warrantyPeriod: {
      descriptionKey: 'models.hardware.validations.warrantyPeriod.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    supplyContract: {
      descriptionKey: 'models.hardware.validations.supplyContract.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    location: {
      descriptionKey: 'models.hardware.validations.location.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    model: {
      descriptionKey: 'models.hardware.validations.model.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    accountable: {
      descriptionKey: 'models.hardware.validations.accountable.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    serviceContract: {
      descriptionKey: 'models.hardware.validations.serviceContract.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    status: {
      descriptionKey: 'models.hardware.validations.status.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    type: {
      descriptionKey: 'models.hardware.validations.type.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ОборудованиеE', 'hardware', {
      name: (0, _attributes.attr)('Номер', { index: 0 }),
      productionDate: (0, _attributes.attr)('Дата производства', { index: 1 }),
      dateOfCommissioning: (0, _attributes.attr)('Дата ввода в экспл', { index: 2 }),
      warrantyPeriod: (0, _attributes.attr)('Срок гарантии', { index: 3 }),
      operatingTime: (0, _attributes.attr)('Наработка', { index: 4 }),
      runDate: (0, _attributes.attr)('Дата наработки', { index: 5 }),
      description: (0, _attributes.attr)('Описание', { index: 6 }),
      type: (0, _attributes.belongsTo)('equipment-type', 'Тип', {
        name: (0, _attributes.attr)('Наименование', { index: 8, hidden: true })
      }, { index: 7, displayMemberPath: 'name' }),
      status: (0, _attributes.belongsTo)('equipment-status', 'Статус', {
        name: (0, _attributes.attr)('Наименование', { index: 10, hidden: true })
      }, { index: 9, displayMemberPath: 'name' }),
      accountable: (0, _attributes.belongsTo)('employee', 'Ответственный', {
        surname: (0, _attributes.attr)('Фамилия ответственного', { index: 12 }),
        name: (0, _attributes.attr)('Имя ответственного', { index: 13 }),
        patronymic: (0, _attributes.attr)('Отчество ответственного', { index: 14 })
      }, { index: 11, displayMemberPath: 'surname' }),
      serviceContract: (0, _attributes.belongsTo)('contract', 'Сервисный договор', {
        number: (0, _attributes.attr)('', { index: 16, hidden: true }),
        date: (0, _attributes.attr)('Дата сервисного договора', { index: 17 }),
        validityPeriod: (0, _attributes.attr)('Срок действия сервисного договора', { index: 18 })
      }, { index: 15, displayMemberPath: 'number' }),
      model: (0, _attributes.belongsTo)('equipment-model', 'Модель', {
        name: (0, _attributes.attr)('Наименование', { index: 20, hidden: true }),
        manufacturer: (0, _attributes.belongsTo)('organization', '', {
          name: (0, _attributes.attr)('Производитель модели', { index: 21 })
        }, { index: -1, hidden: true })
      }, { index: 19, displayMemberPath: 'name' }),
      supplyContract: (0, _attributes.belongsTo)('contract', 'Договор поставки', {
        number: (0, _attributes.attr)('Номер', { index: 23, hidden: true }),
        date: (0, _attributes.attr)('Дата договора поставки', { index: 24 }),
        validityPeriod: (0, _attributes.attr)('Срок действия договора поставки', { index: 25 })
      }, { index: 22, displayMemberPath: 'number' }),
      location: (0, _attributes.belongsTo)('location', 'Место расположения', {
        name: (0, _attributes.attr)('Наименование', { index: 27, hidden: true })
      }, { index: 26, displayMemberPath: 'name' })
    });

    modelClass.defineProjection('ОборудованиеL', 'hardware', {
      name: (0, _attributes.attr)('Номер', { index: 0 }),
      productionDate: (0, _attributes.attr)('Дата производства', { index: 1 }),
      dateOfCommissioning: (0, _attributes.attr)('Дата ввода в экспл', { index: 2 }),
      warrantyPeriod: (0, _attributes.attr)('Срок гарантии', { index: 3 }),
      operatingTime: (0, _attributes.attr)('Наработка', { index: 4 }),
      runDate: (0, _attributes.attr)('Дата наработки', { index: 5 }),
      description: (0, _attributes.attr)('Описание', { index: 6 }),
      type: (0, _attributes.belongsTo)('equipment-type', 'Тип', {
        name: (0, _attributes.attr)('Тип', { index: 7 })
      }, { index: -1, hidden: true }),
      status: (0, _attributes.belongsTo)('equipment-status', 'Статус', {
        name: (0, _attributes.attr)('Статус', { index: 8 })
      }, { index: -1, hidden: true }),
      accountable: (0, _attributes.belongsTo)('employee', 'Ответственный', {
        surname: (0, _attributes.attr)('Ответственный', { index: 9 })
      }, { index: -1, hidden: true }),
      serviceContract: (0, _attributes.belongsTo)('contract', 'Сервисный договор', {
        number: (0, _attributes.attr)('Сервисный договор', { index: 10 })
      }, { index: -1, hidden: true }),
      model: (0, _attributes.belongsTo)('equipment-model', 'Модель', {
        name: (0, _attributes.attr)('Модель', { index: 11 })
      }, { index: -1, hidden: true }),
      supplyContract: (0, _attributes.belongsTo)('contract', 'Договор поставки', {
        number: (0, _attributes.attr)('Договор поставки', { index: 12 })
      }, { index: -1, hidden: true }),
      location: (0, _attributes.belongsTo)('location', 'Расположение', {
        name: (0, _attributes.attr)('Расположение', { index: 13 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/location', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.location.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('РасположениеE', 'location', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('РасположениеL', 'location', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/maintenance-operation', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string'),
    maintenanceProgram: _emberData.default.belongsTo('maintenance-program', { inverse: 'maintenanceOperation', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.maintenance-operation.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenanceProgram: {
      descriptionKey: 'models.maintenance-operation.validations.maintenanceProgram.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ОперацияТОE', 'maintenance-operation', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('ОперацияТОL', 'maintenance-operation', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/maintenance-plan', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    startDate: _emberData.default.attr('date'),
    endDate: _emberData.default.attr('date'),
    equipment: _emberData.default.belongsTo('hardware', { inverse: null, async: false }),
    scheduledMaintenanceOperation: _emberData.default.hasMany('scheduled-maintenance-operation', { inverse: 'maintenancePlan', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    startDate: {
      descriptionKey: 'models.maintenance-plan.validations.startDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    endDate: {
      descriptionKey: 'models.maintenance-plan.validations.endDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    equipment: {
      descriptionKey: 'models.maintenance-plan.validations.equipment.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    scheduledMaintenanceOperation: {
      descriptionKey: 'models.maintenance-plan.validations.scheduledMaintenanceOperation.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('has-many')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ПланТОE', 'maintenance-plan', {
      startDate: (0, _attributes.attr)('Дата начала', { index: 0 }),
      endDate: (0, _attributes.attr)('Дата окончания', { index: 1 }),
      equipment: (0, _attributes.belongsTo)('hardware', 'Оборудование', {
        name: (0, _attributes.attr)('Номер', { index: 3, hidden: true }),
        model: (0, _attributes.belongsTo)('equipment-model', '', {
          name: (0, _attributes.attr)('Модель оборудования', { index: 4 })
        }, { index: -1, hidden: true }),
        type: (0, _attributes.belongsTo)('equipment-type', '', {
          name: (0, _attributes.attr)('Тип оборудования', { index: 5 })
        }, { index: -1, hidden: true }),
        status: (0, _attributes.belongsTo)('equipment-status', '', {
          name: (0, _attributes.attr)('Статус оборудования', { index: 6 })
        }, { index: -1, hidden: true }),
        accountable: (0, _attributes.belongsTo)('employee', '', {
          surname: (0, _attributes.attr)('Фамилия ответственного', { index: 7 })
        }, { index: -1, hidden: true }),
        serviceContract: (0, _attributes.belongsTo)('contract', '', {
          number: (0, _attributes.attr)('Номер сервисного договора', { index: 8 })
        }, { index: -1, hidden: true }),
        location: (0, _attributes.belongsTo)('location', '', {
          name: (0, _attributes.attr)('Место расположения оборудования', { index: 9 })
        }, { index: -1, hidden: true })
      }, { index: 2, displayMemberPath: 'name' }),
      scheduledMaintenanceOperation: (0, _attributes.hasMany)('scheduled-maintenance-operation', 'Плановые операции ТО', {
        executionDate: (0, _attributes.attr)('Дата выполнения', { index: 0 }),
        maintenanceOperation: (0, _attributes.belongsTo)('maintenance-operation', 'Операция ТО', {
          name: (0, _attributes.attr)('Наименование', { index: 2, hidden: true })
        }, { index: 1, displayMemberPath: 'name' })
      })
    });

    modelClass.defineProjection('ПланТОL', 'maintenance-plan', {
      startDate: (0, _attributes.attr)('Дата начала', { index: 0 }),
      endDate: (0, _attributes.attr)('Дата окончания', { index: 1 }),
      equipment: (0, _attributes.belongsTo)('hardware', 'Номер', {
        name: (0, _attributes.attr)('Номер', { index: 2 }),
        model: (0, _attributes.belongsTo)('equipment-model', '', {
          name: (0, _attributes.attr)('Модель', { index: 3 }),
          manufacturer: (0, _attributes.belongsTo)('organization', '', {
            name: (0, _attributes.attr)('Производитель', { index: 4 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/maintenance-program', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string'),
    periodicity: _emberData.default.belongsTo('periodicity', { inverse: null, async: false }),
    purposeOfTheMaintenanceModel: _emberData.default.hasMany('purpose-of-the-maintenance-model', { inverse: 'maintenanceProgram', async: false }),
    maintenanceOperation: _emberData.default.hasMany('maintenance-operation', { inverse: 'maintenanceProgram', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.maintenance-program.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    periodicity: {
      descriptionKey: 'models.maintenance-program.validations.periodicity.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    purposeOfTheMaintenanceModel: {
      descriptionKey: 'models.maintenance-program.validations.purposeOfTheMaintenanceModel.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('has-many')]
    },
    maintenanceOperation: {
      descriptionKey: 'models.maintenance-program.validations.maintenanceOperation.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('has-many')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ПрограммаТОE', 'maintenance-program', {
      name: (0, _attributes.attr)('Наименование', { index: 0 }),
      periodicity: (0, _attributes.belongsTo)('periodicity', 'Периодичность', {
        name: (0, _attributes.attr)('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' }),
      purposeOfTheMaintenanceModel: (0, _attributes.hasMany)('purpose-of-the-maintenance-model', 'Модели оборудования', {
        equipmentModel: (0, _attributes.belongsTo)('equipment-model', 'Модель оборудования', {
          name: (0, _attributes.attr)('Наименование', { index: 1, hidden: true })
        }, { index: 0, displayMemberPath: 'name' })
      }),
      maintenanceOperation: (0, _attributes.hasMany)('maintenance-operation', 'Операции ТО', {
        name: (0, _attributes.attr)('Наименование', { index: 0 })
      })
    });

    modelClass.defineProjection('ПрограммаТОL', 'maintenance-program', {
      name: (0, _attributes.attr)('Наименование', { index: 0 }),
      periodicity: (0, _attributes.belongsTo)('periodicity', 'Периодичность', {
        name: (0, _attributes.attr)('Периодичность', { index: 1 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/organization', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.organization.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ОрганизацияE', 'organization', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('ОрганизацияL', 'organization', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/periodicity', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    name: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    name: {
      descriptionKey: 'models.periodicity.validations.name.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('PeriodicityE', 'periodicity', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });

    modelClass.defineProjection('PeriodicityL', 'periodicity', {
      name: (0, _attributes.attr)('Наименование', { index: 0 })
    });
  };
});
define('ember-app/mixins/regenerated/models/purpose-of-the-maintenance-model', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    equipmentModel: _emberData.default.belongsTo('equipment-model', { inverse: null, async: false }),
    maintenanceProgram: _emberData.default.belongsTo('maintenance-program', { inverse: 'purposeOfTheMaintenanceModel', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    equipmentModel: {
      descriptionKey: 'models.purpose-of-the-maintenance-model.validations.equipmentModel.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenanceProgram: {
      descriptionKey: 'models.purpose-of-the-maintenance-model.validations.maintenanceProgram.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('НазначениеТОДляМоделиE', 'purpose-of-the-maintenance-model', {
      equipmentModel: (0, _attributes.belongsTo)('equipment-model', 'Модель оборудования', {
        name: (0, _attributes.attr)('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'name' })
    });
  };
});
define('ember-app/mixins/regenerated/models/scheduled-maintenance-operation', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    executionDate: _emberData.default.attr('date'),
    maintenanceOperation: _emberData.default.belongsTo('maintenance-operation', { inverse: null, async: false }),
    maintenancePlan: _emberData.default.belongsTo('maintenance-plan', { inverse: 'scheduledMaintenanceOperation', async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    executionDate: {
      descriptionKey: 'models.scheduled-maintenance-operation.validations.executionDate.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenanceOperation: {
      descriptionKey: 'models.scheduled-maintenance-operation.validations.maintenanceOperation.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    maintenancePlan: {
      descriptionKey: 'models.scheduled-maintenance-operation.validations.maintenancePlan.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ПланОперацияТОE', 'scheduled-maintenance-operation', {
      executionDate: (0, _attributes.attr)('Дата выполнения', { index: 0 }),
      maintenanceOperation: (0, _attributes.belongsTo)('maintenance-operation', 'Операция ТО', {
        name: (0, _attributes.attr)('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    });

    modelClass.defineProjection('ПланОперацияТОL', 'scheduled-maintenance-operation', {
      executionDate: (0, _attributes.attr)('Дата выполнения', { index: 0 }),
      maintenanceOperation: (0, _attributes.belongsTo)('maintenance-operation', 'Операция ТО', {
        name: (0, _attributes.attr)('Наименование операции', { index: 2 })
      }, { index: 1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/serializers/contract-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        buyer: { serialize: 'id', deserialize: 'records' },
        seller: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/contract', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        buyer: { serialize: 'odata-id', deserialize: 'records' },
        seller: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/document-to-the-model-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipmentModel: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/document-to-the-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipmentModel: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/employee-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/employee', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-model-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        manufacturer: { serialize: 'id', deserialize: 'records' },
        documents: { serialize: 'ids', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        manufacturer: { serialize: 'odata-id', deserialize: 'records' },
        documents: { serialize: false, deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-status-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-status', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-type-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/equipment-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/fact-of-the-maintenance-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipment: { serialize: 'id', deserialize: 'records' },
        maintenancePlan: { serialize: 'id', deserialize: 'records' },
        factOperationOfTheMaintenance: { serialize: 'ids', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/fact-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipment: { serialize: 'odata-id', deserialize: 'records' },
        maintenancePlan: { serialize: 'odata-id', deserialize: 'records' },
        factOperationOfTheMaintenance: { serialize: false, deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/fact-operation-of-the-maintenance-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceOperation: { serialize: 'id', deserialize: 'records' },
        scheduledMaintenanceOperation: { serialize: 'id', deserialize: 'records' },
        factOfTheMaintenance: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/fact-operation-of-the-maintenance', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceOperation: { serialize: 'odata-id', deserialize: 'records' },
        scheduledMaintenanceOperation: { serialize: 'odata-id', deserialize: 'records' },
        factOfTheMaintenance: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/hardware-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        supplyContract: { serialize: 'id', deserialize: 'records' },
        location: { serialize: 'id', deserialize: 'records' },
        model: { serialize: 'id', deserialize: 'records' },
        accountable: { serialize: 'id', deserialize: 'records' },
        serviceContract: { serialize: 'id', deserialize: 'records' },
        status: { serialize: 'id', deserialize: 'records' },
        type: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/hardware', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        supplyContract: { serialize: 'odata-id', deserialize: 'records' },
        location: { serialize: 'odata-id', deserialize: 'records' },
        model: { serialize: 'odata-id', deserialize: 'records' },
        accountable: { serialize: 'odata-id', deserialize: 'records' },
        serviceContract: { serialize: 'odata-id', deserialize: 'records' },
        status: { serialize: 'odata-id', deserialize: 'records' },
        type: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/location-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/location', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-operation-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceProgram: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceProgram: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-plan-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipment: { serialize: 'id', deserialize: 'records' },
        scheduledMaintenanceOperation: { serialize: 'ids', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipment: { serialize: 'odata-id', deserialize: 'records' },
        scheduledMaintenanceOperation: { serialize: false, deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-program-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        periodicity: { serialize: 'id', deserialize: 'records' },
        purposeOfTheMaintenanceModel: { serialize: 'ids', deserialize: 'records' },
        maintenanceOperation: { serialize: 'ids', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/maintenance-program', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        periodicity: { serialize: 'odata-id', deserialize: 'records' },
        purposeOfTheMaintenanceModel: { serialize: false, deserialize: 'records' },
        maintenanceOperation: { serialize: false, deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/organization-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/organization', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/periodicity-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/periodicity', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/purpose-of-the-maintenance-model-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipmentModel: { serialize: 'id', deserialize: 'records' },
        maintenanceProgram: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/purpose-of-the-maintenance-model', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        equipmentModel: { serialize: 'odata-id', deserialize: 'records' },
        maintenanceProgram: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/scheduled-maintenance-operation-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceOperation: { serialize: 'id', deserialize: 'records' },
        maintenancePlan: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/scheduled-maintenance-operation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        maintenanceOperation: { serialize: 'odata-id', deserialize: 'records' },
        maintenancePlan: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/models/contract', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/contract'], function (exports, _emberCpValidations, _model, _contract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_contract.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_contract.Model, Validations, {});

  (0, _contract.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/document-to-the-model', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/document-to-the-model'], function (exports, _emberCpValidations, _model, _documentToTheModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_documentToTheModel.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_documentToTheModel.Model, Validations, {});

  (0, _documentToTheModel.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/employee', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/employee'], function (exports, _emberCpValidations, _model, _employee) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_employee.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_employee.Model, Validations, {});

  (0, _employee.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/equipment-model', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/equipment-model'], function (exports, _emberCpValidations, _model, _equipmentModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_equipmentModel.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_equipmentModel.Model, Validations, {});

  (0, _equipmentModel.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/equipment-status', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/equipment-status'], function (exports, _emberCpValidations, _model, _equipmentStatus) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_equipmentStatus.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_equipmentStatus.Model, Validations, {});

  (0, _equipmentStatus.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/equipment-type', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/equipment-type'], function (exports, _emberCpValidations, _model, _equipmentType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_equipmentType.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_equipmentType.Model, Validations, {});

  (0, _equipmentType.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/fact-of-the-maintenance', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/fact-of-the-maintenance'], function (exports, _emberCpValidations, _model, _factOfTheMaintenance) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_factOfTheMaintenance.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_factOfTheMaintenance.Model, Validations, {});

  (0, _factOfTheMaintenance.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/fact-operation-of-the-maintenance', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/fact-operation-of-the-maintenance'], function (exports, _emberCpValidations, _model, _factOperationOfTheMaintenance) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_factOperationOfTheMaintenance.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_factOperationOfTheMaintenance.Model, Validations, {});

  (0, _factOperationOfTheMaintenance.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/flexberry-adv-limit', ['exports', 'ember-flexberry/models/flexberry-adv-limit'], function (exports, _flexberryAdvLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryAdvLimit.default;
    }
  });
});
define('ember-app/models/hardware', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/hardware'], function (exports, _emberCpValidations, _model, _hardware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_hardware.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_hardware.Model, Validations, {});

  (0, _hardware.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditField.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectType.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _iCSSoftSTORMNETSecurityAgent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgent.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _iCSSoftSTORMNETSecurityLinkGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityLinkGroup.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _iCSSoftSTORMNETSecuritySession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecuritySession.default;
    }
  });
});
define('ember-app/models/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/models/i-i-s-caseberry-logging-objects-application-log'], function (exports, _iISCaseberryLoggingObjectsApplicationLog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLog.default;
    }
  });
});
define('ember-app/models/location', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/location'], function (exports, _emberCpValidations, _model, _location) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_location.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_location.Model, Validations, {});

  (0, _location.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/maintenance-operation', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/maintenance-operation'], function (exports, _emberCpValidations, _model, _maintenanceOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_maintenanceOperation.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_maintenanceOperation.Model, Validations, {});

  (0, _maintenanceOperation.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/maintenance-plan', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/maintenance-plan'], function (exports, _emberCpValidations, _model, _maintenancePlan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_maintenancePlan.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_maintenancePlan.Model, Validations, {});

  (0, _maintenancePlan.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/maintenance-program', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/maintenance-program'], function (exports, _emberCpValidations, _model, _maintenanceProgram) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_maintenanceProgram.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_maintenanceProgram.Model, Validations, {});

  (0, _maintenanceProgram.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/model-without-validation', ['exports', 'ember-flexberry-data/models/model-without-validation'], function (exports, _modelWithoutValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modelWithoutValidation.default;
    }
  });
});
define('ember-app/models/model', ['exports', 'ember-flexberry-data/models/model'], function (exports, _model) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _model.default;
    }
  });
});
define('ember-app/models/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/models/new-platform-flexberry-flexberry-user-setting'], function (exports, _newPlatformFlexberryFlexberryUserSetting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryFlexberryUserSetting.default;
    }
  });
});
define('ember-app/models/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/models/new-platform-flexberry-services-lock'], function (exports, _newPlatformFlexberryServicesLock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLock.default;
    }
  });
});
define('ember-app/models/offline-model', ['exports', 'ember-flexberry-data/models/offline-model'], function (exports, _offlineModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offlineModel.default;
    }
  });
});
define('ember-app/models/organization', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/organization'], function (exports, _emberCpValidations, _model, _organization) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_organization.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_organization.Model, Validations, {});

  (0, _organization.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/periodicity', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/periodicity'], function (exports, _emberCpValidations, _model, _periodicity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_periodicity.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_periodicity.Model, Validations, {});

  (0, _periodicity.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/purpose-of-the-maintenance-model', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/purpose-of-the-maintenance-model'], function (exports, _emberCpValidations, _model, _purposeOfTheMaintenanceModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_purposeOfTheMaintenanceModel.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_purposeOfTheMaintenanceModel.Model, Validations, {});

  (0, _purposeOfTheMaintenanceModel.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/scheduled-maintenance-operation', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/scheduled-maintenance-operation'], function (exports, _emberCpValidations, _model, _scheduledMaintenanceOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_scheduledMaintenanceOperation.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_scheduledMaintenanceOperation.Model, Validations, {});

  (0, _scheduledMaintenanceOperation.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/resolver', ['exports', 'ember-flexberry/resolver'], function (exports, _resolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _resolver.default;
});
define('ember-app/router', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType
  });

  Router.map(function () {
    this.route('data-line-test-gen270624-maintenance-operation-l');
    this.route('null', { path: 'null/:id' });
    this.route('null.new', { path: 'null/new' });
    this.route('data-line-test-gen270624-periodicity-l');
    this.route('data-line-test-gen270624-periodicity-e', { path: 'data-line-test-gen270624-periodicity-e/:id' });
    this.route('data-line-test-gen270624-periodicity-e.new', { path: 'data-line-test-gen270624-periodicity-e/new' });
    this.route('data-line-test-gen270624-scheduled-maintenance-operation-l');
    this.route('null', { path: 'null/:id' });
    this.route('null.new', { path: 'null/new' });
    this.route('data-line-test-gen270624-договор-l');
    this.route('data-line-test-gen270624-договор-e', { path: 'data-line-test-gen270624-договор-e/:id' });
    this.route('data-line-test-gen270624-договор-e.new', { path: 'data-line-test-gen270624-договор-e/new' });
    this.route('data-line-test-gen270624-модель-оборудования-l');
    this.route('data-line-test-gen270624-модель-оборудования-e', { path: 'data-line-test-gen270624-модель-оборудования-e/:id' });
    this.route('data-line-test-gen270624-модель-оборудования-e.new', { path: 'data-line-test-gen270624-модель-оборудования-e/new' });
    this.route('data-line-test-gen270624-оборудование-l');
    this.route('data-line-test-gen270624-оборудование-e', { path: 'data-line-test-gen270624-оборудование-e/:id' });
    this.route('data-line-test-gen270624-оборудование-e.new', { path: 'data-line-test-gen270624-оборудование-e/new' });
    this.route('data-line-test-gen270624-организация-l');
    this.route('data-line-test-gen270624-организация-e', { path: 'data-line-test-gen270624-организация-e/:id' });
    this.route('data-line-test-gen270624-организация-e.new', { path: 'data-line-test-gen270624-организация-e/new' });
    this.route('data-line-test-gen270624-план-т-о-l');
    this.route('data-line-test-gen270624-план-т-о-e', { path: 'data-line-test-gen270624-план-т-о-e/:id' });
    this.route('data-line-test-gen270624-план-т-о-e.new', { path: 'data-line-test-gen270624-план-т-о-e/new' });
    this.route('data-line-test-gen270624-программа-т-о-l');
    this.route('data-line-test-gen270624-программа-т-о-e', { path: 'data-line-test-gen270624-программа-т-о-e/:id' });
    this.route('data-line-test-gen270624-программа-т-о-e.new', { path: 'data-line-test-gen270624-программа-т-о-e/new' });
    this.route('data-line-test-gen270624-расположение-l');
    this.route('data-line-test-gen270624-расположение-e', { path: 'data-line-test-gen270624-расположение-e/:id' });
    this.route('data-line-test-gen270624-расположение-e.new', { path: 'data-line-test-gen270624-расположение-e/new' });
    this.route('data-line-test-gen270624-сотрудник-l');
    this.route('data-line-test-gen270624-сотрудник-e', { path: 'data-line-test-gen270624-сотрудник-e/:id' });
    this.route('data-line-test-gen270624-сотрудник-e.new', { path: 'data-line-test-gen270624-сотрудник-e/new' });
    this.route('data-line-test-gen270624-статус-оборудования-l');
    this.route('data-line-test-gen270624-статус-оборудования-e', { path: 'data-line-test-gen270624-статус-оборудования-e/:id' });
    this.route('data-line-test-gen270624-статус-оборудования-e.new', { path: 'data-line-test-gen270624-статус-оборудования-e/new' });
    this.route('data-line-test-gen270624-тип-оборудования-l');
    this.route('data-line-test-gen270624-тип-оборудования-e', { path: 'data-line-test-gen270624-тип-оборудования-e/:id' });
    this.route('data-line-test-gen270624-тип-оборудования-e.new', { path: 'data-line-test-gen270624-тип-оборудования-e/new' });
    this.route('data-line-test-gen270624-факт-т-о-l');
    this.route('data-line-test-gen270624-факт-т-о-e', { path: 'data-line-test-gen270624-факт-т-о-e/:id' });
    this.route('data-line-test-gen270624-факт-т-о-e.new', { path: 'data-line-test-gen270624-факт-т-о-e/new' });
  });

  exports.default = Router;
});
define('ember-app/routes/application', ['exports', 'ember-flexberry/mixins/modal-application-route'], function (exports, _modalApplicationRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_modalApplicationRoute.default);
});
define('ember-app/routes/data-line-test-gen270624-maintenance-operation-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ОперацияТОL'
    */
    modelProjection: 'ОперацияТОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'maintenance-operation'
    */
    modelName: 'maintenance-operation',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624MaintenanceOperationL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-periodicity-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'PeriodicityE',
    modelName: 'periodicity'
  });
});
define('ember-app/routes/data-line-test-gen270624-periodicity-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'PeriodicityE',
    modelName: 'periodicity',
    templateName: 'data-line-test-gen270624-periodicity-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-periodicity-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'PeriodicityL'
    */
    modelProjection: 'PeriodicityL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'periodicity'
    */
    modelName: 'periodicity',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624PeriodicityL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-scheduled-maintenance-operation-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ПланОперацияТОL'
    */
    modelProjection: 'ПланОперацияТОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'scheduled-maintenance-operation'
    */
    modelName: 'scheduled-maintenance-operation',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ScheduledMaintenanceOperationL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ДоговорE',
    modelName: 'contract'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ДоговорE',
    modelName: 'contract',
    templateName: 'data-line-test-gen270624-договор-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ДоговорL'
    */
    modelProjection: 'ДоговорL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'contract'
    */
    modelName: 'contract',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ДоговорL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'МодельОборудованияE',
    modelName: 'equipment-model'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'МодельОборудованияE',
    modelName: 'equipment-model',
    templateName: 'data-line-test-gen270624-модель-оборудования-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'МодельОборудованияL'
    */
    modelProjection: 'МодельОборудованияL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'equipment-model'
    */
    modelName: 'equipment-model',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624МодельОборудованияL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ОборудованиеE',
    modelName: 'hardware'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ОборудованиеE',
    modelName: 'hardware',
    templateName: 'data-line-test-gen270624-оборудование-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ОборудованиеL'
    */
    modelProjection: 'ОборудованиеL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'hardware'
    */
    modelName: 'hardware',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ОборудованиеL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ОрганизацияE',
    modelName: 'organization'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ОрганизацияE',
    modelName: 'organization',
    templateName: 'data-line-test-gen270624-организация-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ОрганизацияL'
    */
    modelProjection: 'ОрганизацияL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'organization'
    */
    modelName: 'organization',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ОрганизацияL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ПланТОE',
    modelName: 'maintenance-plan'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ПланТОE',
    modelName: 'maintenance-plan',
    templateName: 'data-line-test-gen270624-план-т-о-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ПланТОL'
    */
    modelProjection: 'ПланТОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'maintenance-plan'
    */
    modelName: 'maintenance-plan',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ПланТОL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ПрограммаТОE',
    modelName: 'maintenance-program'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ПрограммаТОE',
    modelName: 'maintenance-program',
    templateName: 'data-line-test-gen270624-программа-т-о-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ПрограммаТОL'
    */
    modelProjection: 'ПрограммаТОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'maintenance-program'
    */
    modelName: 'maintenance-program',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ПрограммаТОL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'РасположениеE',
    modelName: 'location'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'РасположениеE',
    modelName: 'location',
    templateName: 'data-line-test-gen270624-расположение-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'РасположениеL'
    */
    modelProjection: 'РасположениеL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'location'
    */
    modelName: 'location',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624РасположениеL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'СотрудникE',
    modelName: 'employee'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'СотрудникE',
    modelName: 'employee',
    templateName: 'data-line-test-gen270624-сотрудник-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'СотрудникL'
    */
    modelProjection: 'СотрудникL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'employee'
    */
    modelName: 'employee',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624СотрудникL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'СтатусОборудованияE',
    modelName: 'equipment-status'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'СтатусОборудованияE',
    modelName: 'equipment-status',
    templateName: 'data-line-test-gen270624-статус-оборудования-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'СтатусОборудованияL'
    */
    modelProjection: 'СтатусОборудованияL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'equipment-status'
    */
    modelName: 'equipment-status',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624СтатусОборудованияL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТипОборудованияE',
    modelName: 'equipment-type'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТипОборудованияE',
    modelName: 'equipment-type',
    templateName: 'data-line-test-gen270624-тип-оборудования-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТипОборудованияL'
    */
    modelProjection: 'ТипОборудованияL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'equipment-type'
    */
    modelName: 'equipment-type',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ТипОборудованияL: {} };
    })
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ФактТОE',
    modelName: 'fact-of-the-maintenance'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ФактТОE',
    modelName: 'fact-of-the-maintenance',
    templateName: 'data-line-test-gen270624-факт-т-о-e'
  });
});
define('ember-app/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ФактТОL'
    */
    modelProjection: 'ФактТОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'fact-of-the-maintenance'
    */
    modelName: 'fact-of-the-maintenance',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { DataLineTestGen270624ФактТОL: {} };
    })
  });
});
define('ember-app/routes/edit-form', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _editForm.default;
    }
  });
});
define('ember-app/routes/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _iISCaseberryLoggingObjectsApplicationLogE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogE.default;
    }
  });
});
define('ember-app/routes/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _iISCaseberryLoggingObjectsApplicationLogL) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogL.default;
    }
  });
});
define('ember-app/routes/list-form', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listForm.default;
    }
  });
});
define('ember-app/routes/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/routes/new-platform-flexberry-services-lock-list'], function (exports, _newPlatformFlexberryServicesLockList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLockList.default;
    }
  });
});
define('ember-app/serializers/application-offline', ['exports', 'ember-data', 'ember-flexberry-data/serializers/offline'], function (exports, _emberData, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _offline.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {}
  });
});
define('ember-app/serializers/application', ['exports', 'ember-flexberry-data/serializers/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _odata.default.extend({});
});
define('ember-app/serializers/base', ['exports', 'ember-flexberry-data/serializers/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('ember-app/serializers/contract-offline', ['exports', 'ember-app/mixins/regenerated/serializers/contract-offline', 'ember-app/serializers/application-offline'], function (exports, _contractOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_contractOffline.OfflineSerializer, {});
});
define('ember-app/serializers/contract', ['exports', 'ember-app/mixins/regenerated/serializers/contract', 'ember-app/serializers/application'], function (exports, _contract, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_contract.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/document-to-the-model-offline', ['exports', 'ember-app/mixins/regenerated/serializers/document-to-the-model-offline', 'ember-app/serializers/application-offline'], function (exports, _documentToTheModelOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_documentToTheModelOffline.OfflineSerializer, {});
});
define('ember-app/serializers/document-to-the-model', ['exports', 'ember-app/mixins/regenerated/serializers/document-to-the-model', 'ember-app/serializers/application'], function (exports, _documentToTheModel, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_documentToTheModel.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/employee-offline', ['exports', 'ember-app/mixins/regenerated/serializers/employee-offline', 'ember-app/serializers/application-offline'], function (exports, _employeeOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_employeeOffline.OfflineSerializer, {});
});
define('ember-app/serializers/employee', ['exports', 'ember-app/mixins/regenerated/serializers/employee', 'ember-app/serializers/application'], function (exports, _employee, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_employee.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/equipment-model-offline', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-model-offline', 'ember-app/serializers/application-offline'], function (exports, _equipmentModelOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_equipmentModelOffline.OfflineSerializer, {});
});
define('ember-app/serializers/equipment-model', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-model', 'ember-app/serializers/application'], function (exports, _equipmentModel, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_equipmentModel.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/equipment-status-offline', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-status-offline', 'ember-app/serializers/application-offline'], function (exports, _equipmentStatusOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_equipmentStatusOffline.OfflineSerializer, {});
});
define('ember-app/serializers/equipment-status', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-status', 'ember-app/serializers/application'], function (exports, _equipmentStatus, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_equipmentStatus.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/equipment-type-offline', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-type-offline', 'ember-app/serializers/application-offline'], function (exports, _equipmentTypeOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_equipmentTypeOffline.OfflineSerializer, {});
});
define('ember-app/serializers/equipment-type', ['exports', 'ember-app/mixins/regenerated/serializers/equipment-type', 'ember-app/serializers/application'], function (exports, _equipmentType, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_equipmentType.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/fact-of-the-maintenance-offline', ['exports', 'ember-app/mixins/regenerated/serializers/fact-of-the-maintenance-offline', 'ember-app/serializers/application-offline'], function (exports, _factOfTheMaintenanceOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_factOfTheMaintenanceOffline.OfflineSerializer, {});
});
define('ember-app/serializers/fact-of-the-maintenance', ['exports', 'ember-app/mixins/regenerated/serializers/fact-of-the-maintenance', 'ember-app/serializers/application'], function (exports, _factOfTheMaintenance, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_factOfTheMaintenance.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/fact-operation-of-the-maintenance-offline', ['exports', 'ember-app/mixins/regenerated/serializers/fact-operation-of-the-maintenance-offline', 'ember-app/serializers/application-offline'], function (exports, _factOperationOfTheMaintenanceOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_factOperationOfTheMaintenanceOffline.OfflineSerializer, {});
});
define('ember-app/serializers/fact-operation-of-the-maintenance', ['exports', 'ember-app/mixins/regenerated/serializers/fact-operation-of-the-maintenance', 'ember-app/serializers/application'], function (exports, _factOperationOfTheMaintenance, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_factOperationOfTheMaintenance.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/flexberry-adv-limit', ['exports', 'ember-flexberry/serializers/flexberry-adv-limit'], function (exports, _flexberryAdvLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryAdvLimit.default;
    }
  });
});
define('ember-app/serializers/hardware-offline', ['exports', 'ember-app/mixins/regenerated/serializers/hardware-offline', 'ember-app/serializers/application-offline'], function (exports, _hardwareOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_hardwareOffline.OfflineSerializer, {});
});
define('ember-app/serializers/hardware', ['exports', 'ember-app/mixins/regenerated/serializers/hardware', 'ember-app/serializers/application'], function (exports, _hardware, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_hardware.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditField.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectType.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline'], function (exports, _iCSSoftSTORMNETSecurityAgentOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgentOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _iCSSoftSTORMNETSecurityAgent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgent.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _iCSSoftSTORMNETSecurityLinkGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityLinkGroup.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _iCSSoftSTORMNETSecuritySession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecuritySession.default;
    }
  });
});
define('ember-app/serializers/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/serializers/i-i-s-caseberry-logging-objects-application-log'], function (exports, _iISCaseberryLoggingObjectsApplicationLog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLog.default;
    }
  });
});
define('ember-app/serializers/location-offline', ['exports', 'ember-app/mixins/regenerated/serializers/location-offline', 'ember-app/serializers/application-offline'], function (exports, _locationOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_locationOffline.OfflineSerializer, {});
});
define('ember-app/serializers/location', ['exports', 'ember-app/mixins/regenerated/serializers/location', 'ember-app/serializers/application'], function (exports, _location, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_location.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/maintenance-operation-offline', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-operation-offline', 'ember-app/serializers/application-offline'], function (exports, _maintenanceOperationOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_maintenanceOperationOffline.OfflineSerializer, {});
});
define('ember-app/serializers/maintenance-operation', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-operation', 'ember-app/serializers/application'], function (exports, _maintenanceOperation, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_maintenanceOperation.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/maintenance-plan-offline', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-plan-offline', 'ember-app/serializers/application-offline'], function (exports, _maintenancePlanOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_maintenancePlanOffline.OfflineSerializer, {});
});
define('ember-app/serializers/maintenance-plan', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-plan', 'ember-app/serializers/application'], function (exports, _maintenancePlan, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_maintenancePlan.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/maintenance-program-offline', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-program-offline', 'ember-app/serializers/application-offline'], function (exports, _maintenanceProgramOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_maintenanceProgramOffline.OfflineSerializer, {});
});
define('ember-app/serializers/maintenance-program', ['exports', 'ember-app/mixins/regenerated/serializers/maintenance-program', 'ember-app/serializers/application'], function (exports, _maintenanceProgram, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_maintenanceProgram.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-flexberry-user-setting'], function (exports, _newPlatformFlexberryFlexberryUserSetting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryFlexberryUserSetting.default;
    }
  });
});
define('ember-app/serializers/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-services-lock'], function (exports, _newPlatformFlexberryServicesLock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLock.default;
    }
  });
});
define('ember-app/serializers/odata', ['exports', 'ember-flexberry-data/serializers/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _odata.default;
    }
  });
});
define('ember-app/serializers/offline', ['exports', 'ember-flexberry-data/serializers/offline'], function (exports, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offline.default;
    }
  });
});
define('ember-app/serializers/organization-offline', ['exports', 'ember-app/mixins/regenerated/serializers/organization-offline', 'ember-app/serializers/application-offline'], function (exports, _organizationOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_organizationOffline.OfflineSerializer, {});
});
define('ember-app/serializers/organization', ['exports', 'ember-app/mixins/regenerated/serializers/organization', 'ember-app/serializers/application'], function (exports, _organization, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_organization.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/periodicity-offline', ['exports', 'ember-app/mixins/regenerated/serializers/periodicity-offline', 'ember-app/serializers/application-offline'], function (exports, _periodicityOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_periodicityOffline.OfflineSerializer, {});
});
define('ember-app/serializers/periodicity', ['exports', 'ember-app/mixins/regenerated/serializers/periodicity', 'ember-app/serializers/application'], function (exports, _periodicity, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_periodicity.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/purpose-of-the-maintenance-model-offline', ['exports', 'ember-app/mixins/regenerated/serializers/purpose-of-the-maintenance-model-offline', 'ember-app/serializers/application-offline'], function (exports, _purposeOfTheMaintenanceModelOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_purposeOfTheMaintenanceModelOffline.OfflineSerializer, {});
});
define('ember-app/serializers/purpose-of-the-maintenance-model', ['exports', 'ember-app/mixins/regenerated/serializers/purpose-of-the-maintenance-model', 'ember-app/serializers/application'], function (exports, _purposeOfTheMaintenanceModel, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_purposeOfTheMaintenanceModel.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/scheduled-maintenance-operation-offline', ['exports', 'ember-app/mixins/regenerated/serializers/scheduled-maintenance-operation-offline', 'ember-app/serializers/application-offline'], function (exports, _scheduledMaintenanceOperationOffline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_scheduledMaintenanceOperationOffline.OfflineSerializer, {});
});
define('ember-app/serializers/scheduled-maintenance-operation', ['exports', 'ember-app/mixins/regenerated/serializers/scheduled-maintenance-operation', 'ember-app/serializers/application'], function (exports, _scheduledMaintenanceOperation, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_scheduledMaintenanceOperation.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/services/adv-limit', ['exports', 'ember-flexberry/services/adv-limit'], function (exports, _advLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _advLimit.default;
});
define('ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-app/services/app-state', ['exports', 'ember-flexberry/services/app-state'], function (exports, _appState) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _appState.default;
    }
  });
});
define('ember-app/services/cols-config-menu', ['exports', 'ember-flexberry/services/cols-config-menu', 'ember-app/config/environment'], function (exports, _colsConfigMenu, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var environment = Ember.get(_environment.default, 'environment');
  _colsConfigMenu.default.reopen({
    environment: environment
  });

  exports.default = _colsConfigMenu.default;
});
define('ember-app/services/detail-interaction', ['exports', 'ember-flexberry/services/detail-interaction'], function (exports, _detailInteraction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _detailInteraction.default;
});
define('ember-app/services/device', ['exports', 'ember-flexberry/services/device'], function (exports, _device) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _device.default;
    }
  });
});
define('ember-app/services/dexie', ['exports', 'ember-flexberry-data/services/dexie'], function (exports, _dexie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dexie.default;
    }
  });
});
define('ember-app/services/form-load-time-tracker', ['exports', 'ember-flexberry/services/form-load-time-tracker'], function (exports, _formLoadTimeTracker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formLoadTimeTracker.default;
    }
  });
});
define('ember-app/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('ember-app/services/log', ['exports', 'ember-flexberry/services/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('ember-app/services/lookup-events', ['exports', 'ember-flexberry/services/lookup-events'], function (exports, _lookupEvents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lookupEvents.default;
});
define('ember-app/services/moment', ['exports', 'ember-moment/services/moment', 'ember-app/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('ember-app/services/objectlistview-events', ['exports', 'ember-flexberry/services/objectlistview-events'], function (exports, _objectlistviewEvents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectlistviewEvents.default;
});
define('ember-app/services/offline-globals', ['exports', 'ember-flexberry/services/offline-globals'], function (exports, _offlineGlobals) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});
		exports.default = _offlineGlobals.default.extend({
				init: function init() {
						this._super.apply(this, arguments);
						this.setOnlineAvailable(false);
				},
				getOfflineSchema: function getOfflineSchema() {
						var parentSchema = this._super.apply(this, arguments);
						var returnedSchema = Ember.merge(parentSchema, {
								'contract': 'id,date,number,validityPeriod,buyer,seller',
								'document-to-the-model': 'id,name,fileReference,equipmentModel',
								'employee': 'id,name,patronymic,surname',
								'equipment-model': 'id,name,manufacturer,*documents',
								'equipment-status': 'id,name',
								'equipment-type': 'id,name',
								'fact-of-the-maintenance': 'id,startDate,endDate,scanProtocol,successfully,equipment,maintenancePlan,*factOperationOfTheMaintenance',
								'fact-operation-of-the-maintenance': 'id,executionDate,successfully,maintenanceOperation,scheduledMaintenanceOperation,factOfTheMaintenance',
								'hardware': 'id,dateOfCommissioning,runDate,productionDate,operatingTime,name,description,warrantyPeriod,supplyContract,location,model,accountable,serviceContract,status,type',
								'location': 'id,name',
								'maintenance-operation': 'id,name,maintenanceProgram',
								'maintenance-plan': 'id,startDate,endDate,equipment,*scheduledMaintenanceOperation',
								'maintenance-program': 'id,name,periodicity,*purposeOfTheMaintenanceModel,*maintenanceOperation',
								'organization': 'id,name',
								'periodicity': 'id,name',
								'purpose-of-the-maintenance-model': 'id,equipmentModel,maintenanceProgram',
								'scheduled-maintenance-operation': 'id,executionDate,maintenanceOperation,maintenancePlan'
						});

						return returnedSchema;
				}
		});
});
define('ember-app/services/perf', ['exports', 'ember-flexberry/services/perf', 'ember-app/config/environment'], function (exports, _perf, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var enabled = Ember.get(_environment.default, 'APP.perf.enabled');
  if (Ember.typeOf(enabled) === 'boolean') {
    _perf.default.reopen({
      enabled: enabled
    });
  }

  exports.default = _perf.default;
});
define('ember-app/services/route-history', ['exports', 'ember-flexberry/services/route-history'], function (exports, _routeHistory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeHistory.default;
    }
  });
});
define('ember-app/services/store', ['exports', 'ember-flexberry-data/stores/base-store', 'ember-flexberry-data/mixins/store', 'ember-app/config/environment'], function (exports, _baseStore, _store, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  exports.default = _baseStore.default.reopen(_store.default, {
    /**
     Service that return offline schemas.
      @property objectlistviewEventsService
     @type {Class}
     @default OfflineGlobalsService
    */
    offlineGlobals: Ember.inject.service('offline-globals'),

    init: function init() {
      this.set('offlineSchema', _defineProperty({}, _environment.default.APP.offline.dbName, { 1: this.get('offlineGlobals').getOfflineSchema() }));
      return this._super.apply(this, arguments);
    }
  });
});
define('ember-app/services/syncer', ['exports', 'ember-flexberry-data/services/syncer'], function (exports, _syncer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _syncer.default;
    }
  });
});
define('ember-app/services/user-settings', ['exports', 'ember-flexberry/services/user-settings', 'ember-app/config/environment'], function (exports, _userSettings, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var enabled = Ember.get(_environment.default, 'APP.useUserSettingsService');
  var appName = Ember.get(_environment.default, 'APP.name');
  if (Ember.typeOf(enabled) === 'boolean') {
    _userSettings.default.reopen({
      isUserSettingsServiceEnabled: enabled,
      appName: appName
    });
  }

  exports.default = _userSettings.default;
});
define('ember-app/services/user', ['exports', 'ember-flexberry-data/services/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define("ember-app/templates/advlimit-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zAPXV7Xw", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"advlimit-dialog-content\",null,[[\"model\",\"close\",\"message\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"closeModalDialog\"],null],[22,[\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/advlimit-dialog-content.hbs" } });
});
define("ember-app/templates/advlimit-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cgoUuyMj", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\"],[[22,[\"title\"]],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/advlimit-dialog.hbs" } });
});
define("ember-app/templates/application-with-submenu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rZYUOeR4", "block": "{\"symbols\":[],\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\"],[\"inverted vertical main menu\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header item\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"brand\"],[10,\"href\",\"#\"],[8],[0,\"Flexberry Ember Demo\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[22,[\"sitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"id\",\"example-with-submenu\"],[10,\"class\",\"pusher\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"full height\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui fixed main menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"launch icon item\"],[3,\"action\",[[21,0,[]],\"toggleSidebar\"]],[8],[6,\"i\"],[10,\"class\",\"sidebar icon\"],[8],[9],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui main container segment flexberry-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui close left rail\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui sticky transition visible\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"flexberry-submenu ui large violet pointing secondary vertical following fluid menu\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[22,[\"sitemap\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[20,\"outlet\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application-with-submenu.hbs" } });
});
define("ember-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yAX+HoFF", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"isInAcceptanceTestMode\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\",\"settings\"],[\"inverted vertical main menu visible\",[26,\"hash\",null,[[\"closable\",\"dimPage\",\"onShow\",\"onHidden\"],[false,false,[26,\"action\",[[21,0,[]],\"updateWidth\"],null],[26,\"action\",[[21,0,[]],\"updateWidth\"],null]]]]]],{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"class\"],[[22,[\"sitemap\"]],\"flexberry-sitemap\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"bgw-fix\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"background-logo\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui top attached\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui attached menu\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n          \"],[6,\"a\"],[10,\"class\",\"launch icon item\"],[11,\"title\",[26,\"t\",[\"forms.application.header.menu.sitemap-button.title\"],null],null],[3,\"action\",[[21,0,[]],\"toggleSidebar\"]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"sidebar icon text-menu-hide\"],[8],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"text_menu hidden\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"forms.application.header.menu.show-menu.caption\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"text_menu hidden-text\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"forms.application.header.menu.hide-menu.caption\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"item logo\"],[10,\"href\",\"#\"],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.sitemap.application-name.title\"],null],null],[8],[0,\"\\n      \"],[6,\"img\"],[10,\"class\",\"ui centered image\"],[10,\"src\",\"assets/images/flexberry-logo.png\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"page-header-caption\"],[8],[6,\"a\"],[10,\"href\",\"#\"],[8],[1,[26,\"t\",[\"application-name\"],null],false],[9],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"id\",\"example\"],[10,\"class\",\"pusher\"],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"full height\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-content ui attached segment\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"stackable grid container\"],[8],[0,\"\\n            \"],[1,[20,\"outlet\"],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui vertical footer segment\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui text menu\"],[8],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"brand item\"],[10,\"href\",\"#\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.application.footer.application-name\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-dropdown\",null,[[\"class\",\"items\",\"value\",\"placeholder\",\"settings\"],[\"compact\",[22,[\"locales\"]],[22,[\"i18n\",\"locale\"]],[26,\"t\",[\"forms.application.header.menu.language-dropdown.placeholder\"],null],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
});
define("ember-app/templates/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ifjuTqW2", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"colsconfig-dialog-content\",null,[[\"model\",\"close\",\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"sortByColumnsConfig\"],null],[22,[\"message\",\"type\"]],true,[22,[\"message\",\"visible\"]],[22,[\"message\",\"caption\"]],[22,[\"message\",\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/colsconfig-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kRvzniyp", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"useSidePageMode\",\"componentName\"],[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export-modal-dialog-title\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.title\"],null]],null],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false,[22,[\"model\",\"useSidePageMode\"]],[22,[\"model\",\"componentName\"]]]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/colsconfig-dialog.hbs" } });
});
define("ember-app/templates/components/advlimit-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4DwpZodg", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui action input flexberry-advlimit-input\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-textarea\",null,[[\"value\",\"class\",\"rows\"],[[22,[\"model\",\"advLimit\"]],[22,[\"class\"]],\"10\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui action input flexberry-advlimit-input\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"input\",\"setting-name-input fluid\",[22,[\"model\",\"advLimitName\"]],[26,\"t\",[\"components.advlimit-dialog-content.enter-limit-name\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"advLimit\",\"isAdvLimitServiceEnabled\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"ui small button cols-config-save\",[26,\"unless\",[[22,[\"model\",\"advLimitName\"]],\" disabled\"],null]]]],[3,\"action\",[[21,0,[]],\"saveAdvLimit\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.save\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[10,\"class\",\"ui right floated button cols-config-apply\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.use\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui button cols-config-check\"],[3,\"action\",[[21,0,[]],\"check\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.check\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"ui-message\",null,[[\"type\",\"visible\",\"caption\",\"message\",\"closeable\"],[[22,[\"message\",\"type\"]],[22,[\"message\",\"visible\"]],[22,[\"message\",\"caption\"]],[22,[\"message\",\"message\"]],[22,[\"message\",\"closeable\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/advlimit-dialog-content.hbs" } });
});
define("ember-app/templates/components/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xSBrUXqi", "block": "{\"symbols\":[\"colDesc\",\"n\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"table\"],[10,\"class\",\"ui unstackable fixed selectable celled table\"],[8],[0,\"\\n      \"],[6,\"thead\"],[8],[0,\"\\n        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"show-columns\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.dont-show-columns\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[6,\"i\"],[10,\"class\",\"large hide icon\"],[8],[9],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"columns-order\"],[10,\"style\",\"cursor:default\"],[8],[6,\"i\"],[10,\"class\",\"large sort icon\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.columns-order\"],null]]]],[8],[9],[9],[0,\"\\n          \"],[6,\"th\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"sort-direction\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"sort-priority\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"column-width\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.column-width\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-width-caption\"],null],false],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"colDescs\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[11,\"propName\",[27,[[21,1,[\"propName\"]]]]],[8],[0,\"\\n          \"],[6,\"td\"],[8],[0,\"\\n            \"],[6,\"i\"],[11,\"class\",[27,[\"large \",[26,\"if\",[[21,1,[\"hide\"]],\"hide\",\"unhide\"],null],\" icon\"]]],[10,\"colsConfigHidden\",\"false\"],[10,\"style\",\"cursor:pointer\"],[3,\"action\",[[21,0,[]],\"invertVisibility\",[21,2,[]]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[8],[0,\"\\n            \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon tiny button\",[26,\"if\",[[26,\"eq\",[[21,2,[]],0],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowUp\",[21,2,[]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"chevron up icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon tiny button row-down-button no-margin\",[26,\"if\",[[26,\"eq\",[[21,1,[]],[22,[\"model\",\"colDescs\",\"lastObject\"]]],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowDown\",[21,2,[]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"chevron down icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[1,[26,\"input\",null,[[\"class\",\"value\"],[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null],[21,1,[\"name\"]]]]],false]],\"parameters\":[]},{\"statements\":[[1,[21,1,[\"name\"]],false]],\"parameters\":[]}],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[10,\"class\",\"sort-direction-cell\"],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"concat\",[\"ui compact selection dropdown sort-direction-dropdown\",[26,\"if\",[[21,1,[\"hide\"]],\" disabled\"],null],[26,\"if\",[[21,1,[\"isHasMany\"]],\" hidden\"],null]],null]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"default text\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"0\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-asc\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"-1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-desc\"],null],false],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",[26,\"concat\",[\"sort-priority-input\",[26,\"unless\",[[21,1,[\"sortOrder\"]],\" hidden\"],null]],null],[21,1,[\"sortPriority\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[26,\"or\",[[21,1,[\"hide\"]],[26,\"or\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"or\",[[21,1,[\"fixed\"]],[26,\"not\",[[22,[\"model\",\"saveColWidthState\"]]],null]],null]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",\"column-width-input\",[21,1,[\"columnWidth\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"tfoot\"],[10,\"class\",\"full-width\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"6\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-cols\"],null],[22,[\"model\",\"exportParams\",\"detSeparateCols\"]]]]],false],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-rows\"],null],[22,[\"model\",\"exportParams\",\"detSeparateRows\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"tr\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],\"hidden\"],null]]]],[8],[0,\"\\n        \"],[6,\"th\"],[10,\"colspan\",\"5\"],[10,\"style\",\"text-align:right\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.col-width-on\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\"],[\"toggle\",[22,[\"model\",\"saveColWidthState\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"tr\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],\"hidden\"],null]]]],[8],[0,\"\\n        \"],[6,\"th\"],[10,\"colspan\",\"5\"],[10,\"style\",\"text-align:right\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.per-page\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui input\"],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",\"per-page-input\",[22,[\"model\",\"perPageValue\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui action input\"],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"input\",\"setting-name-input\",[22,[\"model\",\"settingName\"]],[26,\"t\",[\"components.colsconfig-dialog-content.enter-setting-name\"],null]]]],false],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui small button cols-config-save\",[26,\"if\",[[26,\"is-blank\",[[22,[\"model\",\"settingName\"]]],null],\" disabled\"],null]]]],[3,\"action\",[[21,0,[]],\"saveColsSetting\"]],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"components.colsconfig-dialog-content.save\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"2\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"ui right floated button cols-config-apply\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[1,[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.use\"],null]],null],false],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"type\"]],[22,[\"closeable\"]],[22,[\"visible\"]],[22,[\"caption\"]],[22,[\"message\"]]]]],false],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"hidden download-anchor\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/components/filters-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "29gExrEX", "block": "{\"symbols\":[\"column\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui equal width form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"filterColumns\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"fields object-list-view-filters\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"readonly\"],[[21,1,[\"header\"]],true]]],false],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"flexberry-dropdown\",null,[[\"value\",\"items\",\"displayCaptions\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[21,1,[\"filter\",\"condition\"]],[21,1,[\"filter\",\"conditions\"]],[26,\"not\",[[26,\"is-array\",[[21,1,[\"filter\",\"conditions\"]]],null]],null],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,1,[\"filter\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"component\",[[21,1,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,1,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,1,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,1,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,1,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui icon button\"],[11,\"title\",[26,\"t\",[\"components.filters-dialog-content.clear-this-filter\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterField\",[21,1,[\"filter\"]]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui right floated primary button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"applyFilters\"]],[8],[1,[26,\"t\",[\"components.filters-dialog-content.apply\"],null],false],[9],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui right floated basic button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFiltersFields\"]],[8],[1,[26,\"t\",[\"components.filters-dialog-content.clear\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/filters-dialog-content.hbs" } });
});
define("ember-app/templates/components/flexberry-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mvcSYV1F", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"_hasIcon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[20,\"iconClass\"]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_hasCaption\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"caption\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-button.hbs" } });
});
define("ember-app/templates/components/flexberry-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1GCTybNL", "block": "{\"symbols\":[],\"statements\":[[6,\"input\"],[10,\"class\",\"flexberry-checkbox-input\"],[10,\"type\",\"checkbox\"],[8],[9],[0,\"\\n\"],[6,\"label\"],[10,\"class\",\"flexberry-checkbox-label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-checkbox.hbs" } });
});
define("ember-app/templates/components/flexberry-colorpicker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l+b7fh5t", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"input\",null,[[\"class\",\"type\",\"value\"],[[22,[\"flexberryClassNames\",\"input\"]],\"hidden\",[26,\"get\",[[21,0,[]],\"value\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-colorpicker.hbs" } });
});
define("ember-app/templates/components/flexberry-ddau-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OMEA8vmn", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"input\",null,[[\"class\",\"type\",\"checked\"],[[22,[\"flexberryClassNames\",\"checkboxInput\"]],\"checkbox\",[26,\"get\",[[21,0,[]],\"value\"],null]]]],false],[0,\"\\n\"],[6,\"label\"],[11,\"class\",[22,[\"flexberryClassNames\",\"checkboxCaption\"]],null],[8],[0,\"\\n  \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-ddau-checkbox.hbs" } });
});
define("ember-app/templates/components/flexberry-ddau-slider", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oj7SPP65", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"ui-slider\",null,[[\"value\",\"defaultValue\",\"min\",\"max\",\"step\",\"disabled\",\"immediateResponse\",\"tooltip\"],[[26,\"get\",[[21,0,[]],\"value\"],null],[22,[\"defaultValue\"]],[22,[\"min\"]],[22,[\"max\"]],[22,[\"step\"]],[22,[\"readonly\"]],false,\"hide\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-ddau-slider.hbs" } });
});
define("ember-app/templates/components/flexberry-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XkEBnmCX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"closeButton\"]],\" close icon\"]]],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]],\" header\"]]],[8],[0,\"\\n  \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"content\"]],\" content \",[20,\"contentClass\"]]]],[8],[0,\"\\n  \"],[1,[20,\"content\"],false],[0,\"\\n  \"],[13,1],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"toolbar\"]],\" actions\"]]],[8],[0,\"\\n  \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"caption\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"approveButton\"]],\" approve positive\"],null],[22,[\"approveButtonCaption\"]]]]],false],[0,\"\\n  \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"caption\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"cancelButton\"]],\" deny negative\"],null],[22,[\"denyButtonCaption\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-dialog.hbs" } });
});
define("ember-app/templates/components/flexberry-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tq7mMRS2", "block": "{\"symbols\":[\"key\",\"itemValue\",\"&default\"],\"statements\":[[4,\"if\",[[22,[\"isSearch\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isSearchReadOnly\"]]],null,{\"statements\":[[0,\"    \"],[6,\"input\"],[10,\"class\",\"search\"],[10,\"autocomplete\",\"off\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"input\"],[10,\"class\",\"search\"],[10,\"autocomplete\",\"off\"],[10,\"readonly\",\"\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unless\",[[22,[\"value\"]],\"default\"],null],\" text\"]]],[8],[1,[20,\"text\"],false],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[\"menu \",[26,\"if\",[[22,[\"canFixElement\"]],[22,[\"fixedElementClass\"]]],null]]]],[8],[0,\"\\n  \"],[13,3],[0,\"\\n\"],[4,\"each\",[[26,\"-each-in\",[[22,[\"items\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[\"item \",[26,\"if\",[[26,\"eq\",[[22,[\"value\"]],[26,\"if\",[[22,[\"displayCaptions\"]],[21,1,[]],[21,2,[]]],null]],null],\"active selected\"],null]]]],[11,\"data-value\",[27,[[21,1,[]]]]],[8],[1,[21,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-dropdown.hbs" } });
});
define("ember-app/templates/components/flexberry-error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5vSW4OmB", "block": "{\"symbols\":[\"e\",\"e\",\"err\"],\"statements\":[[4,\"if\",[[22,[\"error\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"modal\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"useOkButton\",\"useCloseButton\",\"settings\"],[[26,\"t\",[\"components.flexberry-error.caption\"],null],[22,[\"useOkButton\"]],[22,[\"useCloseButton\"]],[26,\"hash\",null,[[\"context\",\"onHidden\"],[[22,[\"modalContext\"]],[26,\"action\",[[21,0,[]],\"close\"],null]]]]]],{\"statements\":[[0,\"      \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_errorIsArray\"]],[22,[\"_messageIsNotSpecified\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"ui bulleted list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"error\"]]],null,{\"statements\":[[4,\"if\",[[26,\"eq\",[[21,3,[\"state\"]],\"rejected\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[1,[21,3,[\"reason\",\"message\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"t\",[[22,[\"error\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"message\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,[\"error\",\"message\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[26,\"t\",[\"components.flexberry-error.unknown-error\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"components.flexberry-error.show-more\"],null]]],{\"statements\":[[4,\"each\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"t\",[[21,2,[\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,2,[\"message\"]]],null,{\"statements\":[[0,\"                \"],[1,[21,2,[\"message\"]],false],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n            \"],[6,\"pre\"],[8],[1,[21,2,[\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"ui-message\",null,[[\"type\",\"onHide\",\"closeable\"],[\"negative\",[26,\"action\",[[21,0,[]],\"close\"],null],true]],{\"statements\":[[0,\"      \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"t\",[[22,[\"error\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"message\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,[\"error\",\"message\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[26,\"t\",[\"components.flexberry-error.unknown-error\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"components.flexberry-error.show-more\"],null]]],{\"statements\":[[4,\"each\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"t\",[[21,1,[\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"message\"]]],null,{\"statements\":[[0,\"                \"],[1,[21,1,[\"message\"]],false],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n            \"],[6,\"pre\"],[8],[1,[21,1,[\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-error.hbs" } });
});
define("ember-app/templates/components/flexberry-field", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LsW173fo", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"label\"]]],null,{\"statements\":[[6,\"label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[26,\"flexberry-textbox\",null,[[\"class\",\"type\",\"value\",\"readonly\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"class\"]],[22,[\"type\"]],[22,[\"value\"]],[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-field.hbs" } });
});
define("ember-app/templates/components/flexberry-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8zzgeqy0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui \",[20,\"inputClass\"],\" action input\"]]],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"name\",\"files[]\"],[11,\"accept\",[20,\"accept\"],null],[11,\"id\",[20,\"_fileInputId\"],null],[10,\"class\",\"flexberry-file-file-input\"],[10,\"style\",\"display:none\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n\"],[0,\"  \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"readonly\",\"placeholder\",\"value\"],[\"text\",\"flexberry-file-filename-input\",\"readonly\",[22,[\"placeholder\"]],[26,\"get\",[[21,0,[]],\"_fileName\"],null]]]],false],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"_addButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-add-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_addButtonIsEnabled\"]],\"disabled\"],null],\" \",[26,\"if\",[[22,[\"_hasFile\"]],\"hidden\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.add-button-title\"],null],null],[11,\"for\",[20,\"_fileInputId\"],null],[3,\"action\",[[21,0,[]],\"addButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"add outline square icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_removeButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-remove-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_removeButtonIsEnabled\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.remove-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"removeButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"trash outline icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_uploadButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-upload-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_uploadButtonIsEnabled\"]],\"disabled\"],null],\" \",[26,\"if\",[[22,[\"_uploadIsInProgress\"]],\"loading\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.upload-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"uploadButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"upload icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_downloadButtonIsVisible\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-download-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_downloadButtonIsEnabled\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.download-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"downloadButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"download outline icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showPreview\"]],[22,[\"_hasFile\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,[\"_canLoadPreview\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-image-preview-wrapper ui segment\"],[3,\"action\",[[21,0,[]],\"viewLoadedImage\"]],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"_previewDownloadIsInProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[10,\"class\",\"flexberry-file-image-preview ui small centered image\"],[11,\"src\",[20,\"_previewImageAsBase64String\"],null],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[22,[\"_previewDownloadIsInProgress\"]],\"active\",\"disabled\"],null],\" loader\"]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[20,\"_fileName\"],false],[9],[0,\" \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[20,\"_errorPreviewCaption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"flexberry-file-download-iframes-container\"],[10,\"style\",\"display: none;\"],[8],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog ui tiny modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n    \"],[1,[20,\"_errorModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-content\"],[8],[0,\"\\n      \"],[1,[20,\"_errorModalDialogContent\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-button actions\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui button primary flexberry-file-error-modal-dialog-ok-button approve\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"checkmark icon\"],[8],[9],[0,\"\\n      \"],[1,[26,\"t\",[\"components.flexberry-file.error-dialog-ok-button-caption\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-file.hbs" } });
});
define("ember-app/templates/components/flexberry-groupedit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3nYe/BLG", "block": "{\"symbols\":[\"@configurateSelectedRows\",\"@configurateRow\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"groupedit-toolbar\",null,[[\"componentName\",\"readonly\",\"buttonClass\",\"createNewButton\",\"deleteButton\",\"defaultSettingsButton\",\"confirmDeleteRows\",\"sorting\",\"customButtonAction\",\"customButtons\",\"orderedProperty\"],[[22,[\"componentName\"]],[22,[\"readonly\"]],[22,[\"buttonClass\"]],[22,[\"createNewButton\"]],[22,[\"deleteButton\"]],[22,[\"defaultSettingsButton\"]],[22,[\"confirmDeleteRows\"]],[22,[\"sorting\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"orderedProperty\"]]]]],false],[0,\"\\n\"],[1,[26,\"object-list-view\",null,[[\"class\",\"orderedProperty\",\"placeholder\",\"readonly\",\"buttonClass\",\"tableStriped\",\"columnsWidthAutoresize\",\"minAutoColumnWidth\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"editOnSeparateRoute\",\"saveBeforeRouteLeave\",\"sorting\",\"modelName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"action\",\"componentName\",\"allowColumnResize\",\"configurateRow\",\"confirmDeleteRow\",\"configurateSelectedRows\",\"customButtonInRowAction\",\"customButtonsInRow\",\"beforeDeleteRecord\",\"searchForContentChange\",\"immediateDelete\",\"notUseUserSettings\",\"defaultSortingButton\",\"overflowedComponents\",\"fixedHeader\"],[\"groupedit-container\",[22,[\"orderedProperty\"]],[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[22,[\"rowClickable\"]],[22,[\"orderable\"]],[22,[\"editOnSeparateRoute\"]],[22,[\"saveBeforeRouteLeave\"]],[22,[\"sorting\"]],[22,[\"modelName\"]],[22,[\"mainModelProjection\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,4,[]],[21,4,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,3,[]],[21,3,[]],\"addColumnToSorting\"],null]],null],[26,\"action\",[[21,0,[]],\"groupEditRowClick\"],null],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[21,2,[]],[22,[\"confirmDeleteRow\"]],[21,1,[]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"beforeDeleteRecord\"]],[22,[\"searchForContentChange\"]],false,[22,[\"notUseUserSettings\"]],[22,[\"defaultSortingButton\"]],[22,[\"overflowedComponents\"]],[22,[\"fixedHeader\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-groupedit.hbs" } });
});
define("ember-app/templates/components/flexberry-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NJd17OJB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-icon.hbs" } });
});
define("ember-app/templates/components/flexberry-jsonarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MWDUQ/kS", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"_showErrorMessage\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n      \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\",\"onShow\",\"onHide\"],[\"error\",true,[22,[\"_showErrorMessage\"]],[22,[\"_errorMessageCaption\"]],[22,[\"_errorMessage\"]],[26,\"action\",[[21,0,[]],\"onErrorMessageShow\"],null],[26,\"action\",[[21,0,[]],\"onErrorMessageHide\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[26,\"not\",[[22,[\"readonly\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"click\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"editButton\"]],\" fluid\",[26,\"if\",[[22,[\"_isEditing\"]],\" positive\"],null]],null],[26,\"if\",[[22,[\"_isEditing\"]],\"checkmark icon\",\"edit icon\"],null],[26,\"action\",[[21,0,[]],\"onEditButtonClick\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-textarea\",null,[[\"class\",\"placeholder\",\"value\",\"readonly\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"textarea\"]],\" fluid\"],null],[22,[\"placeholder\"]],[22,[\"_jsonText\"]],[26,\"not\",[[22,[\"_isEditing\"]]],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-jsonarea.hbs" } });
});
define("ember-app/templates/components/flexberry-lookup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3vOT51hI", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"dropdown\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-dropdown\",null,[[\"placeholder\",\"class\",\"value\",\"readonly\",\"needChecksOnValue\",\"isSearch\",\"isSearchReadOnly\",\"settings\"],[[22,[\"placeholder\"]],[26,\"concat\",[\"search \",[22,[\"dropdownClass\"]]],null],[22,[\"displayValue\"]],[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],false,true,[22,[\"dropdownIsSearch\"]],[22,[\"_dropdownSettings\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"data-test-lookup\",\"\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[23,1],\"fluid\"],null],\" action input \",[26,\"if\",[[26,\"and\",[[22,[\"readonly\"]],[26,\"not\",[[23,1]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,1]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[\"ui transparent \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\"disabled\"],null],\" \",[26,\"if\",[[26,\"or\",[[22,[\"modalIsBeforeToShow\"]],[22,[\"modalIsStartToShow\"]]],null],\"loading\"],null],\" icon input\"]]],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[0,\"\\n        \"],[6,\"span\"],[10,\"class\",\"lookup-field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"value\"]]],null,{\"statements\":[[0,\"            \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[20,\"placeholder\"],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"          \"],[6,\"i\"],[10,\"class\",\"chevron right icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\",\"focusOut\",\"readonly\"],[\"text\",[26,\"concat\",[\"lookup-field \",[26,\"if\",[[22,[\"autocomplete\"]],\"prompt\"],null]],null],[22,[\"placeholder\"]],[22,[\"displayValue\"]],[26,\"action\",[[21,0,[]],\"onInputFocusOut\"],null],[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"autocomplete\"]]],null]],null],\"readonly\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,[\"showPreviewButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"previewFormRoute\"]],[22,[\"value\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"data-test-lookup-preview\",\"\"],[11,\"class\",[27,[\"ui ui-preview \",[26,\"if\",[[22,[\"isBlocked\"]],\" disabled\"],null],\" \",[20,\"previewButtonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.preview-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"preview\"]],[8],[0,\"\\n          \"],[1,[20,\"previewText\"],true],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[6,\"button\"],[10,\"data-test-lookup-clear\",\"\"],[11,\"class\",[27,[\"ui ui-clear \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\" disabled\"],null],\" \",[20,\"removeButtonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.remove-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"remove\",[22,[\"removeData\"]]]],[8],[0,\"\\n      \"],[1,[20,\"removeText\"],true],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"unless\",[[23,1]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"data-test-lookup-change\",\"\"],[11,\"class\",[27,[\"ui ui-change \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\" disabled\"],null],\" \",[20,\"chooseButtonClass\"],\" \",[26,\"if\",[[26,\"or\",[[22,[\"modalIsBeforeToShow\"]],[22,[\"modalIsStartToShow\"]]],null],\" loading\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.choose-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[0,\"\\n        \"],[1,[20,\"chooseText\"],true],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,1]],null,{\"statements\":[[0,\"  \"],[1,[20,\"_hasBlockSetter\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"autocomplete\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"results \",[26,\"if\",[[22,[\"canFixElement\"]],[22,[\"fixedElementClass\"]]],null]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-lookup.hbs" } });
});
define("ember-app/templates/components/flexberry-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SHFekwkQ", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"each\",[[22,[\"items\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-menuitem\",null,[[\"tagName\",\"item\",\"settings\"],[\"\",[21,1,[]],[22,[\"settings\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-menu.hbs" } });
});
define("ember-app/templates/components/flexberry-menuitem", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k9x5caOH", "block": "{\"symbols\":[\"item\",\"button\",\"&default\"],\"statements\":[[4,\"if\",[[22,[\"titleIsBeforeIcon\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"item\",\"localeKey\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[26,\"t\",[[22,[\"item\",\"localeKey\"]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[22,[\"item\",\"title\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"item\",\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"item\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[26,\"not\",[[22,[\"titleIsBeforeIcon\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,[\"item\",\"localeKey\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[26,\"t\",[[22,[\"item\",\"localeKey\"]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[22,[\"item\",\"title\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"each\",[[22,[\"item\",\"buttons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[21,2,[\"buttonClasses\"]],\" button\"]]],[11,\"title\",[21,2,[\"buttonTitle\"]],null],[11,\"disabled\",[21,2,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"itemButtonAction\",[21,2,[\"buttonAction\"]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"iconClass\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[[21,2,[\"iconClass\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[26,\"if\",[[21,2,[\"buttonName\"]],[21,2,[\"buttonName\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[22,[\"hasSubitems\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"item\",\"itemsAlignment\"]],[22,[\"item\",\"itemsAlignment\"]]],null],\" menu\"]]],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"item\",\"items\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menuitem\",null,[[\"item\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[13,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-menuitem.hbs" } });
});
define("ember-app/templates/components/flexberry-objectlistview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l1ekcxnt", "block": "{\"symbols\":[\"page\",\"@gotoPage\",\"@previousPage\",\"@nextPage\",\"@resetFilters\",\"@configurateSelectedRows\",\"@configurateRow\",\"@filterByAnyMatch\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"olv-toolbar\",null,[[\"class\",\"createNewButton\",\"enableCreateNewButton\",\"refreshButton\",\"deleteButton\",\"colsConfigButton\",\"advLimitButton\",\"enableFilters\",\"exportExcelButton\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"toggleStateFilters\",\"resetFilters\",\"filterButton\",\"filterText\",\"buttonClass\",\"enableDeleteButton\",\"inLookup\",\"componentName\",\"lookupComponentName\",\"modelController\",\"customButtonAction\",\"customButtons\",\"editFormRoute\",\"showConfigDialog\",\"showAdvLimitDialog\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"availableHierarchicalMode\",\"availableCollExpandMode\",\"switchHierarchicalMode\",\"switchExpandMode\",\"readonly\",\"useSidePageMode\"],[\"ui secondary menu no-margin flexberry-olv-toolbar\",[22,[\"createNewButton\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"refreshButton\"]],[22,[\"deleteButton\"]],[22,[\"colsConfigButton\"]],[22,[\"advLimitButton\"]],[22,[\"enableFilters\"]],[22,[\"exportExcelButton\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"toggleStateFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\",[21,5,[]]],null],[22,[\"filterButton\"]],[22,[\"filterText\"]],[22,[\"buttonClass\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[26,\"eq\",[[22,[\"componentMode\"]],\"lookupform\"],null],[22,[\"componentName\"]],[22,[\"lookupComponentName\"]],[22,[\"currentController\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"editFormRoute\"]],\"showConfigDialog\",\"showConfigDialog\",[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"_availableHierarchicalMode\"]],[22,[\"availableCollExpandMode\"]],[26,\"action\",[[21,0,[]],\"switchHierarchicalMode\"],null],[26,\"action\",[[21,0,[]],\"switchExpandMode\"],null],[22,[\"readonly\"]],[22,[\"useSidePageMode\"]]]]],false],[0,\"\\n\"],[1,[26,\"object-list-view\",null,[[\"placeholder\",\"readonly\",\"columnsWidthAutoresize\",\"columnsResizeMode\",\"minAutoColumnWidth\",\"buttonClass\",\"tableStriped\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"createNewByPrototype\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"sorting\",\"immediateDelete\",\"modelName\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"enableFilters\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"applyFilters\",\"componentForFilter\",\"componentForFilterByCondition\",\"conditionsByType\",\"filterByAnyMatch\",\"filterByAnyWord\",\"filterByAllWords\",\"configurateRow\",\"configurateSelectedRows\",\"confirmDeleteRow\",\"beforeDeleteRecord\",\"action\",\"beforeDeleteAllRecords\",\"componentName\",\"allowColumnResize\",\"selectedRecord\",\"notUseUserSettings\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"inExpandMode\",\"disableHierarchicalMode\",\"loadRecords\",\"availableHierarchicalMode\",\"hierarchyAttribute\",\"useRowByRowLoading\",\"useRowByRowLoadingProgress\",\"eventsBus\",\"onEditForm\",\"customButtonInRowAction\",\"customButtonsInRow\",\"defaultSortingButton\",\"defaultLeftPadding\",\"overflowedComponents\",\"customParameters\",\"fixedHeader\"],[[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"columnsResizeMode\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[26,\"action\",[[21,0,[]],\"createNewByPrototype\"],null],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"showValidationMessagesInRow\"]]],null],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"rowClickable\"]]],null],[22,[\"orderable\"]],[22,[\"sorting\"]],true,[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,10,[]],[21,10,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,9,[]],[21,9,[]],\"addColumnToSorting\"],null]],null],[22,[\"enableFilters\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"applyFilters\"]],[22,[\"applyFilters\"]],\"applyFilters\"],null]],null],[22,[\"componentForFilter\"]],[22,[\"componentForFilterByCondition\"]],[22,[\"conditionsByType\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,8,[]],[21,8,[]],\"filterByAnyMatch\"],null]],null],[22,[\"filterByAnyWord\"]],[22,[\"filterByAllWords\"]],[21,7,[]],[21,6,[]],[22,[\"confirmDeleteRow\"]],[22,[\"beforeDeleteRecord\"]],[26,\"action\",[[21,0,[]],\"objectListViewRowClick\"],null],[22,[\"beforeDeleteAllRecords\"]],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[22,[\"selectedRecord\"]],[22,[\"notUseUserSettings\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[26,\"if\",[[22,[\"hierarchyByAttribute\"]],true,[22,[\"disableHierarchicalMode\"]]],null],[26,\"action\",[[21,0,[]],\"loadRecords\"],null],[26,\"action\",[[21,0,[]],\"availableHierarchicalMode\"],null],[22,[\"hierarchyAttribute\"]],[22,[\"useRowByRowLoading\"]],[22,[\"useRowByRowLoadingProgress\"]],[22,[\"eventsBus\"]],[22,[\"onEditForm\"]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"defaultSortingButton\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"customParameters\"]],[22,[\"fixedHeader\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchyPaging\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui secondary menu no-margin nav-bar\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui basic buttons\"],[8],[0,\"\\n      \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"hasPreviousPage\"]],\"disabled\"],null],\" button prev-page-button\"]]],[11,\"disabled\",[26,\"not\",[[22,[\"hasPreviousPage\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"previousPage\",[21,3,[]]]],[8],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"pages\"]]],null,{\"statements\":[[4,\"if\",[[21,1,[\"isEllipsis\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"ui button\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"isCurrent\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui disabled active button\"],[10,\"disabled\",\"\"],[10,\"type\",\"button\"],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"gotoPage\",[21,2,[]],[21,1,[\"number\"]]]],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"hasNextPage\"]],\"disabled\"],null],\" button next-page-button\"]]],[11,\"disabled\",[26,\"not\",[[22,[\"hasNextPage\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"nextPage\",[21,4,[]]]],[8],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[\"ui input nav-bar-search-page \",[26,\"if\",[[26,\"and\",[[22,[\"searchPageValue\"]],[22,[\"searchPageButtonReadonly\"]]],null],\"error\"],null]]]],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"min\",\"max\",\"placeholder\",\"value\",\"enter\"],[\"number\",[22,[\"_pages\",\"firstObject\",\"number\"]],[22,[\"_pages\",\"lastObject\",\"number\"]],[26,\"t\",[\"components.flexberry-objectlistview.search-page-placeholder\"],null],[22,[\"searchPageValue\"]],[26,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]],null]]]],false],[0,\"\\n\"],[0,\"      \"],[1,[26,\"input\",null,[[\"classNames\"],[[26,\"array\",[\"hidden\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"searchPageValue\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button \",[26,\"if\",[[22,[\"searchPageButtonReadonly\"]],\"disabled\",\"primary\"],null],\" goto-page-button small\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-objectlistview.search-button-text\"],null],null],[11,\"disabled\",[20,\"searchPageButtonReadonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]]],[8],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showShowingEntries\"]],[22,[\"recordsTotalCount\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"showing-entries\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"currentIntervalRecords\"]],[22,[\"recordsTotalCount\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[26,\"concat\",[[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.showing\"],null],[22,[\"currentIntervalRecords\"]],[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.of\"],null],[22,[\"recordsTotalCount\"]],[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.entries\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[26,\"flexberry-dropdown\",null,[[\"needChecksOnValue\",\"items\",\"value\",\"class\",\"onChange\",\"settings\"],[false,[22,[\"perPageValues\"]],[22,[\"perPageValue\"]],\"compact selection\",[26,\"action\",[[21,0,[]],\"perPageClick\"],null],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-objectlistview.hbs" } });
});
define("ember-app/templates/components/flexberry-sidebar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "caXKP3oK", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sidebar.hbs" } });
});
define("ember-app/templates/components/flexberry-simpledatetime", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9d+haj5T", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"currentTypeSupported\"]],[22,[\"useBrowserInput\"]]],null]],null,{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"readonly\",\"value\",\"min\",\"max\",\"placeholder\"],[[22,[\"type\"]],[22,[\"readonlyAttr\"]],[22,[\"_valueAsString\"]],[22,[\"_minAsString\"]],[22,[\"_maxAsString\"]],[22,[\"placeholder\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui fluid action input flatpickr\"],[8],[0,\"\\n    \"],[6,\"input\"],[11,\"placeholder\",[20,\"placeholder\"],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"openButton\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonlyAttr\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui ui-open disabled button\"],[11,\"title\",[26,\"t\",[\"components.flexberry-simpledatetime.apply-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[3,\"action\",[[21,0,[]],\"open\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n          \"],[6,\"i\"],[11,\"class\",[27,[[20,\"type\"],\" icon\"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui ui-open button\"],[11,\"title\",[26,\"t\",[\"components.flexberry-simpledatetime.apply-button-text\"],null],null],[3,\"action\",[[21,0,[]],\"open\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n          \"],[6,\"i\"],[11,\"class\",[27,[[20,\"type\"],\" icon\"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"removeButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-clear \",[26,\"if\",[[22,[\"readonlyAttr\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.remove-button-text\"],null],null],[11,\"disabled\",[20,\"readonlyAttr\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"remove\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-simpledatetime.hbs" } });
});
define("ember-app/templates/components/flexberry-sitemap-guideline", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1xak9Ju9", "block": "{\"symbols\":[\"node\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"title\"],[[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"icon\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[0,\"    \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"icon\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\",\"classNames\"],[[21,2,[]],false,\"item\"]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\"],[[21,1,[]],true]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sitemap-guideline.hbs" } });
});
define("ember-app/templates/components/flexberry-sitemap", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xjagFnhF", "block": "{\"symbols\":[\"node\",\"child\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isHomeSitemap\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"class\",\"title\"],[\"aligned column\",[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"sitemap\",\"icon\"]],[22,[\"sitemap\",\"icon\"]]],null],\" icon\"]]],[8],[9],[0,\"\\n      \"],[6,\"div\"],[8],[1,[22,[\"sitemap\",\"caption\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"class\",\"title\"],[\"item\",[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[3,\"action\",[[21,0,[]],\"menuToggle\"]],[8],[1,[22,[\"sitemap\",\"caption\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isHomeSitemap\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\"],[[21,3,[]],[22,[\"isHomeSitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"item item-menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[3,\"action\",[[21,0,[]],\"menuToggle\"]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"          \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"nodeIsOpen\"]],\"minus\",\"plus\"],null],\" square outline icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"menu subMenu hidden\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[21,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\"],[[21,1,[]],[22,[\"isHomeSitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sitemap.hbs" } });
});
define("ember-app/templates/components/flexberry-tab-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FrjfQgWC", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"each\",[[22,[\"items\"]]],null,{\"statements\":[[0,\"  \"],[6,\"a\"],[11,\"class\",[27,[[26,\"concat\",[[22,[\"flexberryClassNames\",\"tab\"]],\" tab item \",[21,1,[\"class\"]],[26,\"if\",[[21,1,[\"active\"]],\" active\"],null]],null]]]],[11,\"title\",[27,[[21,1,[\"caption\"]]]]],[11,\"data-tab\",[27,[[21,1,[\"selector\"]]]]],[3,\"action\",[[21,0,[]],\"change\",[21,1,[]]],[[\"on\"],[\"click\"]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClass\"]]],null,{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[26,\"concat\",[[22,[\"flexberryClassNames\",\"tabIcon\"]],\" \",[21,1,[\"iconClass\"]]],null]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[21,1,[\"caption\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-tab-bar.hbs" } });
});
define("ember-app/templates/components/flexberry-text-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KGV1t3GI", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"flexberry-text-cell oveflow-text\"],[11,\"title\",[20,\"titleValue\"],null],[8],[13,1],[1,[20,\"displayValue\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-text-cell.hbs" } });
});
define("ember-app/templates/components/flexberry-textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "voagFARt", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"textarea\",null,[[\"value\",\"readonly\",\"required\",\"placeholder\",\"rows\",\"cols\",\"disabled\",\"maxlength\",\"selectionEnd\",\"selectionStart\",\"selectionDirection\",\"wrap\",\"autofocus\",\"spellcheck\"],[[22,[\"value\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"rows\"]],[22,[\"cols\"]],[22,[\"disabled\"]],[22,[\"maxlength\"]],[22,[\"selectionEnd\"]],[22,[\"selectionStart\"]],[22,[\"selectionDirection\"]],[22,[\"wrap\"]],[22,[\"autofocus\"]],[22,[\"spellcheck\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-textarea.hbs" } });
});
define("ember-app/templates/components/flexberry-textbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v7ldaNAJ", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"value\",\"readonly\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"type\"]],[26,\"readonly\",[[22,[\"value\"]]],null],\"readonly\",[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"value\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"type\"]],[22,[\"value\"]],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-textbox.hbs" } });
});
define("ember-app/templates/components/flexberry-toggler", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hJya+3t/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"title \",[26,\"if\",[[22,[\"expanded\"]],\"active\"],null]]]],[8],[0,\"\\n  \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"iconClass\"]],[22,[\"iconClass\"]],\"dropdown icon\"],null]]]],[8],[9],[6,\"span\"],[10,\"class\",\"flexberry-toggler-caption\"],[8],[1,[20,\"currentCaption\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[\"content flexberry-toggler-content \",[26,\"if\",[[22,[\"expanded\"]],\"active\"],null]]]],[8],[13,1],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-toggler.hbs" } });
});
define("ember-app/templates/components/flexberry-tree", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v6waNOY9", "block": "{\"symbols\":[\"node\",\"&default\"],\"statements\":[[13,2],[0,\"\\n\\n\"],[4,\"yield-slot\",[\"header\"],null,{\"statements\":[[4,\"if\",[[22,[\"_hasHeader\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]]]]],[8],[0,\"\\n      \"],[13,2],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_hasContent\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-treenode\",null,[[\"caption\",\"nodes\",\"dynamicProperties\",\"dynamicActions\"],[[21,1,[\"caption\"]],[21,1,[\"nodes\"]],[21,1,[\"dynamicProperties\"]],[21,1,[\"dynamicActions\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"yield-slot\",[\"content\"],null,{\"statements\":[[0,\"    \"],[13,2],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"_isRoot\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"placeholder\"]],\" title\"]]],[8],[0,\"\\n    \"],[1,[20,\"placeholder\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[4,\"yield-slot\",[\"footer\"],null,{\"statements\":[[4,\"if\",[[22,[\"_hasFooter\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"footer\"]]]]],[8],[0,\"\\n      \"],[13,2],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-tree.hbs" } });
});
define("ember-app/templates/components/flexberry-treenode", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eNV3j+u7", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]],\" title\"]]],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"onHeaderClick\"],[[\"preventDefault\"],[false]]],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasContent\"]]],null,{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"expandCollapseIcon\"]],\" dropdown icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"expandCollapseIcon\"]],\" dropdown icon\"]]],[10,\"style\",\"visibility: hidden;\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[4,\"yield-slot\",[\"header\"],null,{\"statements\":[[0,\"      \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"content\"]],\" content\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasNodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-tree\",null,[[\"nodes\"],[[22,[\"nodes\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"yield-slot\",[\"content\"],null,{\"statements\":[[0,\"    \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-treenode.hbs" } });
});
define("ember-app/templates/components/flexberry-validationmessage", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3iBsJkC7", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"error\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-validationmessage.hbs" } });
});
define("ember-app/templates/components/flexberry-validationsummary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lTfFimHi", "block": "{\"symbols\":[\"error\",\"key\",\"errors\",\"error\"],\"statements\":[[4,\"if\",[[22,[\"header\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"header\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"ul\"],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_isEmberDataErrors\"]]],null,{\"statements\":[[4,\"each\",[[26,\"-each-in\",[[22,[\"errors\"]]],null]],null,{\"statements\":[[4,\"with\",[[26,\"get\",[[22,[\"errors\"]],[21,2,[]]],null]],null,{\"statements\":[[4,\"if\",[[26,\"is-array\",[[21,3,[]]],null]],null,{\"statements\":[[4,\"each\",[[21,3,[]]],null,{\"statements\":[[0,\"            \"],[6,\"li\"],[8],[1,[21,4,[]],false],[9],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-validationsummary.hbs" } });
});
define("ember-app/templates/components/flexberry/validation-summary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "meIaJyBD", "block": "{\"symbols\":[\"error\"],\"statements\":[[4,\"if\",[[22,[\"header\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"header\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"ul\"],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry/validation-summary.hbs" } });
});
define("ember-app/templates/components/form-load-time-tracker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HveHaWhT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[26,\"t\",[\"components.form-load-time-tracker.load-time\"],null],false],[0,\": \"],[1,[20,\"loadTime\"],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"t\",[\"components.form-load-time-tracker.render-time\"],null],false],[0,\": \"],[1,[20,\"renderTime\"],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/form-load-time-tracker.hbs" } });
});
define("ember-app/templates/components/groupedit-toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wDPU/HAr", "block": "{\"symbols\":[\"customButton\"],\"statements\":[[4,\"if\",[[22,[\"createNewButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-add \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.add-button-text\"],null],null],[11,\"disabled\",[26,\"if\",[[22,[\"readonly\"]],true,null],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"addRow\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"plus icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"deleteButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete \",[26,\"unless\",[[22,[\"_hasSelectedRows\"]],\"disabled\"],null],\" \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.delete-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"deleteRows\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[26,\"and\",[[22,[\"defaultSettingsButton\"]],[26,\"not\",[[22,[\"orderedProperty\"]]],null]],null]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-clear-settings \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.clear-settings-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"setDefaultSettings\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"configure icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"arrowsButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-move-up \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveUpButton\"]],[22,[\"readonly\"]]],null],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.move-up-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveUpButton\"]],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"moveRow\",-1]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"arrow up icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-move-down \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveDownButton\"]],[22,[\"readonly\"]]],null],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.move-down-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveDownButton\"]],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"moveRow\",1]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"arrow down icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[22,[\"customButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[21,1,[\"buttonClasses\"]],[21,1,[\"buttonClasses\"]]],null],\" \",[26,\"if\",[[21,1,[\"iconClasses\"]],\"icon\"],null],\" custom button\"]]],[11,\"title\",[26,\"if\",[[21,1,[\"buttonTitle\"]],[21,1,[\"buttonTitle\"]]],null],null],[11,\"disabled\",[21,1,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonAction\",[21,1,[\"buttonAction\"]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClasses\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"i\"],[11,\"class\",[27,[[21,1,[\"iconClasses\"]],\" icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\t\"],[1,[26,\"if\",[[21,1,[\"buttonName\"]],[21,1,[\"buttonName\"]],[26,\"t\",[\"components.groupedit-toolbar.custom-button-text\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/groupedit-toolbar.hbs" } });
});
define("ember-app/templates/components/highload-edit-form-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B9zrN6nk", "block": "{\"symbols\":[\"item\",\"index\",\"child\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui two column grid\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"five wide column\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui fixed\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui two column grid highloaded-menu\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"menu\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"highloaded-menu-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"razdelNumeration\"]]],null,{\"statements\":[[0,\"              \"],[6,\"h3\"],[10,\"class\",\"ui header highloaded-menu-number\"],[8],[1,[26,\"increase-number\",[[21,2,[]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"div\"],[8],[0,\"\\n              \"],[6,\"h3\"],[10,\"class\",\"ui header title\"],[8],[1,[21,1,[\"razdelName\"]],false],[9],[0,\"\\n              \"],[6,\"ul\"],[11,\"class\",[26,\"concat\",[\"list\",[26,\"if\",[[21,1,[\"active\"]],\" active\"],null]],null],null],[8],[0,\"\\n\"],[4,\"each\",[[21,1,[\"children\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[10,\"class\",\"tab-item-container\"],[8],[0,\"\\n                    \"],[6,\"a\"],[11,\"class\",[26,\"concat\",[\"tab item\",[21,1,[\"class\"]],[26,\"if\",[[21,3,[\"active\"]],\" active\"],null]],null],null],[11,\"title\",[21,3,[\"gruppaPolejVvodaName\"]],null],[11,\"data-tab\",[21,3,[\"selector\"]],null],[3,\"action\",[[21,0,[]],\"change\",[21,3,[]]],[[\"on\"],[\"click\"]]],[8],[0,\"\\n                      \"],[1,[21,3,[\"gruppaPolejVvodaName\"]],false],[0,\"\\n                    \"],[9],[0,\"\\n\"],[4,\"if\",[[21,3,[\"showAsterisk\"]]],null,{\"statements\":[[0,\"                      \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n                        \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n                      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"tooltip\",\"readonly\",\"click\"],[\"showAllFormsButton ui empty button show-all\",\"icon-guideline-list icon\",[26,\"t\",[\"components.highload-edit-form-menu.show-all-forms-button\"],null],[26,\"t\",[\"components.highload-edit-form-menu.show-all-forms-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showAllForms\"],null]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"eleven wide column\"],[8],[0,\"\\n    \"],[13,4],[0,\"\\n    \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"readonly\",\"click\"],[\"tabsNavigation primary\",\"icon icon-guideline-navigate-arrow-down\",[26,\"t\",[\"components.highload-edit-form-menu.next-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showNextGroupForms\"],null]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"readonly\",\"click\"],[\"empty tabsNavigation\",\"icon icon-guideline-navigate-arrow-up\",[26,\"t\",[\"components.highload-edit-form-menu.prev-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showPrevGroupForms\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/highload-edit-form-menu.hbs" } });
});
define("ember-app/templates/components/modal-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XMzlgyZH", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"i\"],[10,\"class\",\"close icon\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"title\"],false],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"viewImageContent\"]],\"image\"],null],\" scrolling content\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"viewImageContent\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"ui centered image\"],[8],[13,1],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[13,1],[0,\"\\n\"]],\"parameters\":[]}],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"_toolbarVisible\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"useCloseButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui cancel button\"],[10,\"data-dismiss\",\"modal\"],[11,\"title\",[26,\"t\",[\"components.modal-dialog.close-button-text\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.modal-dialog.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"useOkButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui positive button\"],[11,\"title\",[26,\"t\",[\"components.modal-dialog.ok-button-text\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.modal-dialog.ok-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/modal-dialog.hbs" } });
});
define("ember-app/templates/components/object-list-view-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R5ZP7O//", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"oveflow-text\"],[11,\"title\",[20,\"titleValue\"],null],[8],[13,1],[1,[20,\"displayValue\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-cell.hbs" } });
});
define("ember-app/templates/components/object-list-view-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hb3ohx91", "block": "{\"symbols\":[\"record\",\"menuItem\",\"column\",\"index\",\"relation\",\"relation\",\"customButtonInRow\"],\"statements\":[[4,\"if\",[[22,[\"doRenderData\"]]],null,{\"statements\":[[0,\"  \"],[6,\"tr\"],[11,\"class\",[27,[[22,[\"record\",\"rowConfig\",\"customClass\"]],[26,\"if\",[[22,[\"record\",\"selected\"]],\" active\"],null],[26,\"if\",[[22,[\"record\",\"data\",\"hasDirtyAttributes\"]],\" groupedit-new-row\"],null]]]],[8],[0,\"\\n    \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"hidden\"],[8],[1,[22,[\"record\",\"key\"]],false],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"showAsteriskInRow\"]],[22,[\"record\",\"data\",\"hasDirtyAttributes\"]]],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n              \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"onChange\",\"value\"],[[26,\"or\",[[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeSelected\"]]],null],[22,[\"allSelect\"]]],null],[26,\"action\",[[21,0,[]],[22,[\"selectRow\"]],[22,[\"record\"]]],null],[22,[\"record\",\"selected\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showEditButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete object-list-view-row-delete-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete object-list-view-row-delete-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"each\",[[22,[\"customButtonsInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[21,7,[\"buttonClasses\"]],\" button\"]]],[11,\"title\",[26,\"if\",[[21,7,[\"buttonTitle\"]],[21,7,[\"buttonTitle\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonInRowAction\",[21,7,[\"buttonAction\"]],[22,[\"record\",\"data\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[11,\"class\",[21,7,[\"buttonIcon\"]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"      \"],[6,\"td\"],[11,\"class\",[27,[\"field \",[26,\"if\",[[26,\"array-contains\",[[22,[\"overflowedComponents\"]],[21,3,[\"cellComponent\",\"componentName\"]]],null],\" overflowed-cell\"],null]]]],[11,\"style\",[26,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchicalIndentStyle\"]],[22,[\"defaultPaddingStyle\"]]],null],null],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\"],[[21,3,[]],[21,4,[]]]]]],[[\"preventDefault\"],[false]]],[8],[0,\"\\n\"],[4,\"if\",[[21,3,[\"cellComponent\",\"componentName\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"inHierarchicalMode\"]]],null,{\"statements\":[[4,\"with\",[[26,\"if\",[[21,3,[\"relationshipPath\"]],[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"relationshipPath\"]]],null],[22,[\"record\",\"data\"]]],null]],null,{\"statements\":[[4,\"component\",[[21,3,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"class\",\"readonly\",\"required\",\"componentName\"],[[21,3,[\"cellComponent\",\"componentProperties\"]],[22,[\"record\",\"data\"]],[26,\"mut\",[[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],null]],null],[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[21,6,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null],[26,\"readonly-cell\",[[22,[\"record\",\"rowConfig\",\"readonlyColumns\"]],[21,3,[\"propName\"]],[22,[\"readonly\"]],[21,3,[\"cellComponent\",\"componentProperties\",\"readonly\"]]],null],[22,[\"required\"]],[26,\"concat\",[\"(\",[22,[\"folvComponentName\"]],\"_\",[21,3,[\"cellComponent\",\"componentName\"]],\"_\",[21,3,[\"propName\"]],\")\"],null]]],{\"statements\":[[4,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]],[26,\"or\",[[22,[\"isParentRecord\"]],[22,[\"hasRecords\"]]],null]],null]],null,{\"statements\":[[0,\"                  \"],[6,\"button\"],[11,\"class\",[27,[\"ui button hierarchy-expand icon mini compact \",[26,\"if\",[[22,[\"_recordsIsLoading\"]],\"loading\"],null],\" \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[[26,\"concat\",[\"components.object-list-view.hierarchy-buttons.\",[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\"-button-title\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"recordsLoaded\"]],\"expand\",\"loadChildRecords\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n                    \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[6]},null]],\"parameters\":[]},{\"statements\":[[4,\"with\",[[26,\"if\",[[21,3,[\"relationshipPath\"]],[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"relationshipPath\"]]],null],[22,[\"record\",\"data\"]]],null]],null,{\"statements\":[[0,\"              \"],[1,[26,\"component\",[[21,3,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"class\",\"readonly\",\"required\",\"componentName\",\"canFixElement\"],[[21,3,[\"cellComponent\",\"componentProperties\"]],[22,[\"record\",\"data\"]],[26,\"mut\",[[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],null]],null],[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[21,5,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null],[26,\"readonly-cell\",[[22,[\"record\",\"rowConfig\",\"readonlyColumns\"]],[21,3,[\"propName\"]],[22,[\"readonly\"]],[21,3,[\"cellComponent\",\"componentProperties\",\"readonly\"]]],null],[22,[\"required\"]],[26,\"concat\",[\"(\",[22,[\"folvComponentName\"]],\"_\",[21,3,[\"cellComponent\",\"componentName\"]],\"_\",[21,3,[\"propName\"]],\")\"],null],[26,\"or\",[[26,\"eq\",[[21,3,[\"cellComponent\",\"componentName\"]],\"flexberry-dropdown\"],null],[26,\"eq\",[[21,3,[\"cellComponent\",\"componentName\"]],\"flexberry-lookup\"],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"showValidationMessages\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[21,5,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"message\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"oveflow-text\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]],[26,\"or\",[[22,[\"isParentRecord\"]],[22,[\"hasRecords\"]]],null]],null]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui button hierarchy-expand icon mini compact \",[26,\"if\",[[22,[\"_recordsIsLoading\"]],\"loading\"],null],\" \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[[26,\"concat\",[\"components.object-list-view.hierarchy-buttons.\",[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\"-button-title\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"recordsLoaded\"]],\"expand\",\"loadChildRecords\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n                \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[1,[26,\"get-formatted\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],[[\"dateFormat\",\"moment\"],[[22,[\"dateFormat\"]],[22,[\"moment\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[3,4]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"      \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right pointing ui icon dropdown button\"],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"list layout icon\"],[8],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showEditMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled edit-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item edit-menu\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled prototype-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item prototype-menu\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled delete-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item delete-menu\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"each\",[[22,[\"menuInRowAdditionalItems\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"sendMenuItemAction\"]],[21,2,[\"actionName\"]],[22,[\"record\",\"data\"]]]],[8],[0,\"\\n                \"],[6,\"i\"],[11,\"class\",[27,[[21,2,[\"icon\"]]]]],[8],[9],[0,\"\\n                \"],[6,\"span\"],[8],[1,[21,2,[\"title\"]],false],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_expanded\"]],[22,[\"inHierarchicalMode\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"records\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"      \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"isParentRecordPropertyName\",\"inHierarchicalMode\",\"inExpandMode\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"createNewByPrototype\",\"deleteRow\",\"_currentLevel\",\"hierarchicalIndent\",\"defaultLeftPadding\",\"overflowedComponents\",\"folvComponentName\",\"hierarchyLoadedLevel\",\"configurateRow\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"sendMenuItemAction\"]],[22,[\"menuInRowAdditionalItems\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessages\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[22,[\"rowClick\"]],[22,[\"selectRow\"]],[22,[\"createNewByPrototype\"]],[22,[\"deleteRow\"]],[22,[\"_currentLevel\"]],[22,[\"_hierarchicalIndent\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"folvComponentName\"]],[22,[\"hierarchyLoadedLevel\"]],[22,[\"configurateRow\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-row.hbs" } });
});
define("ember-app/templates/components/object-list-view-single-column-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6A3NQ51M", "block": "{\"symbols\":[\"column\"],\"statements\":[[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"field \",[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[22,[\"model\",\"validations\",\"attrs\"]],[21,1,[\"propName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null]]]],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"if\",[[21,1,[\"keyLocale\"]],[26,\"t\",[[21,1,[\"keyLocale\"]]],null],[21,1,[\"header\"]]],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[\"inline fields \",[26,\"if\",[[26,\"not\",[[22,[\"hasEditableValues\"]]],null],\"readonly\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"cellComponent\",\"componentName\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"component\",[[21,1,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"readonly\",\"required\"],[[21,1,[\"cellComponent\",\"componentProperties\"]],[22,[\"model\"]],[26,\"mut\",[[26,\"get\",[[22,[\"model\"]],[21,1,[\"propName\"]]],null]],null],[22,[\"readonly\"]],[22,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"oveflow-text\"],[8],[0,\"\\n          \"],[1,[26,\"get-formatted\",[[22,[\"model\"]],[21,1,[\"propName\"]]],[[\"dateFormat\",\"moment\"],[[22,[\"dateFormat\"]],[22,[\"moment\"]]]]],false],[0,\" \\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,[\"showValidationMessages\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\",\"pointing\"],[[26,\"get\",[[26,\"get\",[[22,[\"model\",\"validations\",\"attrs\"]],[21,1,[\"propName\"]]],null],\"messages\"],null],\"left pointing\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-single-column-cell.hbs" } });
});
define("ember-app/templates/components/object-list-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2Q/yz8zG", "block": "{\"symbols\":[\"record\",\"column\",\"column\",\"column\"],\"statements\":[[6,\"table\"],[11,\"class\",[27,[\"object-list-view ui unstackable celled \",[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],\" \",[20,\"tableClass\"],\" table\"]]],[8],[0,\"\\n  \"],[6,\"thead\"],[8],[0,\"\\n    \"],[6,\"tr\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"object-list-view-operations collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowToolbar\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[4,\"if\",[[26,\"not-eq\",[[22,[\"class\"]],\"groupedit-container\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[11,\"class\",[27,[\"ui check-rows-button \",[20,\"buttonClass\"],\" button \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"checkRowsSettingsItems\"]]],null,{\"statements\":[[0,\"                  \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"checkRowsSettingsItems\"]],[26,\"action\",[[21,0,[]],\"onCheckRowMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui check-all-at-page-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.check-all-at-page-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"checkAllAtPage\"]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"check-square-o icon\"],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[26,\"and\",[[22,[\"defaultSortingButton\"]],[26,\"not\",[[22,[\"orderedProperty\"]]],null]],null]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui clear-sorting-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-sorting-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearSorting\"]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"sort icon\"],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"dt-head-left me class\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"headerCellClick\",[21,4,[]]],null],null],[11,\"width\",[21,4,[\"width\"]],null],[8],[0,\"\\n          \"],[6,\"div\"],[11,\"data-olv-header-property-name\",[21,4,[\"propName\"]],null],[11,\"title\",[20,\"sortTitleCompute\"],null],[8],[0,\"\\n            \"],[6,\"span\"],[8],[0,\"\\n\"],[4,\"if\",[[21,4,[\"keyLocale\"]]],null,{\"statements\":[[0,\"              \"],[1,[26,\"t\",[[21,4,[\"keyLocale\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[21,4,[\"header\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"],[4,\"if\",[[21,4,[\"sorted\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"object-list-view-order-icon\"],[8],[0,\"\\n\"],[4,\"if\",[[21,4,[\"sortAscending\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[11,\"title\",[27,[[26,\"t\",[\"components.object-list-view.sort-ascending\"],null]]]],[8],[0,\"\\n                    \"],[1,[21,4,[\"sortNumber\"]],false],[6,\"i\"],[10,\"class\",\"ascending icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[6,\"div\"],[11,\"title\",[27,[[26,\"t\",[\"components.object-list-view.sort-descending\"],null]]]],[8],[0,\"\\n                    \"],[1,[21,4,[\"sortNumber\"]],false],[6,\"i\"],[10,\"class\",\"descending icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"object-list-view-menu collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowMenu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[26,\"not\",[[22,[\"showFiltersInModal\"]]],null],[22,[\"showFilters\"]]],null]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[10,\"class\",\"overflowed-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[21,3,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"              \"],[1,[26,\"flexberry-dropdown\",null,[[\"displayCaptions\",\"value\",\"items\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[26,\"not\",[[26,\"is-array\",[[21,3,[\"filter\",\"conditions\"]]],null]],null],[21,3,[\"filter\",\"condition\"]],[21,3,[\"filter\",\"conditions\"]],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,3,[\"filter\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[11,\"onkeydown\",[26,\"action\",[[21,0,[]],\"applyFiltersByEnter\"],null],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[11,\"class\",[27,[[26,\"if\",[[26,\"array-contains\",[[22,[\"overflowedComponents\"]],[21,2,[\"filter\",\"component\",\"name\"]]],null],\"overflowed-cell\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"fluid action input ui\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"style\",\"width: 100%\"],[8],[0,\"\\n                  \"],[1,[26,\"component\",[[21,2,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,2,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,2,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"ui clear-filter button\"],[11,\"title\",[26,\"t\",[\"components.object-list-view.clear-filter-in-column\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterForColumn\",[21,2,[\"filter\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[22,[\"content\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[8],[0,\"\\n        \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[1,[20,\"placeholder\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"contentWithKeys\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"        \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"inExpandMode\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"createNewByPrototype\",\"deleteRow\",\"customButtonsInRow\",\"customButtonInRowAction\",\"defaultLeftPadding\",\"overflowedComponents\",\"folvComponentName\",\"hierarchyPaging\",\"configurateRow\",\"allSelect\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"sendMenuItemAction\"]],[22,[\"menuInRowAdditionalItems\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[26,\"action\",[[21,0,[]],\"rowClick\"],null],[26,\"action\",[[21,0,[]],\"selectRow\"],null],[22,[\"createNewByPrototype\"]],[26,\"action\",[[21,0,[]],\"deleteRow\"],null],[22,[\"customButtonsInRow\"]],\"customButtonInRowAction\",[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"componentName\"]],[22,[\"hierarchyPaging\"]],[22,[\"configurateRow\"]],[22,[\"allSelect\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[22,[\"rowByRowLoadingProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui active centered inline loader\"],[8],[9],[0,\"\\n            \"],[1,[26,\"t\",[\"components.object-list-view.loading-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view.hbs" } });
});
define("ember-app/templates/components/olv-filter-interval", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cGaZ4Ppu", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"style\",\"float: left; width: 45%;\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"placeholder\",\"dynamicProperties\"],[[22,[\"from\"]],[22,[\"fromPlaceholder\"]],[22,[\"dynProps\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"style\",\"float: right; width: 45%;\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"placeholder\",\"dynamicProperties\"],[[22,[\"to\"]],[22,[\"toPlaceholder\"]],[22,[\"dynProps\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-filter-interval.hbs" } });
});
define("ember-app/templates/components/olv-setconfigdialogbutton", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z0uDzkd+", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[6,\"i\"],[10,\"class\",\"large setting icon\"],[10,\"title\",\"customize column views\"],[8],[9],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-setconfigdialogbutton.hbs" } });
});
define("ember-app/templates/components/olv-toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LF/DE8lZ", "block": "{\"symbols\":[\"customButton\"],\"statements\":[[4,\"if\",[[22,[\"refreshButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui refresh-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.refresh-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"refresh\"]],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.refresh-button-text\"],null],false],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"refresh icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"createNewButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"enableCreateNewButton\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui create-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"createNew\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui create-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"createNew\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"deleteButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"isDeleteButtonEnabled\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"availableHierarchicalMode\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon hierarchical-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"inHierarchicalMode\"]],\"active\"],null]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.hierarchy-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"switchHierarchicalMode\"]]]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"sitemap icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"availableCollExpandMode\"]]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon hierarchical-button \",[20,\"buttonClass\"],\" active\"]]],[11,\"title\",[26,\"if\",[[22,[\"inExpandMode\"]],[26,\"t\",[\"components.olv-toolbar.coll-comspres-button-text\"],null],[26,\"t\",[\"components.olv-toolbar.coll-expand-button-text\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"switchExpandMode\"]]]],[8],[0,\"\\n        \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"inExpandMode\"]],\"compress\",\"expand\"],null],\" icon\"]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"enableFilters\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"ui icon buttons filter-active \",[26,\"if\",[[22,[\"filters\"]],\"show-filter\"],null]]]],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"showFilters\"]],\"active\"],null]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.filter-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showFiltersTool\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"filter icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"filters\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"or\"],[10,\"data-text\",\"•\"],[8],[9],[0,\"\\n      \"],[6,\"button\"],[11,\"class\",[27,[\"ui button removeFilter-button \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.remove-filter-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"resetFilters\"]]]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"filterButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui action input olv-search\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"block-action-input\"],[8],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"key-down\"],[\"text\",[26,\"t\",[\"components.olv-toolbar.filter-by-any-match-placeholder\"],null],[22,[\"filterByAnyMatchText\"]],\"keyDownFilterAction\"]]],false],[9],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button search-button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.search-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"filterByAnyMatch\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button clear-search-button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-search-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"removeFilter\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"exportExcelButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons export-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon export-button \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.export-excel-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showExportDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large file excel outline icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"exportExcelItems\"]],[26,\"action\",[[21,0,[]],\"onExportMenuItemClick\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"colsConfigButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons cols-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button config-button\",[26,\"if\",[[22,[\"colsSettingsItems\"]],\" settings-enabled\",\"\"],null]]]],[11,\"title\",[26,\"t\",[\"components.colsconfig-dialog-content.title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showConfigDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large table icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"colsSettingsItems\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"colsSettingsItems\"]],[26,\"action\",[[21,0,[]],\"onMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"advLimitButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons adv-limit-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"ui icon button adv-limit-button\"],[11,\"title\",[26,\"t\",[\"components.advlimit-dialog-content.title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showAdvLimitDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large flask icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"advLimitItems\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"advLimitItems\"]],[26,\"action\",[[21,0,[]],\"onLimitMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"customButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[21,1,[\"buttonClasses\"]],[21,1,[\"buttonClasses\"]]],null],\" button\"]]],[11,\"title\",[26,\"if\",[[21,1,[\"buttonTitle\"]],[21,1,[\"buttonTitle\"]]],null],null],[11,\"disabled\",[21,1,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonAction\",[21,1,[\"buttonAction\"]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClasses\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[21,1,[\"iconClasses\"]],null],[8],[9],[0,\"\\n        \"],[1,[21,1,[\"buttonName\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"buttonName\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,1,[\"buttonName\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[26,\"t\",[\"components.olv-toolbar.custom-button-text\"],null],false],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"div\"],[10,\"class\",\"olv-toolbar-info-modal-dialog ui small basic modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui icon header\"],[8],[0,\"\\n    \"],[6,\"i\"],[10,\"class\",\"olvt icon\"],[8],[9],[0,\"\\n    \"],[1,[20,\"_infoModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"center aligned ui grid\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"ui button icon olv-toolbar-info-modal-dialog-copy-button\"],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.copy\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"copyJSONContent\"]],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.copy\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui button approve olv-toolbar-info-modal-dialog-ok-button\"],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.close\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui field olv-toolbar-info-modal-dialog-content center aligned \"],[8],[0,\"\\n      \"],[6,\"textarea\"],[10,\"cols\",\"80\"],[10,\"rows\",\"20\"],[8],[1,[20,\"_infoModalDialogContent\"],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-toolbar.hbs" } });
});
define("ember-app/templates/components/ui-message-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hBG4GtN2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"caption\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"caption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"message\"]]],null,{\"statements\":[[0,\"  \"],[6,\"p\"],[8],[1,[20,\"message\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/ui-message-content.hbs" } });
});
define("ember-app/templates/components/ui-message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sX22wWKh", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[20,\"icon\"]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"closeable\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[10,\"class\",\"close icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[14,\"components/ui-message-content\",[]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[14,\"components/ui-message-content\",[]],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":true}", "meta": { "moduleName": "ember-app/templates/components/ui-message.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-maintenance-operation-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GWZAiDN4", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-maintenance-operation-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624MaintenanceOperationL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-maintenance-operation-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-periodicity-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UmK0qON6", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-periodicity-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-periodicity-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-periodicity-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-periodicity-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-periodicity-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mHP5o9pa", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-periodicity-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624PeriodicityL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-periodicity-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-scheduled-maintenance-operation-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aHhrJ03O", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-scheduled-maintenance-operation-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ScheduledMaintenanceOperationL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-scheduled-maintenance-operation-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ne6nK3p0", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-договор-e-number\"],[[22,[\"readonly\"]],[22,[\"model\",\"number\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"number\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.number-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"number\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.date-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-договор-e-date\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"date\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"date\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"date\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.validityPeriod-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-договор-e-validityPeriod\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"validityPeriod\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.buyer-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-договор-e-buyer\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"buyer\"]],\"name\",true,\"buyer\",\"ОрганизацияL\",[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.buyer-caption\"],null],[22,[\"readonly\"]],\"buyerLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"buyer\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"buyer\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.seller-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-договор-e-seller\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"seller\"]],\"name\",true,\"seller\",\"ОрганизацияL\",[26,\"t\",[\"forms.data-line-test-gen270624-договор-e.seller-caption\"],null],[22,[\"readonly\"]],\"sellerLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"seller\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"seller\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-договор-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L9Vubx7F", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-договор-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ДоговорL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-договор-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XN/lPGvt", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-модель-оборудования-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-e.manufacturer-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-модель-оборудования-e-manufacturer\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"manufacturer\"]],\"name\",true,\"manufacturer\",\"ОрганизацияL\",[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-e.manufacturer-caption\"],null],[22,[\"readonly\"]],\"manufacturerLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"manufacturer\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"manufacturer\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-e.documents-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-groupedit\",null,[[\"componentName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"readonly\",\"orderable\",\"class\",\"data-test-data-line-test-gen270624-модель-оборудования-e-documents\"],[\"documentsGroupEdit\",[22,[\"modelProjection\"]],[22,[\"modelProjection\",\"attributes\",\"documents\"]],[22,[\"model\",\"documents\"]],[22,[\"readonly\"]],false,[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"documents\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"documents\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-модель-оборудования-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "C6+xpxdj", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-модель-оборудования-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624МодельОборудованияL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-модель-оборудования-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gh6D6bda", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.productionDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-productionDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"productionDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"productionDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"productionDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.dateOfCommissioning-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-dateOfCommissioning\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"dateOfCommissioning\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"dateOfCommissioning\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"dateOfCommissioning\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.warrantyPeriod-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-warrantyPeriod\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"warrantyPeriod\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"warrantyPeriod\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"warrantyPeriod\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-operatingTime\"],[[22,[\"readonly\"]],[22,[\"model\",\"operatingTime\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"operatingTime\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.operatingTime-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"operatingTime\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.runDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-runDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"runDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"runDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"runDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-description\"],[[22,[\"readonly\"]],[22,[\"model\",\"description\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"description\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.description-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"description\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.type-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-type\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"type\"]],\"name\",true,\"type\",\"ТипОборудованияL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.type-caption\"],null],[22,[\"readonly\"]],\"typeLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"type\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"type\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.status-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-status\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"status\"]],\"name\",true,\"status\",\"СтатусОборудованияL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.status-caption\"],null],[22,[\"readonly\"]],\"statusLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"status\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"status\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.accountable-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-accountable\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"accountable\"]],\"surname\",true,\"accountable\",\"СотрудникL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.accountable-caption\"],null],[22,[\"readonly\"]],\"accountableLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"accountable\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"accountable\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-accountable-surname\"],[true,[22,[\"model\",\"accountable\",\"surname\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"surname\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.accountable.surname-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"surname\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-accountable-name\"],[true,[22,[\"model\",\"accountable\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.accountable.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-accountable-patronymic\"],[true,[22,[\"model\",\"accountable\",\"patronymic\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"patronymic\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.accountable.patronymic-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"accountable\",\"validations\",\"attrs\"]],\"patronymic\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.serviceContract-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-serviceContract\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"serviceContract\"]],\"number\",true,\"serviceContract\",\"ДоговорL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.serviceContract-caption\"],null],[22,[\"readonly\"]],\"serviceContractLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"serviceContract\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"serviceContract\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.serviceContract.date-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-serviceContract-date\"],[\"date\",true,[22,[\"model\",\"serviceContract\",\"date\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"serviceContract\",\"validations\",\"attrs\"]],\"date\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"serviceContract\",\"validations\",\"attrs\"]],\"date\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.serviceContract.validityPeriod-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-serviceContract-validityPeriod\"],[\"date\",true,[22,[\"model\",\"serviceContract\",\"validityPeriod\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"serviceContract\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"serviceContract\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.model-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-model\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"model\"]],\"name\",true,\"model\",\"МодельОборудованияL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.model-caption\"],null],[22,[\"readonly\"]],\"modelLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"model\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"model\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-оборудование-e-model-manufacturer-name\"],[true,[22,[\"model\",\"model\",\"manufacturer\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"model\",\"manufacturer\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.model.manufacturer.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"model\",\"manufacturer\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.supplyContract-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-supplyContract\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"supplyContract\"]],\"number\",true,\"supplyContract\",\"ДоговорL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.supplyContract-caption\"],null],[22,[\"readonly\"]],\"supplyContractLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"supplyContract\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"supplyContract\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.supplyContract.date-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-supplyContract-date\"],[\"date\",true,[22,[\"model\",\"supplyContract\",\"date\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"supplyContract\",\"validations\",\"attrs\"]],\"date\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"supplyContract\",\"validations\",\"attrs\"]],\"date\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.supplyContract.validityPeriod-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-supplyContract-validityPeriod\"],[\"date\",true,[22,[\"model\",\"supplyContract\",\"validityPeriod\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"supplyContract\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"supplyContract\",\"validations\",\"attrs\"]],\"validityPeriod\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.location-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-оборудование-e-location\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"location\"]],\"name\",true,\"location\",\"РасположениеL\",[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-e.location-caption\"],null],[22,[\"readonly\"]],\"locationLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"location\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"location\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-оборудование-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7RZSE9f9", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-оборудование-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ОборудованиеL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-оборудование-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Qaatgj4h", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-организация-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-организация-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-организация-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-организация-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mDQThD2o", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-организация-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ОрганизацияL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-организация-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yX9zSFcz", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.startDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-план-т-о-e-startDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"startDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"startDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"startDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.endDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-план-т-о-e-endDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"endDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"endDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"endDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"equipment\"]],\"name\",true,\"equipment\",\"ОборудованиеL\",[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment-caption\"],null],[22,[\"readonly\"]],\"equipmentLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"equipment\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"equipment\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-model-name\"],[true,[22,[\"model\",\"equipment\",\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"model\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.model.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"model\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-type-name\"],[true,[22,[\"model\",\"equipment\",\"type\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"type\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.type.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"type\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-status-name\"],[true,[22,[\"model\",\"equipment\",\"status\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"status\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.status.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"status\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-accountable-surname\"],[true,[22,[\"model\",\"equipment\",\"accountable\",\"surname\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"accountable\",\"validations\",\"attrs\"]],\"surname\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.accountable.surname-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"accountable\",\"validations\",\"attrs\"]],\"surname\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-serviceContract-number\"],[true,[22,[\"model\",\"equipment\",\"serviceContract\",\"number\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"serviceContract\",\"validations\",\"attrs\"]],\"number\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.serviceContract.number-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"serviceContract\",\"validations\",\"attrs\"]],\"number\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-план-т-о-e-equipment-location-name\"],[true,[22,[\"model\",\"equipment\",\"location\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"location\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.equipment.location.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"equipment\",\"location\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-e.scheduledMaintenanceOperation-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-groupedit\",null,[[\"componentName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"readonly\",\"orderable\",\"class\",\"data-test-data-line-test-gen270624-план-т-о-e-scheduledMaintenanceOperation\"],[\"scheduledMaintenanceOperationGroupEdit\",[22,[\"modelProjection\"]],[22,[\"modelProjection\",\"attributes\",\"scheduledMaintenanceOperation\"]],[22,[\"model\",\"scheduledMaintenanceOperation\"]],[22,[\"readonly\"]],false,[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"scheduledMaintenanceOperation\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"scheduledMaintenanceOperation\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-план-т-о-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ChHD0OTm", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-план-т-о-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ПланТОL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-план-т-о-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uEcW4CaA", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-программа-т-о-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.periodicity-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-программа-т-о-e-periodicity\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"periodicity\"]],\"name\",true,\"periodicity\",\"PeriodicityL\",[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.periodicity-caption\"],null],[22,[\"readonly\"]],\"periodicityLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"periodicity\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"periodicity\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.purposeOfTheMaintenanceModel-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-groupedit\",null,[[\"componentName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"readonly\",\"orderable\",\"class\",\"data-test-data-line-test-gen270624-программа-т-о-e-purposeOfTheMaintenanceModel\"],[\"purposeOfTheMaintenanceModelGroupEdit\",[22,[\"modelProjection\"]],[22,[\"modelProjection\",\"attributes\",\"purposeOfTheMaintenanceModel\"]],[22,[\"model\",\"purposeOfTheMaintenanceModel\"]],[22,[\"readonly\"]],false,[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"purposeOfTheMaintenanceModel\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"purposeOfTheMaintenanceModel\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-e.maintenanceOperation-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-groupedit\",null,[[\"componentName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"readonly\",\"orderable\",\"class\",\"data-test-data-line-test-gen270624-программа-т-о-e-maintenanceOperation\"],[\"maintenanceOperationGroupEdit\",[22,[\"modelProjection\"]],[22,[\"modelProjection\",\"attributes\",\"maintenanceOperation\"]],[22,[\"model\",\"maintenanceOperation\"]],[22,[\"readonly\"]],false,[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"maintenanceOperation\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"maintenanceOperation\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-программа-т-о-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TTvKn4ut", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-программа-т-о-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ПрограммаТОL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-программа-т-о-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VC2z+7B5", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-расположение-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-расположение-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-расположение-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-расположение-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D35SiRov", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-расположение-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624РасположениеL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-расположение-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UQIhOZZX", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-сотрудник-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-сотрудник-e-surname\"],[[22,[\"readonly\"]],[22,[\"model\",\"surname\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"surname\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-сотрудник-e.surname-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"surname\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-сотрудник-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-сотрудник-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-сотрудник-e-patronymic\"],[[22,[\"readonly\"]],[22,[\"model\",\"patronymic\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"patronymic\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-сотрудник-e.patronymic-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"patronymic\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-сотрудник-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z19PDBJl", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-сотрудник-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624СотрудникL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-сотрудник-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WPpdutc7", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-статус-оборудования-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-статус-оборудования-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-статус-оборудования-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-статус-оборудования-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MPJdrcc4", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-статус-оборудования-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624СтатусОборудованияL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-статус-оборудования-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QDFTvoXV", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-тип-оборудования-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-тип-оборудования-e-name\"],[[22,[\"readonly\"]],[22,[\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-тип-оборудования-e.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-тип-оборудования-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b8vCO+30", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-тип-оборудования-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ТипОборудованияL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-тип-оборудования-l.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uNKspaWV", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.startDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-startDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"startDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"startDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"startDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.endDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-endDate\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"endDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"endDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"endDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-факт-т-о-e-scanProtocol\"],[[22,[\"readonly\"]],[22,[\"model\",\"scanProtocol\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"scanProtocol\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.scanProtocol-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"scanProtocol\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.successfully-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-successfully\"],[[22,[\"readonly\"]],[22,[\"model\",\"successfully\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"successfully\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"successfully\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.equipment-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-equipment\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"equipment\"]],\"name\",true,\"equipment\",\"ОборудованиеL\",[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.equipment-caption\"],null],[22,[\"readonly\"]],\"equipmentLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"equipment\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"equipment\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"maintenancePlan\"]],\"maintenancePlan\",\"ПланТОL\",[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan-caption\"],null],[22,[\"readonly\"]],\"maintenancePlanLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"maintenancePlan\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"maintenancePlan\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.startDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-startDate\"],[\"date\",true,[22,[\"model\",\"maintenancePlan\",\"startDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"validations\",\"attrs\"]],\"startDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"validations\",\"attrs\"]],\"startDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.endDate-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-endDate\"],[\"date\",true,[22,[\"model\",\"maintenancePlan\",\"endDate\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"validations\",\"attrs\"]],\"endDate\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"validations\",\"attrs\"]],\"endDate\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-equipment-name\"],[true,[22,[\"model\",\"maintenancePlan\",\"equipment\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.equipment.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-equipment-type-name\"],[true,[22,[\"model\",\"maintenancePlan\",\"equipment\",\"type\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"type\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.equipment.type.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"type\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-equipment-model-name\"],[true,[22,[\"model\",\"maintenancePlan\",\"equipment\",\"model\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"model\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.equipment.model.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"model\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-data-line-test-gen270624-факт-т-о-e-maintenancePlan-equipment-model-manufacturer-name\"],[true,[22,[\"model\",\"maintenancePlan\",\"equipment\",\"model\",\"manufacturer\",\"name\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"model\",\"manufacturer\",\"validations\",\"attrs\"]],\"name\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.maintenancePlan.equipment.model.manufacturer.name-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"maintenancePlan\",\"equipment\",\"model\",\"manufacturer\",\"validations\",\"attrs\"]],\"name\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-e.factOperationOfTheMaintenance-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-groupedit\",null,[[\"componentName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"readonly\",\"orderable\",\"class\",\"data-test-data-line-test-gen270624-факт-т-о-e-factOperationOfTheMaintenance\"],[\"factOperationOfTheMaintenanceGroupEdit\",[22,[\"modelProjection\"]],[22,[\"modelProjection\",\"attributes\",\"factOperationOfTheMaintenance\"]],[22,[\"model\",\"factOperationOfTheMaintenance\"]],[22,[\"readonly\"]],false,[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"factOperationOfTheMaintenance\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"factOperationOfTheMaintenance\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-факт-т-о-e.hbs" } });
});
define("ember-app/templates/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Xi9M6nYA", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.data-line-test-gen270624-факт-т-о-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"DataLineTestGen270624ФактТОL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/data-line-test-gen270624-факт-т-о-l.hbs" } });
});
define("ember-app/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rFWIUbhC", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.error-form.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[8],[0,\"\\n  \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"nameLocaleKey\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"t\",[[22,[\"model\",\"nameLocaleKey\"]]],null],false],[0,\":\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"model\",\"name\"]]],null,{\"statements\":[[0,\"      \"],[1,[22,[\"model\",\"name\"]],false],[0,\":\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[4,\"if\",[[22,[\"model\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"t\",[[22,[\"model\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"model\",\"message\"]]],null,{\"statements\":[[0,\"      \"],[1,[22,[\"model\",\"message\"]],false],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"stack\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"forms.error-form.show-more\"],null]]],{\"statements\":[[0,\"      \"],[6,\"pre\"],[8],[1,[22,[\"model\",\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"model\",\"retryRoute\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[4,\"link-to\",[[22,[\"model\",\"retryRoute\"]],[22,[\"model\",\"id\"]]],[[\"tagName\",\"activeClass\",\"class\"],[\"button\",\"\",\"ui button\"]],{\"statements\":[[1,[26,\"t\",[\"forms.error-form.retry\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[4,\"link-to\",[[22,[\"model\",\"retryRoute\"]]],[[\"tagName\",\"activeClass\",\"class\"],[\"button\",\"\",\"ui button\"]],{\"statements\":[[1,[26,\"t\",[\"forms.error-form.retry\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/error.hbs" } });
});
define("ember-app/templates/filters-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OFAJrn4N", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"filters-dialog-content\",null,[[\"componentName\",\"filterColumns\",\"close\",\"message\"],[[22,[\"model\",\"componentName\"]],[22,[\"model\",\"filterColumns\"]],[26,\"action\",[[21,0,[]],\"closeModalDialog\"],null],[22,[\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/filters-dialog-content.hbs" } });
});
define("ember-app/templates/filters-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AAmZ2lvY", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"useSidePageMode\"],[[22,[\"title\"]],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false,[22,[\"model\",\"useSidePageMode\"]]]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/filters-dialog.hbs" } });
});
define("ember-app/templates/flexberry-file-view-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LR87NL9f", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"useOkButton\",\"close\",\"created\",\"viewImageContent\",\"sizeClass\",\"settings\"],[[22,[\"title\"]],false,\"removeModalDialog\",\"createdModalDialog\",true,[22,[\"sizeClass\"]],[22,[\"settings\"]]]],{\"statements\":[[0,\"  \"],[6,\"img\"],[10,\"class\",\"flexberry-file-view-dialog\"],[11,\"src\",[27,[[20,\"imageSrc\"]]]],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/flexberry-file-view-dialog.hbs" } });
});
define("ember-app/templates/i-i-s-caseberry-logging-objects-application-log-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7M73W9Z5", "block": "{\"symbols\":[\"currentError\"],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"errorMessages\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"errorMessages\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"title\",\"message\"],[\"error\",true,\"Error occurred\",[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[4,\"unless\",[[26,\"and\",[[22,[\"hasParentRoute\"]],[26,\"not\",[[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[26,\"and\",[[22,[\"hasParentRoute\"]],[26,\"not\",[[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-close-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"saveAndClose\"]],[8],[1,[26,\"t\",[\"forms.edit-form.saveAndClose-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[26,\"and\",[[22,[\"model\",\"isNew\"]],[26,\"or\",[[26,\"not\",[[22,[\"hasParentRoute\"]]],null],[26,\"and\",[[22,[\"hasParentRoute\"]],[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"category\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"category\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"category\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"category\"]],\"error\",\"\"],null],\"Category\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"eventId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"eventId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"eventId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"eventId\"]],\"error\",\"\"],null],\"Event id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"priority\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"priority\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"priority\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"priority\"]],\"error\",\"\"],null],\"Priority\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"severity\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"severity\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"severity\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"severity\"]],\"error\",\"\"],null],\"Severity\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"title\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"title\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"title\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"title\"]],\"error\",\"\"],null],\"Title\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n  \"],[6,\"label\"],[8],[0,\"Timestamp\"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"timestamp\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[22,[\"model\",\"errors\",\"timestamp\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\"],[\"datetime-local\",[22,[\"readonly\"]],[22,[\"model\",\"timestamp\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"timestamp\"]],\"error\",\"\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"machineName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"machineName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"machineName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"machineName\"]],\"error\",\"\"],null],\"Machine name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"appDomainName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"appDomainName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"appDomainName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"appDomainName\"]],\"error\",\"\"],null],\"App domain name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"processId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"processId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"processId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"processId\"]],\"error\",\"\"],null],\"Process id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"processName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"processName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"processName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"processName\"]],\"error\",\"\"],null],\"Process name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"threadName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"threadName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"threadName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"threadName\"]],\"error\",\"\"],null],\"Thread name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"win32ThreadId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"win32ThreadId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"win32ThreadId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"win32ThreadId\"]],\"error\",\"\"],null],\"Win32 thread id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"message\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"message\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"message\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"message\"]],\"error\",\"\"],null],\"Message\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"formattedMessage\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"formattedMessage\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"formattedMessage\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"formattedMessage\"]],\"error\",\"\"],null],\"Formatted message\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs" } });
});
define("ember-app/templates/i-i-s-caseberry-logging-objects-application-log-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5vqdwkRi", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-caseberry-logging-objects-application-log-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"content\",\"modelName\",\"modelProjection\",\"editFormRoute\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"sortByColumn\",\"addColumnToSorting\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"beforeDeleteAllRecords\"],[[22,[\"model\"]],\"i-i-s-caseberry-logging-objects-application-log\",[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],false,true,[22,[\"computedSorting\"]],true,[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISLoggingObjectListView\",[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-caseberry-logging-objects-application-log-l.hbs" } });
});
define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7bIun4E8", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\",\"class\"],[[22,[\"sitemap\"]],true,\"ui three column centered grid flexberry-home-sitemap\"]]],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});
define("ember-app/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r4NAFGKn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading-pane\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"loading-message\"],[8],[0,\"\\n    \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.loading.caption\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"spinner\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/loading.hbs" } });
});
define("ember-app/templates/lookup-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i3PewHQx", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"id\",\"lookup-list\"],[10,\"class\",\"ui form list-group\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"class\",\"modelProjection\",\"modelName\",\"content\",\"selectedRecord\",\"componentMode\",\"componentName\",\"lookupComponentName\",\"showEditMenuItemInRow\",\"createNewButton\",\"showCheckBoxInRow\",\"colsConfigButton\",\"columnsWidthAutoresize\",\"filterByAnyMatch\",\"filterText\",\"filters\",\"applyFilters\",\"resetFilters\",\"customProperties\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"disableHierarchicalMode\",\"sorting\",\"orderable\",\"sortByColumn\",\"addColumnToSorting\",\"notUseUserSettings\",\"beforeDeleteAllRecords\",\"data-test-lookup-olv\"],[\"ui bottom attached\",[22,[\"modelProjection\"]],[22,[\"modelName\"]],[22,[\"model\"]],[22,[\"currentLookupRow\"]],\"lookupform\",[22,[\"folvComponentName\"]],[22,[\"componentName\"]],false,false,false,false,true,[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null],[22,[\"filter\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[22,[\"customPropertiesData\"]],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],[22,[\"disableHierarchicalMode\"]],[22,[\"computedSorting\"]],true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[22,[\"notUseUserSettings\"]],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],true]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/lookup-dialog-content.hbs" } });
});
define("ember-app/templates/lookup-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CgHq5XTB", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"componentName\",\"useSidePageMode\",\"settings\",\"data-test-lookup-dialog\"],[[22,[\"title\"]],[22,[\"modalDialogSettings\",\"sizeClass\"]],\"removeModalDialog\",\"createdModalDialog\",[22,[\"modalDialogSettings\",\"useOkButton\"]],[22,[\"modalDialogSettings\",\"useCloseButton\"]],[22,[\"componentName\"]],[22,[\"modalDialogSettings\",\"useSidePageMode\"]],[22,[\"modalDialogSettings\",\"settings\"]],true]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/lookup-dialog.hbs" } });
});
define("ember-app/templates/mobile/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w0QuvJY1", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"isInAcceptanceTestMode\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\",\"settings\"],[\"mobile inverted vertical main menu\",[26,\"hash\",null,[[\"onShow\",\"onHidden\"],[[26,\"action\",[[21,0,[]],\"updateWidth\"],null],[26,\"action\",[[21,0,[]],\"updateWidth\"],null]]]]]],{\"statements\":[[0,\"  \"],[6,\"a\"],[10,\"class\",\"item\"],[11,\"href\",[20,\"addonVersionHref\"],null],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.sitemap.application-version.title\"],null],null],[8],[0,\"\\n    \"],[1,[26,\"t\",[\"forms.application.sitemap.application-version.caption\"],[[\"version\"],[[22,[\"addonVersion\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"class\"],[[22,[\"sitemap\"]],\"flexberry-sitemap\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"bgw-fix mobile\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"background-logo mobile\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui attached menu mobile\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"launch icon item mobile\"],[11,\"title\",[26,\"t\",[\"forms.application.header.menu.sitemap-button.title\"],null],null],[3,\"action\",[[21,0,[]],\"toggleSidebarMobile\"]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"sidebar icon text-menu-show\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right item\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"style\",\"margin-right: 5px;\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.header.menu.user-settings-service-checkbox.caption\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\"],[\"toggle\",[22,[\"userSettingsService\",\"isUserSettingsServiceEnabled\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right item lang\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"style\",\"margin-right: 5px;\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.header.menu.language-dropdown.caption\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-dropdown\",null,[[\"class\",\"items\",\"value\",\"placeholder\"],[\"compact\",[22,[\"locales\"]],[22,[\"i18n\",\"locale\"]],[26,\"t\",[\"forms.application.header.menu.language-dropdown.placeholder\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"id\",\"example-mobile\"],[10,\"class\",\"pusher mobile\"],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"full height\"],[10,\"style\",\"min-height: 94.8vh!important;\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-content ui attached segment\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"stackable grid container\"],[8],[0,\"\\n            \"],[1,[20,\"outlet\"],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui vertical footer segment\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui container flex-container mobile-footer\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui text menu\"],[8],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"brand item\"],[10,\"href\",\"#\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.application.footer.application-name\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"item\"],[11,\"href\",[20,\"addonVersionHref\"],null],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.footer.application-version.title\"],null],null],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.footer.application-version.caption\"],[[\"version\"],[[22,[\"addonVersion\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/application.hbs" } });
});
define("ember-app/templates/mobile/components/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YI42qzW/", "block": "{\"symbols\":[\"colDesc\",\"n\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui button cols-config-apply\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[1,[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.use\"],null]],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-field\",null,[[\"class\",\"value\",\"label\"],[\"setting-name-input fluid\",[22,[\"model\",\"settingName\"]],[26,\"t\",[\"components.colsconfig-dialog-content.enter-setting-name\"],null]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[6,\"button\"],[11,\"class\",[27,[\"ui button positive cols-config-save\",[26,\"unless\",[[22,[\"model\",\"settingName\"]],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"saveColsSetting\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"components.colsconfig-dialog-content.save\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"type\"]],[22,[\"closeable\"]],[22,[\"visible\"]],[22,[\"caption\"]],[22,[\"message\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-cols\"],null],[22,[\"model\",\"exportParams\",\"detSeparateCols\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-rows\"],null],[22,[\"model\",\"exportParams\",\"detSeparateRows\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"two fields unstackable\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[1,[26,\"flexberry-field\",null,[[\"class\",\"value\",\"label\"],[\"per-page-input\",[22,[\"model\",\"perPageValue\"]],[26,\"t\",[\"components.colsconfig-dialog-content.per-page\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\" \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\",\"label\"],[\"toggle\",[22,[\"model\",\"saveColWidthState\"]],[26,\"t\",[\"components.colsconfig-dialog-content.col-width-on\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"colDescs\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"propName\",[27,[[21,1,[\"propName\"]]]]],[10,\"class\",\"colsconfig-prop\"],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[\"field colsconfig-prop-name \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"            \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null],false],[9],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null],[21,1,[\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"span\"],[8],[1,[21,1,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\\n\"],[0,\"        \"],[6,\"div\"],[10,\"class\",\"two fields unstackable\"],[8],[0,\"\\n\"],[4,\"unless\",[[21,1,[\"isHasMany\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"sort-direction-cell field\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-caption\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui compact selection dropdown sort-direction-dropdown \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n                \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"default text\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"0\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-asc\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"-1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-desc\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[21,1,[\"sortOrder\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority-caption\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[\"sort-priority-input\",[21,1,[\"sortPriority\"]]]]],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\\n\"],[0,\"        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-width-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[26,\"or\",[[21,1,[\"hide\"]],[26,\"or\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"or\",[[21,1,[\"fixed\"]],[26,\"not\",[[22,[\"model\",\"saveColWidthState\"]]],null]],null]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[\"column-width-input\",[21,1,[\"columnWidth\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"colsconfig-actions\"],[8],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"ui icon button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"invertVisibility\",[21,2,[]]]],[8],[6,\"i\"],[11,\"class\",[27,[\"large \",[26,\"if\",[[21,1,[\"hide\"]],\"hide\",\"unhide\"],null],\" icon\"]]],[8],[9],[9],[0,\"\\n          \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button\",[26,\"if\",[[26,\"eq\",[[21,2,[]],0],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowUp\",[21,2,[]]]],[8],[6,\"i\"],[10,\"class\",\"chevron up icon\"],[8],[9],[9],[0,\"\\n          \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button row-down-button no-margin\",[26,\"if\",[[26,\"eq\",[[21,1,[]],[22,[\"model\",\"colDescs\",\"lastObject\"]]],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowDown\",[21,2,[]]]],[8],[6,\"i\"],[10,\"class\",\"chevron down icon\"],[8],[9],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[6,\"a\"],[10,\"class\",\"hidden download-anchor\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ea5GPEY8", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"flexberry-file-grid ui grid\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"name\",\"files[]\"],[11,\"id\",[20,\"_fileInputId\"],null],[10,\"class\",\"flexberry-file-file-input\"],[10,\"style\",\"display:none\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-add-button ui \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\",[26,\"unless\",[[22,[\"_addButtonIsEnabled\"]],\"disabled\"],null]],null],\" \",[26,\"if\",[[22,[\"_hasFile\"]],\"hidden\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.add-button-title\"],null],null],[11,\"for\",[20,\"_fileInputId\"],null],[3,\"action\",[[21,0,[]],\"addButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n    \"],[1,[26,\"t\",[\"components.flexberry-file.add-button-caption\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasFile\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"flexberry-file-menu\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-menu\",null,[[\"class\",\"items\",\"callItemsOnClickCallbacks\",\"onItemClick\",\"collapseMenuOnItemClick\",\"onlyClickHandler\"],[[26,\"concat\",[\"flexberry-file-mobile-menu top right pointing\",[26,\"if\",[[26,\"and\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"showPreview\"]]],null]],null],\" disabled\",\"\"],null]],null],[22,[\"_menuItems\"]],false,[26,\"action\",[[21,0,[]],\"onMenuItemClick\"],null],true,true]]],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showPreview\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"_canLoadPreview\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"flexberry-file-image-preview-wrapper ui small image\"],[3,\"action\",[[21,0,[]],\"viewLoadedImage\"]],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"_previewDownloadIsInProgress\"]]],null,{\"statements\":[[0,\"              \"],[6,\"img\"],[10,\"class\",\"flexberry-file-image-preview\"],[11,\"src\",[20,\"_previewImageAsBase64String\"],null],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"div\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[22,[\"_previewDownloadIsInProgress\"]],\"active\",\"disabled\"],null],\" loader\"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"span\"],[8],[1,[20,\"_fileName\"],false],[9],[0,\" \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[20,\"_errorPreviewCaption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-download-iframes-container\"],[10,\"style\",\"display: none;\"],[8],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog ui small basic modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui icon header\"],[8],[0,\"\\n    \"],[1,[20,\"_errorModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-content center aligned ui grid\"],[8],[0,\"\\n      \"],[1,[20,\"_errorModalDialogContent\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-button center aligned ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-ok-button ui approve green inverted button\"],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"checkmark icon\"],[8],[9],[0,\"\\n        \"],[1,[26,\"t\",[\"components.flexberry-file.error-dialog-ok-button-caption\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-file.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-objectlistview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mcc0KCKf", "block": "{\"symbols\":[\"page\",\"@gotoPage\",\"@resetFilters\",\"@configurateSelectedRows\",\"@configurateRow\",\"@filterByAnyMatch\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"olv-toolbar\",null,[[\"class\",\"createNewButton\",\"enableCreateNewButton\",\"refreshButton\",\"deleteButton\",\"colsConfigButton\",\"advLimitButton\",\"enableFilters\",\"exportExcelButton\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"toggleStateFilters\",\"resetFilters\",\"filterButton\",\"filterText\",\"buttonClass\",\"enableDeleteButton\",\"inLookup\",\"componentName\",\"lookupComponentName\",\"modelController\",\"customButtonAction\",\"customButtons\",\"editFormRoute\",\"showConfigDialog\",\"showAdvLimitDialog\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"availableHierarchicalMode\",\"availableCollExpandMode\",\"switchHierarchicalMode\",\"switchExpandMode\",\"readonly\",\"useSidePageMode\"],[\"ui secondary menu no-margin flexberry-olv-toolbar\",[22,[\"createNewButton\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"refreshButton\"]],[22,[\"deleteButton\"]],[22,[\"colsConfigButton\"]],[22,[\"advLimitButton\"]],[22,[\"enableFilters\"]],[22,[\"exportExcelButton\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"toggleStateFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\",[21,3,[]]],null],[22,[\"filterButton\"]],[22,[\"filterText\"]],[22,[\"buttonClass\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[26,\"eq\",[[22,[\"componentMode\"]],\"lookupform\"],null],[22,[\"componentName\"]],[22,[\"lookupComponentName\"]],[22,[\"currentController\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"editFormRoute\"]],\"showConfigDialog\",\"showConfigDialog\",[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"_availableHierarchicalMode\"]],[22,[\"availableCollExpandMode\"]],[26,\"action\",[[21,0,[]],\"switchHierarchicalMode\"],null],[26,\"action\",[[21,0,[]],\"switchExpandMode\"],null],[22,[\"readonly\"]],[22,[\"useSidePageMode\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchyPaging\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui secondary menu no-margin nav-bar\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"colsConfigButton\"]],\"disabled\"],null],\" button mobile-sorting-setting-button\"]]],[11,\"title\",[20,\"_mobileSortingSettingsCaption\"],null],[11,\"disabled\",[26,\"not\",[[22,[\"colsConfigButton\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showConfigDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[11,\"class\",[20,\"_mobileSortingSettingsIcon\"],null],[8],[9],[0,\"\\n        \"],[1,[20,\"_mobileSortingSettingsCaption\"],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui basic buttons\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"_mobilePages\"]]],null,{\"statements\":[[4,\"if\",[[26,\"not\",[[21,1,[\"isEllipsis\"]]],null]],null,{\"statements\":[[4,\"if\",[[21,1,[\"isCurrent\"]]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[10,\"class\",\"ui disabled active button\"],[10,\"disabled\",\"\"],[10,\"type\",\"button\"],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"gotoPage\",[21,2,[]],[21,1,[\"number\"]]]],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"gt\",[[22,[\"_mobilePages\",\"length\"]],4],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"ui input nav-bar-search-page \",[26,\"if\",[[26,\"and\",[[22,[\"searchPageValue\"]],[22,[\"searchPageButtonReadonly\"]]],null],\"error\"],null]]]],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"min\",\"max\",\"placeholder\",\"enter\",\"value\"],[\"number\",[22,[\"_pages\",\"firstObject\",\"number\"]],[22,[\"_pages\",\"lastObject\",\"number\"]],[22,[\"_mobilePages\",\"lastObject\",\"number\"]],[26,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]],null],[22,[\"searchPageValue\"]]]]],false],[0,\"\\n\"],[0,\"          \"],[1,[26,\"input\",null,[[\"classNames\"],[[26,\"array\",[\"hidden\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[26,\"object-list-view\",null,[[\"placeholder\",\"readonly\",\"columnsWidthAutoresize\",\"minAutoColumnWidth\",\"buttonClass\",\"tableStriped\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"createNewByPrototype\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"sorting\",\"immediateDelete\",\"modelName\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"enableFilters\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"applyFilters\",\"componentForFilter\",\"componentForFilterByCondition\",\"conditionsByType\",\"filterByAnyMatch\",\"filterByAnyWord\",\"filterByAllWords\",\"configurateRow\",\"configurateSelectedRows\",\"confirmDeleteRow\",\"beforeDeleteRecord\",\"action\",\"beforeDeleteAllRecords\",\"componentName\",\"allowColumnResize\",\"selectedRecord\",\"notUseUserSettings\",\"hierarchicalIndent\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"disableHierarchicalMode\",\"loadRecords\",\"availableHierarchicalMode\",\"hierarchyAttribute\",\"useRowByRowLoading\",\"useRowByRowLoadingProgress\",\"eventsBus\",\"onEditForm\",\"customButtonInRowAction\",\"customButtonsInRow\",\"defaultSortingButton\",\"defaultLeftPadding\",\"overflowedComponents\",\"fixedHeader\",\"recordsTotalCount\"],[[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[26,\"action\",[[21,0,[]],\"createNewByPrototype\"],null],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"showValidationMessagesInRow\"]]],null],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"rowClickable\"]]],null],[22,[\"orderable\"]],[22,[\"sorting\"]],true,[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,8,[]],[21,8,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,7,[]],[21,7,[]],\"addColumnToSorting\"],null]],null],[22,[\"enableFilters\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"applyFilters\"]],[22,[\"applyFilters\"]],\"applyFilters\"],null]],null],[22,[\"componentForFilter\"]],[22,[\"componentForFilterByCondition\"]],[22,[\"conditionsByType\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,6,[]],[21,6,[]],\"filterByAnyMatch\"],null]],null],[22,[\"filterByAnyWord\"]],[22,[\"filterByAllWords\"]],[21,5,[]],[21,4,[]],[22,[\"confirmDeleteRow\"]],[22,[\"beforeDeleteRecord\"]],[26,\"action\",[[21,0,[]],\"objectListViewRowClick\"],null],[22,[\"beforeDeleteAllRecords\"]],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[22,[\"selectedRecord\"]],[22,[\"notUseUserSettings\"]],[22,[\"hierarchicalIndent\"]],[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[26,\"if\",[[22,[\"hierarchyByAttribute\"]],true,[22,[\"disableHierarchicalMode\"]]],null],[26,\"action\",[[21,0,[]],\"loadRecords\"],null],[26,\"action\",[[21,0,[]],\"availableHierarchicalMode\"],null],[22,[\"hierarchyAttribute\"]],[22,[\"useRowByRowLoading\"]],[22,[\"useRowByRowLoadingProgress\"]],[22,[\"eventsBus\"]],[22,[\"onEditForm\"]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"defaultSortingButton\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"fixedHeader\"]],[22,[\"recordsTotalCount\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-objectlistview.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-sitemap-guideline", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OmZPUQH/", "block": "{\"symbols\":[\"node\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"title\"],[[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n      \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n    \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n    \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"menu slide left\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"item menu-back\"],[3,\"action\",[[21,0,[]],\"menuBack\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"icon-guideline-arrow-long-left icon\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n          \"],[1,[20,\"parent\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\",\"classNames\",\"parent\"],[[21,2,[]],false,\"item\",[22,[\"sitemap\",\"caption\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"if\",[[21,1,[\"children\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\"],[[21,1,[]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"classNames\",\"isDropDown\"],[[21,1,[]],\"item\",false]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-sitemap-guideline.hbs" } });
});
define("ember-app/templates/mobile/components/object-list-view-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OS401F4p", "block": "{\"symbols\":[\"record\"],\"statements\":[[6,\"tr\"],[11,\"class\",[27,[[22,[\"record\",\"rowConfig\",\"customClass\"]],[26,\"if\",[[22,[\"record\",\"selected\"]],\" active\"],null],[26,\"if\",[[22,[\"record\",\"data\",\"hasDirtyAttributes\"]],\" groupedit-new-row\"],null]]]],[8],[0,\"\\n  \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"hidden\"],[8],[1,[22,[\"record\",\"key\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showAsteriskInRow\"]],[22,[\"record\",\"data\",\"hasDirtyAttributes\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"onChange\",\"value\"],[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeSelected\"]]],null],[22,[\"allSelect\"]]],null],[26,\"action\",[[21,0,[]],[22,[\"selectRow\"]],[22,[\"record\"]]],null],[22,[\"record\",\"selected\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"td\"],[11,\"style\",[27,[\"padding-left:\",[20,\"hierarchicalIndent\"],\"px;\"]]],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\"],[[22,[\"columns\"]]]]]],[[\"preventDefault\"],[false]]],[8],[0,\"\\n    \"],[1,[26,\"component\",[[22,[\"singleColumnCellComponent\",\"componentName\"]]],[[\"model\",\"columns\",\"showValidationMessages\",\"hasEditableValues\",\"dynamicProperties\",\"readonly\"],[[22,[\"record\",\"data\"]],[22,[\"columns\"]],[22,[\"showValidationMessages\"]],[22,[\"hasEditableValues\"]],[22,[\"singleColumnCellComponent\",\"componentProperties\"]],[22,[\"readonly\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"and\",[[22,[\"inHierarchicalMode\"]],[22,[\"hasRecords\"]]],null],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]]],null]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row-controls\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"inHierarchicalMode\"]],[22,[\"hasRecords\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon mini \",[20,\"buttonClass\"]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"expand\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showEditButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-delete-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"    \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right pointing ui icon dropdown button\"],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"list layout icon\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"left menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showEditMenuItemInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"rowClick\"]],[22,[\"record\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n              \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteMenuItemInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n              \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_expanded\"]],[22,[\"inHierarchicalMode\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"records\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"    \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"isParentRecordPropertyName\",\"inHierarchicalMode\",\"inExpandMode\",\"singleColumnCellComponent\",\"loadRecords\",\"rowClick\",\"selectRow\",\"deleteRow\",\"createNewByPrototype\",\"_currentLevel\",\"hierarchicalIndent\",\"configurateRow\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessages\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"loadRecords\"]],[22,[\"rowClick\"]],[22,[\"selectRow\"]],[22,[\"deleteRow\"]],[22,[\"createNewByPrototype\"]],[22,[\"_currentLevel\"]],[22,[\"_hierarchicalIndent\"]],[22,[\"configurateRow\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/object-list-view-row.hbs" } });
});
define("ember-app/templates/mobile/components/object-list-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A8IIGplu", "block": "{\"symbols\":[\"record\",\"column\"],\"statements\":[[6,\"table\"],[11,\"class\",[27,[\"object-list-view ui unstackable celled \",[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],\" \",[20,\"tableClass\"],\" table\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"singleColumnHeaderTitle\"]]],null,{\"statements\":[[0,\"    \"],[6,\"thead\"],[8],[0,\"\\n      \"],[6,\"tr\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"th\"],[10,\"class\",\"object-list-view-operations collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowToolbar\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"th\"],[10,\"class\",\"dt-head-left me class\"],[10,\"data-olv-header-property-name\",\"OlvHeader\"],[8],[1,[20,\"singleColumnHeaderTitle\"],false],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"th\"],[10,\"class\",\"object-list-view-menu collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowMenu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showFilters\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[11,\"onkeydown\",[26,\"action\",[[21,0,[]],\"applyFiltersByEnter\"],null],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"td\"],[10,\"class\",\"overflowed-cell\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"inline fields filter\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"if\",[[21,2,[\"keyLocale\"]],[26,\"t\",[[21,2,[\"keyLocale\"]]],null],[21,2,[\"header\"]]],null],false],[0,\":\"],[9],[0,\"\\n\"],[4,\"if\",[[21,2,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"filter-operation\"],[8],[0,\"\\n                  \"],[1,[26,\"flexberry-dropdown\",null,[[\"displayCaptions\",\"value\",\"items\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[26,\"not\",[[26,\"is-array\",[[21,2,[\"filter\",\"conditions\"]]],null]],null],[21,2,[\"filter\",\"condition\"]],[21,2,[\"filter\",\"conditions\"]],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,2,[\"filter\"]]],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[21,2,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"fluid action input ui filter-value\"],[8],[0,\"\\n                  \"],[1,[26,\"component\",[[21,2,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,2,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,2,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"ui clear-filter button\"],[11,\"title\",[26,\"t\",[\"components.object-list-view.clear-filter-in-column\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterForColumn\",[21,2,[\"filter\"]]]],[8],[0,\"\\n                    \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[22,[\"content\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[8],[0,\"\\n        \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[1,[20,\"placeholder\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"contentWithKeys\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"        \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showDeleteMenuItemInRow\",\"showEditMenuItemInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"inExpandMode\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"singleColumnCellComponent\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"deleteRow\",\"createNewByPrototype\",\"hierarchyPaging\",\"fixedHeader\",\"configurateRow\",\"allSelect\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"inExpandMode\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[26,\"action\",[[21,0,[]],\"rowClick\"],null],[26,\"action\",[[21,0,[]],\"selectRow\"],null],[26,\"action\",[[21,0,[]],\"deleteRow\"],null],[22,[\"createNewByPrototype\"]],[22,[\"hierarchyPaging\"]],[22,[\"fixedHeader\"]],[22,[\"configurateRow\"]],[22,[\"allSelect\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[22,[\"rowByRowLoadingProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui active centered inline loader\"],[8],[9],[0,\"\\n            \"],[1,[26,\"t\",[\"components.object-list-view.loading-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_selectedMobileMenu\"]],[22,[\"showCheckBoxInRow\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"check-rows-container\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"not-eq\",[[22,[\"class\"]],\"groupedit-container\"],null]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"_skipDropdownInit\",\"onlyClickHandler\",\"items\",\"settings\",\"onItemClick\"],[true,true,[22,[\"_checkRowsSettingsItems\"]],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]],[26,\"action\",[[21,0,[]],\"onCheckRowMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui check-all-at-page-button icon \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.check-all-at-page-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"checkAllAtPage\"]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"check-square-o icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"count-selected-rows\"],[8],[1,[20,\"_selectedCountMobileMenu\"],false],[9],[0,\"\\n\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"deleteSelectedRow\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui clear-select-button \",[20,\"buttonClass\"],\" circular icon button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-select-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearSelectedRecords\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/object-list-view.hbs" } });
});
define("ember-app/templates/new-platform-flexberry-services-lock-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bMSSmbW6", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.new-platform-flexberry-services-lock-list.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"content\",\"modelName\",\"modelProjection\",\"editFormRoute\",\"refreshButton\",\"createNewButton\",\"deleteButton\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"gotoPage\",\"nextPage\",\"previousPage\",\"orderable\",\"sorting\",\"sortByColumn\",\"addColumnToSorting\",\"componentName\",\"beforeDeleteAllRecords\"],[[22,[\"model\"]],[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],true,false,true,true,true,[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],[26,\"action\",[[21,0,[]],\"previousPage\"],null],true,[22,[\"computedSorting\"]],[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],\"LockObjectListView\",[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/new-platform-flexberry-services-lock-list.hbs" } });
});
define('ember-app/transforms/decimal', ['exports', 'ember-flexberry-data/transforms/decimal'], function (exports, _decimal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _decimal.default;
    }
  });
});
define('ember-app/transforms/file', ['exports', 'ember-flexberry-data/transforms/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _file.default;
});
define('ember-app/transforms/flexberry-enum', ['exports', 'ember-flexberry-data/transforms/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
});
define('ember-app/transforms/guid', ['exports', 'ember-flexberry-data/transforms/guid'], function (exports, _guid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _guid.default;
    }
  });
});
define('ember-app/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant.default;
    }
  });
});
define('ember-app/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation.default;
    }
  });
});
define('ember-app/utils/batch-queries', ['exports', 'ember-flexberry-data/utils/batch-queries'], function (exports, _batchQueries) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _batchQueries.default;
    }
  });
});
define('ember-app/utils/cut-string-by-length', ['exports', 'ember-flexberry/utils/cut-string-by-length'], function (exports, _cutStringByLength) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cutStringByLength.default;
    }
  });
});
define('ember-app/utils/deserialize-sorting-param', ['exports', 'ember-flexberry/utils/deserialize-sorting-param'], function (exports, _deserializeSortingParam) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deserializeSortingParam.default;
    }
  });
});
define('ember-app/utils/get-attr-locale-key', ['exports', 'ember-flexberry/utils/get-attr-locale-key'], function (exports, _getAttrLocaleKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getAttrLocaleKey.default;
    }
  });
});
define('ember-app/utils/get-current-agregator', ['exports', 'ember-flexberry/utils/get-current-agregator'], function (exports, _getCurrentAgregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCurrentAgregator.default;
    }
  });
});
define('ember-app/utils/get-projection-by-name', ['exports', 'ember-flexberry/utils/get-projection-by-name'], function (exports, _getProjectionByName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getProjectionByName.default;
    }
  });
});
define('ember-app/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('ember-app/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('ember-app/utils/need-save-current-agregator', ['exports', 'ember-flexberry/utils/need-save-current-agregator'], function (exports, _needSaveCurrentAgregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _needSaveCurrentAgregator.default;
    }
  });
});
define('ember-app/utils/run-after', ['exports', 'ember-flexberry/utils/run-after'], function (exports, _runAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _runAfter.default;
    }
  });
});
define('ember-app/utils/serialize-sorting-param', ['exports', 'ember-flexberry/utils/serialize-sorting-param'], function (exports, _serializeSortingParam) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializeSortingParam.default;
    }
  });
});
define('ember-app/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('ember-app/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('ember-app/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('ember-app/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('ember-app/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('ember-app/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('ember-app/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('ember-app/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('ember-app/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('ember-app/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('ember-app/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('ember-app/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('ember-app/validators/messages', ['exports', 'ember-i18n-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('ember-app/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('ember-app/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-app/app")["default"].create({"name":"ember-app","backendUrl":"http://localhost:80","backendUrls":{"root":"http://localhost:80","api":"http://localhost:80/odata"},"log":{"enabled":true,"storeErrorMessages":true,"storeWarnMessages":false,"storeLogMessages":true,"storeInfoMessages":false,"storeDebugMessages":false,"storeDeprecationMessages":false,"storePromiseErrors":true,"showPromiseErrors":true,"errorMessageFilterActive":false},"perf":{"enabled":false},"lock":{"enabled":true,"openReadOnly":true,"unlockObject":true},"useUserSettingsService":true,"useAdvLimitService":true,"offline":{"offlineEnabled":true,"modeSwitchOnErrorsEnabled":false,"syncDownWhenOnlineEnabled":false},"components":{"flexberryFile":{"uploadUrl":"http://localhost:80/api/File","maxUploadFileSize":null,"uploadOnModelPreSave":true,"showUploadButton":true,"showModalDialogOnUploadError":true,"showModalDialogOnDownloadError":true},"flexberryObjectlistview":{"defaultPerPage":5,"useSidePageMode":true},"flexberryLookup":{"useSidePageMode":true},"flexberryGroupedit":{"useSidePageMode":true},"flexberrySimpledatetime":{}},"version":"0.0.0+6d103d1b"});
}
//# sourceMappingURL=ember-app.map
