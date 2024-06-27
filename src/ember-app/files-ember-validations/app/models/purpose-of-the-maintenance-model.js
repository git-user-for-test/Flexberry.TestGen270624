import {
  defineProjections,
  Model as НазначениеТОДляМоделиMixin
} from '../mixins/regenerated/models/purpose-of-the-maintenance-model';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НазначениеТОДляМоделиMixin, {
});

defineProjections(Model);

export default Model;
