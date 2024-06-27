import {
  defineProjections,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/employee';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникMixin, {
});

defineProjections(Model);

export default Model;
