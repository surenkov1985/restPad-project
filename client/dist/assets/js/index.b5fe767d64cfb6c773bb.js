(()=>{"use strict";var e,t,n,r={7577:(e,t,n)=>{var r=n(2578),l=n(6963),a=n(1420),o=n(9478),c=n(793),i=n(742),u=(0,i.createSlice)({initialState:{isAuth:!1,products:[],categories:[{val:"Роллы",activeClass:"active"},{val:"Пицца",activeClass:""},{val:"Салаты",activeClass:""},{val:"Напитки",activeClass:""}],categoryProduct:"Роллы"},name:"data",reducers:{authToggle:function(e,t){e.isAuth=t.payload},setProducts:function(e,t){e.products=t.payload},categoryToggle:function(e,t){e.categories=t.payload},setCategory:function(e,t){e.categoryProduct=t.payload}}}),p=u.actions,s=p.authToggle,d=p.setProducts,f=p.categoryToggle,m=p.setCategory;const y=u.reducer;var g,b,E,h,v,x=n(5487);function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var P,w,j,S,A,Z,C,k,T,I,D=x.ZP.header(g||(g=O(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbox-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);\n"]))),U=x.ZP.div(b||(b=O(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 20px 30px;\n"]))),z=x.ZP.div(E||(E=O(["\n\tdisplay: flex;\n\talign-items: center;\n\tcolumn-gap: 10px;\n"]))),M=(0,x.ZP)(U)(h||(h=O(["\n\tpadding: 50px 30px 70px;\n\tflex-direction: column;\n\talign-items: normal;\n"]))),_=x.ZP.main(v||(v=O(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-grow: 1;\n"]))),F=function(){var e=(0,a.useSelector)((function(e){return e.data.isAuth}));return r.createElement(r.Fragment,null,r.createElement(D,null,r.createElement(U,null,e&&r.createElement(r.Fragment,null,r.createElement(z,null,r.createElement(o.OL,{to:"products"},"Товары"),r.createElement(o.OL,{to:"admin"},"Личный кабинет")),r.createElement(z,null,r.createElement(o.rU,{to:"login"},"Выход"))),!e&&r.createElement(z,null,r.createElement(o.rU,{to:"register"},"Регистрация"),r.createElement(o.rU,{to:"login"},"Вход")))),r.createElement(_,null,r.createElement(M,null,r.createElement(c.j3,null))))},q=n(8039),L=n(6898),N=(0,L.createApi)({reducerPath:"api",baseQuery:(0,L.fetchBaseQuery)({baseUrl:"http://localhost:5000"}),endpoints:function(e){return{login:e.mutation({query:function(e){return{url:"/login",method:"POST",body:e,headers:{"Content-type":"application/json"}}}}),register:e.mutation({query:function(e){return{url:"/register",method:"POST",body:e,headers:{"Content-type":"application/json"}}}}),addProduct:e.mutation({query:function(e){return{url:"/addProducts",method:"POST",body:e,headers:{"Contennt-Type":"applicetion/json"}}}}),getProducts:e.query({query:function(e){return{url:"/getProducts".concat(e),method:"GET"}}}),deleteProduct:e.mutation({query:function(e){return{url:"/deleteProduct",body:e,method:"DELETE",headers:{"Content-type":"application/json"}}}})}}}),W=N.useLoginMutation,V=N.useRegisterMutation,$=N.useAddProductMutation,J=N.useLazyGetProductsQuery,Q=N.useDeleteProductMutation;function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var G=x.ZP.form(P||(P=B(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),H=x.ZP.div(w||(w=B(["\n\tdisplay: flex;\n\talign-items: center;\n\tcolumn-gap: 50px;\n\tpadding: 10px 20px;\n"]))),K=x.ZP.h2(j||(j=B(["\n\tfont-size: 22px;\n\tfont-weight: 700;\n"]))),R=x.ZP.div(S||(S=B(["\n\tmax-width: 600px;\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 20px;\n\tpadding: 10px 20px;\n"]))),X=x.ZP.label(A||(A=B(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),Y=x.ZP.input(Z||(Z=B(["\n\tborder: 1px solid #010101;\n\tpadding: 5px;\n\tborder-radius: 5px;\n"]))),ee=x.ZP.select(C||(C=B(["\n\tborder: 1px solid #010101;\n\tborder-radius: 5px;\n\tpadding: 5px;\n"]))),te=x.ZP.input(k||(k=B(["\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tmin-width: 100px;\n\tbackground: #6ed06e;\n\tcolor: #ffffff;\n\tcursor: pointer;\n\ttransition: all 0.1s;\n\n\t&:hover {\n\t\tbackground: #62b662;\n\t}\n"]))),ne=x.ZP.button(T||(T=B(["\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tmin-width: 100px;\n\tbackground: #bdc2bd;\n\tcolor: #000000;\n\tcursor: pointer;\n\ttransition: all 0.1s;\n\tmargin-left: 10px;\n\n\t&:hover {\n\t\tbackground: #717371;\n\t\tcolor: #ffffff;\n\t}\n"]))),re=x.ZP.div(I||(I=B(["\n\tposition: absolute;\n\tright: 50px;\n\tz-index: 10;\n\tpadding: 20px;\n\tcolor: #ff0000;\n\tborder-radius: 5px;\n\tbackground: rgba(255, 0, 0, 0.2);\n"])));function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pe,se,de,fe,me,ye,ge,be,Ee,he,ve,xe=function(){var e=(0,q.cI)({mode:"all"}),t=e.handleSubmit,n=e.register,l=ie((0,r.useState)(null),2),a=l[0],o=l[1],i=(0,c.s0)(),u=ie((0,r.useState)(""),2),p=u[0],s=u[1],d=ie($(),1)[0];(0,r.useEffect)((function(){o(JSON.parse(localStorage.getItem("restPadUser")))}),[]);return r.createElement(r.Fragment,null,p&&r.createElement(re,null,p),r.createElement(G,{onSubmit:t((function(e){var t=oe(oe({},e),{},{userId:a.id});console.log(t),d(t).unwrap().then((function(e){i("../products")})).catch((function(e){s(e.data.message),setTimeout((function(){s("")}),1500)}))}))},r.createElement(H,null,r.createElement(K,null,"Новый товар"),r.createElement("div",null,r.createElement(te,{type:"submit",value:"Сохранить"}),r.createElement(ne,{onClick:function(e){e.preventDefault(),i("../products")}},"Закрыть"))),r.createElement(R,null,r.createElement(X,null,r.createElement("span",null,"Категория"),r.createElement(ee,n("category"),r.createElement("option",{defaultValue:"роллы"},"Роллы"),r.createElement("option",{value:"пицца"},"Пицца"),r.createElement("option",{value:"напитки"},"Напитки"),r.createElement("option",{value:"салаты"},"Салаты"))),r.createElement(X,null,r.createElement("p",null,"Название",r.createElement("span",{style:{color:"#FF0000"}},"*")),r.createElement(Y,le({type:"text"},n("title")))),r.createElement(X,null,r.createElement("span",null,"Артикул"),r.createElement(Y,le({type:"text"},n("article")))),r.createElement(X,null,r.createElement("p",null,"Цена",r.createElement("span",{style:{color:"#FF0000"}},"*")),r.createElement(Y,le({type:"text"},n("price")))),r.createElement(X,null,r.createElement("p",null,"Количество",r.createElement("span",{style:{color:"#FF0000"}},"*")),r.createElement(Y,le({type:"text",name:""},n("amount")))),r.createElement(X,null,r.createElement("span",null,"Единица измерения"),r.createElement(ee,n("unit"),r.createElement("option",{defaultValue:"шт"},"шт."),r.createElement("option",{value:"кг"},"кг."),r.createElement("option",{value:"г"},"г."),r.createElement("option",{value:"л"},"л."))),r.createElement(X,null,r.createElement("span",null,"НДС"),r.createElement(ee,n("vat"),r.createElement("option",{defaultValue:"не облагается"},"Не облагается"),r.createElement("option",{value:"0"},"0%"),r.createElement("option",{value:"10"},"10%"),r.createElement("option",{value:"18"},"18%"),r.createElement("option",{value:"20"},"20%"))),r.createElement(X,n("color"),r.createElement("span",null,"Цвет кнопки"),r.createElement("div",null,r.createElement("label",null,r.createElement("input",le({type:"radio"},n("color"),{value:"green"}))),r.createElement("label",null,r.createElement("input",le({type:"radio"},n("color"),{value:"red"}))),r.createElement("label",null,r.createElement("input",le({type:"radio"},n("color"),{value:"yellow"}))),r.createElement("label",null,r.createElement("input",le({type:"radio"},n("color"),{value:"blue"}))))),r.createElement(X,null,r.createElement("span",null,"Описание"),r.createElement(Y,le({type:"text"},n("description")))))))},Oe=function(){var e=(0,c.s0)(),t=(0,a.useDispatch)();return(0,r.useEffect)((function(){localStorage.hasOwnProperty("restPadUser")&&(e("../admin",{replace:!0}),t(s(!0)))}),[]),r.createElement("div",null,"ADMIN")};function Pe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var we=x.ZP.div(pe||(pe=Pe(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))),je=x.ZP.div(se||(se=Pe(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tpadding: 30px;\n\t/* border: 1px solid #c5c5c5; */\n\tborder-radius: 8px;\n\twidth: 540px;\n"]))),Se=x.ZP.h2(de||(de=Pe(["\n\tfont-size: 26px;\n\tfont-weight: 800;\n\ttext-align: center;\n\tmargin-bottom: 60px;\n"]))),Ae=x.ZP.form(fe||(fe=Pe(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tposition: relative;\n"]))),Ze=x.ZP.label(me||(me=Pe(["\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 10px;\n\tposition: relative;\n"]))),Ce=x.ZP.p(ye||(ye=Pe(["\n\tfont-size: 20px;\n\tfont-weight: 700;\n"]))),ke=x.ZP.input(ge||(ge=Pe(["\n\talign-items: center;\n\tpadding: 10px 10px;\n\tborder: 1px solid #c5c5c5;\n\tborder-radius: 5px;\n"]))),Te=x.ZP.input(be||(be=Pe(["\n\tpadding: 10px 20px;\n\tbackground: #d5d5d5;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground: #d5d5d5;\n\t}\n"]))),Ie=x.ZP.div(Ee||(Ee=Pe(["\n\tposition: absolute;\n\ttop: -60px;\n\twidth: 100%;\n\tcolor: #ff0000;\n\tborder: 1px solid #ff0000;\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tbackground: rgba(250, 0, 0, 0.05);\n"]))),De=x.ZP.div(he||(he=Pe(["\n\tfont-weight: 600;\n"]))),Ue=x.ZP.button(ve||(ve=Pe(["\n\tborder: none;\n\tbackground: none;\n\tcursor: pointer;\n\tcolor: blue;\n\tmargin-left: 10px;\n\n\t&:hover {\n\t\tcolor: blue;\n\t\ttext-decoration: underline;\n\t}\n"])));function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}function Me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _e(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Fe,qe,Le,Ne,We,Ve,$e,Je,Qe,Be,Ge=function(){var e=(0,q.cI)({mode:"onChange"}),t=e.register,n=e.handleSubmit,l=Me((0,r.useState)(""),2),o=l[0],i=l[1],u=(0,c.s0)(),p=((0,a.useSelector)((function(e){return e.data.isAuth})),(0,a.useDispatch)());(0,r.useEffect)((function(){localStorage.hasOwnProperty("restPadUser")&&(u("../admin",{replace:!0}),p(s(!0)))}),[]);var d=Me(W(),1)[0];return r.createElement(we,null,r.createElement(je,null,r.createElement(Se,null,"Авторизация"),r.createElement(Ae,{onSubmit:n((function(e){d(e).unwrap().then((function(e){e.id&&(localStorage.setItem("restPadUser",JSON.stringify(e)),p(s(!0)),u("../admin",{replace:!0}))})).catch((function(e){console.log(e),i(e.data.message),setTimeout((function(){i("")}),1e3)}))}))},o&&r.createElement(Ie,null,o),r.createElement(Ze,null,r.createElement(Ce,null,"Email"),r.createElement(ke,ze({type:"text",placeholder:"Введите email"},t("email")))),r.createElement(Ze,null,r.createElement(Ce,null,"Пароль"),r.createElement(ke,ze({type:"password",placeholder:"Введите пароль"},t("password")))),r.createElement(Te,{type:"submit",value:"Войти"}))),r.createElement(De,null,"Нет аккаунта?",r.createElement(Ue,{onClick:function(){u("../register",{replace:!0})}},"Зарегистрироваться")))};function He(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Ke=x.ZP.div(Fe||(Fe=He(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),Re=x.ZP.div(qe||(qe=He(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n"]))),Xe=x.ZP.div(Le||(Le=He(["\n\twidth: 250px;\n"]))),Ye=x.ZP.ul(Ne||(Ne=He(["\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 2px;\n"]))),et=x.ZP.li(We||(We=He(["\n\twidth: 100%;\n\tpadding: 10px;\n\tbackground: #bdc2bd;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n\n\t&.active {\n\t\tbackground: #ffffff;\n\t}\n"]))),tt=x.ZP.div(Ve||(Ve=He(["\n\twidth: 100%;\n"]))),nt=x.ZP.div($e||($e=He(["\n\twidth: 100%;\n\tpadding: 10px 20px;\n"]))),rt=x.ZP.li(Je||(Je=He(["\n\tpadding: 5px 20px;\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-columns: 5fr repeat(4, 1fr) 11fr 0.5fr;\n\talign-items: center;\n"]))),lt=x.ZP.div(Qe||(Qe=He(["\n\tpadding: 5px;\n"]))),at=(0,x.ZP)(rt)(Be||(Be=He(["\n\tbackground: #f7f7f7;\n"]))),ot=n(1854);function ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function it(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ct(Object(n),!0).forEach((function(t){ut(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return st(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return st(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function st(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var dt=function(){var e=(0,c.s0)(),t=(0,a.useDispatch)(),n=(0,a.useSelector)((function(e){return e.data})),l=n.products,o=n.categories,i=n.categoryProduct,u=pt(J(),1)[0],p=pt(Q(),1)[0];(0,r.useEffect)((function(){u(i).unwrap().then((function(e){console.log(e),t(d(e))})).catch((function(e){console.log(e)}))}),[i]);var s=function(e){var n=o.map((function(n){return e.target.textContent===n.val?(t(m(n.val)),it(it({},n),{},{activeClass:"active"})):it(it({},n),{},{activeClass:""})}));t(f(n))};return r.createElement(Ke,null,r.createElement(H,null,r.createElement(K,null,"Товары")),r.createElement(Re,null,r.createElement(Xe,null,r.createElement(Ye,null,o.map((function(e){return r.createElement(et,{key:e.val,onClick:s,className:e.activeClass},e.val)})))),r.createElement(tt,null,r.createElement(H,null,r.createElement(K,null,i),r.createElement(ne,{onClick:function(t){e("../addProduct",{replace:!0})}},"Новый товар")),r.createElement(nt,null,r.createElement(at,null,r.createElement(lt,null,"Наименование"),r.createElement(lt,null,"Цена"),r.createElement(lt,null,"Ед."),r.createElement(lt,null,"Арт."),r.createElement(lt,null,"Цвет"),r.createElement(lt,null,"Описание"),r.createElement(lt,null)),r.createElement("ul",null,l.map((function(e){return r.createElement(rt,{key:e.id},r.createElement(lt,null,e.title),r.createElement(lt,null,e.price),r.createElement(lt,null,e.unit),r.createElement(lt,null,e.article),r.createElement(lt,null,e.color),r.createElement(lt,null,e.description),r.createElement(lt,{onClick:function(n){return r=e.id,void p({id:r}).unwrap().then((function(e){u(i).unwrap().then((function(e){console.log(e),t(d(e))})).catch((function(e){console.log(e)}))})).catch((function(e){return console.log(e.data.message)}));var r}},r.createElement(ot.oHP,{color:"red"})))})))))))};function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ft.apply(this,arguments)}function mt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return yt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var gt=function(){var e=(0,q.cI)({mode:"onChange"}),t=e.register,n=e.handleSubmit,l=mt((0,r.useState)(""),2),o=l[0],i=l[1],u=(0,c.s0)(),p=(0,a.useDispatch)(),s=mt(V(),1)[0],d=mt(W(),1)[0];(0,r.useEffect)((function(){localStorage.hasOwnProperty("restPadUser")&&(u("../admin",{replace:!0}),p(authToggle(!0)))}),[]);return r.createElement(we,null,r.createElement(je,null,r.createElement(Se,null,"Регистрация"),r.createElement(Ae,{onSubmit:n((function(e){s(e).unwrap().then((function(e){e.email&&d(e).unwrap().then((function(e){localStorage.setItem("restPadUser",JSON.stringify(e)),p(authToggle(!0)),u("../admin",{replace:!0})})).catch((function(e){i(e.data.message),setTimeout((function(){i("")}),1e3)}))})).catch((function(e){i(e.data.message),setTimeout((function(){i("")}),1e3)}))}))},o&&r.createElement(Ie,null,o),r.createElement(Ze,null,r.createElement(Ce,null,"Email"),r.createElement(ke,ft({type:"text",placeholder:"Введите email"},t("email")))),r.createElement(Te,{type:"submit",value:"Зарегистрироваться"}))),r.createElement(De,null,"Есть аккаунт?",r.createElement(Ue,{onClick:function(){u("../login",{replace:!0})}},"Войти")))},bt=function(){var e=(0,a.useDispatch)();return(0,r.useEffect)((function(){localStorage.hasOwnProperty("restPadUser")&&e(s(!0))}),[]),r.createElement(o.VK,null,r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/",element:r.createElement(F,null)},r.createElement(c.AW,{path:"register",element:r.createElement(gt,null)}),r.createElement(c.AW,{path:"login",element:r.createElement(Ge,null)}),r.createElement(c.AW,{path:"admin",element:r.createElement(Oe,null)}),r.createElement(c.AW,{path:"products",element:r.createElement(dt,null)}),r.createElement(c.AW,{path:"addProduct",element:r.createElement(xe,null)}))))},Et=n(4129);var ht,vt,xt,Ot=(0,i.configureStore)({reducer:(ht={data:y},vt=N.reducerPath,xt=N.reducer,vt in ht?Object.defineProperty(ht,vt,{value:xt,enumerable:!0,configurable:!0,writable:!0}):ht[vt]=xt,ht),middleware:function(e){return e().concat(N.middleware)}});(0,Et.setupListeners)(Ot.dispatch);var Pt=document.getElementById("root");(0,l.s)(Pt).render(r.createElement(a.Provider,{store:Ot},r.createElement(bt,null)))}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,e=[],a.O=(t,n,r,l)=>{if(!n){var o=1/0;for(p=0;p<e.length;p++){for(var[n,r,l]=e[p],c=!0,i=0;i<n.length;i++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(c=!1,l<o&&(o=l));if(c){e.splice(p--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(l,o),l},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[o,c,i]=n,u=0;if(o.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(i)var p=i(a)}for(t&&t(n);u<o.length;u++)l=o[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[233],(()=>a(6005)));var o=a.O(void 0,[233],(()=>a(7577)));o=a.O(o)})();