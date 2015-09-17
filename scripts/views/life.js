export default Backbone.View.extend({
  template: JST.lifeatthecottage,
  
  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});