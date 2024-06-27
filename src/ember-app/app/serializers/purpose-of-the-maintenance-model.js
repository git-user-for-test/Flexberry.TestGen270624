import { Serializer as НазначениеТОДляМоделиSerializer } from
  '../mixins/regenerated/serializers/purpose-of-the-maintenance-model';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НазначениеТОДляМоделиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
