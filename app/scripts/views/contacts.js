/*global BackboneLabs, Backbone, JST*/

BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.Contacts = Backbone.View.extend({

    template: JST['app/scripts/templates/contacts.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
