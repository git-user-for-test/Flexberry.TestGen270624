import { Serializer as ТипОборудованияSerializer } from
  '../mixins/regenerated/serializers/equipment-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипОборудованияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
