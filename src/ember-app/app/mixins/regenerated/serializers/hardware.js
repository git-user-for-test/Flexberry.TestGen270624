import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      supplyContract: { serialize: 'odata-id', deserialize: 'records' },
      location: { serialize: 'odata-id', deserialize: 'records' },
      model: { serialize: 'odata-id', deserialize: 'records' },
      accountable: { serialize: 'odata-id', deserialize: 'records' },
      serviceContract: { serialize: 'odata-id', deserialize: 'records' },
      status: { serialize: 'odata-id', deserialize: 'records' },
      type: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
