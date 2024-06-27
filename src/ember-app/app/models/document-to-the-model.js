import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументКМоделиMixin
} from '../mixins/regenerated/models/document-to-the-model';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументКМоделиMixin, Validations, {
});

defineProjections(Model);

export default Model;
