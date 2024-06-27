import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФактТОMixin
} from '../mixins/regenerated/models/fact-of-the-maintenance';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФактТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
