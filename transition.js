var firstPage = Barba.BaseView.extend({
    namespace: 'firstPage',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        function Animation (){
            var animation = anime.timeline();
        
            animation.add({
                targets:'.animation',
                height:['100%',0],
                easing:'easeInOutCirc',
                delay:1000,
                duration:1000
            }).add({
                targets:'.animation h1',
                scale:[1.4, 1],
                duration:1000,
                easing :'easeOutExpo'
            },80);

            
        }
        requestAnimationFrame(Animation);

        
       
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
       
     
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
      
       
    },
    onLeaveCompleted: function() {
       
        

        function Animation (){

            let page = Barba.HistoryManager.currentStatus().namespace;

            if(page ==="secondPage"){
                let animation = anime.timeline();
            
                animation.add({
                    targets:'.slider',
                    width:[0,'100%'],
                    easing:'easeInOutCirc',
                    delay:400
                });

            }
            if(page ==="thirdPage"){

                let animation = anime.timeline();
            
                animation.add({
                    targets:'.animation h1',
                    scale:[0.5, 1],
                    easing:'easeInOutCirc',
                    
                });

            }
            
    
            
        }
        requestAnimationFrame(Animation);

   
    }
  });


  var secondPage = Barba.BaseView.extend({
    namespace: 'secondPage',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.

        function Animation (){
            var animation = anime.timeline();
            
            animation.add({
                targets:'.animat',
                height:['100%',0],
                easing:'easeInOutCirc',
                delay:1200
            });
    
            
        }
        requestAnimationFrame(Animation);
       
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
       
     
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
       
       
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
       
    }
  });


  var thirdPage = Barba.BaseView.extend({
    namespace: 'thirdPage',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.

        function Animation (){
            var animation = anime.timeline();
            
            animation.add({
                targets:'.animation',
                height:['100%',0],
                easing:'easeInOutCirc',
                delay:1200
            });
    
            
        }
        requestAnimationFrame(Animation);
       
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
       
     
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
       
       
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
       
    }
  });

  
  
  // Don't forget to init the view!
  firstPage.init();
  secondPage.init();
  thirdPage.init();
  Barba.Pjax.start();

