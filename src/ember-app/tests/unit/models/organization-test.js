import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organization', 'Unit | Model | organization', {
  // Specify the other units that are required for this test.
  needs: [
    'model:contract',
    'model:document-to-the-model',
    'model:employee',
    'model:equipment-model',
    'model:equipment-status',
    'model:equipment-type',
    'model:fact-of-the-maintenance',
    'model:fact-operation-of-the-maintenance',
    'model:hardware',
    'model:location',
    'model:maintenance-operation',
    'model:maintenance-plan',
    'model:maintenance-program',
    'model:organization',
    'model:periodicity',
    'model:purpose-of-the-maintenance-model',
    'model:scheduled-maintenance-operation',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
