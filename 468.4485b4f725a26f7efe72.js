"use strict";(globalThis.webpackChunkapi_oas_checker=globalThis.webpackChunkapi_oas_checker||[]).push([[468],{8468:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(7294),a=t(9669),o=t.n(a),i=t(158),c=t(625),u=t(7954),s=t.n(u),l=t(805),g=t(9704),d=t(9795),h=t(7595),f=t(6362),m=t(4586);const p=(0,l.QM)({editor:{height:"calc(100vh - 90px)"},editorMarginError:{backgroundColor:"var(--danger)"},editorMarginWarning:{backgroundColor:"var(--warning)"},editorHighlightLine:{backgroundColor:"var(--primary)"}}),v=()=>{const e=(0,n.useRef)(null),r=(0,n.useRef)({}),t=(0,n.useRef)([]),a=p(),u=(0,g.v9)((e=>(0,h.eE)(e))),l=(0,g.v9)((e=>(0,h.F$)(e))),v=(0,g.v9)((e=>(0,h.uF)(e))),b=(0,g.I0)();return(0,n.useEffect)((()=>{(0,c.setDiagnosticsOptions)({enableSchemaRequest:!1,hover:!0,completion:!0,validate:!0,format:!0}),r.current=i.editor.create(e.current,{value:"",language:"yaml",glyphMargin:!0,theme:"vs-dark",automaticLayout:!0}),r.current.getModel().updateOptions({tabSize:2}),r.current.onDidChangeModelContent(s()((()=>{const e=r.current.getModel().getValue();b((0,d.tD)(e))}),1e3)),r.current.changeViewZones((e=>{e.addZone({afterLineNumber:0,heightInPx:20,domNode:document.createElement("span")})}))}),[b]),(0,n.useEffect)((()=>{if(!v)return null;(async()=>{try{const{data:e}=await o().get(v);r.current.getModel().setValue(e),b((0,d.tD)(e))}catch(e){console.error(e),alert(e.message)}})()}),[v,b]),(0,n.useEffect)((()=>{if(null===u)return void(t.current=r.current.deltaDecorations(t.current,[]));const e=(0,m.Wg)(u);r.current.deltaDecorations(t.current,[]);const n=[];for(const[r,t]of e.entries())n.push({range:new i.Range(Number(r),1,Number(r),1),options:{glyphMarginClassName:(0,m.g9)(t)===f.pn?a.editorMarginError:a.editorMarginWarning}});t.current=r.current.deltaDecorations([],n)}),[u,a.editorHighlightLine,a.editorMarginError,a.editorMarginWarning]),(0,n.useEffect)((()=>{l&&(r.current.revealLineInCenter(l.line),r.current.setPosition({lineNumber:l.line,column:l.character}),r.current.focus())}),[l]),n.createElement("div",{ref:e,className:a.editor})}}}]);