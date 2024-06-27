import {
  defineProjections,
  Model as ДокументКМоделиMixin
} from '../mixins/regenerated/models/document-to-the-model';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументКМоделиMixin, {
});

defineProjections(Model);

export default Model;
