import {
  defineProjections,
  Model as ПериодичностьMixin
} from '../mixins/regenerated/models/periodicity';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПериодичностьMixin, {
});

defineProjections(Model);

export default Model;
