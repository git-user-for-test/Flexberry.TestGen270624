import {
  defineProjections,
  Model as СтатусОборудованияMixin
} from '../mixins/regenerated/models/equipment-status';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтатусОборудованияMixin, {
});

defineProjections(Model);

export default Model;
