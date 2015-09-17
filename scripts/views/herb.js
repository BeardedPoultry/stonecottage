export default Backbone.View.extend({
  template: JST.intheherbgarden,

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});