(this["webpackJsonpnot-hot-dog"]=this["webpackJsonpnot-hot-dog"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),s=n.n(o),i=n(7),a=n.n(i),r=(n(12),n(2)),c=n(3),h=n(5),u=n(4),l=(n(13),n(0)),d=function(t){var e=t.onRouteChange;return t.isSignedIn?Object(l.jsx)("nav",{children:Object(l.jsx)("p",{onClick:function(){return e("signout")},className:"nav-links",children:"Sign Out"})}):Object(l.jsxs)("nav",{children:[Object(l.jsx)("p",{onClick:function(){return e("signin")},className:"nav-links",children:"Sign In"}),Object(l.jsx)("p",{onClick:function(){return e("register")},className:"nav-links",children:"Register"})]})},g=function(t){var e=t.name,n=t.entries,o=t.hotdogs;return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"".concat(e,", you've submitted ").concat(n," images, and ").concat(o," of them were hot dogs")})})},j=(n(15),function(t){var e=t.onInputChange,n=t.onButtonSubmit;return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"This is the image link form"}),Object(l.jsx)("div",{className:"center",children:Object(l.jsxs)("div",{className:"form center",children:[Object(l.jsx)("input",{className:"url-form",type:"text",onChange:e}),Object(l.jsx)("button",{className:"submit-button",onClick:n,children:"Hot Dog!!"})]})})]})}),m=(n(16),function(t){var e=t.imageUrl;return Object(l.jsx)("div",{className:"photo-div",children:Object(l.jsx)("img",{className:"photo",src:e,alt:""})})}),p=n.p+"static/media/nothotdog.b2784825.jpg",b=n.p+"static/media/hotdog.6c4d7db2.jpg",f=(n(17),function(t){var e=t.apiResponse,n="hotdog"===e?{img:b,alt:"hot dog",h1:"hot-dog",text:"Hotdog!"}:"nothotdog"===e?{img:p,alt:"not hot dog",h1:"not-hot-dog",text:"Not hotdog!"}:{img:"",alt:"",h1:"",text:""};return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{alt:e,src:n.img}),Object(l.jsx)("h1",{className:"submit-response ".concat(n.h1),children:n.text})]})}),O="https://not-hot-dog-app.herokuapp.com",x="http://localhost:3000",C="localhost"===window.location.hostname?x:O,v=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).onEmailChange=function(t){o.setState({signInEmail:t.target.value})},o.onPasswordChange=function(t){o.setState({signInPassword:t.target.value})},o.onSubmitSignIn=function(){fetch(C+"/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.state.signInEmail,password:o.state.signInPassword})}).then((function(t){return t.json()})).then((function(t){t.id&&(o.props.loadUser(t),o.props.onRouteChange("home"))}))},o.state={signInEmail:"",signInPassword:""},o}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.onRouteChange;return Object(l.jsxs)("div",{className:"auth-form",children:[Object(l.jsx)("h3",{children:"Sign In"}),Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",{onChange:this.onEmailChange,required:!0,type:"email",name:"email",placeholder:"Email"}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{onChange:this.onPasswordChange,required:!0,name:"password",type:"password",placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",onClick:this.onSubmitSignIn,children:"Sign In"}),Object(l.jsx)("button",{type:"submit",onClick:function(){return t("register")},children:"Register"})]})}}]),n}(s.a.Component),S=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).onNameChange=function(t){o.setState({name:t.target.value})},o.onEmailChange=function(t){o.setState({email:t.target.value})},o.onPasswordChange=function(t){o.setState({password:t.target.value})},o.onSubmitRegister=function(){fetch(C+"/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o.state.name,email:o.state.email,password:o.state.password})}).then((function(t){return t.json()})).then((function(t){t.id&&(o.props.loadUser(t),o.props.onRouteChange("home"))}))},o.state={name:"",email:"",password:""},o}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"auth-form",children:[Object(l.jsx)("h3",{children:"Sign Up"}),Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{onChange:this.onNameChange,required:!0,type:"name",name:"name",placeholder:"Email"}),Object(l.jsx)("label",{htmlFor:"name",children:"Email"}),Object(l.jsx)("input",{onChange:this.onEmailChange,required:!0,type:"email",name:"email",placeholder:"Email"}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{onChange:this.onPasswordChange,required:!0,name:"password",type:"password",placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",onClick:this.onSubmitRegister,children:"Sign Up"})]})}}]),n}(s.a.Component),w=(n(18),{input:"",imageUrl:"",route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,hotdogs:0,joined:""},apiResponse:""}),y=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).loadUser=function(e){t.setState({user:{id:e.id,name:e.name,email:e.email,entries:e.entries,hotdogs:e.hotdogs,joined:e.joined}})},t.onRouteChange=function(e){"signout"===e?t.setState(w):"home"===e&&t.setState({isSignedIn:!0}),t.setState({route:e})},t.onInputChange=function(e){t.setState({input:e.target.value})},t.onButtonSubmit=function(){t.setState({imageUrl:t.state.input}),fetch(C+"/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:t.state.input})}).then((function(t){if(t.ok)return t.json();throw new Error("Received status in 400 or 500 range.")})).then((function(e){return"hotdog"===e?t.setState({apiResponse:"hotdog"}):"not hotdog"===e&&t.setState({apiResponse:"nothotdog"}),e})).then((function(e){e&&fetch(C+"/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.state.user.id,hotdog:e})}).then((function(t){return t.json()})).then((function(e){return t.setState(Object.assign(t.state.user,{entries:e[0].entries,hotdogs:e[0].hotdogs}))})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))},t.state=w,t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isSignedIn,n=t.imageUrl,o=t.route,s=t.user,i=t.apiResponse;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{onRouteChange:this.onRouteChange,isSignedIn:e}),"home"===o?Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{name:s.name,entries:s.entries,hotdogs:s.hotdogs}),Object(l.jsx)(j,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(l.jsx)(m,{imageUrl:n}),Object(l.jsx)(f,{apiResponse:i})]}):"signin"===o||"signout"===o?Object(l.jsx)(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(l.jsx)(S,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(o.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),s(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),I()}],[[19,1,2]]]);
//# sourceMappingURL=main.37e86862.chunk.js.map