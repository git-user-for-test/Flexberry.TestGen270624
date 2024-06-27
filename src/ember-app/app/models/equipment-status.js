import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтатусОборудованияMixin
} from '../mixins/regenerated/models/equipment-status';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтатусОборудованияMixin, Validations, {
});

defineProjections(Model);

export default Model;
