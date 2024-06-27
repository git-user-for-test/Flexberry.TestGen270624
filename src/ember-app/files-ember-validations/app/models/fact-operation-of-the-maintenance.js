import {
  defineProjections,
  Model as ФактОперацияТОMixin
} from '../mixins/regenerated/models/fact-operation-of-the-maintenance';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФактОперацияТОMixin, {
});

defineProjections(Model);

export default Model;
