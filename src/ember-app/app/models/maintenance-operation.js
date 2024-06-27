import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОперацияТОMixin
} from '../mixins/regenerated/models/maintenance-operation';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОперацияТОMixin, Validations, {
});

defineProjections(Model);

export default Model;
