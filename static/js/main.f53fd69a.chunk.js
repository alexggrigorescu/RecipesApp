(this.webpackJsonprecipesapp=this.webpackJsonprecipesapp||[]).push([[0],{11:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),r=c(7),s=c.n(r),a=(c(26),c(27),c(28),c(19)),o=(c(29),c(18)),j=c(4),l=c(20),d=(c(35),c(11),c(2));function u(e){return Object(d.jsx)("button",{className:"button",onClick:e.onClick,children:e.text})}var b=n.a.createContext();function h(){return Object(i.useContext)(b)}function p(e){var t=e.children,c=Object(i.useState)(0),n=Object(j.a)(c,2),r=n[0],s=n[1],a=Object(i.useState)(""),o=Object(j.a)(a,2),l={recipeIndex:r,setRecipeIndex:s,recipe:o[0],setRecipe:o[1]};return Object(d.jsx)(b.Provider,{value:l,children:t})}var O=["id","title","image","ingredients"];function x(e){e.id;var t=e.title,c=e.image,n=e.ingredients,r=Object(l.a)(e,O),s=Object(i.useState)(!0),a=Object(j.a)(s,2),o=(a[0],a[1],h().setRecipe);return Object(d.jsxs)("div",{className:"card-wrapper",children:[Object(d.jsx)("img",{className:"preview-image",src:c,alt:"Recipe Preview"}),Object(d.jsx)("h4",{id:"carousel-card-title",children:t}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"body-text",children:n.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))}),Object(d.jsx)("div",{className:"recipe-button",children:Object(d.jsx)(u,{text:"Show details",onClick:function(){o(r),setTimeout((function(){return window.scrollBy({top:900,left:0,behavior:"smooth"})}),200)}})})]})}var m=[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:1,pagination:!1},{width:850,itemsToShow:3},{width:1150,itemsToShow:4,itemsToScroll:1},{width:1450,itemsToShow:5},{width:1750,itemsToShow:5}];function f(e){var t=e.recipes;return Object(d.jsxs)("div",{id:"carousel-container",children:[Object(d.jsx)("h1",{id:"title-text",children:"Recipes..."}),Object(d.jsx)(o.a,{breakPoints:m,children:t.map((function(e,t){return Object(d.jsx)(x,Object(a.a)({id:t,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredientLines},e),t)}))})]})}c(37);function g(){console.log("recipe details LOG");var e=h().recipe,t=function(e,t){return parseFloat(e).toFixed(t)};return Object(d.jsx)(d.Fragment,{children:e&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{id:"recipe-title",children:e.recipe.label}),Object(d.jsxs)("div",{id:"details-container",children:[Object(d.jsxs)("div",{id:"info-allergens-container",children:[Object(d.jsxs)("div",{className:"background-recipe-cards",id:"recipe-information-container",children:[Object(d.jsxs)("h2",{id:"recipe-cuisine",children:["Cuisine: ",e.recipe.cuisineType]}),Object(d.jsxs)("h4",{children:["Calories: ",t(e.recipe.calories,2)]}),Object(d.jsxs)("p",{children:["Quantity: ",t(e.recipe.totalWeight,2)]}),Object(d.jsx)("div",{className:"background-recipe-cards",id:"time-container",children:Object(d.jsxs)("span",{children:["Time to make: ",t(function(){var t=parseInt(e.recipe.totalTime);return t>0?"".concat(t/60):"unknown"}(),1)," hours"]})})]}),Object(d.jsxs)("div",{className:"background-recipe-cards",id:"allergens-container",children:[Object(d.jsx)("span",{children:"Allergens"}),Object(d.jsx)("ul",{children:e.recipe.cautions.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]}),Object(d.jsxs)("div",{className:"background-recipe-cards",id:"ingredients-container",children:[Object(d.jsx)("span",{children:"Ingredients:"}),Object(d.jsx)("ul",{children:e.recipe.ingredientLines.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}))})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"background-recipe-cards",id:"nutritionFacts-container",children:[Object(d.jsx)("span",{children:"Nutrition Facts"}),Object(d.jsx)("ul",{children:e.recipe.digest.map((function(e,c){return Object(d.jsx)("li",{children:"".concat(e.label," : ").concat(t(e.total,2)," ").concat(e.unit)},c)}))})]}),Object(d.jsx)("img",{id:"image-preview",src:e.recipe.image,alt:"Recipe Preview"})]})]})})}var v=n.a.createContext();function w(){return Object(i.useContext)(v)}function S(e){var t=e.children,c=Object(i.useState)([]),n=Object(j.a)(c,2),r=n[0],s=n[1],a=Object(i.useState)("random"),o=Object(j.a)(a,2),l=o[0],u=o[1],b={recipes:r,getRecipes:function(){return fetch("https://api.edamam.com/search?q=".concat(l,"&app_id=").concat("4e26749c","&app_key=").concat("a6e7bc7515cc4ef974fc8fcd4bee8121")).then((function(e){return e.json()})).then((function(e){return s(e.hits)}))},searchParam:l,setSearchParam:u};return Object(d.jsx)(v.Provider,{value:b,children:t})}function N(e){e.showDetails;var t=w(),c=t.recipes,n=t.getRecipes;return Object(i.useEffect)((function(){n(),console.log("effect called with function getRecipes")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{recipes:c}),Object(d.jsx)(g,{})]})}c(38);var k=c.p+"static/media/logo.d272fbf6.png",C=c(17),T=c.n(C);c(39);function F(){var e=Object(i.useState)("random"),t=Object(j.a)(e,2),c=t[0],n=t[1],r=w(),s=r.searchParam,a=r.setSearchParam,o=r.getRecipes;return Object(i.useEffect)((function(){o()}),[s]),Object(d.jsxs)("div",{className:"searchBox",children:[Object(d.jsx)("input",{className:"searchInput",type:"text",placeholder:"Search recipe",onChange:function(e){var t=e.target.value;return n(t)}}),Object(d.jsx)("button",{className:"searchButton",onClick:function(){if(0===c.length)return alert("Empty field");a(c)},children:Object(d.jsx)(T.a,{})})]})}function P(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("img",{id:"logo-image",src:k,alt:"Recipe App"}),Object(d.jsx)(F,{})]})}var R=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(S,{children:[Object(d.jsx)(P,{}),Object(d.jsx)(p,{children:Object(d.jsx)(N,{})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.f53fd69a.chunk.js.map