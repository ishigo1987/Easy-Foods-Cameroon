module.exports = (navigationViewAnimation,boolAnimation) =>
 {
   navigationViewAnimation = new tabris.NavigationView({
    left: 0, top: 0, right: 0, bottom: 0, toolbarColor:"#1976d2", titleTextColor:"#fff",pageAnimation:"default"
     }).appendTo(tabris.ui.contentView);
   if(boolAnimation === true)
    {
       navigationViewAnimation.set({
         transform:{translationX:400},
         pageAnimation:"none"
        });
       navigationViewAnimation.animate({
          transform: {translationX:0},
           }, {
          delay: 0,
          duration:200,
          repeat:0,
          reverse:false,
          easing: "ease-in"
        }
     ).then(function(){this.set({pageAnimation:"default"});});
    }

 return navigationViewAnimation;
 };
