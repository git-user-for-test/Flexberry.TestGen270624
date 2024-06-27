import {
  defineProjections,
  Model as ОперацияТОMixin
} from '../mixins/regenerated/models/maintenance-operation';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОперацияТОMixin, {
});

defineProjections(Model);

export default Model;
