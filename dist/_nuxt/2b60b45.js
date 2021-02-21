(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{180:function(e,t,r){var content=r(184);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("c051edda",content,!0,{sourceMap:!1})},181:function(e,t,r){"use strict";r.r(t);r(79),r(127),r(35),r(80),r(81);var n={name:"UserItem",props:{user:{type:Object,required:!0},searchStr:{type:String,required:!0},suitable:{type:Boolean,required:!0},toggleSelection:{type:Function,required:!0}},methods:{highlight:function(e){return this.searchStr?e.replace(new RegExp(this.searchStr,"ig"),(function(e){return"<mark>".concat(e,"</mark>").concat(e.replace(e,""))})):e}}},o=(r(183),r(21)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"user-item",class:{suitable:e.suitable}},[r("div",{staticClass:"user-avatar",style:"background-image: url('"+e.user.avatar+"');"}),e._v(" "),r("div",{staticClass:"user-content"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"main-info"},[r("h2",{staticClass:"name",domProps:{innerHTML:e._s(e.highlight(e.user.name))}}),e._v(" "),r("p",{staticClass:"email",domProps:{innerHTML:e._s(e.highlight(e.user.email))}})]),e._v(" "),r("h3",{staticClass:"title",domProps:{innerHTML:e._s(e.highlight(e.user.title))}}),e._v(" "),r("address",{staticClass:"address",domProps:{innerHTML:e._s(e.highlight(e.user.address+", "+e.user.city))}})]),e._v(" "),r("button",{staticClass:"action",on:{click:function(){return e.toggleSelection(e.user.email)}}},[e._v("\n      "+e._s(e.suitable?"Skip selection":"Mark as suitable")+"\n    ")])])])}),[],!1,null,"550de538",null);t.default=component.exports},182:function(e,t,r){var content=r(188);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("20a31a27",content,!0,{sourceMap:!1})},183:function(e,t,r){"use strict";r(180)},184:function(e,t,r){var n=r(36)(!1);n.push([e.i,'.user-item[data-v-550de538]{background-color:#fafafa;background:#fafafa;box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.24);border-radius:3px;display:flex;margin-bottom:1.3125em;overflow:hidden;font-size:1rem;position:relative}.user-item[data-v-550de538]:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;border:1px solid transparent;border-radius:3px;transition:.3s ease-out}.user-item.suitable[data-v-550de538]:before{border-color:#4765ff;transition:.3s ease-out}.user-item.suitable .user-content .user-info[data-v-550de538]{border-color:transparent}.user-item .user-avatar[data-v-550de538]{z-index:1;background-color:rgba(0,0,0,.25);width:8.375em;flex-shrink:0;background-size:contain;background-position:bottom;background-repeat:no-repeat}.user-item .user-content[data-v-550de538]{z-index:1;flex-grow:1;display:flex;flex-direction:column}.user-item .user-content *[data-v-550de538]{margin:0;cursor:default}.user-item .user-content mark[data-v-550de538]{background-color:#fff73b}.user-item .user-content .user-info[data-v-550de538]{padding:10px 10px 1.5px 1.6875em;position:relative;border-bottom:1px solid rgba(0,0,0,.12)}.user-item .user-content .user-info .main-info[data-v-550de538]{display:flex;justify-content:space-between}.user-item .user-content .user-info .main-info .name[data-v-550de538]{font-weight:400;font-size:1.5em;line-height:1.3333em;color:rgba(0,0,0,.87)}.user-item .user-content .user-info .address[data-v-550de538],.user-item .user-content .user-info .email[data-v-550de538],.user-item .user-content .user-info .title[data-v-550de538]{color:rgba(0,0,0,.543846);font-size:.875em;line-height:1.4286em}.user-item .user-content .user-info .title[data-v-550de538]{font-weight:700}.user-item .user-content .user-info .address[data-v-550de538]{font-style:normal}.user-item .user-content .action[data-v-550de538]{border:none;background:none;outline:none;height:100%;width:100%;text-transform:uppercase;font-weight:500;font-size:.875em;line-height:1.1429em;text-align:left;padding:1em 2.2857em 1.35em;color:#009688;cursor:pointer;transition:.3s ease-out}.user-item .user-content .action.focus-visible[data-v-550de538],.user-item .user-content .action[data-v-550de538]:focus-visible,.user-item .user-content .action[data-v-550de538]:hover{background-color:rgba(0,0,0,.05);transition:.3s ease-out}.user-item .user-content .action[data-v-550de538]:active{background-color:rgba(0,0,0,.2);transition:.3s ease-out}@media screen and (max-width:768px){.user-item[data-v-550de538]{font-size:.85rem}.user-item .user-content .user-info[data-v-550de538]{padding-left:20px}.user-item .user-content .user-info .main-info[data-v-550de538]{flex-direction:column}.user-item .user-content .action[data-v-550de538]{padding:15px 20px}}@media screen and (max-width:425px){.user-item[data-v-550de538]{flex-direction:column}.user-item .user-avatar[data-v-550de538]{width:100%;min-height:120px}.user-item .user-content .action[data-v-550de538],.user-item .user-content .user-info[data-v-550de538]{padding:10px}}@media screen and (max-width:375px){.user-item .user-content .user-info .main-info .name[data-v-550de538]{font-size:1.25em}}',""]),e.exports=n},185:function(e,t,r){"use strict";r.r(t);r(79),r(47),r(128),r(186),r(85),r(9),r(35),r(48),r(129),r(39);var n=r(26),o=(r(31),r(5)),c={name:"UserListPage",components:{UserItem:r(181).default},props:{searchParam:{type:String,required:!1,default:""}},data:function(){return{users:[],usersSlice:[],suitableUsers:[],searchStr:this.searchParam,searchStopIndex:0,page:1,pageSize:50}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/data/users.json").then((function(e){return e.json()}));case 2:e.users=t.sent,e.searchParam?e.search():e.usersSlice=e.users.slice(0,e.pageSize);case 4:case"end":return t.stop()}}),t)})))()},methods:{filterResults:function(e){var t=this,r=[],n=0;return e.some((function(e,o){return Object.keys(e).some((function(r){return"avatar"!==r&&e[r].toLowerCase().includes(t.searchStr.toLowerCase())}))&&r.push(e),n=o+1,r.length===t.pageSize})),[r,n]},search:function(){var e=this.filterResults(this.users),t=Object(n.a)(e,2),r=t[0],o=t[1];document.querySelector(".list-wrapper").scrollTo(0,0),this.page=1,this.usersSlice=r,this.searchStopIndex=o,this.$refs.infiniteLoadingRef&&this.$refs.infiniteLoadingRef.stateChanger.reset()},loadMore:function(e){var t=this;setTimeout((function(){if(t.page++,t.searchStr){var r=t.filterResults(t.users.slice(t.searchStopIndex)),o=Object(n.a)(r,2),c=o[0],d=o[1];c.length>0?(t.searchStopIndex+=d,t.usersSlice=t.usersSlice.concat(c)):e.complete()}else{var l=t.users.slice(t.pageSize*(t.page-1),t.pageSize*t.page);l.length>0?t.usersSlice=t.usersSlice.concat(l):e.complete()}e.loaded()}),500)},toggleSelection:function(e){if(this.suitableUsers.includes(e)){var t=this.suitableUsers.indexOf(e);this.suitableUsers.splice(t,1)}else this.suitableUsers.push(e)}}},d=(r(187),r(21)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("div",{staticClass:"content-container"},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchStr,expression:"searchStr"}],staticClass:"search-input",attrs:{type:"search"},domProps:{value:e.searchStr},on:{input:[function(t){t.target.composing||(e.searchStr=t.target.value)},e.search]}})]),e._v(" "),r("div",{staticClass:"list-wrapper"},[e.usersSlice.length?r("ul",[e._l(e.usersSlice,(function(t){return r("user-item",{key:"user#"+t.email,attrs:{user:t,"search-str":e.searchStr,suitable:e.suitableUsers.includes(t.email),"toggle-selection":e.toggleSelection}})})),e._v(" "),r("infinite-loading",{ref:"infiniteLoadingRef",attrs:{spinner:"spiral"},on:{infinite:e.loadMore}},[r("span",{staticClass:"infinite-end",attrs:{slot:"no-more"},slot:"no-more"},[e._v("No more results.")])])],2):e.users.length?r("ul",[r("span",{staticClass:"infinite-end"},[e._v("No results.")])]):e._e()])])])}),[],!1,null,"16702607",null);t.default=component.exports;installComponents(component,{UserItem:r(181).default})},186:function(e,t,r){"use strict";var n=r(6),o=r(82),c=r(30),d=r(18),l=r(22),m=r(84),f=r(83),h=r(38)("splice"),v=Math.max,x=Math.min,w=9007199254740991,k="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h},{splice:function(e,t){var r,n,h,S,y,_,C=l(this),z=d(C.length),j=o(e,z),L=arguments.length;if(0===L?r=n=0:1===L?(r=0,n=z-j):(r=L-2,n=x(v(c(t),0),z-j)),z+r-n>w)throw TypeError(k);for(h=m(C,n),S=0;S<n;S++)(y=j+S)in C&&f(h,S,C[y]);if(h.length=n,r<n){for(S=j;S<z-n;S++)_=S+r,(y=S+n)in C?C[_]=C[y]:delete C[_];for(S=z;S>z-n+r;S--)delete C[S-1]}else if(r>n)for(S=z-n;S>j;S--)_=S+r-1,(y=S+n-1)in C?C[_]=C[y]:delete C[_];for(S=0;S<r;S++)C[S+j]=arguments[S+2];return C.length=z-n+r,h}})},187:function(e,t,r){"use strict";r(182)},188:function(e,t,r){var n=r(36)(!1);n.push([e.i,'.page-container[data-v-16702607]{background-color:#eee;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px}.page-container .content-container[data-v-16702607]{background-color:#fff;max-width:564px;width:100%;margin:34px 0 45px;padding:25px 12px 0 10px;overflow:hidden;position:relative;flex-grow:1}.page-container .content-container .input-wrapper[data-v-16702607]{position:absolute;top:0;left:0;width:100%;padding:1.1875em 1.75em 0 .75em;z-index:2;font-size:1rem}.page-container .content-container .input-wrapper[data-v-16702607]:before{content:"";height:1.5em;width:1.5em;-webkit-mask-image:url(/images/search.svg);mask-image:url(/images/search.svg);background:#000;opacity:.54;position:absolute;top:1.9375em;left:1.75em}.page-container .content-container .input-wrapper .search-input[data-v-16702607]{width:100%;background:#fafafa;border:none;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.24);font-size:1.5em;line-height:1.1667em;color:rgba(0,0,0,.75);padding:.5em .4167em .2917em 2.0833em;outline:none}.page-container .content-container .input-wrapper .search-input[data-v-16702607]::-webkit-search-cancel-button{-webkit-appearance:none}.page-container .content-container .list-wrapper[data-v-16702607]{height:100%;overflow:auto;padding-right:10px}.page-container .content-container .list-wrapper ul[data-v-16702607]{margin:0;padding:3.875rem 2px 0;list-style:none}.page-container .content-container .list-wrapper .infinite-end[data-v-16702607]{font-size:12px;color:rgba(0,0,0,.5);margin-bottom:20px;display:block;text-align:center}@media screen and (max-width:768px){.page-container[data-v-16702607]{padding:15px}.page-container .content-container[data-v-16702607]{margin:0}.page-container .content-container .input-wrapper[data-v-16702607]{font-size:.85rem}.page-container .content-container .list-wrapper ul[data-v-16702607]{padding-top:3.29375rem}}[data-v-16702607]::-webkit-scrollbar{width:4px}[data-v-16702607]::-webkit-scrollbar-track{width:1px;border:1px solid #fff;border-left-width:2px;background-color:rgba(0,0,0,.16);margin-bottom:10px}[data-v-16702607]::-webkit-scrollbar-thumb{background:#4d4d4d;border-radius:2px}',""]),e.exports=n},190:function(e,t,r){"use strict";r.r(t);var n={components:{UserListPage:r(185).default}},o=r(21),component=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("user-list-page")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UserListPage:r(185).default})}}]);