(this["webpackJsonpyarden-peretz-13-5-21"]=this["webpackJsonpyarden-peretz-13-5-21"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},42:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(14),s=c.n(i),l=(c(33),c(34),c(16)),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return e.length>0?(e=[],{city:t.city}):{city:t.city};default:return e}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return e.push(t.city),e;default:return e}},d=Object(l.a)({searchCity:o,addFavoriteCity:r}),j=Object(l.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=(c(35),c(1)),b=function(){var e=j.getState().addFavoriteCity,t=document.getElementById("fav_list");return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",id:"fav_list",onLoad:void(null!=t&&e.forEach((function(e){var c=document.createElement("div");c.className="col-sm-4 favorite",c.innerHTML=e.city,t.appendChild(c)})))})})},v=c(11),h=function(){return Object(u.jsx)("div",{className:"nav-bar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("h2",{children:"Weather App"})}),Object(u.jsxs)("li",{className:"nav-btns",children:[Object(u.jsx)(v.b,{id:"favorites_btn",to:"/Favorites",children:"FAVORITES"}),Object(u.jsx)(v.b,{className:"nav-btns",id:"home_btn",to:"/",children:"HOME"})]})]})})},m=(c(42),c(10)),O=function(e){return{type:"SEARCH",city:e}},x=c(9),y=c.n(x),p=[],f="",_=function(){return f},g=function(){var e=Object(m.c)((function(e){return e.city})),t=Object(m.b)(),c="";return Object(u.jsxs)("div",{className:"search_bar",children:[Object(u.jsx)("div",{children:"flotz"}),Object(u.jsx)("p",{children:"Search City : "}),Object(u.jsx)("input",{type:"text",id:"city_name",value:e,onChange:function(){var e,n=document.getElementById("city_name");""!=(c=n.value)&&(t(O(c)),e=c,y.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=dfaWC3wisjfgrAGq0lMixKHo0SRq4GDl&q=".concat(e)).then((function(e){var t=[];e.data.forEach((function(e){var c=e.LocalizedName;p.push(c),t.push(c)}));for(var c=0;c<p.length;c++)!1===t.includes(p[c])&&p.splice(c,1);console.log("res.data array : "+t)})).catch((function(e){return e}))),""===n.value&&t(O(c=""));var a=document.getElementById("ac_results");p.length>0&&p.map((function(e){var t=document.createElement("option");t.innerHTML=e,a.appendChild(t)}));var i=a.getElementsByTagName("option");if(null!=i)for(var s=0;s<i.length;s++)void 0!=i[s]&&!1===p.includes(i[s].value)&&i[s].remove();console.log(p)},className:"basicAutoComplete"}),Object(u.jsx)("br",{}),Object(u.jsxs)("select",{id:"ac_results",onChange:function(){var e=document.getElementById("city_name"),t=document.getElementById("ac_results"),c=t.options[t.selectedIndex].value;f=c,null!=e&&(e.value=c)},children:[Object(u.jsx)("option",{children:"tel aviv"}),Object(u.jsx)("option",{children:"gaza"}),Object(u.jsx)("option",{children:"yeruham"})]})]})},N=(c(61),function(){var e=j.getState();console.log(e)}),E=function(){Object(m.c)((function(e){return e.counter}));var e=Object(m.b)();return setInterval((function(){var e=document.getElementById("display_city_name");void 0!=_()&&""!=_()&&null!=_()&&null!=e&&(e.innerText=_())}),500),Object(u.jsxs)("div",{className:"display_cities",children:[Object(u.jsx)("input",{type:"button",onClick:N,value:"show_store"}),Object(u.jsx)("div",{className:"top_section",children:Object(u.jsxs)("ul",{className:"top_section_list",children:[Object(u.jsx)("li",{children:Object(u.jsx)("div",{className:"tlv_default"})}),Object(u.jsxs)("li",{className:"city_details",children:[Object(u.jsx)("h5",{className:"city_name",id:"display_city_name",children:"Tel Aviv"}),Object(u.jsx)("p",{className:"city_temp",children:"38 C"})]}),Object(u.jsx)("li",{className:"add_favorites",children:Object(u.jsx)("input",{type:"button",onClick:function(){return function(){var t=j.getState().searchCity;e({type:"ADD_FAVORITE",city:t})}()},value:"Add to Favorites"})})]})}),Object(u.jsx)("h2",{className:"dsc_heading",children:"scattered clouds"}),Object(u.jsx)("div",{className:"display_days_and_degrees",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-3 day_box"}),Object(u.jsx)("div",{className:"col-sm-3 day_box"}),Object(u.jsx)("div",{className:"col-sm-3 day_box"}),Object(u.jsx)("div",{className:"col-sm-3 day_box"}),Object(u.jsx)("div",{className:"col-sm-3 day_box"})]})})]})},C=c(3);var I=function(){return Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(h,{}),Object(u.jsx)(g,{}),Object(u.jsxs)(C.b,{children:[Object(u.jsx)(b,{path:"/Favorites",component:b}),Object(u.jsx)(E,{path:"/",component:E})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m.a,{store:j,children:Object(u.jsx)(v.a,{children:Object(u.jsx)(I,{})})})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.5e895c05.chunk.js.map