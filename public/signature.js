!function e(t,a,l){function n(c,o){if(!a[c]){if(!t[c]){var s="function"==typeof require&&require;if(!o&&s)return s(c,!0);if(r)return r(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var i=a[c]={exports:{}};t[c][0].call(i.exports,function(e){var a=t[c][1][e];return n(a?a:e)},i,i.exports,e,t,a,l)}return a[c].exports}for(var r="function"==typeof require&&require,c=0;c<l.length;c++)n(l[c]);return n}({1:[function(e,t,a){"use strict";var l=e("./components/App");ReactDOM.render(React.createElement(l,null),document.getElementById("app"))},{"./components/App":2}],2:[function(e,t,a){"use strict";var l=e("./Form"),n=e("./Signature");t.exports=React.createClass({displayName:"exports",getInitialState:function(){return{fullName:"",jobTitle:"",directPhoneNumber:"",cellPhoneNumber:"",emailAddress:""}},render:function(){return React.createElement("div",{className:"row"},React.createElement("div",{className:"small-10 small-centered columns"},React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("h2",null,"Email Signature"),React.createElement("hr",null))),React.createElement("div",{className:"row"},React.createElement("div",{className:"small-5 columns"},React.createElement("h4",null,"Step 1: Enter Your Information"),React.createElement(l,null)),React.createElement("div",{className:"small-6 columns"},React.createElement("h4",null,"Step 2: Copy Your Signature"),React.createElement("p",null,"After filling out the form on the left, place your cursor inside the box below, select all (Control + A on a PC, Command + A on a Mac), and copy. Then, open Microsoft Outlook, paste into the Edit Signature box, and set as default signature."),React.createElement("div",{id:"output",contentEditable:!0},React.createElement(n,{data:this.state}))))))}})},{"./Form":3,"./Signature":4}],3:[function(e,t,a){"use strict";t.exports=React.createClass({displayName:"exports",handleChange:function(e,t){console.log(e+": "+t.target.value)},render:function(){return React.createElement("form",null,React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("label",null,"Full Name",React.createElement("input",{type:"text",onChange:this.handleChange.bind(null,"fullName")})))),React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("label",null,"Job Title",React.createElement("input",{type:"text",onChange:this.handleChange.bind(null,"jobTitle")})))),React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("label",null,"Direct Phone Number",React.createElement("input",{type:"text",onChange:this.handleChange.bind(null,"directPhoneNumber")})))),React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("label",null,"Cell Phone Number",React.createElement("input",{type:"text",onChange:this.handleChange.bind(null,"cellPhoneNumber")})))),React.createElement("div",{className:"row"},React.createElement("div",{className:"small-12 columns"},React.createElement("label",null,"Email Address",React.createElement("input",{type:"text",onChange:this.handleChange.bind(null,"emailAddress")})))))}})},{}],4:[function(e,t,a){"use strict";t.exports=React.createClass({displayName:"exports",render:function(){this.props.data.fullName,this.props.data.jobTitle,this.props.data.directPhoneNumber,this.props.data.cellPhoneNumber,this.props.data.emailAddress;return React.createElement("table",{cellPadding:0,cellSpacing:0,style:{width:"300px",backgroundColor:"#FFFFFF",borderColor:"#FFFFFF"}},React.createElement("tbody",{style:{border:"none"}},React.createElement("tr",null,React.createElement("td",null,React.createElement("img",{src:"https://s3.amazonaws.com/jobs.lhm.com/generic-logo.png",style:{width:"50px",height:"50px"}})),React.createElement("td",null))))}})},{}]},{},[1]);