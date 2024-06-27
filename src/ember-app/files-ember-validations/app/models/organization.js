import {
  defineProjections,
  Model as ОрганизацияMixin
} from '../mixins/regenerated/models/organization';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОрганизацияMixin, {
});

defineProjections(Model);

export default Model;
