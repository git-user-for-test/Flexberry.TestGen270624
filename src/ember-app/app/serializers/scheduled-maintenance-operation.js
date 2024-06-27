import { Serializer as ПланОперацияТОSerializer } from
  '../mixins/regenerated/serializers/scheduled-maintenance-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланОперацияТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
