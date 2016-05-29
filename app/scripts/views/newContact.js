/*global BackboneLabs, Backbone, JST*/

BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.NewContact = Backbone.View.extend({

    template: JST['app/scripts/templates/newContact.ejs'],
    events: {},
    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.append(this.template);
      return this;
    }

  });

})();
