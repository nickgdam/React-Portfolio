(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{60:function(e,t,i){},61:function(e,t,i){},91:function(e,t,i){"use strict";i.r(t);var c=i(2),a=i(0),s=i(26),n=i.n(s),r=(i(60),i(23)),l=i(8),o=i(14),d=i(12),j=i(11),m=(i.p,i(61),i(28)),b=i(54),u=i(24),h=i(6),x=(i(62),i(19)),p=i(15),O=i(17);var g=function(){return Object(c.jsx)("footer",{className:"dog",children:Object(c.jsx)(O.a,{children:Object(c.jsxs)(x.a,{className:"justify-content-between p-3 footer",children:[Object(c.jsx)(p.a,{className:"p-0",md:3,sm:12,children:"Nick Damario"}),Object(c.jsx)(p.a,{className:"p-0 d-flex justify-content-end",md:3,children:"This site created by Nick Damario"})]})})})},f=i(50);var k=function(e){return Object(c.jsx)(f.a,{className:"bg-transparent jumbotron-fluid p-0 bear",children:Object(c.jsx)(O.a,{fluid:!0,children:Object(c.jsx)(x.a,{className:"justify-content-center py-5",children:Object(c.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(c.jsx)("h1",{children:e.title}),e.subTitle&&Object(c.jsx)("h3",{children:e.subTitle}),e.text&&Object(c.jsx)("h3",{children:e.text})]})})})})},v=i(25),N=i.p+"static/media/employeetracker.3357d2d5.png",y=i.p+"static/media/hot-restaurant.1960c5e1.png",T=i.p+"static/media/trailmix.d943ac74.png",w=i.p+"static/media/NutriVice.e8d971f9.png",S=i.p+"static/media/BudgetTracker.5f6dee0d.png",D=i.p+"static/media/weatherdashboard.cec72e8c.png",C=i.p+"static/media/workday.6918731e.png",I=i.p+"static/media/passwordgenerator.7219a819.png",P=i.p+"static/media/notetaker.05405372.png",A=i(40);var E=function(e){var t=Object(A.b)({opacity:1,from:{opacity:0}});return Object(c.jsxs)(A.a.div,{className:"nick-card-info",style:t,children:[Object(c.jsx)("p",{className:"nick-card-title",children:e.title}),Object(c.jsx)("p",{className:"nick-card-sub-title",children:e.subTitle}),Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var F=function(e){return Object(c.jsxs)("div",{className:"d-inline-block nick-card",onClick:function(t){return e.click(e.items)},children:[Object(c.jsx)("img",{className:"nick-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(c.jsx)(E,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},R=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var i=Object(v.a)(a.state.items);i[e].selected=!i[e].selected,i.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:i})},a.makeItems=function(e){return e.map((function(e){return Object(c.jsx)(F,{item:e,click:function(t){return a.handleCardClick(e.id,t)}},e.id)}))},a.state={items:[{id:0,title:"Nick Damario",imgSrc:S,subTitle:"Budget Tracker",link:"https://fierce-mesa-93878.herokuapp.com/",selected:!1},{id:1,title:"Nick Damario",imgSrc:w,subTitle:"NutriVice",link:"https://nifty--note-taker.herokuapp.com/",selected:!1},{id:2,title:"Nick Damario",imgSrc:T,subTitle:"Trail Mixer App",link:"https://lucasbryg.github.io/Group-Project-1/",selected:!1},{id:3,title:"Nick Damario",imgSrc:D,subTitle:"Weather Forcast App",link:"https://nickgdam.github.io/Homework-6/",selected:!1},{id:4,title:"Nick Damario",imgSrc:C,subTitle:"Work Day Planner",link:"https://nickgdam.github.io/Homework5/",selected:!1},{id:5,title:"Nick Damario",imgSrc:I,subTitle:"Password Generator",link:"https://nickgdam.github.io/Homework-3/",selected:!1},{id:6,title:"Nick Damario",imgSrc:P,subTitle:"Nifty Note Taker",link:"https://nifty--note-taker.herokuapp.com/",selected:!1},{id:7,title:"Nick Damario",imgSrc:y,subTitle:"Restaraunt Reservation app",link:"http://hot-restaurant.herokuapp.com/tables",selected:!1},{id:8,title:"Nick Damario",imgSrc:N,subTitle:"Employee Tracker App",link:"https://github.com/nickgdam/Employee-Tracker",selected:!1}]},a}return Object(o.a)(i,[{key:"render",value:function(){return Object(c.jsx)(O.a,{fluid:!0,children:Object(c.jsx)(x.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),i}(a.Component);var B=function(e){return Object(c.jsxs)("div",{className:"bear",children:[Object(c.jsx)(k,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(c.jsx)(R,{})]})};var H=function(e){return Object(c.jsx)("div",{className:"bear",children:Object(c.jsx)(O.a,{className:"",fluid:!0,children:Object(c.jsx)(x.a,{className:"justify-content-center",children:Object(c.jsx)(p.a,{md:8,children:e.children})})})})},V=i.p+"static/media/image-1.f7e5e7dd.jpg";var W=function(e){return Object(c.jsxs)("div",{className:"bear",children:[Object(c.jsx)(k,{title:e.title}),Object(c.jsxs)(H,{children:["Welcome to my page!  My Name is Nick Damario and my focus is full stack web development.  I graduated from Johns Hopkins University Full Stack Coding Bootcamp and I'm currntly looking to land an entry level job, where I would be able to continue working on my skills and adding to my resume.  Since Graduating from highschool I've worked a few retail and warehouse jobs, but now I'm shifting my focus on a starting a new sustainable carreer in Web Developement.",Object(c.jsx)("p",{children:Object(c.jsx)("a",{target:"_blank",href:"https://docs.google.com/document/d/1RbAiQSEeRK7YalVLxs3tqAVkrLztowV120E1OEIvivU/edit?usp=sharing",children:"Resume"})}),Object(c.jsx)("img",{src:V})]})]})},_=i(53),L=(i(63),i(51)),G=i.n(L);function J(){return Object(c.jsx)("div",{className:"bear",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Contact"}),Object(c.jsx)("div",{children:" Enter your information below to email me directly"}),Object(c.jsx)(_.a,{onSubmit:function(e){e.preventDefault(),G.a.sendForm("service_um28d5e","template_j0b6ffh",e.target,"user_cjSDeSAXR9c4P9Ui9Olr3").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:Object(c.jsxs)("div",{className:"row pt-t mx-auto",children:[Object(c.jsxs)("div",{className:"col-8 form-group mx-auto",children:[Object(c.jsx)("div",{children:"Subject"}),Object(c.jsx)("input",{type:"text",name:"subject"})]}),Object(c.jsxs)("div",{className:"col-8 form-group pt-2 mx-auto",children:[Object(c.jsx)("div",{children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name"})]}),Object(c.jsxs)("div",{className:"col-8 form-group pt-2 mx-auto",children:[Object(c.jsx)("div",{children:"Email"}),Object(c.jsx)("input",{type:"email",name:"email"})]}),Object(c.jsxs)("div",{className:"col-8 form-group pt-2 mx-auto",children:[Object(c.jsx)("div",{children:"Message"}),Object(c.jsx)("textarea",{type:"text",name:"message"})]}),Object(c.jsx)("div",{className:"col-8 pt-3 mx-auto",children:Object(c.jsx)("input",{type:"submit",value:"Send",className:"btn-primary"})})]})})]})})}var M=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var c;return Object(l.a)(this,i),(c=t.call(this,e)).state={title:"Nick Damario",header:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:Object(r.a)({title:"Portfolio",text:"Projects",subTitle:"check my stuff!"},"text","Check out my Projects below!"),about:{title:"About"},contact:{title:"Contact"},landing:{title:"Welcome to my page!",text:""}},c}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)(m.a,{className:"secondary dog",bg:"",expand:"lg",children:[Object(c.jsx)(m.a.Brand,{children:"Nick Damario"}),Object(c.jsx)(m.a.Toggle,{className:"border-0","aria-control":"navbar-toggle"}),Object(c.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(c.jsxs)(b.a,{className:"ml-auto",children:[Object(c.jsx)(u.c,{className:"nav-link",to:"/",children:"Home"}),Object(c.jsx)(u.c,{className:"nav-link",to:"/about",children:"About"}),Object(c.jsx)(u.c,{className:"nav-link",to:"/contact",children:"Contact"})]})})]})}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subtitle,text:e.state.home.text})}}),Object(c.jsx)(h.a,{path:"/home",exact:!0,render:function(){return Object(c.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subtitle,text:e.state.home.text})}}),Object(c.jsx)(h.a,{path:"/React-Portfolio",exact:!0,render:function(){return Object(c.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subtitle,text:e.state.home.text})}}),Object(c.jsx)(h.a,{path:"/about",render:function(){return Object(c.jsx)(W,{title:e.state.about.title})}}),Object(c.jsx)(h.a,{path:"/contact",render:function(){return Object(c.jsx)(J,{title:e.state.contact.title})}})]}),Object(c.jsx)("div",{children:Object(c.jsx)(g,{})})]})})}}]),i}(a.Component),U=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,94)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),s(e),n(e)}))};i(90);n.a.render(Object(c.jsx)(u.b,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),U()}},[[91,1,2]]]);
//# sourceMappingURL=main.f693b09c.chunk.js.map