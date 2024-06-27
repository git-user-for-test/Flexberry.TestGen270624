import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТипОборудованияMixin
} from '../mixins/regenerated/models/equipment-type';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТипОборудованияMixin, Validations, {
});

defineProjections(Model);

export default Model;
