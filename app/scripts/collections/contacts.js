/*global BackboneLabs, Backbone*/

BackboneLabs.Collections = BackboneLabs.Collections || {};

(function () {
  'use strict';

  BackboneLabs.Collections.Contacts = Backbone.Collection.extend({
    model: BackboneLabs.Models.Contacts,
    initialize: function(){
        this.bind('save', this.save, this);
        this.bind('find', this.find, this);
    },
    save: function(model){
    	localStorage.setItem( 'contact' + model.id, JSON.stringify(model) );
    },
    find: function(id) {
    	return JSON.parse( localStorage.getItem( 'contact' + id));
    }

  });

})();
