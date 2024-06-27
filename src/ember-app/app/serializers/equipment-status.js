import { Serializer as СтатусОборудованияSerializer } from
  '../mixins/regenerated/serializers/equipment-status';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтатусОборудованияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
