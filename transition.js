var Homepage = Barba.BaseView.extend({
    namespace: 'homepage',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        function Animation (){
            var animation = anime.timeline();
        
            animation.add({
                targets:'.animation',
                height:['100%',0],
                easing:'easeInOutCirc',
                delay:400
            });

            
        }
        requestAnimationFrame(Animation);
       
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
       
     
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        console.log(Barba.Pjax.Dom.getWrapper());
        
       

    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
        console.log(Barba.Pjax.Dom.getWrapper());
        function Animation (){
            var animation = anime.timeline();
            
            animation.add({
                targets:'.animat',
                width:['100%',0],
                easing:'easeInOutCirc',
                delay:400
            });
    
            
        }
        requestAnimationFrame(Animation);

       console.log(Barba.HistoryManager.currentStatus().namespace); 
        
    }
  });


  var Home = Barba.BaseView.extend({
    namespace: 'home',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
       
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
       
     
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        function Animation (){
        var animation = anime.timeline();
        
        animation.add({
            targets:'.animat',
            height:['100%',0],
            easing:'easeInOutCirc',
            delay:400
        });

        
    }
    requestAnimationFrame(Animation);

    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  
  // Don't forget to init the view!
  Homepage.init();
  Home.init();
  Barba.Pjax.start();