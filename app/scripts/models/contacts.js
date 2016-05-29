/*global BackboneLabs, Backbone*/

BackboneLabs.Models = BackboneLabs.Models || {};

(function () {
  'use strict';

  BackboneLabs.Models.Contacts = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
