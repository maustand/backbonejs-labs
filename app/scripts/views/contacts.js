/*global BackboneLabs, Backbone, JST*/

BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.Contacts = Backbone.View.extend({

    template: JST['app/scripts/templates/contacts.ejs'],

    events: {
      'click .addnewContact': 'addNewContact',
    },

    initialize: function () {
    },

    render: function () {
      this.$el.append(this.template);
      return this;
    },
    addNewContact: function () {
      BackboneLabs.TodoRouter.navigate('contacts/new', {trigger: true});
    }

  });

})();
