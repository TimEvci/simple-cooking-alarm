(this["webpackJsonpsimple-cooking-alarm"]=this["webpackJsonpsimple-cooking-alarm"]||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(0),a=n.n(c),o=n(10),i=n.n(o),l=n(122),s=n(123),j=n(125),m=n(119),u=n(47),b=n(113),d=n(127),p=n(114),h=Object(u.a)({overrides:{MuiSvgIcon:{root:{fontSize:"clamp(2rem, 5vw,3rem)",color:"#000"}},MuiInputBase:{root:{height:"clamp(2.5rem,4vh,4rem)",fontSize:"clamp(1.5rem,3vw,2rem)",width:"clamp(4rem,8vw,5.2rem)"}},MuiFormHelperText:{root:{textAlign:"center",fontSize:"clamp(0.6rem,1.5vw,0.75rem)",color:"#000"}}}}),O=Object(b.a)();h=Object(d.a)(h,{factor:3});var x=Object(p.a)({root:{background:"#032b43",height:"100vh"},heading:{color:"#e5e4e4",marginBottom:"3rem"},timer:{background:"#808080",padding:"2rem 3.2rem",borderRadius:"8px"},card:{background:"#e5e4e4",borderRadius:20},form:{margin:"2rem auto 1.5rem"}}),f=n(52),v=n(116),g=n(118),I=n(120),k=n(121),w=n(124),S=n(126),y=n(53),C=n(65),M=n(61),N=n.n(M),R=[/\d/,/\d/,":",/[0-5]/,/\d/];var z=function(e){var t=e.inputRef,n=Object(C.a)(e,["inputRef"]);return Object(r.jsx)(N.a,Object(y.a)(Object(y.a)({},n),{},{ref:function(e){t(e?e.inputElement:null)},mask:R}))},B=n(62),F=n.n(B),T=n(63),A=n.n(T),D=n(64),E=n.n(D),J=function(){var e=Object(c.useRef)(0),t=Object(c.useState)("00:00"),n=Object(f.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(f.a)(i,2),s=l[0],u=l[1],b=x(),d=function(e){var t=e.split(":");return 60*parseInt(t[0],10)+(t[1]?parseInt(t[1],10):0)}(a);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v.a,{className:b.card,component:"section",children:Object(r.jsx)(g.a,{children:Object(r.jsxs)(j.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",m:3,children:[Object(r.jsx)(m.a,{variant:"h1",component:"h2",className:b.timer,children:""===a?"00:00":a}),Object(r.jsx)(I.a,{className:b.form,component:"form",children:Object(r.jsx)(k.a,{in:!s,timeout:800,children:Object(r.jsx)(w.a,{type:"text",value:a,helperText:"Set the timer",InputProps:{inputComponent:z},onChange:function(e){var t=e.target.value;o(t)}})})}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(S.a,{"aria-label":"play-pause",onClick:function(){u(!s),s||0===d?(u(!1),clearInterval(e.current)):e.current=window.setInterval((function(){d>0?d-=1:(clearInterval(e.current),u(!1),alert("Time is up!!!")),o(function(e){var t=e%60,n=Math.floor(e/60);return"".concat(n<10?"0".concat(n):n,":").concat(t<10?"0".concat(t):t)}(d))}),1e3)},children:s?Object(r.jsx)(F.a,{}):Object(r.jsx)(A.a,{})}),Object(r.jsx)(S.a,{"aria-label":"reset",onClick:function(){o("00:00"),u(!1),clearInterval(e.current)},children:Object(r.jsx)(E.a,{})})]})]})})})})},H=function(){var e=x();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{}),Object(r.jsx)(s.a,{theme:O,children:Object(r.jsx)(s.a,{theme:h,children:Object(r.jsxs)(j.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",component:"section",className:e.root,children:[Object(r.jsx)(m.a,{variant:"h3",component:"h1",className:e.heading,children:"Simple Cooking Alarm"}),Object(r.jsx)(J,{})]})})})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1611f539.chunk.js.map