export default Backbone.View.extend({
  template: JST.theknittinggnome,

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});