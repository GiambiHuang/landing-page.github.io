(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(e){document.querySelector(".setting-button__setting").addEventListener("click",(function(){const{classList:e}=document.querySelector(".setting-modal");e.contains("open")?document.querySelector(".setting-modal").classList.remove("open"):document.querySelector(".setting-modal").classList.add("open")})),document.querySelector(".setting-button__cancel").addEventListener("click",(function(){document.querySelector(".setting-modal").classList.remove("open")})),new MobileSelect({trigger:"#game-clock-min",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}],callback:function(e,t){this.trigger.value=t[0]}}),new MobileSelect({trigger:"#game-clock-sec",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}],callback:function(e,t){this.trigger.value=t[0]}}),new MobileSelect({trigger:"#game-reset-min",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}],callback:function(e,t){this.trigger.value=t[0]}}),new MobileSelect({trigger:"#game-reset-sec",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}],callback:function(e,t){this.trigger.value=t[0]}})}))})();