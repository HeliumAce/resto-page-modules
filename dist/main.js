!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{logo.style.height="220px",logo.style.display="block",logo.style.margin="20px auto",o()},o=()=>{const e=document.createElement("nav"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button");header.appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(a),t.innerHTML="ABOUT US",n.innerHTML="MENU",a.innerHTML="CONTACT",e.setAttribute("id","nav"),t.setAttribute("id","aboutTab"),n.setAttribute("id","menuTab"),a.setAttribute("id","contactTab"),r()},r=()=>{const e=document.getElementById("nav").getElementsByTagName("button");for(let t=0;t<e.length;t++){e[t].setAttribute("class","tab")}},i=()=>{s(),c()},s=()=>{document.getElementById("main").innerHTML=""},c=()=>{d(),l(),u()},d=()=>{const e=document.createElement("img");e.setAttribute("id","promoImage"),e.setAttribute("src","https://raw.githubusercontent.com/HeliumAce/resto-page-modules/gh-pages/imgs/promoImage.jpg"),main.appendChild(e)},l=()=>{const e=document.createElement("div"),t=document.createElement("div");e.setAttribute("id","promoText"),t.setAttribute("id","quotes"),t.innerHTML="“It’s only twenty seats, how hard could it be?”<br>\n            “How do you get such wonderful flavours from such a little chef?”<br>\n            “Protein pancakes? Never heard of it. Can we all get an order?”",main.appendChild(e),e.appendChild(t)},u=()=>{const e=document.createElement("div");e.setAttribute("id","about"),e.innerHTML="<strong>It’s true that Joni's is a restaurant paradox.</strong> It is only 650 sq ft. The kitchen has no commercial cooking equipment. And yet, on any given evening, a passerby can smell facon on the air, see the smiling faces glow on the sidewalk and hear the laughter and banter of the patrons inside. It is a small restaurant that has created a large presence.<br><br>\n                Tucked in next to the historic Mouse Trap Theatre right in the heart of Picton, Joni's has felt at home as soon as the doors opened in March 2035. It is a restaurant that serves Mom inspired dishes, prepared with local flare, using fresh local ingredients.",promoText.appendChild(e)},m=[],p=()=>{let e=m.length;for(let t=0;t<=e;t++)m.pop();document.getElementById("main").innerHTML=""},h=()=>{g(),b(),f()},g=()=>{const e=document.createElement("div");e.setAttribute("id","menu"),main.appendChild(e)},b=()=>{const e=E("breakfast","Chocolate Pancakes","$12","Jumbo chocolate chips nestled deep in fluffy, gooey, pancake-y goodness"),t=E("breakfast","Mommy's Yogurt and Granola","$10","Homemade crunchy, sweet granola smothered in creamy vanilla yogurt"),n=E("breakfast","Facon and Eggs","$12",'Crispy veggie "Facon" and eggs any way you like \'em'),a=E("lunch","Mac and Cheese","$8","The classic. Macaroni noodles drenched in all the cheese"),o=E("lunch","Mushroom Pizza","$12",'All the "fun guys" you can imagine sandwiched between tomato sauce and cheese on a made in house crust'),r=E("lunch",'"Chicken" fingers and nuggets',"$10","Hot and crispy fingers and nuggets. Better than the real thing"),i=E("sides","Pickles","$5","Sweet and sour pickles"),s=E("sides","Oilves","$5","Marinated to perfection and pitted for your convenience"),c=E("sides","French Fries","$6","Classic, crispy fries with a side of ketchup and mayo"),d=E("sides","Tator Tots","$6","Golden, crunchy tots for when you've had enough fries"),l=E("drinks","Juice","$4","Apple, Orange, Pinneaple"),u=E("drinks","Milk","$8","Straight from the cows udder"),p=E("drinks","Chocolate Smoothie","$8","Chocolate, PB, banana. Can't beat it"),h=E("drinks","Fruit Smoothie","$8","Berries, spinach, yogurt, avocado, yum"),g=E("drinks","Beer (for Dad)","$7","A selection of local craft faves");m.push(e,t,n,a,o,r,i,s,c,d,l,u,p,h,g)},f=()=>{const e=["breakfast","lunch","sides","drinks"];for(let t=0;t<e.length;t++){let n=document.createElement("div");n.setAttribute("id",e[t]),n.setAttribute("class","menuCat"),n.innerHTML=e[t],menu.appendChild(n),y(n)}},y=e=>{for(let t=0;t<m.length;t++)e.id===m[t].getCategory()&&m[t].render()},E=(e,t,n,a)=>({render:()=>{const e=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");e.setAttribute("class","menuItem"),o.setAttribute("class","itemName"),r.setAttribute("class","itemPrice"),i.setAttribute("class","itemDescription"),o.innerHTML=t,r.innerHTML=n,i.innerHTML=a,e.appendChild(o),e.appendChild(r),e.appendChild(i),menu.appendChild(e)},getCategory:()=>e}),A=()=>{document.getElementById("main").innerHTML=""},C=()=>{const e=document.getElementById("main"),t=document.createElement("div"),n=document.createElement("div");t.setAttribute("id","contactInfo"),n.setAttribute("id","contactForm"),e.appendChild(t),e.appendChild(n),T(),v()},T=()=>{contactInfo.innerHTML="<p><strong>JONI'S COUNTY CAFE</strong><br>\n                    222 Fake St<br>\n                    Picton, ON<br>\n                    ABC DEF</p>\n                    <p><strong>OPEN: </strong>WEDNESDAY-SUNDAY 2PM TO 8PM</p>\n                    <p><strong>Phone: </strong>555-555-5555</p>\n                    <p><strong>Please fill out the form below</strong> with your inquiry and we'll be in touch</p>"},v=()=>{const e=document.createElement("label"),t=document.createElement("input"),n=document.createElement("label"),a=document.createElement("input"),o=document.createElement("label"),r=document.createElement("textarea"),i=document.createElement("button");t.setAttribute("type","text"),a.setAttribute("type","text"),r.setAttribute("id","messageInput"),r.setAttribute("rows","10"),i.setAttribute("id","contactButton"),e.innerHTML="YOUR NAME",n.innerHTML="YOUR EMAIL",o.innerHTML="YOUR MESSAGE",i.innerHTML="SEND",contactForm.appendChild(e),contactForm.appendChild(t),contactForm.appendChild(n),contactForm.appendChild(a),contactForm.appendChild(o),contactForm.appendChild(r),contactForm.appendChild(i)};(()=>{const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("img"),a=document.createElement("main");t.setAttribute("id","header"),n.setAttribute("id","logo"),n.setAttribute("src","https://raw.githubusercontent.com/HeliumAce/resto-page-modules/gh-pages/imgs/logo.png"),a.setAttribute("id","main"),e.appendChild(t),t.appendChild(n),e.appendChild(a)})(),a(),i();const M=e=>{switch(e){case 0:i();break;case 1:p(),h();break;case 2:A(),C()}};(()=>{const e=document.getElementById("nav").getElementsByTagName("button");for(let t=0;t<e.length;t++)e[t].setAttribute("class","tab"),e[t].addEventListener("click",e=>{M(t)})})()}]);