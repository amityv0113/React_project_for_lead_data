(this.webpackJsonpmy_react_app_project=this.webpackJsonpmy_react_app_project||[]).push([[0],{18:function(e,t,o){e.exports=o(42)},23:function(e,t,o){},24:function(e,t,o){},42:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),l=o(11),s=o.n(l),p=(o(23),o(15)),i=o(12),r=o(13),c=o(17),u=o(16),d=(o(24),o(14)),m=o.n(d),h=function(e){Object(c.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),console.log("App.js constructor"),(n=t.call(this,e)).togglepeopleHandler=function(){var e=n.state.showpeople;n.setState({showpeople:!e})},n.deletepeopleHandler=function(e){var t=Object(p.a)(n.state.data_list);t.splice(e,1),n.setState({data_list:t})},n.state={data_list:[],people:[{p_name:"amit Yadav",p_age:"30",id:1},{p_name:"shweta Yadav",p_age:"32",id:2},{p_name:"usha",p_age:"34",id:3}],people_info:"belong to same family ",showpeople:!1},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;console.log("App.js componentDidMount"),m.a.get("https://cors-anywhere.herokuapp.com/https://api.pipelinedeals.com/api/v3/deals.json?api_key=tFTM3grWXS1SYVmfM7B2").then((function(t){e.setState({data_list:t.data.entries})}))}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("App.js should componentUpdate"),!0}},{key:"componentDidUpdate",value:function(){console.log(this.state.data_list[0]),console.log("App.js componentDidUpdate")}},{key:"render",value:function(){console.log("App.js render");var e=null;return this.state.showpeople&&(e=a.a.createElement("div",null,a.a.createElement("ul",null,this.state.data_list.map((function(e,t){return a.a.createElement("li",{key:t},e)}))))),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Leads data from pipelinedeals website  \u200b"),a.a.createElement("button",{onClick:this.togglepeopleHandler},"click here to get"),e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("App.js GetDerivedStateFromProps"),t}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9bce98a2.chunk.js.map