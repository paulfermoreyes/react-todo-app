(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(18),i=n.n(a),r=(n(24),n(14)),s=n(8),d=(n(25),n(26),n(31)),j=n(19),l=n(33),u=n(32),b=n(34),x=n(35),h=n(0);var O=function(e){var t=e.addTodo,n=o.a.useState(""),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(h.jsx)(u.a,{onSubmit:function(e){e.preventDefault(),a&&(t(a),i(""))},children:Object(h.jsxs)(b.a,{className:"mb-5",children:[Object(h.jsx)(u.a.Control,{type:"text",className:"input",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Add new todo"}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})};var p=function(e){var t=e.todo,n=e.index,c=e.markTodo,o=e.removeTodo;return Object(h.jsxs)("div",{className:"todo",children:[Object(h.jsx)("div",{style:{width:"18px"},children:Object(h.jsx)(u.a.Check,{type:"checkbox",id:"todo-checkbox",onClick:function(){return c(n)}})}),Object(h.jsx)("span",{style:{textDecoration:t.isDone?"line-through":""},children:t.text}),Object(h.jsx)("div",{style:{margin:"90px"},children:Object(h.jsx)(x.a,{variant:"outline-danger",size:"sm",onClick:function(){return o(n)},children:"\u2715"})})]})};var v=function(){var e=o.a.useState([{text:"This is a sample todo",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=function(e){var t=Object(r.a)(n);t[e].isDone=!t[e].isDone,c(t)},i=function(e){var t=Object(r.a)(n);t.splice(e,1),c(t)};return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"text-center mb-4",children:"Todo List"}),Object(h.jsx)(O,{addTodo:function(e){var t=[].concat(Object(r.a)(n),[{text:"text",isDone:!1}]);c(t)}}),n.map((function(e,t){return Object(h.jsx)(d.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(l.a.Body,{children:Object(h.jsx)(p,{index:t,todo:e,markTodo:a,removeTodo:i},t)})})})})}))]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.11d1c9df.chunk.js.map