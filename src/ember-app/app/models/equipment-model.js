import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МодельОборудованияMixin
} from '../mixins/regenerated/models/equipment-model';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МодельОборудованияMixin, Validations, {
});

defineProjections(Model);

export default Model;
