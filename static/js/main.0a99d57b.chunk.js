(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(4),l=s.n(n),o=(s(9),s(2)),r=s(0),i=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:" navbar navbar-expand-lg navbar-dark",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:"BMI Calculator"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})})]})})})},d=function(e){var t=e.BMI,s=e.BMIstatus,a=e.className,c=e.range;e.setRange;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"offcanvas offcanvas-bottom rounded-top",tabindex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",style:{opacity:"0.9"},children:[Object(r.jsxs)("div",{class:"offcanvas-header ",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"m-0",children:"Your BMI score"}),Object(r.jsx)("div",{class:"px-2 rounded-3 display-5",style:{backgroundColor:"lightskyblue"},children:Math.round(t)})]}),Object(r.jsxs)("div",{className:"m-4",children:[Object(r.jsx)("p",{className:"m-0",children:"Your category"}),Object(r.jsx)("span",{class:"position-absolute p-2 border border-light rounded-circle ".concat(a)}),Object(r.jsxs)("h6",{className:"ms-4",children:[s," "]})]})]}),Object(r.jsx)("div",{className:"d-flex justify-content-end",children:Object(r.jsx)("span",{className:"btn btn-dark px-2 py-0 me-2 fw-bold rounded-circle","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"i"})})]}),Object(r.jsx)("div",{class:"offcanvas-body py-0 ",children:Object(r.jsx)("div",{class:"",children:Object(r.jsx)("input",{type:"range",class:"form-range",min:"0",max:"100",value:c,id:"customRanges"})})})]})})},b=function(e){var t=e.setHeightUnit,s=e.setWeightUnit,a=e.setHeight,c=e.setWeight,n=e.height,l=e.weight,o=e.calculateBMI;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container text-light",children:[Object(r.jsxs)("div",{className:"row mb-2",children:[Object(r.jsxs)("div",{className:"form-group col-7 pe-1",children:[Object(r.jsx)("label",{className:"mt-2",children:"Height:"}),Object(r.jsx)("input",{name:"height",placeholder:"Height",value:n,onChange:function(e){return a(e.target.value)},style:{borderBottom:"solid black 2px",borderTop:"none",borderRight:"none",borderLeft:"none",boxShadow:"none"},className:"form-control bg-light py-2 col-6"})]}),Object(r.jsxs)("div",{className:"form-group col-5 ps-0",children:[Object(r.jsx)("label",{className:"mt-2",children:"Unit"}),Object(r.jsxs)("select",{className:"form-select form-control bg-light  py-2 col-6","aria-label":"Default select example",onChange:function(e){t(e.target.value)},style:{borderBottom:"solid black 2px",borderTop:"none",borderRight:"none",borderLeft:"none",boxShadow:"none"},children:[Object(r.jsx)("option",{value:"FeetAndInches",children:"Feet and Inches"}),Object(r.jsx)("option",{value:"Centimetres",children:"Centimetres"})]})]})]}),Object(r.jsxs)("div",{className:"row mt-2",children:[Object(r.jsxs)("div",{className:"form-group col-7 pe-1",children:[Object(r.jsx)("label",{className:"mt-2",children:"Weight:"}),Object(r.jsx)("input",{name:"weight",placeholder:"Weight",value:l,onChange:function(e){return c(e.target.value)},style:{borderBottom:"solid black 2px",borderTop:"none",borderRight:"none",borderLeft:"none",boxShadow:"none"},className:"form-control bg-light  py-2 col-6"})]}),Object(r.jsxs)("div",{className:"form-group col-5 ps-0",children:[Object(r.jsx)("label",{className:"mt-2",children:"Unit"}),Object(r.jsxs)("select",{className:"form-select form-control bg-light  py-2 col-6","aria-label":"Default select example",onChange:function(e){return s(e.target.value)},style:{borderBottom:"solid black 2px",borderTop:"none",borderRight:"none",borderLeft:"none",boxShadow:"none"},children:[Object(r.jsx)("option",{defaultValue:"Kilograms",children:"Kilograms"}),Object(r.jsx)("option",{value:"Pounds",children:"Pounds"})]})]})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-sm btn-light mt-2 px-3 py-2",onClick:function(){return o(n,l)},"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasBottom","aria-controls":"offcanvasBottom",style:{borderRadius:"6px"},children:Object(r.jsx)("small",{className:"fw-bold",children:"CALCULATE BMI"})})]})})},j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"container modal-dialog",style:{marginTop:"135px"},children:Object(r.jsxs)("div",{className:"modal-content p-3",children:[Object(r.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Info"}),Object(r.jsx)("p",{className:"small",children:"BMI is useful measurment for most people over 20 years. The result is an estimate and should be considered as a rough guide only as it does not take into account age, gender, ethnicity or body composition."}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(r.jsxs)("div",{className:"d-flex ",children:[Object(r.jsx)("div",{className:"px-1 me-2 bg-primary"}),Object(r.jsx)("small",{children:"Underweight"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:"-18.5"})})]}),Object(r.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(r.jsxs)("div",{className:"d-flex ",children:[Object(r.jsx)("div",{className:"px-1 me-2 bg-success"}),Object(r.jsx)("small",{children:"Healthy weight"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:"18.5 - 24.9"})})]}),Object(r.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(r.jsxs)("div",{className:"d-flex ",children:[Object(r.jsx)("div",{className:"px-1 me-2 bg-warning"}),Object(r.jsx)("small",{children:"Pre-obesity"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:"25.0 - 29.9"})})]}),Object(r.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(r.jsxs)("div",{className:"d-flex ",children:[Object(r.jsx)("div",{className:"px-1 me-2 bg-danger"}),Object(r.jsx)("small",{children:"Overweight"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:"30+"})})]})]}),Object(r.jsx)("p",{className:"text-primary text-end mx-4 fw-bold m-0",type:"button","data-bs-dismiss":"modal",children:"ok"})]})})})})},h=function(){var e=Object(a.useState)("FeetAndInches"),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(),l=Object(o.a)(n,2),h=l[0],m=l[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),u=g[0],O=g[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),v=f[0],N=f[1],y=Object(a.useState)(),w=Object(o.a)(y,2),M=w[0],B=w[1],C=Object(a.useState)(""),I=Object(o.a)(C,2),S=I[0],k=I[1],F=Object(a.useState)(""),L=Object(o.a)(F,2),R=L[0],T=L[1],U=Object(a.useState)(18),H=Object(o.a)(U,2),A=H[0],P=H[1];return console.log("Result:",Math.round(M)),Object(r.jsxs)("div",{style:{background:"linear-gradient(to bottom, #195eff, #8551da)",backgroundAttachment:"fixed"},children:[Object(r.jsx)(i,{}),Object(r.jsx)(b,{setHeightUnit:c,setWeightUnit:m,setHeight:O,setWeight:N,height:u,weight:v,calculateBMI:function(e,t){var a;B(null),console.log(e,t),console.log(e,t,s,h),"FeetAndInches"===s?(a=t/Math.pow(e/3.2808,2),B(t/Math.pow(e/3.2808,2))):"Centimetres"===s&&(B(t/Math.pow(e/100,2)),a=t/Math.pow(e/100,2)),console.log("Result:",a),console.log(A,"range"),a<18?(k("Underweight"),T("bg-primary"),P(a)):a>18&&a<=24?(k("Healthy weight"),P(a),T("bg-success")):a>24&&a<=30?(k("Pre-obesity"),P(a),T("bg-warning")):a>30&&(k("Overweight"),P(a),T("bg-danger"))}}),Object(r.jsx)(j,{}),Object(r.jsx)(d,{BMI:M,BMIstatus:S,className:R,range:A,setRange:P})]})};var m=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(h,{})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),x()},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.0a99d57b.chunk.js.map