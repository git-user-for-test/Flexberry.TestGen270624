import { Serializer as ПланТОSerializer } from
  '../mixins/regenerated/serializers/maintenance-plan';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
