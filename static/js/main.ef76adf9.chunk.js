(this["webpackJsonpsolar-system"]=this["webpackJsonpsolar-system"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),i=a.n(s),c=a(2),o=a(3),u=a(5),j=a(4),d=a(0),l=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Sistema Solar"})})}}]),a}(n.Component),b=l,m=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.year,n=e.country,r=e.destination;return Object(d.jsxs)("div",{className:"mission-card",children:[Object(d.jsx)("h4",{className:"name-planet",children:t}),Object(d.jsxs)("p",{className:"mission-info",children:[Object(d.jsx)("i",{class:"fas fa-star"})," ",a]}),Object(d.jsxs)("p",{className:"mission-info",children:[Object(d.jsx)("i",{class:"fas fa-flag"})," ",n]}),Object(d.jsxs)("p",{className:"mission-info",children:[Object(d.jsx)("i",{class:"fas fa-space-shuttle"})," ",r]})]})}}]),a}(n.Component),p=m,O=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.headline;return Object(d.jsx)("h2",{children:e})}}]),a}(n.Component),y=O,h="Estados Unidos",f="URSS",x=[{name:"Apollo 11",year:"1960",country:h,destination:"Lua"},{name:"Voyager 1",year:"1977",country:h,destination:"Espa\xe7o interestelar"},{name:"Mars Pathfinder",year:"1996",country:h,destination:"Marte"},{name:"Esta\xe7\xe3o Internacional Espacial",year:"1998",country:"Estados Unidos e R\xfassia",destination:"\xd3rbita terrestre"},{name:"Kepler",year:"2009",country:h,destination:"Espa\xe7o interestelar"},{name:"Cassini-Huygens",year:"2009",country:"Estados Unidos e Uni\xe3o Europeia",destination:"Saturno"},{name:"Mariner 2",year:"1962",country:h,destination:"V\xeanus"},{name:"Venera 4",year:"1967",country:f,destination:"V\xeanus"},{name:"Mariner 5",year:"1967",country:h,destination:"V\xeanus"},{name:"Mariner 10",year:"1975",country:h,destination:"V\xeanus"},{name:"Venera 16",year:"1983",country:f,destination:"V\xeanus"},{name:"MESSENGER",year:"2004",country:h,destination:"Merc\xfario"},{name:"Genesis",year:"2001",country:h,destination:"Terra"},{name:"2001 Mars Odyssey",year:"2001",country:h,destination:"Marte"},{name:"Mars Surveyor 98 Lander",year:"1999",country:h,destination:"Marte"},{name:"Nozomi (Planeta B)",year:"1998",country:"Jap\xe3o",destination:"Marte"},{name:"Fobos 1",year:"1988",country:f,destination:"Marte"},{name:"Fobos 2",year:"1988",country:f,destination:"Marte"},{name:"Galileo",year:"1989",country:h,destination:"J\xfapiter"},{name:"Cassini/Huygens",year:"1997",country:"Estados Unidos e Europa",destination:"Saturno"}],v=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{"data-testid":"missions",children:[Object(d.jsx)(y,{headline:"Miss\xf5es"}),Object(d.jsx)("ul",{className:"missions",children:x.map((function(e){var t=e.name,a=e.year,n=e.country,r=e.destination;return Object(d.jsx)("li",{children:Object(d.jsx)(p,{name:t,year:a,country:n,destination:r})},t)}))})]})}}]),a}(n.Component),g=v,M=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.planetName,a=e.planetImage;return Object(d.jsxs)("div",{className:"planet-card",children:[Object(d.jsx)("img",{src:a,alt:"Planeta ".concat(t),className:"img-planet"}),Object(d.jsx)("p",{className:"name-planet",children:t})]})}}]),a}(n.Component),N=M,k=[{name:"Merc\xfario",image:a.p+"static/media/Mercurio.a7105a56.png"},{name:"V\xeanus",image:a.p+"static/media/Venus.397fdee2.png"},{name:"Terra",image:a.p+"static/media/Terra.990ac782.png"},{name:"Marte",image:a.p+"static/media/Marte.6cae79d3.png"},{name:"J\xfapiter",image:a.p+"static/media/Jupiter.529cdbe0.png"},{name:"Saturno",image:a.p+"static/media/Saturno.00b7295f.png"},{name:"Urano",image:a.p+"static/media/Urano.607cb33c.png"},{name:"Netuno",image:a.p+"static/media/Netuno.48cf14b7.png"}],E=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{"data-testid":"solar-system",children:[Object(d.jsx)(y,{headline:"Planetas"}),Object(d.jsx)("ul",{className:"planets",children:k.map((function(e){var t=e.name,a=e.image;return Object(d.jsx)("li",{children:Object(d.jsx)(N,{planetName:t,planetImage:a})},t)}))})]})}}]),a}(n.Component),S=E,C=(a(13),a(14),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{id:"stars"}),Object(d.jsx)("div",{id:"stars2"}),Object(d.jsx)("div",{id:"stars3"})]})}}]),a}(n.Component)),V=C,w=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"footer",children:[Object(d.jsxs)("div",{id:"icones-sociais",children:[Object(d.jsx)("a",{href:"https://github.com/mateusturola",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-github-square"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/mateus-turola/",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})}),Object(d.jsx)("a",{href:"https://wa.me/5524988545652",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-whatsapp-square"})})]}),Object(d.jsxs)("p",{children:["Desenvolvido por ",Object(d.jsx)("a",{href:"https://mateusturola.github.io/",target:"blank",children:"Mateus Turola"})]})]})}}]),a}(n.Component),U=w,J=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(V,{}),Object(d.jsx)(b,{}),Object(d.jsx)(S,{}),Object(d.jsx)(g,{}),Object(d.jsx)(U,{})]})}}]),a}(n.Component),I=J;i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ef76adf9.chunk.js.map