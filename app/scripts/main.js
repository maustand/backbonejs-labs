/*global $ */
/*jshint unused:false */
var BackboneLabs = BackboneLabs || {};


function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}


$(function () {
  'use strict';


    var TodoRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'contacts': 'contacts',
      'contacts/new': 'newContact',
      'contacts/:id': 'editContact'
    },

    index: function () {

      $('#mainContainer').html(new BackboneLabs.Views.Index({
          model: {}
         }).render().el);
    },
    contacts: function () {

      var contactsModel = new BackboneLabs.Models.Contacts();
      $('#mainContainer').html(new BackboneLabs.Views.Contacts({
          model: contactsModel
      }).render().el);

    },
    newContact: function () {

      var contactsModel = new BackboneLabs.Models.Contacts();
      $('#mainContainer').html(new BackboneLabs.Views.NewContact({
          model: contactsModel
      }).render().el);

    },

    editContact: function (id) {
      var contactsModel = new BackboneLabs.Models.Contacts({ id: id });
      $('#mainContainer').html(new BackboneLabs.Views.EditContact({
          model: contactsModel
      }).render().el);

    }


  });

  BackboneLabs.TodoRouter = new TodoRouter();
  Backbone.history.start();

  // kick things off by creating the `App`
  
});