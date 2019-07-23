(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),i=a.n(c),s=a(15),l=a(16),o=a(18),u=a(17),m=a(19),d=(a(59),a(29)),p=a.n(d),f=a(50),h=function(){var e=Object(f.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch"+", received ".concat(t.status));case 5:return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a["Country estimates"]);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=a(51),y=a.n(g),v=(a(63),a(64),function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,c=[],i=1;i<=Math.ceil(a/t);i++)c.push(i);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{class:"page-item"},r.a.createElement("div",{class:"page-link"},"\xab")),c.map(function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("div",{onClick:function(){return n(e)},className:"page-link"},e))}),r.a.createElement("li",{class:"page-item"},r.a.createElement("div",{class:"page-link"},"\xbb"))))}),b=function(e){var t=e.data,a=e.onClickItem,n=e.itemsPerPage,c=(e.totalItems,e.paginate);return r.a.createElement("div",{className:"list"},r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:e.id,onClick:function(){return a(e.id)}},"".concat(e.countryName))})),r.a.createElement(v,{itemsPerPage:n,totalItems:132,paginate:c}))},E=a(52),I=(a(159),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={chartData:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.selectedItem!==this.props.selectedItem){var t=this.props.selectedItem;this.setState({chartData:t})}}},{key:"render",value:function(){var e=this.props.selectedItem;return e?r.a.createElement("div",{className:"chart"},r.a.createElement("h4",{className:"text"},"Country name: ",e["Country Name"]),r.a.createElement("h5",{className:"text"},"Uncertainty bounds: ",e["Uncertainty bounds*"]),r.a.createElement(E.a,{data:this.state.chartData,width:3,height:2,options:{title:{display:!0,text:"Infant Mortality Rate",fontSize:25},legend:{display:!0,position:"right"}}})):r.a.createElement("div",{className:"chart text"},"Select from the list, please.")}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,selectedItem:null,currentPage:1,itemsPerPage:12},a.getSelectedItem=function(e){var t;a.state.data.map(function(a){if(a.id===e)return t=a}),a.setState({selectedItem:t})},a.getData=function(){h().then(function(e){a.setState({data:a.transformData(e)})})},a.transformData=function(e){for(var t,a,n,r=0,c=[],i=["#E74C3C","white","blue"],s=0;s<e.length;s++)n=[e[s][2010],e[s][2011],e[s][2012],e[s][2013],e[s][2014],e[s][2015],e[s][2016],e[s][2017]],e[s]["ISO Code"]!==t?(t=e[s]["ISO Code"],a={labels:["2010 year","2011 year","2012 year","2013 year","2014 year","2015 year","2016 year","2017 year"],countryName:e[s]["Country Name"],ISO:e[s]["ISO Code"],id:y()(),datasets:[{label:"IMR (".concat(e[s]["Uncertainty bounds*"],")"),data:n,backgroundColor:i[r]}]}):a.datasets.push({label:"IMR (".concat(e[s]["Uncertainty bounds*"],")"),data:n,backgroundColor:i[r++]}),r++,"Upper"===e[s]["Uncertainty bounds*"]&&(c.push(a),r=0);return c},a.paginate=function(e){a.setState({currentPage:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.selectedItem,n=e.currentPage,c=e.itemsPerPage;if(!t)return r.a.createElement("div",null,"Loading...");console.log(t);var i=n*c,s=i-c,l=t.slice(s,i);return r.a.createElement("main",{className:"container"},r.a.createElement("section",{className:"jumbotron main-section"},r.a.createElement(b,{data:l,onClickItem:this.getSelectedItem,itemsPerPage:c,totalItems:t.length,paginate:this.paginate}),r.a.createElement(I,{selectedItem:a})))}}]),t}(n.Component);i.a.render(r.a.createElement(k,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a(160)},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.44734c21.chunk.js.map