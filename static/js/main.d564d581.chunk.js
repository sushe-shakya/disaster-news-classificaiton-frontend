(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(12),s=a.n(l),o=(a(38),a(39),a(10)),c=a.n(o),i=a(13),u=a(4),p=a(5),d=a(6),m=a(7),h=a(8),f={baseURI:"manaslu.pcampus.edu.np/dnc",api:{endpoints:{all:"/news",filter:"/news/"}}},b=a(28),v=a.n(b).a.create({baseURL:f.baseURI,headers:{"Content-Type":"application/json"}}),g=f.api;function w(){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g.endpoints.all),e.next=3,v.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(c.a.mark(function e(t){var a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g.endpoints.filter)+t,e.next=3,v.get(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(57);var C=a(32),O=a(31),N=a(29),x=a.n(N),j=[{value:"hydrological",label:"Hydrological"},{value:"manmade",label:"Manmade"},{value:"meteorological",label:"Meteorological"},{value:"biological",label:"Biological"},{value:"geophysical",label:"Geophysical"},{value:"climatological",label:"Climatological"}],R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({selectedOption:e}),console.log("Option selected:",e)},a.fetchAllData=Object(i.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isRequesting:!0}),e.prev=1,e.next=4,w();case 4:t=e.sent,a.setState({data:t.data,isRequesting:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({isRequesting:!1});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),a.filterNews=Object(i.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("im here",a.state.selectedOption.value),a.setState({isRequesting:!0}),e.prev=2,t=a.state.selectedOption.value,e.next=6,k(t);case 6:n=e.sent,a.setState({data:n.data,isRequesting:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),x()("No news under this category"),a.setState({isRequesting:!1});case 15:case"end":return e.stop()}},e,null,[[2,10]])})),a.state={data:[],selectedOption:null,isRequesting:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchAllData()}},{key:"buildColumns",value:function(){return[{Header:r.a.createElement("h2",null,"News"),accessor:"news",resizable:!1,sortable:!1,minWidth:300,className:"",headerClassName:"no-sort",Cell:function(e){return r.a.createElement("span",null,e.value)}},{Header:r.a.createElement("h2",null,"Date"),accessor:"date",resizable:!1,minWidth:80,sortable:!1,headerClassName:"no-sort",Cell:function(e){return r.a.createElement("span",null,e.value)}},{Header:r.a.createElement("h2",null,"Link"),accessor:"link",resizable:!1,minWidth:100,sortable:!1,headerClassName:"no-sort",Cell:function(e){return r.a.createElement("a",{href:e.value}," ",e.value," ")}},{Header:r.a.createElement("h2",null,"Disaster Type"),accessor:"disasterType",resizable:!1,minWidth:100,sortable:!1,headerClassName:"no-sort"}]}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.state.data.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-group__label form-group__label--block"},"Targeted area"),r.a.createElement(O.a,{value:this.state.selectedOption,onChange:this.handleChange,options:j}),r.a.createElement("div",{className:"Popup__inner__footer"},r.a.createElement("button",{className:"btn btn--blue",onClick:this.filterNews},"Filter"))),r.a.createElement(C.a,{data:this.state.data,columns:this.buildColumns(),showPagination:!0,defaultPageSize:15,filterable:!1,pageSizeOptions:[5,10,15,20]})))}}]),t}(r.a.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62),a(63);s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.d564d581.chunk.js.map