"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[255],{3798:function(t,e,i){i.d(e,{Z:function(){return b}});var a=i(6252);const n=t=>((0,a.dD)("data-v-326b083d"),t=t(),(0,a.Cn)(),t),o={class:"mdui-m-t-5",id:"footer"},l={class:"mdui-p-a-5 mdui-typo mdui-container"},s={class:"mdui-col mdui-text"},d=n((()=>(0,a._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),c={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,a.Uk)("青龙 Tools"),u=n((()=>(0,a._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1)));function m(t,e,i,n,m,p){const g=(0,a.up)("st");return(0,a.wg)(),(0,a.iD)("footer",o,[(0,a._)("div",l,[(0,a._)("div",s,[(0,a._)("p",null,[d,(0,a._)("a",c,[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[r])),_:1})])]),u])])])}var p={name:"FooterCom"},g=i(3744);const _=(0,g.Z)(p,[["render",m],["__scopeId","data-v-326b083d"]]);var b=_},2555:function(t,e,i){i.d(e,{Z:function(){return T}});var a=i(6252),n=i(3577),o=i(9963);const l={class:"mdui-toolbar"},s=(0,a._)("i",{class:"mdui-icon material-icons"},"account_balance_wallet",-1),d={class:"mdui-typo-title"},c=(0,a._)("div",{class:"mdui-toolbar-spacer"},null,-1),r=(0,a._)("i",{class:"mdui-icon material-icons"},"credit_card",-1),u=[r],m=(0,a._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon mdui-ripple"},[(0,a._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),p=(0,a._)("i",{class:"mdui-icon material-icons"},"account_circle",-1),g=[p],_=(0,a._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),b=[_],h={id:"cdkAdd",class:"mdui-dialog",style:{top:"210px",display:"none"}},f={class:"mdui-dialog-content mdui-typo",style:{height:"407px"}},w={class:"mdui-textfield"},y=(0,a._)("label",{class:"mdui-textfield-label"},"CD-KEY密钥",-1),v={class:"mdui-dialog-actions"},x=(0,a._)("i",{class:"mdui-icon mdui-icon-left material-icons"},"check",-1);function k(t,e,i,r,p,_){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[s,(0,a._)("span",d,(0,n.zw)(p.webTitle),1),c,(0,a._)("a",{"mdui-tooltip":"{content: '密钥添加/更新'}",onClick:e[0]||(e[0]=t=>_.OpenCDKInput()),class:"mdui-btn mdui-btn-icon"},u),m,(0,a._)("a",{"mdui-tooltip":"{content: '管理面板'}",onClick:e[1]||(e[1]=t=>this.GoAdmin()),id:"Admin",class:"mdui-btn mdui-btn-icon mdui-ripple",style:{display:"none"}},g),(0,a._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:e[2]||(e[2]=t=>this.LogOut()),id:"LogOut",class:"mdui-btn mdui-btn-icon mdui-ripple",style:{display:"none"}},b)]),(0,a._)("div",h,[(0,a._)("div",f,[(0,a._)("form",{onSubmit:e[5]||(e[5]=(0,o.iM)((()=>{}),["prevent"]))},[(0,a._)("div",w,[y,(0,a.wy)((0,a._)("input",{class:"mdui-textfield-input",type:"text",placeholder:"请输入您的CD-KEY密钥","onUpdate:modelValue":e[3]||(e[3]=t=>p.CD_KEY=t)},null,512),[[o.nr,p.CD_KEY]])]),(0,a._)("div",v,[(0,a._)("button",{onClick:e[4]||(e[4]=t=>_.InsertCDK()),class:"mdui-ripple mdui-btn mdui-color-green-700 mdui-text-color-white btn"},[x,(0,a.Uk)((0,n.zw)(this.CDK_Btn),1)])])],32)])])],64)}var C=i(9669),D=i.n(C),Z=i(4493),K={name:"HeaderCom",data(){return{webTitle:"",CDK_Btn:"确认密钥",CD_KEY:""}},methods:{GetWebTitle(){D().get("/v1/api/set/setting?key=webTitle").then((t=>{""===t.data.data["value"]?this.webTitle="青龙Tools":this.webTitle=t.data.data["value"]}))},CheckLogin(){this.CD_KEY=localStorage.getItem("cdk");let t=localStorage.getItem("Bearer");if(null!==t&&""!==t){let e={token:t};D().post("/v1/api/check/token",e).then((t=>{!0===t.data.data?(document.getElementById("Admin").style.display="inline",document.getElementById("LogOut").style.display="inline"):localStorage.clear()}))}},LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoAdmin(){window.open("/#/admin","_self"),location.reload()},OpenCDKInput(){let t=new Z.Z.Dialog("#cdkAdd");t.toggle()},ChangeBtn(){let t=localStorage.getItem("cdk");null!==t&&""!==t&&(this.CDK_Btn="更新密钥")},InsertCDK(){localStorage.setItem("cdk",this.CD_KEY),window.open("/","_self")}},mounted(){this.CheckLogin(),this.GetWebTitle(),this.ChangeBtn()}},I=i(3744);const S=(0,I.Z)(K,[["render",k]]);var T=S},1255:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var a=i(6252),n=i(9963);const o=t=>((0,a.dD)("data-v-21bbbd6c"),t=t(),(0,a.Cn)(),t),l={id:"box"},s={class:"box",style:{"margin-top":"35px"}},d=o((()=>(0,a._)("p",{style:{"padding-bottom":"10px"}},"管理员注册",-1))),c=o((()=>(0,a._)("hr",null,null,-1))),r={style:{width:"75%",margin:"20px auto 0"}},u={class:"mdui-textfield mdui-textfield-floating-label"},m=o((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"email",-1))),p={class:"mdui-textfield mdui-textfield-floating-label"},g=o((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"account_box",-1))),_={class:"mdui-textfield mdui-textfield-floating-label"},b=o((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"lock",-1))),h={class:"mdui-textfield mdui-textfield-floating-label"},f=o((()=>(0,a._)("i",{class:"mdui-icon material-icons"},"lock",-1))),w=o((()=>(0,a._)("div",{style:{"text-align":"center","padding-top":"20px"}},[(0,a._)("button",{class:"mdui-ripple mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue-50",style:{width:"200px"},id:"LoginBtn"},"注  册")],-1)));function y(t,e,i,o,y,v){const x=(0,a.up)("HeaderCom"),k=(0,a.up)("FooterCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x),(0,a._)("div",l,[(0,a._)("div",s,[d,c,(0,a._)("div",r,[(0,a._)("form",{onSubmit:e[4]||(e[4]=(0,n.iM)(((...t)=>v.submitForm&&v.submitForm(...t)),["prevent"]))},[(0,a._)("div",u,[m,(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"管理员邮箱","onUpdate:modelValue":e[0]||(e[0]=t=>y.RegisterData.email=t)},null,512),[[n.nr,y.RegisterData.email]])]),(0,a._)("div",p,[g,(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"管理员用户名","onUpdate:modelValue":e[1]||(e[1]=t=>y.RegisterData.username=t)},null,512),[[n.nr,y.RegisterData.username]])]),(0,a._)("div",_,[b,(0,a.wy)((0,a._)("input",{type:"password",class:"mdui-textfield-input",placeholder:"管理员密码","onUpdate:modelValue":e[2]||(e[2]=t=>y.RegisterData.password=t)},null,512),[[n.nr,y.RegisterData.password]])]),(0,a._)("div",h,[f,(0,a.wy)((0,a._)("input",{type:"password",class:"mdui-textfield-input",placeholder:"再次确认密码","onUpdate:modelValue":e[3]||(e[3]=t=>y.RegisterData.re_password=t)},null,512),[[n.nr,y.RegisterData.re_password]])]),w],32)])])]),(0,a.Wm)(k)],64)}var v=i(9669),x=i.n(v),k=i(4493),C=i(2555),D=i(3798),Z={name:"LoginView",components:{HeaderCom:C.Z,FooterCom:D.Z},data(){return{RegisterData:{email:"",username:"",password:"",re_password:""}}},methods:{submitForm(){x().post("/v1/api/signup",this.RegisterData).then((t=>{switch(""!==t.data){case 2e3===t.data.code:k.Z.snackbar({message:"注册成功,已自动关闭注册(即将跳转登录)",position:"right-top"}),setTimeout((()=>{window.open("/#/login","_self")}),2e3);break;case 5007===t.data.code:k.Z.snackbar({message:"已关闭注册,禁止新用户注册",position:"right-top"});break;case 5003===t.data.code:k.Z.snackbar({message:"服务繁忙",position:"right-top"});break;case 5002===t.data.code:""===t.data.data?k.Z.snackbar({message:"服务繁忙",position:"right-top"}):k.Z.snackbar({message:t.data.msg,position:"right-top"});break}})).catch((t=>{k.Z.snackbar({message:t,position:"right-top"})}))},changeStyle(){let t=document.querySelector("#box");t.style.minHeight=window.innerHeight-document.body.clientHeight+t.clientHeight+"px",k.Z.mutation()}},mounted(){this.changeStyle()}},K=i(3744);const I=(0,K.Z)(Z,[["render",y],["__scopeId","data-v-21bbbd6c"]]);var S=I}}]);
//# sourceMappingURL=255.e49a4123.js.map