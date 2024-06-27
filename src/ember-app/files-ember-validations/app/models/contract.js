import {
  defineProjections,
  Model as ДоговорMixin
} from '../mixins/regenerated/models/contract';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоговорMixin, {
});

defineProjections(Model);

export default Model;
