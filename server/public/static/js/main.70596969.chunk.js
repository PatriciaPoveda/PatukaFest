(this["webpackJsonppatuky__booky-web"]=this["webpackJsonppatuky__booky-web"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n(16),r=n.n(c),i=(n(23),n(2)),l=n(3),o={get:function(e){var t=JSON.parse(localStorage.getItem(e));return null!==t?t:""},remove:function(e){localStorage.removeItem(e)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"login__title title",children:"Inicia sesi\xf3n"}),Object(s.jsxs)("form",{action:"",className:"login__form form",onSubmit:function(t){t.preventDefault(),e.handlesignIn({userName:c,password:u}),t.target.reset()},children:[Object(s.jsx)("label",{htmlFor:"name",className:"login__form--label label",children:"Introduce tu usuario"}),Object(s.jsx)("input",{type:"text",id:"name",placeholder:"Ej: Laura",className:"login__form--input input",onChange:function(e){r(e.target.value)},required:!0}),Object(s.jsx)("label",{htmlFor:"password",className:"login__form--label label",children:"Introduce tu contrase\xf1a"}),Object(s.jsx)("input",{type:"password",id:"password",className:"login__form--input input",onChange:function(e){j(e.target.value)},required:!0}),Object(s.jsx)("input",{type:"submit",value:"Inicia sesi\xf3n",className:"login__form--button btn"})]}),Object(s.jsx)("p",{className:"confirmUser__text",children:e.loginError})]})},j=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1],d=Object(a.useState)(""),m=Object(i.a)(d,2),b=m[0],h=m[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{className:"login__title title",children:"Crear Usuario"}),Object(s.jsxs)("form",{action:"",className:"login__form form",onSubmit:function(t){t.preventDefault(),u===b&&(e.handleSignUp({userName:c,password:u}),t.target.reset())},children:[Object(s.jsx)("label",{htmlFor:"name",className:"login__form--label label",children:"Introduce un usuario"}),Object(s.jsx)("input",{type:"text",id:"name",placeholder:"Ej: Laura",className:"login__form--input input",onChange:function(e){r(e.target.value)},required:!0}),Object(s.jsx)("label",{htmlFor:"password",className:"login__form--label label",children:"Introduce una contrase\xf1a"}),Object(s.jsx)("input",{type:"password",id:"password",className:"login__form--input input",onChange:function(e){j(e.target.value)},required:!0}),Object(s.jsx)("label",{htmlFor:"password",className:"login__form--label label",children:"Repite la contrase\xf1a"}),Object(s.jsx)("input",{type:"password",id:"password",className:"login__form--input input",onChange:function(e){h(e.target.value)},required:!0}),Object(s.jsx)("input",{type:"submit",value:"Crear usuario",className:"login__form--button btn"})]}),Object(s.jsx)("p",{className:"confirmUser__text",children:e.loginError}),Object(s.jsx)("p",{children:e.createError})]})})},d=function(e){return Object(s.jsxs)("section",{className:"landing",children:[Object(s.jsx)("h1",{className:"landing__title",children:"PatukyFest"}),Object(s.jsxs)("p",{className:"landing__text",children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque incidunt architecto vel possimus, itaque, quas ipsam id alias beatae porro magnam quisquam ea nisi voluptate! Pariatur placeat nam harum."," "]}),Object(s.jsx)(u,{handlesignIn:e.handlesignIn,loginError:e.loginError}),Object(s.jsx)(j,{handleSignUp:e.handleSignUp,createError:e.createError})]})},m=function(e){return Object(s.jsxs)("article",{className:"searchFilm",children:[Object(s.jsx)("img",{className:"searchFilm__poster",src:e.image,alt:"Poster: ".concat(e.title)}),Object(s.jsx)("h2",{className:"searchFilm__Name",children:e.title})]})},b=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],l=function(t){r(t.currentTarget.id),e.handleFilm(c)},o=e.allFilms.map((function(e){return Object(s.jsx)("li",{className:"film__list",id:e.id,onClick:l,children:Object(s.jsx)(m,{title:e.title,image:e.image,id:e.id})},e.id)}));return Object(s.jsx)("ul",{className:"films",children:o})},h=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{action:"",children:[Object(s.jsx)("label",{htmlFor:"filmName"}),Object(s.jsx)("input",{type:"text",id:"filmName",onChange:function(e){r(e.currentTarget.value)}}),Object(s.jsx)("input",{type:"submit",onClick:function(){e.handleSearchFilm(c)}})]})})},O=function(e){var t=e.festivalFilms.map((function(e){return Object(s.jsxs)("li",{className:"film__list",id:e.filmId,children:[e.title,e.synopsis]},e.filmId)}));return Object(s.jsx)("ul",{className:"films",children:t})},f=n(8),p=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("button",{className:"header__button",onClick:function(){e.signOff()},children:Object(s.jsx)(f.b,{to:"/",children:"Cerrar sesi\xf3n"})}),Object(s.jsx)(f.b,{to:"/usuario",children:e.userName})]})})},g=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{userName:e.userName,signOff:e.signOff}),Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("section",{className:"mainPage",children:[Object(s.jsx)("h2",{className:"title",children:"Secci\xf3n principal"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio, repellendus molestias officia quos voluptatum doloribus magni quasi sapiente quidem temporibus aspernatur nihil asperiores, impedit saepe unde vel pariatur quam."})]}),Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{children:"Buscador de pel\xedculas"}),Object(s.jsx)(h,{handleSearchFilm:e.handleSearchFilm}),Object(s.jsx)(b,{allFilms:e.allFilms,handleFilm:e.handleFilm})]}),Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{children:"Festivales"}),Object(s.jsx)(O,{festivalFilms:e.festivalFilms})]})]})]})},x=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],j=o[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{className:"title",children:"Cambiar datos del usuario"}),Object(s.jsxs)("form",{action:"",className:"form ",onSubmit:function(t){t.preventDefault(),c&&""!==u?(e.handleUserUpdate({userNameUpdate:c,passwordUpdate:u}),t.target.reset()):console.log("error")},children:[Object(s.jsx)("label",{htmlFor:"name",className:"label",children:"Cambia tu usuario"}),Object(s.jsx)("input",{type:"text",id:"name",off:e.userName,className:"input ",onChange:function(e){r(e.target.value)}}),Object(s.jsx)("label",{htmlFor:"password",className:"label",children:"Cambia tu contrase\xf1a"}),Object(s.jsx)("input",{type:"password",id:"password",className:"input js-password",onChange:function(e){j(e.target.value)}}),Object(s.jsx)("input",{type:"submit",value:"Actualizar Usuario",className:"btn"})]}),Object(s.jsx)("p",{className:"confirmUser__text",children:e.updateMessage})]})})},N=function(e){return Object(s.jsx)("div",{className:"container__delete",children:Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{className:"title",children:"Borrar usuario"}),Object(s.jsxs)("p",{className:"notices",children:["*Atenci\xf3n: El usuario y las listas de libros se borrar\xe1n permanentemente."," "]}),Object(s.jsx)("button",{onClick:function(){e.handleUserDelete()},className:"btn delete__btn",children:"Borrar usuario"}),Object(s.jsx)("p",{className:"confirmUser__text",children:e.deleteMessage})]})})},_=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{signOff:e.signOff}),Object(s.jsx)("section",{className:"main",children:Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{className:"title",children:"Opciones del usuario"}),Object(s.jsxs)("div",{className:"container__userData",children:[Object(s.jsx)(x,{userName:e.userName,handleUserUpdate:e.handleUserUpdate,updateMessage:e.updateMessage}),Object(s.jsx)(N,{handleUserDelete:e.handleUserDelete,deleteMessage:e.deleteMessage})]})]})}),Object(s.jsx)(f.b,{to:"/",children:"Volver"})]})},v="//localhost:3000/api",S={sendLogin:function(e){return fetch("".concat(v,"/login"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},sendUserDelete:function(e){return fetch("".concat(v,"/delete/").concat(e),{method:"POST"}).then((function(e){return e.json()}))},sendUserUpdate:function(e,t){return fetch("".concat(v,"/update/").concat(t),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},sendSignUp:function(e){return fetch("".concat(v,"/create"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},F="https://imdb-api.com/es/API",y={searchFilm:function(e){return fetch("".concat(F,"/SearchMovie/k_0i4wyq32/").concat(e)).then((function(e){return e.json()}))},searchInfoFilm:function(e){return fetch("".concat(F,"/Wikipedia/k_0i4wyq32/").concat(e)).then((function(e){return e.json()}))}},U=function(){return fetch("".concat("//localhost:3000/api","/festivals")).then((function(e){return e.json()}))},w=function(){var e=o.get("user"),t=Object(a.useState)(e.userId||""),n=Object(i.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),j=Object(i.a)(u,2),m=j[0],b=j[1],h=Object(a.useState)(""),O=Object(i.a)(h,2),f=O[0],p=O[1],x=Object(a.useState)(""),N=Object(i.a)(x,2),v=N[0],F=N[1],w=Object(a.useState)(""),C=Object(i.a)(w,2),I=C[0],q=C[1],k=Object(a.useState)(e.userName),E=Object(i.a)(k,2),D=E[0],T=E[1],M=Object(a.useState)([]),P=Object(i.a)(M,2),J=P[0],L=P[1],A=Object(a.useState)([]),B=Object(i.a)(A,2),z=B[0],R=B[1];console.log(c);var V=function(e){S.sendLogin(e).then((function(e){e.error?b(e.message):(b(""),r(e.userId),o.set("user",e),T(e.userName))}))},W=function(e){S.sendSignUp(e).then((function(e){e.error,p(""),p(e.message)}))},G=function(e){S.sendUserUpdate(e,c).then((function(e){console.log(e),e.error,q(""),q(e.message)}))},H=function(){S.sendUserDelete(c).then((function(e){console.log(e),e.error?F(e.message):(o.remove("user"),window.location.reload())}))},K=function(){o.remove("user"),window.location.reload()},Q=function(e){y.searchFilm(e).then((function(e){L(e.results)}))},X=function(e){console.log(e),y.searchInfoFilm(e).then((function(e){console.log(e)}))};Object(a.useEffect)((function(){c&&U().then((function(e){console.log(e),R(e.data)}))}),[c]);return""===c?Object(s.jsx)(d,{handlesignIn:V,loginError:m,handleSignUp:W,createError:f}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(g,{userName:D,signOff:K,handleSearchFilm:Q,allFilms:J,handleFilm:X,festivalFilms:z})}),Object(s.jsx)(l.a,{path:"/usuario",children:Object(s.jsx)(_,{userName:D,signOff:K,handleUserUpdate:G,handleUserDelete:H,updateMessage:I,deleteMessage:v})})]})})};r.a.render(Object(s.jsx)(f.a,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.70596969.chunk.js.map