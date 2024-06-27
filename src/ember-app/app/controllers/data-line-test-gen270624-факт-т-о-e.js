import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'data-line-test-gen270624-факт-т-о-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'fact-operation-of-the-maintenance+maintenanceOperation':
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

        case 'fact-operation-of-the-maintenance+scheduledMaintenanceOperation':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'executionDate',
            required: false,
            relationName: 'scheduledMaintenanceOperation',
            projection: 'ПланОперацияТОL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
