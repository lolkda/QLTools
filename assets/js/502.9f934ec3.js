"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[502],{3798:function(t,e,i){i.d(e,{Z:function(){return h}});var a=i(6252);const o=t=>((0,a.dD)("data-v-326b083d"),t=t(),(0,a.Cn)(),t),n={class:"mdui-m-t-5",id:"footer"},s={class:"mdui-p-a-5 mdui-typo mdui-container"},l={class:"mdui-col mdui-text"},d=o((()=>(0,a._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),c={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,a.Uk)("青龙 Tools"),u=o((()=>(0,a._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1)));function m(t,e,i,o,m,p){const g=(0,a.up)("st");return(0,a.wg)(),(0,a.iD)("footer",n,[(0,a._)("div",s,[(0,a._)("div",l,[(0,a._)("p",null,[d,(0,a._)("a",c,[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[r])),_:1})])]),u])])])}var p={name:"FooterCom"},g=i(3744);const _=(0,g.Z)(p,[["render",m],["__scopeId","data-v-326b083d"]]);var h=_},2785:function(t,e,i){i.d(e,{Z:function(){return y}});var a=i(6252);const o={class:"mdui-toolbar"},n=(0,a._)("a",{href:"/#/",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"account_balance_wallet")],-1),s=(0,a._)("span",{class:"mdui-typo-title"},"青龙Tools",-1),l=(0,a._)("div",{class:"mdui-toolbar-spacer"},null,-1),d=(0,a._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),c=(0,a._)("i",{class:"mdui-icon material-icons"},"account_circle",-1),r=[c],u=(0,a._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),m=[u];function p(t,e,i,c,u,p){return(0,a.wg)(),(0,a.iD)("div",o,[n,s,l,d,(0,a._)("a",{"mdui-tooltip":"{content: '管理面板'}",onClick:e[0]||(e[0]=t=>this.GoAdmin()),id:"Admin",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},r),(0,a._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:e[1]||(e[1]=t=>this.LogOut()),id:"LogOut",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},m)])}var g=i(9669),_=i.n(g),h={name:"HeaderCom",methods:{CheckLogin(){let t=localStorage.getItem("Bearer");if(null!==t&&""!==t){let e={token:t};_().post("/v1/api/check/token",e).then((t=>{!0===t.data.data?(document.getElementById("Admin").style.display="inline",document.getElementById("LogOut").style.display="inline"):localStorage.clear()}))}},LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoAdmin(){window.open("/#/admin","_self"),location.reload()}},mounted(){this.CheckLogin()}},b=i(3744);const f=(0,b.Z)(h,[["render",p]]);var y=f},7502:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var a=i(6252),o=i(9963);const n=t=>((0,a.dD)("data-v-c1e4cfd0"),t=t(),(0,a.Cn)(),t),s={id:"box"},l={class:"box",style:{"margin-top":"35px"}},d=n((()=>(0,a._)("p",{style:{"padding-bottom":"10px"}},"管理员注册",-1))),c=n((()=>(0,a._)("hr",null,null,-1))),r={style:{width:"75%",margin:"20px auto 0"}},u={class:"mdui-textfield mdui-textfield-floating-label"},m=n((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"email",-1))),p={class:"mdui-textfield mdui-textfield-floating-label"},g=n((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"account_box",-1))),_={class:"mdui-textfield mdui-textfield-floating-label"},h=n((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"lock",-1))),b={class:"mdui-textfield mdui-textfield-floating-label"},f=n((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"lock",-1))),y=n((()=>(0,a._)("div",{style:{"text-align":"center","padding-top":"20px"}},[(0,a._)("button",{class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue-50",style:{width:"200px"},id:"LoginBtn"},"注  册")],-1)));function w(t,e,i,n,w,v){const x=(0,a.up)("HeaderCom"),k=(0,a.up)("FooterCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x),(0,a._)("div",s,[(0,a._)("div",l,[d,c,(0,a._)("div",r,[(0,a._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)(((...t)=>v.submitForm&&v.submitForm(...t)),["prevent"]))},[(0,a._)("div",u,[m,(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"管理员邮箱","onUpdate:modelValue":e[0]||(e[0]=t=>w.RegisterData.email=t)},null,512),[[o.nr,w.RegisterData.email]])]),(0,a._)("div",p,[g,(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"管理员用户名","onUpdate:modelValue":e[1]||(e[1]=t=>w.RegisterData.username=t)},null,512),[[o.nr,w.RegisterData.username]])]),(0,a._)("div",_,[h,(0,a.wy)((0,a._)("input",{type:"password",class:"mdui-textfield-input",placeholder:"管理员密码","onUpdate:modelValue":e[2]||(e[2]=t=>w.RegisterData.password=t)},null,512),[[o.nr,w.RegisterData.password]])]),(0,a._)("div",b,[f,(0,a.wy)((0,a._)("input",{type:"password",class:"mdui-textfield-input",placeholder:"再次确认密码","onUpdate:modelValue":e[3]||(e[3]=t=>w.RegisterData.re_password=t)},null,512),[[o.nr,w.RegisterData.re_password]])]),y],32)])])]),(0,a.Wm)(k)],64)}var v=i(9669),x=i.n(v),k=i(4493),C=i(2785),D=i(3798),Z={name:"LoginView",components:{HeaderCom:C.Z,FooterCom:D.Z},data(){return{RegisterData:{email:"",username:"",password:"",re_password:""}}},methods:{submitForm(){x().post("/v1/api/signup",this.RegisterData).then((t=>{switch(""!==t.data){case 2e3===t.data.code:k.Z.snackbar({message:"注册成功,已自动关闭注册(即将跳转登录)",position:"right-top"}),setTimeout((()=>{window.open("/#/login","_self")}),2e3);break;case 5007===t.data.code:k.Z.snackbar({message:"已关闭注册,禁止新用户注册",position:"right-top"});break;case 5003===t.data.code:k.Z.snackbar({message:"服务繁忙",position:"right-top"});break;case 5002===t.data.code:""===t.data.data?k.Z.snackbar({message:"服务繁忙",position:"right-top"}):k.Z.snackbar({message:t.data.msg,position:"right-top"});break}})).catch((t=>{k.Z.snackbar({message:t,position:"right-top"})}))},changeStyle(){let t=document.querySelector("#box");t.style.minHeight=window.innerHeight-document.body.clientHeight+t.clientHeight+"px",k.Z.mutation()}},mounted(){this.changeStyle()}},R=i(3744);const L=(0,R.Z)(Z,[["render",w],["__scopeId","data-v-c1e4cfd0"]]);var H=L}}]);
//# sourceMappingURL=502.9f934ec3.js.map