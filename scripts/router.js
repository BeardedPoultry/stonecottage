import IndexView from './views/index';
var cottageRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'theknittinggnome':'theknittinggnome',
      'bythehearth':'bythehearth',
      'intheherbgarden':'intheherbgarden',
      'lifeatthecottage':'lifeatthecottage'
    },
    index: function(){
      var view = new IndexView();
      $('#app').html(view.el);
  } 
});

var router = new cottageRouter();
export default router;