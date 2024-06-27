import { Serializer as ПрограммаТОSerializer } from
  '../mixins/regenerated/serializers/maintenance-program';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрограммаТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
