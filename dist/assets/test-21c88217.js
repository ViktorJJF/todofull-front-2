import{_ as c,o as i,f as a}from"./index-2e78bb3e.js";const l={data(){return{isRecording:!1,mediaRecorder:null,chunks:[],stream:null}},methods:{async startRecording(){try{if(this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),(await navigator.permissions.query({name:"microphone"})).state==="denied"){console.log("Microphone permission was denied"),this.stream.getTracks().forEach(e=>e.stop()),this.isRecording=!1,this.mediaRecorder=null;return}this.isRecording=!0,this.chunks=[],this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.addEventListener("dataavailable",e=>{this.chunks.push(e.data)}),this.mediaRecorder.addEventListener("stop",()=>{const e=new Blob(this.chunks,{type:"audio/wav"}),s=new FormData;s.append("audio",e,"audio.wav"),fetch("/endpoint",{method:"POST",body:s}),this.isRecording=!1,this.mediaRecorder=null,this.stream.getTracks().forEach(n=>n.stop())}),this.mediaRecorder.start()}catch(r){console.error(r),alert("Please grant permission to access the microphone")}},stopRecording(){this.mediaRecorder.stop()}}};function m(r,e,s,n,d,t){return i(),a("div",null,[d.isRecording?(i(),a("button",{key:1,onClick:e[1]||(e[1]=(...o)=>t.stopRecording&&t.stopRecording(...o))},"Stop Recording")):(i(),a("button",{key:0,onClick:e[0]||(e[0]=(...o)=>t.startRecording&&t.startRecording(...o))},"Record"))])}const u=c(l,[["render",m],["__file","D:/trabajo/Todofull/todofull-front-2/src/views/test.vue"]]);export{u as default};
