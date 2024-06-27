import { Serializer as ФактТОSerializer } from
  '../mixins/regenerated/serializers/fact-of-the-maintenance';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФактТОSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
