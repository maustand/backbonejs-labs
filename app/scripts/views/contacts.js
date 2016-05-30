/*global BackboneLabs, Backbone, JST*/

BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.Contacts = Backbone.View.extend({

    template: function(myList){
      return JST['app/scripts/templates/contacts.ejs'](myList);
    },
    events: {
      'click .addnewContact': 'addNewContact',
      'click table tbody tr': 'goToEdit'
    },

    initialize: function () {
    },

    render: function () {
      var myCollection = new BackboneLabs.Collections.Contacts();

      for (var a in localStorage) {
         myCollection.add(JSON.parse(localStorage[a]));
      }
      
      this.$el.append(this.template(myCollection.toJSON()));

      return this;
    },
    addNewContact: function () {
      BackboneLabs.TodoRouter.navigate('contacts/new', {trigger: true});
    },
    goToEdit: function (e) {
     var id = $(e.currentTarget).data("id");
     BackboneLabs.TodoRouter.navigate('contacts/' + id, {trigger: true});
    }

  });

})();
