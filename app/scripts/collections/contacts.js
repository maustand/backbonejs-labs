/*global BackboneLabs, Backbone*/

BackboneLabs.Collections = BackboneLabs.Collections || {};

(function () {
  'use strict';

  BackboneLabs.Collections.Contacts = Backbone.Collection.extend({

    model: BackboneLabs.Models.Contacts

  });

})();
