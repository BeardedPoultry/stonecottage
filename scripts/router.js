import IndexView from './views/index';
import KnittingView from './views/knitting';
import HerbView from './views/herb';
import HearthView from './views/hearth';
import LifeView from './views/life';

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
    },
    knitting: function(){
      var view = new KnittingView();
      $('#app').html(view.el);
    },
    herb: function(){
      var view = new HerbView();
      $('#app').html(view.el);
    },
    life: function(){
      var view = new LifeView();
      $('#app').html(view.el);
    }      
});

var router = new cottageRouter();
export default router;