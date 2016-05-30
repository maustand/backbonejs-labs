BackboneLabs.Views = BackboneLabs.Views || {};

(function () {
  'use strict';

  BackboneLabs.Views.NewContact = Backbone.View.extend({

    template: function(){
      return JST['app/scripts/templates/newContact.ejs']({});
    },
    events: {
       'click button.save': 'new',
    },
    initialize: function () {
    },

    render: function () {
      this.$el.append(this.template());
      return this;
    },
    new: function () {

      var myCollection = new BackboneLabs.Collections.Contacts();
      var model = new BackboneLabs.Models.Contacts({
        id: generateUUID(),
        name: $('#txtName').val(),
        email: $('#txtEmail').val(),
        phoneNumber: $('#txtPhoneNumber').val(),
        comments: $('#txtComments').val() 
      });

      $.when( myCollection.save(model) ).done(function() {
        BackboneLabs.TodoRouter.navigate('contacts', {trigger: true});
      });
    }

  });

})();
