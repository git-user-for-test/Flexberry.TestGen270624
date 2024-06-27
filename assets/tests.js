'use strict';

define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-maintenance-operation-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 maintenance operation l');

  (0, _qunit.test)('testing data-line-test-gen270624-maintenance-operation-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-maintenance-operation-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-periodicity-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 periodicity l');

  (0, _qunit.test)('testing data-line-test-gen270624-periodicity-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-periodicity-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-scheduled-maintenance-operation-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 scheduled maintenance operation l');

  (0, _qunit.test)('testing data-line-test-gen270624-scheduled-maintenance-operation-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-scheduled-maintenance-operation-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 договор l');

  (0, _qunit.test)('testing data-line-test-gen270624-договор-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-договор-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 модель оборудования l');

  (0, _qunit.test)('testing data-line-test-gen270624-модель-оборудования-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-модель-оборудования-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 оборудование l');

  (0, _qunit.test)('testing data-line-test-gen270624-оборудование-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-оборудование-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 организация l');

  (0, _qunit.test)('testing data-line-test-gen270624-организация-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-организация-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 план т о l');

  (0, _qunit.test)('testing data-line-test-gen270624-план-т-о-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-план-т-о-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 программа т о l');

  (0, _qunit.test)('testing data-line-test-gen270624-программа-т-о-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-программа-т-о-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 расположение l');

  (0, _qunit.test)('testing data-line-test-gen270624-расположение-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-расположение-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 сотрудник l');

  (0, _qunit.test)('testing data-line-test-gen270624-сотрудник-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-сотрудник-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 статус оборудования l');

  (0, _qunit.test)('testing data-line-test-gen270624-статус-оборудования-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-статус-оборудования-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 тип оборудования l');

  (0, _qunit.test)('testing data-line-test-gen270624-тип-оборудования-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-тип-оборудования-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | data line test gen270624 факт т о l');

  (0, _qunit.test)('testing data-line-test-gen270624-факт-т-о-l', function (assert) {
    var _this = this;

    visit('/data-line-test-gen270624-факт-т-о-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-periodicity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-periodicity-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-periodicity-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-periodicity-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-periodicity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-periodicity-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-scheduled-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-scheduled-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-periodicity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-periodicity-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-periodicity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-periodicity-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-scheduled-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-scheduled-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/contract.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/location.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/organization.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-periodicity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-periodicity-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-periodicity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-periodicity-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-scheduled-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-scheduled-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/contract.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/location.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/organization.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/contract.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/location.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/organization.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/contract-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/contract-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/contract.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/document-to-the-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/document-to-the-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/employee-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/employee-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/employee.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-status-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-status-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-type-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-type-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/fact-of-the-maintenance-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/fact-of-the-maintenance-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/fact-operation-of-the-maintenance-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/fact-operation-of-the-maintenance-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/hardware-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/hardware-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/location-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/location-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/location.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-operation-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-operation-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-plan-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-plan-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-program-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-program-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/organization-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/organization-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/organization.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/periodicity-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/periodicity-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/purpose-of-the-maintenance-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/purpose-of-the-maintenance-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/scheduled-maintenance-operation-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/scheduled-maintenance-operation-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('models/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contract.js should pass ESLint\n\n');
  });

  QUnit.test('models/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('models/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('models/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('models/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('models/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('models/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('models/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('models/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/location.js should pass ESLint\n\n');
  });

  QUnit.test('models/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('models/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('models/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('models/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/organization.js should pass ESLint\n\n');
  });

  QUnit.test('models/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('models/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('models/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-periodicity-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-periodicity-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-periodicity-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-periodicity-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-periodicity-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-periodicity-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-scheduled-maintenance-operation-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-scheduled-maintenance-operation-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/contract-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/contract-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/contract.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/contract.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/document-to-the-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/document-to-the-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/document-to-the-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/document-to-the-model.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/employee-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/employee-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/employee.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-model.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-status-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-status-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-status.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-type-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-type-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/equipment-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/equipment-type.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/fact-of-the-maintenance-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/fact-of-the-maintenance-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/fact-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/fact-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/fact-operation-of-the-maintenance-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/fact-operation-of-the-maintenance-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/fact-operation-of-the-maintenance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/fact-operation-of-the-maintenance.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/hardware-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/hardware-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/hardware.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/hardware.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/location-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/location-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/location.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/location.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-operation-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-operation-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-plan-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-plan-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-plan.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-plan.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-program-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-program-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/maintenance-program.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/maintenance-program.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/organization-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/organization-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/organization.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/organization.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/periodicity-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/periodicity-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/periodicity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/periodicity.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/purpose-of-the-maintenance-model-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/purpose-of-the-maintenance-model-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/purpose-of-the-maintenance-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/purpose-of-the-maintenance-model.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/scheduled-maintenance-operation-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/scheduled-maintenance-operation-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/scheduled-maintenance-operation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/scheduled-maintenance-operation.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-periodicity-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-periodicity-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-periodicity-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-periodicity-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-periodicity-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-periodicity-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/contract-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contract-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/document-to-the-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/document-to-the-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/equipment-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/equipment-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/equipment-status-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/equipment-status-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/equipment-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/equipment-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/fact-of-the-maintenance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/fact-of-the-maintenance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/fact-operation-of-the-maintenance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/fact-operation-of-the-maintenance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/hardware-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/hardware-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/location-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/location-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/maintenance-operation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/maintenance-operation-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/maintenance-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/maintenance-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/maintenance-program-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/maintenance-program-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/organization-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/organization-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/periodicity-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/periodicity-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/purpose-of-the-maintenance-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/purpose-of-the-maintenance-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/scheduled-maintenance-operation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/scheduled-maintenance-operation-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-periodicity-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-periodicity-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-periodicity-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-periodicity-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-scheduled-maintenance-operation-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/contract-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/contract-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/document-to-the-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/document-to-the-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/equipment-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/equipment-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/equipment-status-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/equipment-status-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/equipment-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/equipment-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/fact-of-the-maintenance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/fact-of-the-maintenance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/fact-operation-of-the-maintenance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/fact-operation-of-the-maintenance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/hardware-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/hardware-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/location-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/location-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/maintenance-operation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/maintenance-operation-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/maintenance-plan-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/maintenance-plan-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/maintenance-program-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/maintenance-program-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/organization-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/organization-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/periodicity-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/periodicity-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/purpose-of-the-maintenance-model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/purpose-of-the-maintenance-model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/scheduled-maintenance-operation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/scheduled-maintenance-operation-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-maintenance-operation-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-maintenance-operation-l', 'Unit | Controller | data-line-test-gen270624-maintenance-operation-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-periodicity-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-periodicity-e', 'Unit | Controller | data-line-test-gen270624-periodicity-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-periodicity-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-periodicity-l', 'Unit | Controller | data-line-test-gen270624-periodicity-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-scheduled-maintenance-operation-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-scheduled-maintenance-operation-l', 'Unit | Controller | data-line-test-gen270624-scheduled-maintenance-operation-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-договор-e', 'Unit | Controller | data-line-test-gen270624-договор-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-договор-l', 'Unit | Controller | data-line-test-gen270624-договор-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-модель-оборудования-e', 'Unit | Controller | data-line-test-gen270624-модель-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-модель-оборудования-l', 'Unit | Controller | data-line-test-gen270624-модель-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-оборудование-e', 'Unit | Controller | data-line-test-gen270624-оборудование-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-оборудование-l', 'Unit | Controller | data-line-test-gen270624-оборудование-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-организация-e', 'Unit | Controller | data-line-test-gen270624-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-организация-l', 'Unit | Controller | data-line-test-gen270624-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-план-т-о-e', 'Unit | Controller | data-line-test-gen270624-план-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-план-т-о-l', 'Unit | Controller | data-line-test-gen270624-план-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-программа-т-о-e', 'Unit | Controller | data-line-test-gen270624-программа-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-программа-т-о-l', 'Unit | Controller | data-line-test-gen270624-программа-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-расположение-e', 'Unit | Controller | data-line-test-gen270624-расположение-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-расположение-l', 'Unit | Controller | data-line-test-gen270624-расположение-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-сотрудник-e', 'Unit | Controller | data-line-test-gen270624-сотрудник-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-сотрудник-l', 'Unit | Controller | data-line-test-gen270624-сотрудник-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-статус-оборудования-e', 'Unit | Controller | data-line-test-gen270624-статус-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-статус-оборудования-l', 'Unit | Controller | data-line-test-gen270624-статус-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-тип-оборудования-e', 'Unit | Controller | data-line-test-gen270624-тип-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-тип-оборудования-l', 'Unit | Controller | data-line-test-gen270624-тип-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-факт-т-о-e', 'Unit | Controller | data-line-test-gen270624-факт-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:data-line-test-gen270624-факт-т-о-l', 'Unit | Controller | data-line-test-gen270624-факт-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/contract-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('contract', 'Unit | Model | contract', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/document-to-the-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('document-to-the-model', 'Unit | Model | document-to-the-model', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/employee-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('employee', 'Unit | Model | employee', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/equipment-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-model', 'Unit | Model | equipment-model', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/equipment-status-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-status', 'Unit | Model | equipment-status', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/equipment-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-type', 'Unit | Model | equipment-type', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/fact-of-the-maintenance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('fact-of-the-maintenance', 'Unit | Model | fact-of-the-maintenance', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/fact-operation-of-the-maintenance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('fact-operation-of-the-maintenance', 'Unit | Model | fact-operation-of-the-maintenance', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/hardware-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('hardware', 'Unit | Model | hardware', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/location-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('location', 'Unit | Model | location', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/maintenance-operation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-operation', 'Unit | Model | maintenance-operation', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/maintenance-plan-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-plan', 'Unit | Model | maintenance-plan', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/maintenance-program-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-program', 'Unit | Model | maintenance-program', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/organization-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('organization', 'Unit | Model | organization', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/periodicity-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('periodicity', 'Unit | Model | periodicity', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/purpose-of-the-maintenance-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('purpose-of-the-maintenance-model', 'Unit | Model | purpose-of-the-maintenance-model', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/scheduled-maintenance-operation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('scheduled-maintenance-operation', 'Unit | Model | scheduled-maintenance-operation', {
    // Specify the other units that are required for this test.
    needs: ['model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-maintenance-operation-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-maintenance-operation-l', 'Unit | Route | data-line-test-gen270624-maintenance-operation-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-periodicity-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-periodicity-e', 'Unit | Route | data-line-test-gen270624-periodicity-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-periodicity-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-periodicity-l', 'Unit | Route | data-line-test-gen270624-periodicity-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-scheduled-maintenance-operation-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-scheduled-maintenance-operation-l', 'Unit | Route | data-line-test-gen270624-scheduled-maintenance-operation-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-договор-e', 'Unit | Route | data-line-test-gen270624-договор-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-договор-l', 'Unit | Route | data-line-test-gen270624-договор-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-модель-оборудования-e', 'Unit | Route | data-line-test-gen270624-модель-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043C\u043E\u0434\u0435\u043B\u044C-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-модель-оборудования-l', 'Unit | Route | data-line-test-gen270624-модель-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-оборудование-e', 'Unit | Route | data-line-test-gen270624-оборудование-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-оборудование-l', 'Unit | Route | data-line-test-gen270624-оборудование-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-организация-e', 'Unit | Route | data-line-test-gen270624-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-организация-l', 'Unit | Route | data-line-test-gen270624-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-план-т-о-e', 'Unit | Route | data-line-test-gen270624-план-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043F\u043B\u0430\u043D-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-план-т-о-l', 'Unit | Route | data-line-test-gen270624-план-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-программа-т-о-e', 'Unit | Route | data-line-test-gen270624-программа-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-программа-т-о-l', 'Unit | Route | data-line-test-gen270624-программа-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-расположение-e', 'Unit | Route | data-line-test-gen270624-расположение-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-расположение-l', 'Unit | Route | data-line-test-gen270624-расположение-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-сотрудник-e', 'Unit | Route | data-line-test-gen270624-сотрудник-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-сотрудник-l', 'Unit | Route | data-line-test-gen270624-сотрудник-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-статус-оборудования-e', 'Unit | Route | data-line-test-gen270624-статус-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-статус-оборудования-l', 'Unit | Route | data-line-test-gen270624-статус-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-тип-оборудования-e', 'Unit | Route | data-line-test-gen270624-тип-оборудования-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0442\u0438\u043F-\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-тип-оборудования-l', 'Unit | Route | data-line-test-gen270624-тип-оборудования-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-факт-т-о-e', 'Unit | Route | data-line-test-gen270624-факт-т-о-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/data-line-test-gen270624-\u0444\u0430\u043A\u0442-\u0442-\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:data-line-test-gen270624-факт-т-о-l', 'Unit | Route | data-line-test-gen270624-факт-т-о-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/contract-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('contract', 'Unit | Serializer | contract', {
    // Specify the other units that are required for this test.
    needs: ['serializer:contract', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/document-to-the-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('document-to-the-model', 'Unit | Serializer | document-to-the-model', {
    // Specify the other units that are required for this test.
    needs: ['serializer:document-to-the-model', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/employee-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('employee', 'Unit | Serializer | employee', {
    // Specify the other units that are required for this test.
    needs: ['serializer:employee', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/equipment-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-model', 'Unit | Serializer | equipment-model', {
    // Specify the other units that are required for this test.
    needs: ['serializer:equipment-model', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/equipment-status-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-status', 'Unit | Serializer | equipment-status', {
    // Specify the other units that are required for this test.
    needs: ['serializer:equipment-status', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/equipment-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('equipment-type', 'Unit | Serializer | equipment-type', {
    // Specify the other units that are required for this test.
    needs: ['serializer:equipment-type', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/fact-of-the-maintenance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('fact-of-the-maintenance', 'Unit | Serializer | fact-of-the-maintenance', {
    // Specify the other units that are required for this test.
    needs: ['serializer:fact-of-the-maintenance', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/fact-operation-of-the-maintenance-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('fact-operation-of-the-maintenance', 'Unit | Serializer | fact-operation-of-the-maintenance', {
    // Specify the other units that are required for this test.
    needs: ['serializer:fact-operation-of-the-maintenance', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/hardware-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('hardware', 'Unit | Serializer | hardware', {
    // Specify the other units that are required for this test.
    needs: ['serializer:hardware', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/location-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('location', 'Unit | Serializer | location', {
    // Specify the other units that are required for this test.
    needs: ['serializer:location', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/maintenance-operation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-operation', 'Unit | Serializer | maintenance-operation', {
    // Specify the other units that are required for this test.
    needs: ['serializer:maintenance-operation', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/maintenance-plan-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-plan', 'Unit | Serializer | maintenance-plan', {
    // Specify the other units that are required for this test.
    needs: ['serializer:maintenance-plan', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/maintenance-program-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('maintenance-program', 'Unit | Serializer | maintenance-program', {
    // Specify the other units that are required for this test.
    needs: ['serializer:maintenance-program', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/organization-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('organization', 'Unit | Serializer | organization', {
    // Specify the other units that are required for this test.
    needs: ['serializer:organization', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/periodicity-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('periodicity', 'Unit | Serializer | periodicity', {
    // Specify the other units that are required for this test.
    needs: ['serializer:periodicity', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/purpose-of-the-maintenance-model-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('purpose-of-the-maintenance-model', 'Unit | Serializer | purpose-of-the-maintenance-model', {
    // Specify the other units that are required for this test.
    needs: ['serializer:purpose-of-the-maintenance-model', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/scheduled-maintenance-operation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('scheduled-maintenance-operation', 'Unit | Serializer | scheduled-maintenance-operation', {
    // Specify the other units that are required for this test.
    needs: ['serializer:scheduled-maintenance-operation', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:contract', 'model:document-to-the-model', 'model:employee', 'model:equipment-model', 'model:equipment-status', 'model:equipment-type', 'model:fact-of-the-maintenance', 'model:fact-operation-of-the-maintenance', 'model:hardware', 'model:location', 'model:maintenance-operation', 'model:maintenance-plan', 'model:maintenance-program', 'model:organization', 'model:periodicity', 'model:purpose-of-the-maintenance-model', 'model:scheduled-maintenance-operation', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
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

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
