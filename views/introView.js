exports.create = () =>
 {
   "use strict";
   const themeColor = "#1976d2";
   let createnavigationView;
   let introNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
       introNavigationView.toolbarVisible = false;
   let introPage = new tabris.Page({
       background:themeColor
     }).on("disappear",function()
       {
         this.dispose();
       }).appendTo(introNavigationView);

   let scrollView = new tabris.ScrollView({
        left:0,right:0,top:0,bottom:0,background:themeColor
     }).appendTo(introPage);

   let logo = new tabris.ImageView({
       top:180, centerX:0,image:{src: "img/logo_efc.png"},scaleMode: "fit"
   }).appendTo(scrollView);

   let welcomeMessage = new tabris.TextView({
       top:["prev()", 50],left:10,right:10,textColor:"#fff",alignment:"center",font:"18px roboto,noto",
       text:"Le meilleur endroit pour commander vos plats préférés dans la ville de Douala et vous les faire livrer a domicile ou au bureau"
     }).appendTo(scrollView);

   let button = new tabris.Button({
       bottom:10,left:10,right:10,height:65,
       font:"16px roboto, noto",
       text:"Découvrir",
       textColor:themeColor,
       background:"#fff",
       elevation:0
     }).on("select", () =>
        {
          let homeView = require("./homeView.js");
              homeView.create();
         }).appendTo(scrollView);
 };
