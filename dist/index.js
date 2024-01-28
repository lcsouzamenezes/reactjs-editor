"use strict";var e=require("react"),t=require("react-from-dom"),o=require("zustand"),n=require("xpath-range");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),l=a(t);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('header{background-color:#333;color:#fff;color:gold;padding:2rem;text-align:center}.blog-post{margin:0 auto;max-width:800px;padding:1rem}.heading{font-size:58px}.post-title{font-size:2.7rem;line-height:1.2}.post-meta{color:#888}.post-content{margin-top:1rem}ul{list-style:none;margin:0;padding:0}.comments-section{border-top:1px solid #ccc;margin:2rem auto;max-width:800px;padding:1rem}.comment{margin-bottom:1rem}.comment-author{font-weight:700}.left-right{float:left;margin:2% 2.5% 1rem 0;padding:1rem;width:45%}.top-bottom{clear:both;margin-bottom:1rem;margin-top:1rem}.blog-quote{background-color:#333;border-left:4px solid #333;margin:1rem 0;padding:10px}.card-with-shadow{background-color:#333;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin-bottom:2rem;margin-top:2rem;padding:15px}.floating-toolbar{align-items:center;background:#fff;border-radius:12px;box-shadow:0 54px 55px rgba(0,0,0,.25),0 -12px 30px rgba(0,0,0,.12),0 4px 6px rgba(0,0,0,.12),0 12px 13px rgba(0,0,0,.17),0 -3px 5px rgba(0,0,0,.09);display:flex;overflow:hidden}.floating-toolbar span{cursor:pointer;font-size:28px;padding:4px 18px;position:relative;transition:all .2s ease-in-out}.floating-toolbar span:hover{background:#f2f2f2;color:#0b0b78}.floating-toolbar-close{align-items:center;background:#fff;border-radius:100%;color:#0b0b78;cursor:pointer;display:flex;height:30px;justify-content:center;position:absolute;right:-15px;top:-15px;transition:all .2s ease;width:30px}.floating-toolbar-close:hover{scale:1.1}.modal-container{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;position:fixed;top:0;width:100vw;z-index:100}.modal-content{aspect-ratio:1;background:hsla(0,2%,67%,.8);border-radius:20px;box-shadow:0 4px 8px hsla(0,2%,67%,.8);flex-direction:column;padding:10px;width:40%}.container,.modal-content{align-items:center;display:flex;justify-content:center;margin:auto}.container{flex-wrap:wrap;width:70%}.color-container{align-items:center;display:flex;flex-direction:column;margin:30px}.color-box{background:rgba(0,0,0,.8);border-radius:100%;box-shadow:0 4px 8px rgba(0,0,0,.7);cursor:pointer;height:38px;transition:all .3s ease;width:38px}.color-box:hover{scale:1.2}.color-name{color:#280f60;margin-top:5px}.btn-submit{background:#280f60;border:1px solid #280f60;border-radius:9px;color:#fff;cursor:pointer;font-family:Times New Roman,Times,serif;font-size:22px;margin-bottom:20px;outline:none;padding:14px 36px;transition:all .3s ease}.btn-submit:hover{background:#482696}.modal-content h1{color:#0b0b78}.comment{border:1px dashed gold;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);cursor:pointer;margin:0 2px;overflow:hidden;padding:6px 12px 6px 32px;position:relative}.hover-card{background:#000;background:#fff;background:linear-gradient(180deg,#ffe8e8,#fff);border:30px solid trasparent;border-radius:20px;box-shadow:0 4px 8px #ffe8e8;color:#000;font-style:italic;left:50%;max-height:300px;max-width:450px;overflow-y:scroll;padding:15px 20px;position:fixed;top:-300px;transform:translate(-50%,-50%);transition:all 1s ease;transition-delay:.5s;width:100%;z-index:100}.comment:hover>.hover-card{top:30%;transition-delay:0s}.hover-title{border-bottom:.2px solid #0b0b78;color:#0b0b78;display:block;font-weight:900;margin-bottom:16px;text-transform:uppercase;width:100%}.comment:before{color:"#fff";content:"  💬  ";height:100%;left:0;padding:0 6px;position:absolute;width:100%}.text-shadow{font-weight:"bolder";text-shadow:.1px .1px #000}.highlight .bold{font-family:Times New Roman,Times,serif}.bold{font-weight:700;letter-spacing:1}.highlight{border-radius:4px;padding:4px}.notes-input{background-color:hsla(0,0%,100%,.02);border:none;border-radius:12px;color:#000;font-size:18px;height:60%;outline:none;padding:12px;width:90%}.gold{background:gold}.red{background:red}.white{background:#fff;color:#000}.blue{background:blue}.green{background:green}.purple{background:purple}.orange{background:orange}.grey{background:grey}::-moz-selection{background:gold;color:#000}::selection{background:gold;color:#000}@keyframes fadeInDown{to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}');const i=o.create((e=>({openComment:!1,toggleCommentModal:()=>e((e=>({openComment:!e.openComment})))}))),c=o.create((e=>({dom:null,setDom:t=>e((e=>({dom:t})))}))),d=o.create((e=>({open:!1,toggleModal:()=>e((e=>({open:!e.open})))}))),s={name:"",value:""},p=o.create((e=>({type:{...s},config:{xPath:"",selectedText:""},changeType:({name:t,value:o})=>e((e=>({type:{...e.type,name:t,value:o}}))),changeConfig:({xPath:t,selectedText:o})=>e((e=>({config:{...e.config,xPath:t,selectedText:o}})))})));const m=e=>{let t=[];if(e?.props?.children?.length>0&&"string"!=typeof e?.props?.children){const o=e?.props?.children.map((e=>e.type?m(e):e));t=[...o]}const o={...e?.props}||{};o.key=Date.now()+"."+Math.random(1e3);let n=e?.type?.toLowerCase();return r.default.createElement(n,o,t.length>0?t:null)};function u(){const e=c((e=>e.dom)),t=c((e=>e.setDom)),o=p((e=>e.type)),n=p((e=>e.changeType)),a=p((e=>e.config)),r=p((e=>e.changeConfig)),l=d((e=>e.toggleModal));function i(e,t){let n=t;if(t||(n=a.xPath,n.reverse()),e?.props?.children.length){let t=n.pop(),c=(r=t,l=r?.replace(/[^0-9]/g,""),l),d=null;const s=e?.props?.children.filter(((n,r)=>{if(!n?.type&&n?.includes(a.selectedText)){d=r,console.log("yes here it is",n,o);const t=n.split(a.selectedText);let l={type:"span",props:{children:[t[0],{type:"span",props:{children:"comment"===o.name?[a.selectedText,{type:"section",props:{className:"hover-card",children:[{type:"span",props:{className:"hover-title",children:[a.selectedText]}},o.value]}}]:[a.selectedText],className:`text-shadow ${o.name} ${o.value?o.value:""} `}},t[1]]}},i=e?.props?.children;i[d]=l,Object.assign(e?.props?.children,i)}return t?.startsWith(n.type,[])}));Object.assign(e?.props?.children,[]),i(s[c-1],n)}var r,l;return e}return{addBold:()=>{if("bold"===o.name&&a.selectedText&&a.xPath){let o=i(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""})}},addComment:()=>{if("comment"===o.name&&a.selectedText&&a.xPath){let o=i(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""})}},addHighlight:()=>{if("highlight"===o.name&&o.value&&a.selectedText&&a.xPath){let o=i(e,"");const a=Object.create(o);t(a),r({xPath:"",selectedText:""}),n({name:"",value:""}),l((e=>!e))}}}}function f(){const[t,o]=e.useState(""),n=p((e=>e.changeType)),a=p((e=>e.type)),l=i((e=>e.toggleCommentModal)),{addComment:c}=u();e.useEffect((()=>{a.name&&a.value&&(c(),l())}),[a.name,a.value,c,l]);return r.default.createElement("section",{className:"modal-container"},r.default.createElement("div",{className:"modal-content"},r.default.createElement("h1",null,"Add Your Notes"),r.default.createElement("textarea",{onChange:e=>{e.preventDefault(),o(e.target.value)},className:"notes-input",placeholder:"Enter your Notes"}),r.default.createElement("button",{onClick:()=>{n({name:"comment",value:t})},className:"btn-submit"},"Add Note")))}const g=[{name:"red",color:"red",textColor:"#fff"},{name:"gold",color:"gold",textColor:"#fff"},{name:"white",color:"white",textColor:"#000"},{name:"blue",color:"blue",textColor:"#fff"},{name:"green",color:"green",textColor:"#fff"},{name:"purple",color:"purple",textColor:"#fff"},{name:"orange",color:"orange",textColor:"#fff"},{name:"grey",color:"grey",textColor:"#fff"},{name:"pink",color:"pink",textColor:"#fff"}];function x(t){const o=p((e=>e.changeType)),n=p((e=>e.type)),{addHighlight:a}=u();d((e=>e.toggleModal));const l=t.colors||g;e.useEffect((()=>{n.name&&n.value&&a()}),[n.value,a,n.name]);return r.default.createElement("section",{className:"modal-container"},r.default.createElement("div",{className:"modal-content"},r.default.createElement("h1",null,"Pick your color"),r.default.createElement("div",{className:"container"},l.map((e=>r.default.createElement("span",{className:"color-container",key:e.name},r.default.createElement("div",{className:"color-box",onClick:()=>{return t=e.name,void o({name:"highlight",value:t});var t},style:{backgroundColor:`${e.name}`,color:`${e.textColor}`,scale:n.value===e.name?"1.3":"1"}}),r.default.createElement("span",{className:"color-name"},e.name)))))))}function h({x:t,y:o}){const[n,a]=e.useState(!0),l=p((e=>e.changeType)),{addBold:c}=u(),s=d((e=>e.toggleModal)),m=i((e=>e.toggleCommentModal)),f=p((e=>e.type)),g=p((e=>e.config)),x=({name:e,value:t})=>{l({name:e,value:t}),"bold"!==e&&("comment"===e?m():s())};return e.useEffect((()=>{"bold"===f.name&&g.selectedText&&c()}),[f.name,c]),e.useEffect((()=>{a(!0)}),[t]),r.default.createElement(r.default.Fragment,null,n&&t?r.default.createElement("section",{style:{left:t-100+"px",top:`${o+10}px`,position:"absolute"}},r.default.createElement("div",{className:"floating-toolbar"},r.default.createElement("span",{onClick:()=>x({name:"bold"})},"B"),r.default.createElement("span",{onClick:()=>x({name:"highlight"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"}))),r.default.createElement("span",{onClick:()=>x({name:"comment"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})))),r.default.createElement("span",{onClick:()=>a(!n),className:"floating-toolbar-close"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))):null)}module.exports=t=>{const o=d((e=>e.open)),a=i((e=>e.openComment)),s=c((e=>e.setDom)),u=c((e=>e.dom)),g=m(u),{editorRef:b,mousePoint:v}=function(){const[t,o]=e.useState({x:0,y:0}),a=p((e=>e.changeConfig)),r=e.useRef(),l=e.useCallback((e=>{if(!r.current.contains(e.target))return;let t=document.getSelection().toString();if(!t)return;o({x:e.pageX,y:e.pageY});const l=n.fromRange(document.getSelection().getRangeAt(0),r.current).start.split("/").filter((e=>e)),[i,...c]=l;a({xPath:c,selectedText:t})}),[a]);return e.useEffect((()=>(document.addEventListener("mouseup",l),()=>{document.removeEventListener("mouseup",l)})),[l]),{editorRef:r,mousePoint:t}}();return e.useEffect((()=>{if(!u){const e=l.default(t.htmlContent);s({...e})}}),[u,s,t]),r.default.createElement(r.default.Fragment,null,o&&r.default.createElement(x,{colors:t.colors}),a&&r.default.createElement(f,null),u&&r.default.createElement("div",{className:"notes-wrapper",ref:b},g),r.default.createElement(h,{x:v.x,y:v.y}))};
