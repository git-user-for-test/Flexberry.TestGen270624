import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПрограммаТОMixin
} from '../mixins/regenerated/models/maintenance-program';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПрограммаТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
