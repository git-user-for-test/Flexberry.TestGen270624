import {
  defineProjections,
  Model as ПланОперацияТОMixin
} from '../mixins/regenerated/models/scheduled-maintenance-operation';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланОперацияТОMixin, {
});

defineProjections(Model);

export default Model;
