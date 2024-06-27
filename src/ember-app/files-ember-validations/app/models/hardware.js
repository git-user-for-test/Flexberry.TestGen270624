import {
  defineProjections,
  Model as ОборудованиеMixin
} from '../mixins/regenerated/models/hardware';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОборудованиеMixin, {
});

defineProjections(Model);

export default Model;
