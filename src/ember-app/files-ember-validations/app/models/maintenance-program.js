import {
  defineProjections,
  Model as ПрограммаТОMixin
} from '../mixins/regenerated/models/maintenance-program';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрограммаТОMixin, {
});

defineProjections(Model);

export default Model;
