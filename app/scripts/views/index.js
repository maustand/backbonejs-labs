BackboneLabs.Views = BackboneLabs.Views || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  BackboneLabs.Views.Index = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.

    // Our template for the line of statistics at the bottom of the app.
    template: JST['app/scripts/templates/index.ejs'],

    // Delegated events for creating new items, and clearing completed ones.

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function () {
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function () {
      this.$el.append(this.template);
      return this;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function (todo) {
      var view = new app.TodoView({ model: todo });
      this.$list.append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function () {
      this.$list.html('');
      app.todos.each(this.addOne, this);
    },

    filterOne: function (todo) {
      todo.trigger('visible');
    },
  });
})(jQuery);