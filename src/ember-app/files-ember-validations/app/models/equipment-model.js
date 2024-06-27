import {
  defineProjections,
  Model as МодельОборудованияMixin
} from '../mixins/regenerated/models/equipment-model';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МодельОборудованияMixin, {
});

defineProjections(Model);

export default Model;
