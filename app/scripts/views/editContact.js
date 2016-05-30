/*global BackboneLabs, Backbone, JST*/

BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.EditContact = Backbone.View.extend({

    template: function(data){
      return JST['app/scripts/templates/newContact.ejs'](data);
    },
    events: {
       'click button.save': 'update',
    },

    initialize: function () {
    },

    render: function () {

      var myCollection = new BackboneLabs.Collections.Contacts();
      var myData = myCollection.find(this.model.id) || {};

      this.$el.append(this.template(myData));

      return this;
    },
    update: function () {

      var myCollection = new BackboneLabs.Collections.Contacts();
      var myModel = new BackboneLabs.Models.Contacts({
        id : this.model.id,
        name: $('#txtName').val(),
        email: $('#txtEmail').val(),
        phoneNumber: $('#txtPhoneNumber').val(),
        comments: $('#txtComments').val() 
      });

      $.when( myCollection.save(myModel) ).done(function() {
        BackboneLabs.TodoRouter.navigate('contacts', {trigger: true});
      });

    }

  });

})();
