import { Serializer as ПериодичностьSerializer } from
  '../mixins/regenerated/serializers/periodicity';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПериодичностьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
