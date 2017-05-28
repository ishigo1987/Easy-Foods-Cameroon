const themeColor = "#1976d2";
let navigationView = new tabris.NavigationView({
left: 0, top: 0, right: 0, bottom: 0, toolbarColor:themeColor, titleTextColor:"#fff"
}).appendTo(tabris.ui.contentView);
require("./modules/tabrisUi.js")(`dark`, `#0d47a1`, themeColor);
let efcUserInfos = localStorage.getItem("efcUserInfos");
if(efcUserInfos === null)
 {
   // connexion.js
   let introView = require("./views/introView.js");
       introView.create();
 }
else
 {
     // home.js
     let homePage = require("./views/home.js");
         homePage.create();
 }

