import { moduleForModel, test } from 'ember-qunit';

moduleForModel('scheduled-maintenance-operation', 'Unit | Serializer | scheduled-maintenance-operation', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:scheduled-maintenance-operation',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
