!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{logo.style.height="160px",logo.style.display="block",logo.style.margin="40px auto",r()},r=()=>{const e=document.createElement("nav"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button");header.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(a),t.innerHTML="ABOUT US",n.innerHTML="MENU",a.innerHTML="CONTACT",e.setAttribute("id","nav"),t.setAttribute("id","aboutTab"),n.setAttribute("id","menuTab"),a.setAttribute("id","contactTab"),i()},i=()=>{const e=document.getElementById("nav").getElementsByTagName("button");for(let t=0;t<e.length;t++){e[t].setAttribute("class","tab")}},o=()=>{s(),d()},s=()=>{document.getElementById("main").innerHTML=""},d=()=>{l(),c(),u()},l=()=>{const e=document.createElement("img");e.setAttribute("id","promoImage"),e.setAttribute("src","../imgs/promoImage.jpg"),main.appendChild(e)},c=()=>{const e=document.createElement("div"),t=document.createElement("div");e.setAttribute("id","promoText"),t.setAttribute("id","quotes"),t.innerHTML="“It’s only twenty seats, how hard could it be?”<br>\n            “How do you get such wonderful flavours in such a small kitchen?”<br>\n            “Mapo Tofu? Never heard of it. Can we all get an order?”",main.appendChild(e),e.appendChild(t)},u=()=>{const e=document.createElement("div");e.setAttribute("id","about"),e.innerHTML="It’s true that The Marans is a restaurant paradox. It is only 650 sq ft. The kitchen has no commercial cooking equipment. And yet, on any given evening, a passerby can smell curry on the air, see the chandeliers glow on the sidewalk and hear the laughter and banter of the patrons inside. It is a small restaurant that has created a large presence.<br><br>\n                Tucked in next to the historic Regent Theatre right in the heart of Picton, The Marans has felt at home as soon as the doors opened in March 2019. It is a restaurant that serves Internationally inspired dishes, prepared with local flare, using fresh local ingredients.",promoText.appendChild(e)},m=[],h=()=>{let e=m.length;for(let t=0;t<=e;t++)m.pop();document.getElementById("main").innerHTML=""},p=()=>{g(),b(),f(),setMenuStyles()},g=()=>{const e=document.createElement("div");e.setAttribute("id","menu"),main.appendChild(e)},b=()=>{const e=T("small plates","schnitzel on a bun","$10","Sugar Shack pork schnitzel, grainy mustard, mixed greens"),t=T("small plates","the marans deli sandwich","$10","Selection of soft and hard cured meats, mustard aioli, mixed greens"),n=T("sandwiches","toasted tomato and brie","$10","Vine-ripened tomato, Brie, soy ginger vinaigrette, mixed greens"),a=T("sandwiches","grilled cheese","$8","All the cheese"),r=T("sides","ham","$8","All the ham");m.push(e,t,n,a,r)},f=()=>{const e=["small plates","sandwiches","sides"];for(let t=0;t<e.length;t++){let n=document.createElement("div");n.setAttribute("id",e[t]),n.setAttribute("class","menuCat"),n.innerHTML=e[t],menu.appendChild(n),y(n)}},y=e=>{for(let t=0;t<m.length;t++)e.id===m[t].getCategory()&&m[t].render()},T=(e,t,n,a)=>({render:()=>{const e=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e.setAttribute("class","menuItem"),r.setAttribute("class","itemName"),i.setAttribute("class","itemPrice"),o.setAttribute("class","itemDescription"),r.innerHTML=t,i.innerHTML=n,o.innerHTML=a,e.appendChild(r),e.appendChild(i),e.appendChild(o),menu.appendChild(e)},getCategory:()=>e}),v=()=>{document.getElementById("main").innerHTML="CONTACT"};(()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("img"),a=document.createElement("main");t.setAttribute("id","header"),n.setAttribute("id","logo"),n.setAttribute("src","../imgs/logo.png"),a.setAttribute("id","main"),e.appendChild(t),t.appendChild(n),e.appendChild(a)})(),a(),o();const A=e=>{switch(e){case 0:o();break;case 1:h(),p();break;case 2:v(),updateMainContent()}};(()=>{const e=document.getElementById("nav").getElementsByTagName("button");for(let t=0;t<e.length;t++)e[t].setAttribute("class","tab"),e[t].addEventListener("click",e=>{A(t)})})()}]);