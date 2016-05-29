/*global $ */
/*jshint unused:false */
var BackboneLabs = BackboneLabs || {};

$(function () {
  'use strict';


    var TodoRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    index: function () {

      $("#mainContainer").html(new BackboneLabs.Views.Index({
          model: {}
         }).render().el);


      console.log('Index processingy')
    }
  });

  BackboneLabs.TodoRouter = new TodoRouter();
  Backbone.history.start();

  // kick things off by creating the `App`
  
});