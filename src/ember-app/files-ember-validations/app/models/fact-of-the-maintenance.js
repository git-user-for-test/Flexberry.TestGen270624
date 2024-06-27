import {
  defineProjections,
  Model as ФактТОMixin
} from '../mixins/regenerated/models/fact-of-the-maintenance';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФактТОMixin, {
});

defineProjections(Model);

export default Model;
