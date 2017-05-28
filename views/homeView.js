exports.create = () =>
 {
   "use strict";
   const themeColor = "#1976d2";
   let createMenuActionIcon;
   let createnavigationView;
   let homeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
   let handleActionCategoryIncreasing = require("../helpers/actionIcons.js")(createMenuActionIcon,"Afficher les repas par ordre de prix croissant" , "srcImg","low", homeNavigationView);
   let handleActionCategoryDecreasing = require("../helpers/actionIcons.js")(createMenuActionIcon,"Afficher les repas par ordre de prix decroissant" ,"srcImg","low", homeNavigationView);
   require("../modules/tabrisUi.js")(`dark`, `#0d47a1`, "#fff");
   let orderMealPage = new tabris.Page({
       title:"Easy Foods Cameroon",
       background:"#eeeeee"
     }).on({
        appear: () =>
         {
            handleActionCategoryIncreasing.visible = true;
            handleActionCategoryDecreasing.visible = true;
         },
        disappear: function()
         {
            handleActionCategoryIncreasing.visible = false;
            handleActionCategoryDecreasing.visible = false;
            this.dispose();
         }
     }).appendTo(homeNavigationView);

   let scrollView = new tabris.ScrollView({
       left:0,right:0,top:0,bottom:0
     }).appendTo(orderMealPage);

   let cardViewMeal = new tabris.Composite({
         top:5,left:5,right:5,height:200,background:"#fff",elevation:3,cornerRadius:3,transform:{scaleX:0.3,scaleY:0.3},opacity:0,
       }).on("tap", function()
        {
          this.background = "#e0e0e0";
          setTimeout(() =>{this.background = "#fff";},50);
        }).appendTo(scrollView);

       cardViewMeal.animate({
          transform: {scaleX:1,scaleY:1},
          opacity:1,
           }, {
          delay:250,
          duration:150,
          repeat:0,
          reverse:false,
          easing: "ease-in"
        }
       ).then();

   let imageCardViewMeal = new tabris.ImageView({
      top:0, height:200, width:150,image:{src:"img/card.jpg"},scaleMode:"fill", id:"imageCardViewMeal"
    }).appendTo(cardViewMeal);


  let priceText = new tabris.TextView({
      left:10,top:165,
      font:"bold 22px roboto,noto",
      text:"1500 FCFA",
      textColor:themeColor,
     }).appendTo(cardViewMeal);

  let nameMealText = new tabris.TextView({
      top:10, left:["#imageCardViewMeal", 10],right:10,
      font:"22px roboto, noto",
      text:"Ndolé au Gambas",
      textColor:"#616161",
      maxLines:2,
      id:"nameMealText"
  }).appendTo(cardViewMeal);

  let descriptionMealText = new tabris.TextView({
      top:["#nameMealText", 10], left:["#imageCardViewMeal", 10],right:10,
      font:"18px roboto, noto",
      text:"bon ndolé aux crevettes(Gambas) et au plantain mur a servir chaud.",
      textColor:"#757575",
      maxLines:6,
      id:"descriptionMealText"
    }).appendTo(cardViewMeal);










     /* A enlever */


     let cardViewMeal1 = new tabris.Composite({
         top:215,left:5,right:5,height:200,background:"#fff",elevation:3,cornerRadius:3,transform:{scaleX:0.3,scaleY:0.3},opacity:0,
       }).on("tap", function()
        {
          this.background = "#e0e0e0";
          setTimeout(() =>{this.background = "#fff";},50);
        }).appendTo(scrollView);

       cardViewMeal1.animate({
          transform: {scaleX:1,scaleY:1},
          opacity:1,
           }, {
          delay:250,
          duration:150,
          repeat:0,
          reverse:false,
          easing: "ease-in"
        }
       ).then();

   let imagecardViewMeal1 = new tabris.ImageView({
      top:0, height:200, width:150,image:{src:"img/card2.jpg"},scaleMode:"fill", id:"imagecardViewMeal1"
    }).appendTo(cardViewMeal1);


  let priceText1 = new tabris.TextView({
      left:10,top:165,
      font:"bold 22px roboto,noto",
      text:"1000 FCFA",
      textColor:themeColor,
     }).appendTo(cardViewMeal1);

  let nameMealText1 = new tabris.TextView({
      top:10, left:["#imagecardViewMeal1", 10],right:10,
      font:"22px roboto, noto",
      text:"Riz sauce Tomate",
      textColor:"#616161",
      maxLines:2,
      id:"nameMealText1"
  }).appendTo(cardViewMeal1);

  let descriptionMealText1 = new tabris.TextView({
      top:["#nameMealText1", 10], left:["#imagecardViewMeal1", 10],right:10,
      font:"18px roboto, noto",
      text:"Du bon riz parfumé avec de la sauce tomate et de fines epices.",
      textColor:"#757575",
      maxLines:6,
      id:"descriptionMealText1"
    }).appendTo(cardViewMeal1);




     let cardViewMeal2 = new tabris.Composite({
         top:425,left:5,right:5,height:200,background:"#fff",elevation:3,cornerRadius:3,transform:{scaleX:0.3,scaleY:0.3},opacity:0,
       }).on("tap", function()
        {
          this.background = "#e0e0e0";
          setTimeout(() =>{this.background = "#fff";},50);
        }).appendTo(scrollView);

       cardViewMeal2.animate({
          transform: {scaleX:1,scaleY:1},
          opacity:1,
           }, {
          delay:250,
          duration:150,
          repeat:0,
          reverse:false,
          easing: "ease-in"
        }
       ).then();

   let imagecardViewMeal2 = new tabris.ImageView({
      top:0, height:200, width:150,image:{src:"img/card3.jpg"},scaleMode:"fill", id:"imagecardViewMeal2"
    }).appendTo(cardViewMeal2);


  let priceText2 = new tabris.TextView({
      left:10,top:165,
      font:"bold 22px roboto,noto",
      text:"2000 FCFA",
      textColor:themeColor,
     }).appendTo(cardViewMeal2);

  let nameMealText2 = new tabris.TextView({
      top:10, left:["#imagecardViewMeal2", 10],right:10,
      font:"22px roboto, noto",
      text:"Roti de porc",
      textColor:"#616161",
      maxLines:2,
      id:"nameMealText2"
  }).appendTo(cardViewMeal2);

  let descriptionMealText2 = new tabris.TextView({
      top:["#nameMealText2", 10], left:["#imagecardViewMeal2", 10],right:10,
      font:"18px roboto, noto",
      text:"Delicieux roti de porc au fines herbes provincale.",
      textColor:"#757575",
      maxLines:6,
      id:"descriptionMealText2"
    }).appendTo(cardViewMeal2);
  
  
 };
