import { Serializer as МодельОборудованияSerializer } from
  '../mixins/regenerated/serializers/equipment-model';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МодельОборудованияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
