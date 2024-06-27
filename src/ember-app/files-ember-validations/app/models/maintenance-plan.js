import {
  defineProjections,
  Model as ПланТОMixin
} from '../mixins/regenerated/models/maintenance-plan';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланТОMixin, {
});

defineProjections(Model);

export default Model;
