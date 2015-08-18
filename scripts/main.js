(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());
  });
  
  $(document).ready(function(){
   window.stoneCottage = new stoneCottage();
   Backbone.history.start();
  });
  $(document).on('click', '.thestonecottage', function(){
    event.preventDefault();
    Window.cottageRouter.navigate('/the-stone-cottage');
  });
  var cottageRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'theknittinggnome':'theknittinggnome',
      'bythehearth':'bythehearth',
      'intheherbgarden':'intheherbgarden',
      'lifeatthecottage':'lifeatthecottage'
    }
  });
})();
