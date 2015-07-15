Todos.TodoEntryComponent = Ember.Component.extend({
  action: {
    click: function() {
      this.sendAction('remove');
    }
  }
});