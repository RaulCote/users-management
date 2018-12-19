(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),o=(a(16),a(1)),c=a(2),s=a(4),m=a(3),u=a(5),p=(a(18),a(6)),h=a(7),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",phone:"",role:"User",picture:"http://placehold.it/32x32",alert:""},a.handleInput=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,l=t.email,r=t.phone,i=t.role,o=t.picture;n&&l?(a.props.onSubmit(n,l,r,i,o),a.setState({name:"",email:"",phone:""})):a.setState({alert:"Name or email cannot be empty."})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,r=e.alert;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form-container",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("p",null,"Name"),l.a.createElement("input",{className:"form-input-modal",type:"text",name:"name",value:t,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("p",null,"Email"),l.a.createElement("input",{className:"form-input-modal",type:"email",name:"email",value:a,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("p",null,"Phone"),l.a.createElement("input",{className:"form-input-modal",type:"phone",name:"phone",value:n,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("button",{className:"form-input-button",type:"submit",value:"submit form"},"Submit"))),r?l.a.createElement("h1",{className:"alert-warning"},r):l.a.createElement("div",null))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(!this.props.show)return null;return l.a.createElement("div",{className:"backdrop",style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)",padding:50}},l.a.createElement("div",{className:"modal",style:{backgroundColor:"#fff",borderRadius:5,maxWidth:500,minHeight:300,margin:"0 auto"}},this.props.children,l.a.createElement("div",{className:"footer"},l.a.createElement("button",{className:"modal-close-btn",onClick:this.props.onClose},"Close"))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:a.props.data.name,email:a.props.data.email,phone:a.props.data.phone,isOpen:!1},a.handleInput=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleEdit=function(e){e.preventDefault();var t=a.state,n=t.name,l=t.email,r=t.phone;n&&l?(a.props.onCallback(a.props.index,n,l,r,a.props.data.role,a.props.data.picture),a.setState({name:n,email:l,phone:r,isOpen:!1})):a.setState({alert:"Name or email cannot be empty."})},a.toggleModal=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,r=e.alert;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"edit-button",onClick:this.toggleModal},l.a.createElement("img",{className:"img-navbar",src:"/users-management/settings-icon.png",alt:"edit user"})),l.a.createElement(b,{show:this.state.isOpen,onClose:this.toggleModal},l.a.createElement("form",{className:"form-container",onSubmit:this.handleEdit},l.a.createElement("div",null,l.a.createElement("p",null,"Name"),l.a.createElement("input",{className:"form-input-modal",type:"text",name:"name",value:t,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("p",null,"Email"),l.a.createElement("input",{className:"form-input-modal",type:"email",name:"email",value:a,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("p",null,"Phone"),l.a.createElement("input",{className:"form-input-modal",type:"phone",name:"phone",value:n,onChange:this.handleInput})),l.a.createElement("div",null,l.a.createElement("button",{className:"form-input-button",type:"submit",value:"submit form"},"Submit"))),r?l.a.createElement("h1",{className:"alert-warning"},r):l.a.createElement("div",null)))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={users:p.slice(0,4),isVisible:!0,usersSearch:p.slice(0,4),search:"",isOpen:!1},a.handleSubmit=function(e,t,n,l,r){var i=a.state.users;i.push({name:e,email:t,phone:n,role:l,picture:r}),a.setState({users:i,usersSearch:i,isOpen:!1})},a.handleEdit=function(e,t,n,l,r,i){var o=a.state.users;o.splice(e,1,{name:t,email:n,phone:l,role:r,picture:i}),a.setState({users:o,usersSearch:o,isOpen:!1})},a.handleLoadMore=function(){var e=a.state.users;e.length<p.length?(e.push(p[e.length]),a.setState({users:e,usersSearch:e})):a.setState({usersSearch:e,isVisible:!1})},a.handleSearch=function(e){var t=a.state.users.filter(function(a,n){var l=a.name.toUpperCase(),r=a.role.toUpperCase(),i=a.email.toUpperCase();return l.includes(e.target.value.toUpperCase())||r.includes(e.target.value.toUpperCase())||i.includes(e.target.value.toUpperCase())?(a.index=n,a):t});a.setState({search:e.target.value,usersSearch:t})},a.toggleModal=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.users,n=t.isVisible,r=t.search,i=t.usersSearch;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"new-users"},l.a.createElement("button",{className:"primary-button",onClick:this.toggleModal},"Add new Users")),l.a.createElement(b,{show:this.state.isOpen,onClose:this.toggleModal},l.a.createElement(d,{data:a,onSubmit:this.handleSubmit})),l.a.createElement("div",{className:"search-navbar"},l.a.createElement("div",{className:"search-bar"},l.a.createElement("input",{className:"form-input",type:"search",name:"search",placeholder:"Search by username, email, role...",value:r,onChange:this.handleSearch}))),l.a.createElement("section",{className:"users-container"},i.map(function(t,a){return l.a.createElement("div",{className:"card",key:a},l.a.createElement("img",{className:"card-image",src:t.picture,alt:t.name}),l.a.createElement("div",{className:"user-text"},l.a.createElement("p",null,t.name)),l.a.createElement("div",{className:"user-text"},l.a.createElement("p",null,t.email)),l.a.createElement("div",{className:"user-text"},l.a.createElement("p",null,t.role)),l.a.createElement(f,{key:a,index:a,data:t,onCallback:e.handleEdit}))})),n?l.a.createElement("div",{className:"load-button-container"},l.a.createElement("button",{className:"primary-button",onClick:this.handleLoadMore},"Load More")):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"bottom-container"}))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"navbar"},l.a.createElement("h1",null,"Management App"))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{_id:"5c0f8d2fe0b284c01aee2b74",picture:"http://placehold.it/32x32",name:"Mendoza Colon",email:"mendozacolon@bostonic.com",phone:"+1 (927) 472-2719",role:"User"},{_id:"5c0f8d2f54dacb3403114b48",picture:"http://placehold.it/32x32",name:"Lilian Wagner",email:"lilianwagner@bostonic.com",phone:"+1 (942) 597-3937",role:"Administrator"},{_id:"5c0f8d2fc3ffe899712d1db5",picture:"http://placehold.it/32x32",name:"Valdez Massey",email:"valdezmassey@bostonic.com",phone:"+1 (940) 432-3669",role:"User"},{_id:"5c0f8d2f529c55389da1d152",picture:"http://placehold.it/32x32",name:"Casey Schroeder",email:"caseyschroeder@bostonic.com",phone:"+1 (856) 459-2906",role:"User"},{_id:"5c0f8d2fb1b0477a1a993e68",picture:"http://placehold.it/32x32",name:"Arnold Marquez",email:"arnoldmarquez@bostonic.com",phone:"+1 (838) 515-3711",role:"Administrator"},{_id:"5c0f8d2feb70b264e4b5b6f5",picture:"http://placehold.it/32x32",name:"Wynn Hebert",email:"wynnhebert@bostonic.com",phone:"+1 (944) 522-3264",role:"Administrator"},{_id:"5c0f8d2f345ccb53e56b79a9",picture:"http://placehold.it/32x32",name:"Arlene Nguyen",email:"arlenenguyen@bostonic.com",phone:"+1 (894) 411-2789",role:"Administrator"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.28231ec5.chunk.js.map