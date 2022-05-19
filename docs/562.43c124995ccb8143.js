"use strict";(self.webpackChunkCase_Study_Angular_Application=self.webpackChunkCase_Study_Angular_Application||[]).push([[562],{9562:(M,m,r)=>{r.r(m),r.d(m,{TimerV2Module:()=>A});var a=r(9808),u=r(6866),t=r(1223),g=r(7579);let l=(()=>{class n{constructor(){this.timer=0,this.pc=0,this.sc=0,this.firstTime=!0,this.started=!1,this.log=[],this.scEmit=new t.vpe,this.pcEmit=new t.vpe,this.paused=new t.vpe,this.countdown=new g.x}setTimer(e){this.timer=e}getLog(){return this.log.slice()}decideAction(e){this.firstTime&&(this.setTimer(e),this.firstTime=!1,this.countdown.next(this.timer)),this.started?(++this.pc,this.pcEmit.emit(this.pc),this.paused.emit(this.timer),this.log.push("Paused at "+this.logMessage()),clearInterval(this.time)):(this.time=setInterval(()=>{this.countdown.next(--this.timer),this.timer<0&&(clearInterval(this.time),this.reset())},1e3),++this.sc,this.scEmit.emit(this.sc),this.log.push("Started at "+this.logMessage())),this.started=!this.started}logMessage(){let e=new Date,i=e.getHours(),s=e.getMinutes(),p=i>=12?"pm":"am";i%=12,i=i||12,s=s<10?"0"+s:s;let y=i+":"+s+" "+p;return e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear()+"  "+y}reset(){clearInterval(this.time),this.timer=0,this.sc=0,this.pc=0,this.scEmit.emit(0),this.pcEmit.emit(0),this.paused.emit(-1),this.countdown.next(0),this.firstTime=!0,this.started=!1,this.log=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),d=(()=>{class n{constructor(e){this.data=e,this.timer=0}ngOnInit(){this.data.countdown.subscribe(e=>{this.timer=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-display-timer"]],decls:5,vars:1,consts:[[1,"container","text-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h5"),t._uU(2,"Countdown Timer"),t.qZA(),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Oqu(i.timer))},styles:[".container[_ngcontent-%COMP%]{background-color:#ffe3e3;height:200px;display:flex;flex-direction:column;justify-content:center;margin-bottom:16px;color:#63132f;border-radius:10px}h5[_ngcontent-%COMP%]{font-size:12px;letter-spacing:1.09px;line-height:1.5}h2[_ngcontent-%COMP%]{font-size:60px;line-height:1.1}"]}),n})();var c=r(2382);function h(n,o){1&n&&(t.TgZ(0,"p",7),t._uU(1," Countdown is not possible below 1 "),t.qZA())}function f(n,o){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Paused at ",e.pausedAt,"")}}let T=(()=>{class n{constructor(e){this.data=e,this.timerValue=1,this.pausedAt=-1}ngOnInit(){this.data.paused.subscribe(e=>{this.pausedAt=e})}startOrPause(){this.data.decideAction(this.timerValue)}resetValues(){this.timerValue=1,this.data.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-controller"]],decls:11,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-sm-6"],["type","number","min","1",1,"form-control",3,"ngModel","ngModelChange"],["class","errorText",4,"ngIf"],[1,"btn","btn--design",3,"click"],[4,"ngIf"],[1,"errorText"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"input",3),t.NdJ("ngModelChange",function(p){return i.timerValue=p}),t.qZA(),t.qZA(),t.qZA(),t.YNc(4,h,2,0,"p",4),t.TgZ(5,"div"),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.startOrPause()}),t._uU(7," Start/Pause "),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return i.resetValues()}),t._uU(9,"Reset"),t.qZA(),t.YNc(10,f,2,1,"p",6),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngModel",i.timerValue),t.xp6(1),t.Q6J("ngIf",i.timerValue<1),t.xp6(6),t.Q6J("ngIf",i.pausedAt>-1))},directives:[c.qQ,c.wV,c.Fj,c.JJ,c.On,a.O5],styles:[".container[_ngcontent-%COMP%]{height:200px;color:#63132f}.form-control[_ngcontent-%COMP%]{border:1px solid #f06595}.form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #f0659540}.btn--design[_ngcontent-%COMP%]{background-color:#f06595;margin:16px 8px;padding:12px;color:#212529}.btn--design[_ngcontent-%COMP%]:hover{background-color:#f783ac}.btn[_ngcontent-%COMP%]:focus{box-shadow:none}.errorText[_ngcontent-%COMP%]{background-color:#f03d3d;color:#000;display:inline-block;padding:8px 16px}section[_ngcontent-%COMP%]{border:1px solid #f06595;padding:16px 32px}"]}),n})();function C(n,o){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit;t.xp6(3),t.Oqu(e)}}let Z=(()=>{class n{constructor(e){this.data=e,this.log=[]}ngOnInit(){this.log=this.data.getLog()}ngDoCheck(){this.log=this.data.getLog()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-log"]],decls:2,vars:1,consts:[[1,"container","log"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,4,1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.log))},directives:[a.sg],styles:[".log[_ngcontent-%COMP%]{height:100px;max-height:150px;overflow-y:scroll;color:#63132f;border:1px solid #ffc9c9}"]}),n})(),x=(()=>{class n{constructor(e){this.data=e,this.sc=0,this.pc=0}ngOnInit(){this.data.scEmit.subscribe(e=>{this.sc=e}),this.data.pcEmit.subscribe(e=>{this.pc=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-record"]],decls:11,vars:2,consts:[[1,"column","text-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div"),t.TgZ(2,"h6"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Started"),t.qZA(),t.qZA(),t.TgZ(6,"div"),t.TgZ(7,"h6"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Paused"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(i.sc),t.xp6(5),t.Oqu(i.pc))},styles:[".column[_ngcontent-%COMP%]{display:flex;align-items:center;margin:16px 32px;color:#821239}.column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:16px 32px}h6[_ngcontent-%COMP%]{font-size:18px;line-height:1.2}p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;letter-spacing:1.1px}"]}),n})();const v=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-timer-v2"]],decls:11,vars:0,consts:[[1,"container","timer-app"],[1,"row"],[1,"col-sm-6"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-display-timer"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-controller"),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t._UZ(8,"app-log"),t.qZA(),t.TgZ(9,"div",2),t._UZ(10,"app-record"),t.qZA(),t.qZA(),t.qZA())},directives:[d,T,Z,x],styles:[".timer-app[_ngcontent-%COMP%]{margin-top:64px}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,_,c.u5]]}),n})()}}]);