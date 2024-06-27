import {
  defineProjections,
  Model as ТипОборудованияMixin
} from '../mixins/regenerated/models/equipment-type';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТипОборудованияMixin, {
});

defineProjections(Model);

export default Model;
