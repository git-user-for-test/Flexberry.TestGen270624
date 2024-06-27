import { Serializer as ОперацияТОSerializer } from
  '../mixins/regenerated/serializers/maintenance-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОперацияТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
