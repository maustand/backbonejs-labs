/*global BackboneLabs, Backbone*/

BackboneLabs.Models = BackboneLabs.Models || {};

(function () {
  'use strict';

    app.Contacts = Backbone.Model.extend({

    url: '',

    initialize: function() {
      this.validators.name = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a name"};
      };
    },

    defaults: {
        name: "",
        email: "",
        phoneNumber: 0000
        description: ""
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
