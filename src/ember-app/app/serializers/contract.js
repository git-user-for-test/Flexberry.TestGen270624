import { Serializer as ДоговорSerializer } from
  '../mixins/regenerated/serializers/contract';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДоговорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
