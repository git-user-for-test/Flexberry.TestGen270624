import { Serializer as ФактОперацияТОSerializer } from
  '../mixins/regenerated/serializers/fact-operation-of-the-maintenance';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФактОперацияТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
