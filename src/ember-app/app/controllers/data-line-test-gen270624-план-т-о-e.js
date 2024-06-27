import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'data-line-test-gen270624-план-т-о-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'scheduled-maintenance-operation+maintenanceOperation':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'maintenanceOperation',
            projection: 'ОперацияТОL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
