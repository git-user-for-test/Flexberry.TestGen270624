import { Serializer as ДокументКМоделиSerializer } from
  '../mixins/regenerated/serializers/document-to-the-model';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокументКМоделиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
