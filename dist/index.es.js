import e,{useState as t,useRef as o,useCallback as n,useEffect as r}from"react";import a from"react-from-dom";import{create as l}from"zustand";import{fromRange as i}from"xpath-range";!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('header{background-color:#333;color:#fff;color:gold;padding:2rem;text-align:center}.blog-post{margin:0 auto;max-width:800px;padding:1rem}.heading{font-size:58px}.post-title{font-size:2.7rem;line-height:1.2}.post-meta{color:#888}.post-content{margin-top:1rem}ul{list-style:none;margin:0;padding:0}.comments-section{border-top:1px solid #ccc;margin:2rem auto;max-width:800px;padding:1rem}.comment{margin-bottom:1rem}.comment-author{font-weight:700}.left-right{float:left;margin:2% 2.5% 1rem 0;padding:1rem;width:45%}.top-bottom{clear:both;margin-bottom:1rem;margin-top:1rem}.blog-quote{background-color:#333;border-left:4px solid #333;margin:1rem 0;padding:10px}.card-with-shadow{background-color:#333;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin-bottom:2rem;margin-top:2rem;padding:15px}.floating-toolbar{align-items:center;background:#fff;border-radius:12px;box-shadow:0 54px 55px rgba(0,0,0,.25),0 -12px 30px rgba(0,0,0,.12),0 4px 6px rgba(0,0,0,.12),0 12px 13px rgba(0,0,0,.17),0 -3px 5px rgba(0,0,0,.09);display:flex;overflow:hidden}.floating-toolbar span{cursor:pointer;font-size:28px;padding:4px 18px;position:relative;transition:all .2s ease-in-out}.floating-toolbar span:hover{background:#f2f2f2;color:#0b0b78}.floating-toolbar-close{align-items:center;background:#fff;border-radius:100%;color:#0b0b78;cursor:pointer;display:flex;height:30px;justify-content:center;position:absolute;right:-15px;top:-15px;transition:all .2s ease;width:30px}.floating-toolbar-close:hover{scale:1.1}.modal-container{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;position:fixed;top:0;width:100vw;z-index:100}.modal-content{aspect-ratio:1;background:hsla(0,2%,67%,.8);border-radius:20px;box-shadow:0 4px 8px hsla(0,2%,67%,.8);flex-direction:column;padding:10px;width:40%}.container,.modal-content{align-items:center;display:flex;justify-content:center;margin:auto}.container{flex-wrap:wrap;width:70%}.color-container{align-items:center;display:flex;flex-direction:column;margin:30px}.color-box{background:rgba(0,0,0,.8);border-radius:100%;box-shadow:0 4px 8px rgba(0,0,0,.7);cursor:pointer;height:38px;transition:all .3s ease;width:38px}.color-box:hover{scale:1.2}.color-name{color:#280f60;margin-top:5px}.btn-submit{background:#280f60;border:1px solid #280f60;border-radius:9px;color:#fff;cursor:pointer;font-family:Times New Roman,Times,serif;font-size:22px;margin-bottom:20px;outline:none;padding:14px 36px;transition:all .3s ease}.btn-submit:hover{background:#482696}.modal-content h1{color:#0b0b78}.comment{border:1px dashed gold;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);cursor:pointer;margin:0 2px;overflow:hidden;padding:6px 12px 6px 32px;position:relative}.hover-card{background:#000;background:#fff;background:linear-gradient(180deg,#ffe8e8,#fff);border:30px solid trasparent;border-radius:20px;box-shadow:0 4px 8px #ffe8e8;color:#000;font-style:italic;left:50%;max-height:300px;max-width:450px;overflow-y:scroll;padding:15px 20px;position:fixed;top:-300px;transform:translate(-50%,-50%);transition:all 1s ease;transition-delay:.5s;width:100%;z-index:100}.comment:hover>.hover-card{top:30%;transition-delay:0s}.hover-title{border-bottom:.2px solid #0b0b78;color:#0b0b78;display:block;font-weight:900;margin-bottom:16px;text-transform:uppercase;width:100%}.comment:before{color:"#fff";content:"  💬  ";height:100%;left:0;padding:0 6px;position:absolute;width:100%}.text-shadow{font-weight:"bolder";text-shadow:.1px .1px #000}.highlight .bold{font-family:Times New Roman,Times,serif}.bold{font-weight:700;letter-spacing:1}.highlight{border-radius:4px;padding:4px}.notes-input{background-color:hsla(0,0%,100%,.02);border:none;border-radius:12px;color:#000;font-size:18px;height:60%;outline:none;padding:12px;width:90%}.gold{background:gold}.red{background:red}.white{background:#fff;color:#000}.blue{background:blue}.green{background:green}.purple{background:purple}.orange{background:orange}.grey{background:grey}::-moz-selection{background:gold;color:#000}::selection{background:gold;color:#000}@keyframes fadeInDown{to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}');const c=l((e=>({openComment:!1,toggleCommentModal:()=>e((e=>({openComment:!e.openComment})))}))),s=l((e=>({dom:null,setDom:t=>e((e=>({dom:t})))}))),d=l((e=>({open:!1,toggleModal:()=>e((e=>({open:!e.open})))}))),p={name:"",value:""},m=l((e=>({type:{...p},config:{xPath:"",selectedText:""},changeType:({name:t,value:o})=>e((e=>({type:{...e.type,name:t,value:o}}))),changeConfig:({xPath:t,selectedText:o})=>e((e=>({config:{...e.config,xPath:t,selectedText:o}})))})));const g=t=>{let o=[];if(t?.props?.children?.length>0&&"string"!=typeof t?.props?.children){const e=t?.props?.children.map((e=>e.type?g(e):e));o=[...e]}const n={...t?.props}||{};n.key=Date.now()+"."+Math.random(1e3);let r=t?.type?.toLowerCase();return e.createElement(r,n,o.length>0?o:null)};function x(){const e=s((e=>e.dom)),t=s((e=>e.setDom)),o=m((e=>e.type)),n=m((e=>e.changeType)),r=m((e=>e.config)),a=m((e=>e.changeConfig)),l=d((e=>e.toggleModal));function i(e,t){let n=t;if(t||(n=r.xPath,n.reverse()),e?.props?.children.length){let t=n.pop(),c=(a=t,l=a?.replace(/[^0-9]/g,""),l),s=null;const d=e?.props?.children.filter(((n,a)=>{if(!n?.type&&n?.includes(r.selectedText)){s=a,console.log("yes here it is",n,o);const t=n.split(r.selectedText);let l={type:"span",props:{children:[t[0],{type:"span",props:{children:"comment"===o.name?[r.selectedText,{type:"section",props:{className:"hover-card",children:[{type:"span",props:{className:"hover-title",children:[r.selectedText]}},o.value]}}]:[r.selectedText],className:`text-shadow ${o.name} ${o.value?o.value:""} `}},t[1]]}},i=e?.props?.children;i[s]=l,Object.assign(e?.props?.children,i)}return t?.startsWith(n.type,[])}));Object.assign(e?.props?.children,[]),i(d[c-1],n)}var a,l;return e}return{addBold:()=>{if("bold"===o.name&&r.selectedText&&r.xPath){let o=i(e,"");const r=Object.create(o);t(r),a({xPath:"",selectedText:""}),n({name:"",value:""})}},addComment:()=>{if("comment"===o.name&&r.selectedText&&r.xPath){let o=i(e,"");const r=Object.create(o);t(r),a({xPath:"",selectedText:""}),n({name:"",value:""})}},addHighlight:()=>{if("highlight"===o.name&&o.value&&r.selectedText&&r.xPath){let o=i(e,"");const r=Object.create(o);t(r),a({xPath:"",selectedText:""}),n({name:"",value:""}),l((e=>!e))}}}}function f(){const[o,n]=t(""),a=m((e=>e.changeType)),l=m((e=>e.type)),i=c((e=>e.toggleCommentModal)),{addComment:s}=x();r((()=>{l.name&&l.value&&(s(),i())}),[l.name,l.value,s,i]);return e.createElement("section",{className:"modal-container"},e.createElement("div",{className:"modal-content"},e.createElement("h1",null,"Add Your Notes"),e.createElement("textarea",{onChange:e=>{e.preventDefault(),n(e.target.value)},className:"notes-input",placeholder:"Enter your Notes"}),e.createElement("button",{onClick:()=>{a({name:"comment",value:o})},className:"btn-submit"},"Add Note")))}const h=[{name:"red",color:"red",textColor:"#fff"},{name:"gold",color:"gold",textColor:"#fff"},{name:"white",color:"white",textColor:"#000"},{name:"blue",color:"blue",textColor:"#fff"},{name:"green",color:"green",textColor:"#fff"},{name:"purple",color:"purple",textColor:"#fff"},{name:"orange",color:"orange",textColor:"#fff"},{name:"grey",color:"grey",textColor:"#fff"},{name:"pink",color:"pink",textColor:"#fff"}];function u(t){const o=m((e=>e.changeType)),n=m((e=>e.type)),{addHighlight:a}=x();d((e=>e.toggleModal));const l=t.colors||h;r((()=>{n.name&&n.value&&a()}),[n.value,a,n.name]);return e.createElement("section",{className:"modal-container"},e.createElement("div",{className:"modal-content"},e.createElement("h1",null,"Pick your color"),e.createElement("div",{className:"container"},l.map((t=>e.createElement("span",{className:"color-container",key:t.name},e.createElement("div",{className:"color-box",onClick:()=>{return e=t.name,void o({name:"highlight",value:e});var e},style:{backgroundColor:`${t.name}`,color:`${t.textColor}`,scale:n.value===t.name?"1.3":"1"}}),e.createElement("span",{className:"color-name"},t.name)))))))}function b({x:o,y:n}){const[a,l]=t(!0),i=m((e=>e.changeType)),{addBold:s}=x(),p=d((e=>e.toggleModal)),g=c((e=>e.toggleCommentModal)),f=m((e=>e.type)),h=m((e=>e.config)),u=({name:e,value:t})=>{i({name:e,value:t}),"bold"!==e&&("comment"===e?g():p())};return r((()=>{"bold"===f.name&&h.selectedText&&s()}),[f.name,s]),r((()=>{l(!0)}),[o]),e.createElement(e.Fragment,null,a&&o?e.createElement("section",{style:{left:o-100+"px",top:`${n+10}px`,position:"absolute"}},e.createElement("div",{className:"floating-toolbar"},e.createElement("span",{onClick:()=>u({name:"bold"})},"B"),e.createElement("span",{onClick:()=>u({name:"highlight"})},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"}))),e.createElement("span",{onClick:()=>u({name:"comment"})},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})))),e.createElement("span",{onClick:()=>l(!a),className:"floating-toolbar-close"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))):null)}const v=l=>{const p=d((e=>e.open)),x=c((e=>e.openComment)),h=s((e=>e.setDom)),v=s((e=>e.dom)),y=g(v),{editorRef:w,mousePoint:k}=function(){const[e,a]=t({x:0,y:0}),l=m((e=>e.changeConfig)),c=o(),s=n((e=>{if(!c.current.contains(e.target))return;let t=document.getSelection().toString();if(!t)return;a({x:e.pageX,y:e.pageY});const o=i(document.getSelection().getRangeAt(0),c.current).start.split("/").filter((e=>e)),[n,...r]=o;l({xPath:r,selectedText:t})}),[l]);return r((()=>(document.addEventListener("mouseup",s),()=>{document.removeEventListener("mouseup",s)})),[s]),{editorRef:c,mousePoint:e}}();return r((()=>{if(!v){const e=a(l.htmlContent);h({...e})}}),[v,h,l]),e.createElement(e.Fragment,null,p&&e.createElement(u,{colors:l.colors}),x&&e.createElement(f,null),v&&e.createElement("div",{className:"notes-wrapper",ref:w},y),e.createElement(b,{x:k.x,y:k.y}))};export{v as default};
