import {
  defineProjections,
  Model as РасположениеMixin
} from '../mixins/regenerated/models/location';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасположениеMixin, {
});

defineProjections(Model);

export default Model;
