(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a(7),o=a(5),i=a(1),s=a(3),d=a(2),u=a(4),m=(a(21),function(e){var t=e.children,a=e.type,n=e.headingLvl;if(!t)throw new Error("Erorr expecting children elements");switch(n){case 1:return r.a.createElement("h1",{className:"heading ".concat(a?"heading--".concat(a):"")},t);case 2:return r.a.createElement("h2",{className:"heading ".concat(a?"heading--".concat(a):"")},t);case 3:return r.a.createElement("h3",{className:"heading ".concat(a?"heading--".concat(a):"")},t);case 4:case 5:return r.a.createElement("h4",{className:"heading ".concat(a?"heading--".concat(a):"")},t);case 6:return r.a.createElement("h6",{className:"heading ".concat(a?"heading--".concat(a):"")},t);default:throw new Error("Expecting values from 1 to 6")}}),h=(a(22),function(e){var t=e.type,a=e.innerText,n=e.isHTMLInputSubmit,c=e.handleClickFn,l=e.target;return!0===n?r.a.createElement("input",{className:"btn btn--submit",type:"submit",value:"Submit",onClick:c}):r.a.createElement("button",{className:"btn ".concat(t?"btn--".concat(t):"btn--std"),onClick:c,"data-target":l},a)}),p=a(14),f=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.type,n=e.id;if(!t)throw new Error("Erorr expecting children elements");var c=t.header,l=t.content,o=t.media,i=t.action;return r.a.createElement("section",{className:"card ".concat(a?"card--".concat(a):""),id:n},c?r.a.createElement("header",{className:"card__header"},c):null,o?r.a.createElement("div",{className:"card__media"},o):null,l?r.a.createElement("div",{className:"card__content"},l):null,i?r.a.createElement("div",{className:"card__actions"},i):null)}}]),t}(n.Component)),E=(a(6),function(e){var t=e.handleAddFn,a={header:r.a.createElement(m,{type:"ind-add",headingLvl:2},"Add Cards In!"),content:null,action:r.a.createElement(h,{type:"add-cards",innerText:"+",target:"ADD",handleClickFn:t})};return r.a.createElement(f,{type:"add-cards",id:"add-cards"},a)}),g=(a(24),r.a.createElement(f,{type:"ind-add",id:"ind-add"},{header:null,content:null})),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).render=function(){var e=a.props,t=e.type,n=e.children,c=e.AddCard,l=e.handleCardCloseFn;if(b(c))return r.a.createElement("section",{className:"dash ".concat(t?"dash--".concat(t):""),onClick:l},null!=n?n:g,c);if(null===c)return r.a.createElement("section",{className:"dash ".concat(t?"dash--".concat(t):""),onClick:l},null!=n?n:g);throw new Error("Error expecting AddCard to be a Card")},a}return Object(u.a)(t,e),t}(n.Component),b=function(e){var t=E.name;return function(e,t){return!1===("string"===typeof(a=e)||"number"===typeof a||"boolean"===typeof a)&&null!=e&&t in e;var a}(e,"type")&&e.type.name===t},v=(a(11),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).render=function(){var e=a.props,t=e.type,n=e.children,c=e.headerText,l=e.contentModifier,o=e.handleCloseFn,i=e.id;return r.a.createElement("section",{className:"modal ".concat(t?"modal--".concat(t):""),id:i},r.a.createElement("header",{className:"modal__header"},r.a.createElement(m,{type:"modal",headingLvl:2},c),r.a.createElement(h,{type:"close",innerText:"\xd7",handleClickFn:o})),r.a.createElement("section",{className:"modal__content ".concat(l?"modal__content--".concat(l):"")},n))},a.props.handleCloseFn||console.warn("warning expecting a parent to handle <Modal/> render state"),a}return Object(u.a)(t,e),t}(n.Component)),C=function(e){var t=e.id,a=e.handleCloseFn,n=e.handleCardFn,c=e.renderCards;return r.a.createElement(v,{key:0,id:t||"add-more",type:"add-more",headerText:"Add Cards in",handleCloseFn:a},r.a.createElement(h,{key:0,innerText:!1===c.basic1?"Add card 1":"Remove card 1",target:"basic1",handleClickFn:n}),r.a.createElement(h,{key:1,innerText:!1===c.basic2?"Add card 2":"Remove card 2",target:"basic2",handleClickFn:n}),r.a.createElement(h,{key:2,innerText:!1===c.cat?"Add cat card":"Remove cat card",target:"cat",handleClickFn:n}),r.a.createElement(h,{key:3,innerText:!1===c.lorem?"Add lorem card":"Remove lorem card",target:"lorem",handleClickFn:n}),r.a.createElement(h,{key:4,innerText:!1===c.todo?"Add Todo card":"Remove Todo card",target:"todo",handleClickFn:n}))},F=(a(25),function(e){var t=e.children,a=e.type;if(!t)throw new Error("Erorr expecting children elements");return r.a.createElement("p",{className:"prgh ".concat(a?"prgh--".concat(a):"")},t)}),w=function(e){var t=e.id,a=e.handleCloseFn;return r.a.createElement(v,{key:0,id:t||"info",type:"info",headerText:"About this app",handleCloseFn:a},r.a.createElement(F,null,"This app is a dashboard meant to present some either relevant or whismical content in the form of cards. In addition,the app allows users to add or remove cards as they please."),r.a.createElement(F,null,"Built using ",r.a.createElement("a",{href:"https://facebook.github.io/create-react-app/"},"Create React App"),", ",r.a.createElement("a",{href:"https://www.typescriptlang.org/"},"TypeScript"),", and ",r.a.createElement("a",{href:"https://storybook.js.org/"},"Storybook"),"."))},k={toDisplay:""},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).renderModal=function(){var e=a.props,t=e.toDisplay,n=e.renderCards,c=e.handleCloseFn,l=e.handleCardFn;switch(t){case"INFO":return r.a.createElement(w,{handleCloseFn:c});case"ADD":return r.a.createElement(C,{renderCards:n,handleCardFn:l,handleCloseFn:c});case"BASIC":return r.a.createElement(v,{id:"basic",type:"basic",headerText:"This is a Basic modal that is expected to work",handleCloseFn:c},r.a.createElement("p",null,"This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient."));default:return null}},a.render=function(){var e=a.props,t=e.handleCloseFn,n=e.id,c=a.renderModal();return r.a.createElement(r.a.Fragment,null,null==c?null:r.a.createElement("section",{id:n||"modal-controller",className:"modal-wrapper",onClick:t},c))},a.props.toDisplay||(a.state=k),a}return Object(u.a)(t,e),t}(n.Component),x=function(e){var t=e.handleDisplayFn;return r.a.createElement(h,{type:"page-info",innerText:"?",target:"INFO",handleClickFn:t})},O=a(8),T=a.n(O),A=a(9),N=(a(28),function(e){var t=e.src,a=e.alt,n=e.type;return r.a.createElement("img",{className:"image ".concat(n?"image--".concat(n):""),src:t,alt:a})}),S={listEle:[],toDisplay:null,renderCards:{basic1:!1,basic2:!1,lorem:!1,cat:!1,todo:!1}},D=new Headers;D.append("Access-Control-Allow-Origin","https://wilsonj806.github.io/speedy-dashboard/"),D.append("Access-Control-Allow-Credentials","true");var L={method:"GET",mode:"cors",header:D},I=Object(o.a)({},{catFact:"",catImg:""}),M="",q="https://cat-fact.herokuapp.com/facts/random",_="https://aws.random.cat/meow",H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state=I,a.getCatFactFetch=Object(A.a)(T.a.mark(function e(){var t,n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(M+q,L).then(function(e){return e.clone().json()}).then(function(e){return e.text}).catch(function(e){return console.error(e)});case 2:return t=e.sent,a.setState({catFact:t}),e.next=6,fetch(_,L).then(function(e){return e.clone().json()}).then(function(e){return e.file}).catch(function(e){return console.error(e)});case 6:n=e.sent,a.setState({catImg:n});case 8:case"end":return e.stop()}},e)})),a.render=function(){var e=a.state,t=e.catFact,n=e.catImg;return r.a.createElement(f,{type:"cat",id:"cat"},{header:[r.a.createElement(m,{type:"",headingLvl:2},"Cat Pics and Facts"),r.a.createElement(h,{type:"close",target:"cat",innerText:"\xd7"})],content:r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{type:"lorem"},""!==t&&""!==n?t:"Click the button to see a cat fact."),n?r.a.createElement(N,{src:n,alt:"cat image"}):null),action:r.a.createElement(h,{innerText:"Get Cat Fact",handleClickFn:a.getCatFactFetch})})},a}return Object(u.a)(t,e),t}(n.Component),R=(a(12),function(e){var t=e.children,a=e.type;if(!t)throw new Error("Erorr expecting children elements");return r.a.createElement("li",{className:"list-item ".concat(a?"list-item--".concat(a):"")},t)}),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).renderChildren=function(){var e=a.props.children;return e instanceof Array?e.map(function(e,t){return r.a.createElement(R,{key:t},e)}):r.a.createElement(R,null,e)},a.render=function(){var e=a.props,t=e.listType,n=e.type,c=a.renderChildren();switch(t){case"ul":return r.a.createElement("ul",{className:"ul ".concat(n?"ul--".concat(n):"")},c);case"ol":return r.a.createElement("ol",{className:"ol ".concat(n?"ol--type":"")},c);default:return null}},a}return Object(u.a)(t,e),t}(n.Component),B=function(e){var t=e.type,a=e.name,n=e.noLabel,c=e.handleChangeFn,l=e.handleClickFn,o=e.value,i=e.required,s=e.inputName,d=e.labelName;if(null==c&&null==l)throw new Error("\n      Error expecting a Function for handleChangeFn AND handleClickFn\n    ");if(!0!==n){var u=function(e){if(null==e)throw new Error("Expecting a string input");var t=/\b[a-z]/i,a=e.match(t);if(null==a)throw new Error("Error expecting a non-zero length string");var n=a[0].toUpperCase();return e.replace(t,n)}("radio"===t?o:a);switch(t){case"radio":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{key:1,type:"".concat(t),name:"".concat(a),className:s||"",required:i||!1,value:o,onClick:l||void 0,onChange:c||void 0}),r.a.createElement("label",{key:0,className:d||"",htmlFor:"".concat(a)},u));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{key:0,className:d||"",htmlFor:"".concat(a)},u),r.a.createElement("input",{key:1,type:"".concat(t),name:"".concat(a),className:s||"",required:i||!1,value:o,onClick:l||void 0,onChange:c||void 0}))}}return r.a.createElement("input",{required:i||!1,type:"".concat(t),name:"".concat(a),value:o,onClick:l||void 0,onChange:c||void 0})},P={task:"",priority:""},z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state=P,a.handleFormChangeDefault=function(e){var t=e.target,n=t.name,r=t.value;if(!Object.keys(a.state).includes(n))throw new Error("Error: Keys in State don't match");a.setState(Object(l.a)({},n,r))},a.submitForm=function(e){e.preventDefault();var t=a.props.handleSubmitFn;Object.values(a.state).some(function(e){return""===e})||(t(a.state),a.setState(function(e){return Object(o.a)({},P,{priority:e.priority})}))},a.render=function(){var e=a.props,t=e.type,n=e.id;e.handleChangeFn;return r.a.createElement("form",{id:"".concat(n||""),className:"form ".concat(t?"form--".concat(t):"")},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Task Priority"),r.a.createElement(B,{type:"radio",name:"priority",labelName:"todo--radio",required:!0,value:"High",handleClickFn:a.handleFormChangeDefault}),r.a.createElement(B,{type:"radio",name:"priority",labelName:"todo--radio",required:!0,value:"Medium",handleClickFn:a.handleFormChangeDefault}),r.a.createElement(B,{type:"radio",name:"priority",labelName:"todo--radio",required:!0,value:"Low",handleClickFn:a.handleFormChangeDefault})),r.a.createElement(B,{type:"text",name:"task",required:!0,value:a.state.task,handleChangeFn:a.handleFormChangeDefault}),r.a.createElement(h,{type:"submit",isHTMLInputSubmit:!0,innerText:null,handleClickFn:a.submitForm}))},a}return Object(u.a)(t,e),t}(n.Component),J=function(){return console.warn("Expecting a function")},K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).render=function(){var e=a.props,t=e.children,n=e.handleSubmitFn,c=Array.isArray(t)?t.length:null,l=t||"Add some tasks!";return r.a.createElement(f,{id:"todo",type:"todo"},{header:[r.a.createElement(m,{key:0,type:"md",headingLvl:3},"To Do Card"),r.a.createElement(h,{key:1,type:"close",target:"todo",innerText:"\xd7"})],content:r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{id:"todo-form",handleSubmitFn:n||J}),0!==c?r.a.createElement(G,{type:"todo",listType:"ul"},l):null)})},a}return Object(u.a)(t,e),t}(n.Component),U=function(e){var t=e.index,a=e.task,n=e.priority,c=e.handleDeleteFn,l=r.a.createElement("div",{key:0,style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-start",alignItems:"baseline",marginLeft:"0.5rem",width:"5rem"}},r.a.createElement("div",{className:"priority priority--".concat(n)}),r.a.createElement("span",null,n)),o=r.a.createElement(h,{key:1,type:"danger",target:t,innerText:"Delete",handleClickFn:c}),i=r.a.createElement(F,{key:2,type:"todo"},a);return r.a.createElement(r.a.Fragment,null,l,i,o)},Q=new Headers;Q.append("Access-Control-Allow-Origin","https://wilsonj806.github.io/speedy-dashboard/"),Q.append("Access-Control-Allow-Credentials","true");var V={method:"GET",mode:"cors",header:Q},W=Object(o.a)({},{loremStr:""}),X="",Y="https://loripsum.net/api/1/short/plaintext",Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state=W,a.getLoremFetch=Object(A.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X+Y,V).then(function(e){return e.clone()}).then(function(e){return e.text()}).catch(function(e){return console.error(e)});case 2:t=e.sent,a.setState({loremStr:t});case 4:case"end":return e.stop()}},e)})),a.render=function(){var e=a.state.loremStr;return r.a.createElement(f,{type:"lorem",id:"lorem"},{header:[r.a.createElement(m,{type:"",headingLvl:2},"Lorem Ipsum Generator"),r.a.createElement(h,{type:"close",target:"lorem",innerText:"\xd7"})],content:r.a.createElement(F,{type:"lorem"},e||"Generate Lorem text to see it here."),action:r.a.createElement(h,{innerText:"Generate Lorem",handleClickFn:a.getLoremFetch})})},a}return Object(u.a)(t,e),t}(n.Component),$=r.a.createElement(f,{key:void 0,id:"basicCard1",type:"basic basic1"},{header:[r.a.createElement(m,{headingLvl:3},"I'm a card with some content"),r.a.createElement(h,{type:"close",target:"basic1",innerText:"\xd7"})],content:r.a.createElement(F,null,"Sed varius euismod mi vel mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit.")}),ee=r.a.createElement(f,{key:void 0,id:"basicCard2",type:"basic basic2"},{header:[r.a.createElement(m,{headingLvl:3},"I'm a different card with some content"),r.a.createElement(h,{type:"close",innerText:"\xd7",target:"basic2"})],content:r.a.createElement(F,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc tu nunc in illo probas. Sed tamen intellego quid velit. Respondeat totidem verbis. De quibus cupio scire quid sentias. An eiusdem modi?")}),te=(a(29),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state=S,a.handleModalDisplay=function(e){if(!(e.target instanceof HTMLElement))throw new Error("Expecting a HTMLElement as the target of the event, got ".concat(e.target," instead"));var t=e.target.dataset.target;a.setState({toDisplay:t})},a.hideModal=function(e){if(!(e.target instanceof HTMLElement))throw new Error("Expecting a HTMLElement as the target of the event, got ".concat(e.target," instead"));var t=["modal-wrapper","btn--close"],n=e.target.classList;if(!0===(n.contains(t[0])||n.contains(t[1])))return e.stopPropagation(),void a.setState({toDisplay:null})},a.handleSubmit=function(e){a.setState(function(t){var a=t.listEle;return a.push(e),{listEle:a}})},a.handleEntryDelete=function(e){if(e.target instanceof HTMLElement){var t=e.target.dataset.target,n=parseInt(t);a.setState(function(e){return e.listEle.splice(n,1),{}})}},a.renderTemplate=function(e,t){var n=e.task,c=e.priority;return r.a.createElement(U,{key:t,index:"".concat(t),task:n,priority:c,handleDeleteFn:a.handleEntryDelete})},a.toggleCardState=function(e){if(!(e.target instanceof HTMLElement))throw new Error("Expecting event target to be an instance of HTMLElement,\n      got ".concat(e.target," instead"));var t=e.target.dataset.target;"string"===typeof t&&Object.keys(a.state.renderCards).includes(t)&&a.setState(function(e){var a=e.renderCards;return{renderCards:Object(o.a)({},a,Object(l.a)({},t,!a[t]))}})},a.renderCardsState=function(){var e=a.state.renderCards,t=[];for(var n in e)switch(n){case"cat":if(!0===e[n]){var c=r.a.createElement(H,null);t.push(c);break}case"lorem":if(!0===e[n]){var l=r.a.createElement(Z,null);t.push(l);break}case"todo":if(!0===e[n]){var o=a.state.listEle,i=o.length>0?o.map(a.renderTemplate):null,s=r.a.createElement(K,{handleSubmitFn:a.handleSubmit},i);t.push(s);break}case"basic1":if(!0===e[n]){var d=$;t.push(d);break}case"basic2":if(!0===e[n]){var u=ee;t.push(u);break}}return 0===t.length?null:t},a.render=function(){var e=a.state,t=e.toDisplay,n=e.renderCards,c=a.renderCardsState();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{toDisplay:t,renderCards:n,handleCloseFn:a.hideModal,handleCardFn:a.toggleCardState}),r.a.createElement("main",null,r.a.createElement(y,{AddCard:r.a.createElement(E,{handleAddFn:a.handleModalDisplay}),handleCardCloseFn:a.toggleCardState},c)),r.a.createElement(x,{handleDisplayFn:a.handleModalDisplay}))},a}return Object(u.a)(t,e),t}(n.Component));c.render(n.createElement(te,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.66e1bb05.chunk.js.map