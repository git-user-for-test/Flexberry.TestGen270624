import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'data-line-test-gen270624-программа-т-о-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'purpose-of-the-maintenance-model+equipmentModel':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'equipmentModel',
            projection: 'МодельОборудованияL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
