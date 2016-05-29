/*global $ */
/*jshint unused:false */
var BackboneLabs = BackboneLabs || {};

$(function () {
  'use strict';


    var TodoRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'contacts': 'contacts',
      'contacts/new': 'newContact'
    },

    index: function () {

      $("#mainContainer").html(new BackboneLabs.Views.Index({
          model: {}
         }).render().el);

      console.log('Index processingy')
    },
    contacts: function () {
      var contactsModel = new BackboneLabs.Models.Contacts();
      $("#mainContainer").html(new BackboneLabs.Views.Contacts({
          model: contactsModel
      }).render().el);
    }
  });

  BackboneLabs.TodoRouter = new TodoRouter();
  Backbone.history.start();

  // kick things off by creating the `App`
  
});