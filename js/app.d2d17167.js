(function(e){function t(t){for(var i,s,r=t[0],o=t[1],u=t[2],d=0,l=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);m&&m(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},c=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Matbit-live-test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var m=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1589:function(e,t,n){"use strict";n("c99b")},3068:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a=Object(i["i"])("div",{class:"titleBar"},[Object(i["i"])("h1",{class:"noselect"},"Matbit App")],-1),c={class:"mainApp"},s={class:"RecipesBox"},r=Object(i["i"])("h1",{class:"noselect"},"Recipes",-1),o={class:"ItemsBox"},u=Object(i["i"])("h1",{class:"noselect"},"Ingredients",-1),m=Object(i["i"])("div",{class:"footer"},[Object(i["i"])("pre",null,"|     Designed by Panagiotis Sakaridis     |")],-1);function d(e,t,n,d,l,p){var b=Object(i["p"])("recipesContainer"),f=Object(i["p"])("itemsContainer");return Object(i["k"])(),Object(i["f"])(i["a"],null,[a,Object(i["i"])("div",c,[Object(i["i"])("div",s,[Object(i["i"])("div",{class:"tab recipes",onClick:t[1]||(t[1]=function(e){return l.showRecipes=!l.showRecipes})},[r]),l.showRecipes?(Object(i["k"])(),Object(i["f"])(b,{key:0,recipes:e.$store.getters.getAllRecipes},null,8,["recipes"])):Object(i["g"])("",!0)]),Object(i["i"])("div",o,[Object(i["i"])("div",{class:"tab items",onClick:t[2]||(t[2]=function(e){return l.showItems=!l.showItems})},[u]),l.showItems?(Object(i["k"])(),Object(i["f"])(f,{key:0,items:e.$store.getters.getAllItems},null,8,["items"])):Object(i["g"])("",!0)])]),m],64)}var l={class:"items Container"};function p(e,t,n,a,c,s){var r=Object(i["p"])("itemCard"),o=Object(i["p"])("itemCreator");return Object(i["k"])(),Object(i["f"])("div",l,[Object(i["i"])(i["c"],{name:"animateItemList",tag:"div",css:!1,onEnter:s.enter,onLeave:s.leave},{default:Object(i["v"])((function(){return[(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["o"])(n.items,(function(e){return Object(i["k"])(),Object(i["f"])(r,{key:e.id,item:e},null,8,["item"])})),128)),Object(i["i"])(o,{key:c.itemCreatorKey})]})),_:1},8,["onEnter","onLeave"])])}n("b0c0");var b=Object(i["y"])("data-v-0487cba7");Object(i["m"])("data-v-0487cba7");var f={class:"card"},O={class:"itemCard"},h={class:"itemName"},j={class:"noselect"},g={class:"editContainer"},v={class:"itemInfo"},y={class:"progress-text"},w={class:"expDate"},I=Object(i["i"])("h6",{class:"noselect"}," Amount ",-1),N={class:"buttonContainer"},x={class:"buttonContainer"},D=Object(i["i"])("span",{class:"editNote"}," Confirm Edit: ",-1),k={class:"buttonContainer"},C=Object(i["i"])("span",{class:"editNote"}," Confirm Edit: ",-1),S={class:"buttonContainer"},q=Object(i["i"])("span",{class:"editNote"}," Confirm Edit: ",-1),A={class:"consumeCard"},R={class:"buttonContainer floatBRight"};Object(i["l"])();var V=b((function(e,t,n,a,c,s){var r=Object(i["p"])("itemTypes");return Object(i["k"])(),Object(i["f"])("div",f,[Object(i["i"])("div",O,[Object(i["i"])("div",h,[Object(i["i"])("h6",j,Object(i["q"])(n.item.type),1),Object(i["w"])(Object(i["i"])("h2",{onDblclick:t[1]||(t[1]=function(e){return s.toggleEditName()}),class:"noselect formPadding"},Object(i["q"])(n.item.name),545),[[i["t"],!c.editName]]),Object(i["w"])(Object(i["i"])("h2",g,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field whiteText mediumField",ref:"newNameIn","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.newName=e}),onfocus:"this.select();",onKeyup:[t[3]||(t[3]=Object(i["x"])((function(e){return s.submitNewName()}),["enter"])),t[4]||(t[4]=Object(i["x"])((function(e){return s.submitNewName(!1)}),["esc"]))]},null,544),[[i["s"],c.newName]])],512),[[i["t"],c.editName]])]),Object(i["i"])("div",v,[Object(i["w"])(Object(i["i"])("div",{class:"progressContainer noselect",onDblclick:t[5]||(t[5]=function(e){return s.toggleEditDate()})},[Object(i["i"])("div",{class:"progress",style:s.calculateProgresPercent(n.item)},null,4),Object(i["i"])("span",y," Exp: "+Object(i["q"])(s.getDateString(n.item.date.expiring)),1)],544),[[i["t"],!c.editDate]]),Object(i["w"])(Object(i["i"])("div",w,[Object(i["w"])(Object(i["i"])("input",{type:"date",class:"form__field dateFild",ref:"newDateIn","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.newDate=e}),onfocus:"this.select();",onKeyup:[t[7]||(t[7]=Object(i["x"])((function(e){return s.submitNewDate()}),["enter"])),t[8]||(t[8]=Object(i["x"])((function(e){return s.submitNewDate(!1)}),["esc"]))]},null,544),[[i["s"],c.newDate]])],512),[[i["t"],c.editDate]]),I,Object(i["w"])(Object(i["i"])("h2",{class:"noselect formPadding",onDblclick:t[9]||(t[9]=function(e){return s.toggleEditAmmount()})},Object(i["q"])(n.item.quantity.ammount)+" "+Object(i["q"])(n.item.quantity.type),545),[[i["t"],!c.editAmmount]]),Object(i["w"])(Object(i["i"])("div",null,[Object(i["i"])("h2",null,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field smallField",ref:"newAmmountIn","onUpdate:modelValue":t[10]||(t[10]=function(e){return c.newAmmount=e}),onfocus:"this.select();",onKeyup:[t[11]||(t[11]=Object(i["x"])((function(e){return s.submitNewAmmount()}),["enter"])),t[12]||(t[12]=Object(i["x"])((function(e){return s.submitNewAmmount(!1)}),["esc"]))]},null,544),[[i["s"],c.newAmmount]]),Object(i["w"])(Object(i["i"])("select",{class:"form__field smallField selectdiv","onUpdate:modelValue":t[13]||(t[13]=function(e){return c.newType=e}),onKeyup:[t[14]||(t[14]=Object(i["x"])((function(e){return s.submitNewAmmount()}),["enter"])),t[15]||(t[15]=Object(i["x"])((function(e){return s.submitNewAmmount(!1)}),["esc"]))]},[Object(i["i"])(r)],544),[[i["r"],c.newType]])])],512),[[i["t"],c.editAmmount]]),Object(i["w"])(Object(i["i"])("div",N,[Object(i["i"])("button",{class:"btn red",onClick:t[16]||(t[16]=function(e){return s.Delete(n.item)})},"Delete"),Object(i["i"])("button",{class:"btn blue",onClick:t[17]||(t[17]=function(e){return s.togleConsumeCard(n.item)})},"Consume")],512),[[i["t"],!c.editAmmount&&!c.editDate&&!c.editName]]),Object(i["w"])(Object(i["i"])("div",x,[D,Object(i["i"])("button",{class:"btn red smallB",onClick:t[18]||(t[18]=function(e){return s.submitNewDate(!1)})},"X"),Object(i["i"])("button",{class:"btn blue smallB",onClick:t[19]||(t[19]=function(e){return s.submitNewDate()})},"Ok")],512),[[i["t"],c.editDate]]),Object(i["w"])(Object(i["i"])("div",k,[C,Object(i["i"])("button",{class:"btn red smallB",onClick:t[20]||(t[20]=function(e){return s.submitNewAmmount(!1)})},"X"),Object(i["i"])("button",{class:"btn blue smallB",onClick:t[21]||(t[21]=function(e){return s.submitNewAmmount()})},"Ok")],512),[[i["t"],c.editAmmount]]),Object(i["w"])(Object(i["i"])("div",S,[q,Object(i["i"])("button",{class:"btn red smallB",onClick:t[22]||(t[22]=function(e){return s.submitNewName(!1)})},"X"),Object(i["i"])("button",{class:"btn blue smallB",onClick:t[23]||(t[23]=function(e){return s.submitNewName()})},"Ok")],512),[[i["t"],c.editName]])])]),Object(i["i"])(i["b"],{name:"fade"},{default:b((function(){return[Object(i["w"])(Object(i["i"])("div",A,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field xtrSmallField consumeInput",ref:"consumeIn",onfocus:"this.select();","onUpdate:modelValue":t[24]||(t[24]=function(e){return c.consumeValue=e}),placeholder:"0",onKeyup:t[25]||(t[25]=Object(i["x"])((function(e){return s.Consume(n.item)}),["enter"]))},null,544),[[i["s"],c.consumeValue]]),Object(i["i"])("h2",null,Object(i["q"])(n.item.quantity.type),1),Object(i["i"])("div",R,[Object(i["i"])("button",{class:"btn red",id:"btn-cancelConsume",onClick:t[26]||(t[26]=function(e){return s.togleConsumeCard()})},"Cancel"),Object(i["i"])("button",{class:"btn blue",id:"btn-confirmConsume",onClick:t[27]||(t[27]=function(e){return s.Consume(n.item)})},"Ok")])],512),[[i["t"],!c.consumeHidden]])]})),_:1})])})),_=(n("fb6a"),n("d3b7"),n("25f0"),Object(i["i"])("option",{selected:"",value:""},"Item",-1)),E=Object(i["i"])("option",{value:"ml"},"ml",-1),T=Object(i["i"])("option",{value:"Kg"},"Kg",-1),F=Object(i["i"])("option",{value:"g"},"g",-1);function B(e,t,n,a,c,s){return Object(i["k"])(),Object(i["f"])(i["a"],null,[_,E,T,F],64)}const $={};$.render=B;var P=$,K=(n("ac1f"),n("1276"),.2),M="items-storage",U="recipes-storage",Y="dev-settings",J={appVersion:0},W={getCurrentAppVersion:function(){return K},getItemsStorageKey:function(){return M},getRecipesStorageKey:function(){return U},getDevSettingsKey:function(){return Y},getDefaultDevSettings:function(){return J},JsonDateParser:function(e,t){var n=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/,i=/^\/Date\((d|-|.*)\)[\\/|\\]$/;if("string"===typeof t){var a=n.exec(t);if(a)return new Date(t);if(a=i.exec(t),a){var c=a[1].split(/[-+,.]/);return new Date(c[0]?+c[0]:0-+c[1])}}return t},sameDay:function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},fixItemType:function(e){"Item"==e.type&&1!=e.ammount?e.type="Items":"Items"==e.type&&1==e.ammount&&(e.type="Item")},compareTypes:function(e,t){return e===t||!("Item"!=e&&"Items"!=e||"Item"!=t&&"Items"!=t)},getFormatedDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(e);return new Date(n.getFullYear(),n.getMonth(),n.getDate()+t)}},X={name:"Item",components:{itemTypes:P},props:["item"],data:function(){return{consumeValue:1,consumeHidden:!0,editName:!1,editAmmount:!1,editDate:!1,newName:"",newAmmount:0,newType:"",newDate:""}},methods:{Delete:function(e){this.$store.commit("removeItem",e)},Consume:function(e){this.$store.commit("consumeItem",{consumeItem:e,ammount:this.consumeValue}),this.togleConsumeCard(),this.$refs.consumeIn.focus()},togleConsumeCard:function(){this.consumeHidden=!this.consumeHidden,this.consumeValue=1},getDateString:function(e){return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()},calculateProgresPercent:function(e){var t=this.getDatePercentage(e.date.entered,e.date.expiring),n=t.toString()+"%",i="#2A265F";return t>90&&(i="#5f1919"),{"--fill-percent":n,"--fill-color":i}},getDatePercentage:function(e,t){var n=0,i=new Date(Date.now()),a=new Date(i.getFullYear(),i.getMonth(),i.getDate());return a>=t?n=100:a<t&&a>e&&(n=(a-e)/(t-e)*100),n>=100&&(n=100),n<0&&(n=0),n},toggleEditName:function(){this.newName=this.item.name,this.editName=!this.editName,this.editAmmount=!1,this.editDate=!1,this.$refs.newNameIn.focus()},toggleEditAmmount:function(){this.newAmmount=this.item.quantity.ammount,"Item"==this.item.quantity.type||"Items"==this.item.quantity.type?this.newType="":this.newType=this.item.quantity.type,this.editAmmount=!this.editAmmount,this.editName=!1,this.editDate=!1},toggleEditDate:function(){this.newDate=W.getFormatedDate(this.item.date.expiring,1).toISOString().slice(0,10),this.editDate=!this.editDate,this.editName=!1,this.editAmmount=!1},submitNewName:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];/^ *$/.test(this.newName)&&(this.newName=this.item.name),e&&this.$store.commit("renameItem",{itemId:this.item.id,newName:this.newName}),this.editName=!this.editName},submitNewAmmount:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.$store.commit("repopulateItem",{itemId:this.item.id,newAmmount:this.newAmmount,newType:this.newType}),this.editAmmount=!this.editAmmount},submitNewDate:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.$store.commit("updateDateItem",{itemId:this.item.id,newDate:this.newDate}),this.editDate=!this.editDate}},updated:function(){this.editName?this.$refs.newNameIn.focus():this.newAmmount?this.$refs.newAmmountIn.focus():this.newDate&&this.$refs.newDateIn.focus()}};n("1589");X.render=V,X.__scopeId="data-v-0487cba7";var L=X,H={class:"itemCard creator"},Z={class:"itemName"},z=Object(i["i"])("h6",{class:"noselect"},"NEW ITEM",-1),G={class:"itemInfo"},Q=Object(i["i"])("h6",{class:"noselect"},"Amount",-1),ee={class:"expDate"},te={class:"buttonContainer"};function ne(e,t,n,a,c,s){var r=Object(i["p"])("itemTypes");return Object(i["k"])(),Object(i["f"])("div",H,[Object(i["i"])("div",Z,[z,Object(i["i"])("h2",null,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field whiteText","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newItemValues.name=e}),placeholder:"Item Name"},null,512),[[i["s"],c.newItemValues.name]])])]),Object(i["i"])("div",G,[Q,Object(i["i"])("div",ee,[Object(i["w"])(Object(i["i"])("input",{type:"date",class:"form__field dateFild","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.newItemValues.date=e})},null,512),[[i["s"],c.newItemValues.date]])]),Object(i["i"])("h2",null,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field mediumField","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.newItemValues.quantity.ammount=e}),placeholder:"1"},null,512),[[i["s"],c.newItemValues.quantity.ammount]]),Object(i["w"])(Object(i["i"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.newItemValues.quantity.type=e}),class:"form__field smallField selectdiv"},[Object(i["i"])(r)],512),[[i["r"],c.newItemValues.quantity.type]])]),Object(i["i"])("div",te,[Object(i["i"])("button",{class:"btn blue",id:"btn-add",onClick:t[5]||(t[5]=function(e){return s.submitForm()})},"Add Item")])])])}var ie=n("9612");function ae(){return{name:"",quantity:{ammount:"",type:""},date:W.getFormatedDate(Date.now(),2).toISOString().slice(0,10)}}var ce={name:"New Item",components:{itemTypes:P},data:function(){return{newItemValues:ae()}},methods:{submitForm:function(){var e={};e.id=ie["a"].v4(),e.name=this.newItemValues.name,""==e.name&&(e.name="New Item"),e.type="Item",e.quantity={},e.quantity.ammount=parseFloat(this.newItemValues.quantity.ammount),isNaN(e.quantity.ammount)&&(e.quantity.ammount=1);var t=this.newItemValues.quantity.type;e.quantity.type=""==t?"Item"+(1==e.quantity.ammount?"":"s"):t,e.date={};var n=new Date(Date.now()),i=new Date(this.newItemValues.date),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()),c=new Date(i.getFullYear(),i.getMonth(),i.getDate());e.date.entered=a,e.date.expiring=c,isNaN(e.date.expiring)&&(e.date.expiring=a),e.date.hasExpired=!(c>a),this.newItemValues=ae(),this.$store.commit("addItem",e)}}};ce.render=ne;var se=ce,re=n("1209"),oe={name:"Items",components:{itemCreator:se,itemCard:L},props:["items"],data:function(){return{itemCreatorKey:ie["a"].v4()}},methods:{enter:function(e,t){Object(re["a"])({targets:e,duration:350,translateY:[50,0],scale:[.5,1],opacity:[0,1],easing:"easeInOutSine",complete:t})},leave:function(e,t){Object(re["a"])({targets:e,duration:350,translateX:[0,50],scale:{delay:100,value:[1,.5]},opacity:[1,0],easing:"easeInOutSine",complete:t})}}};oe.render=p;var ue=oe,me={class:"recipes Container"};function de(e,t,n,a,c,s){var r=Object(i["p"])("recipeCard"),o=Object(i["p"])("recipeCreator");return Object(i["k"])(),Object(i["f"])("div",me,[Object(i["i"])(i["c"],{name:"animateItemList",tag:"div",css:!1,onEnter:s.enter,onLeave:s.leave},{default:Object(i["v"])((function(){return[(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["o"])(n.recipes,(function(e){return Object(i["k"])(),Object(i["f"])(r,{key:e.id,recipe:e},null,8,["recipe"])})),128)),Object(i["i"])(o,{key:c.recipeCreatorKey})]})),_:1},8,["onEnter","onLeave"])])}var le=Object(i["y"])("data-v-76b4e149");Object(i["m"])("data-v-76b4e149");var pe={class:"recipeCard"},be={class:"recipeName cardSection"},fe={class:"noselect"},Oe={class:"noselect"},he={class:"editContainer"},je={class:"buttonContainer"},ge={class:"recipeStatus cardSection noselect"},ve={key:0,class:"greenText"},ye={key:1,class:"orangeText"},we=Object(i["h"])("Sufficient ingrediens "),Ie=Object(i["i"])("br",null,null,-1),Ne=Object(i["h"])(" (with expired items)"),xe={key:2,class:"redText"},De={class:"show cardSection greySection noselect"},ke=Object(i["i"])("h6",{class:"noselect"},"Ingredients",-1),Ce={key:0,class:"recipieItems cardSection"},Se={class:"buttonContainer cardSection blueSection"};Object(i["l"])();var qe=le((function(e,t,n,a,c,s){var r=Object(i["p"])("ingredient");return Object(i["k"])(),Object(i["f"])("div",pe,[Object(i["i"])("div",be,[Object(i["w"])(Object(i["i"])("h6",fe," Recipe ",512),[[i["t"],!e.editName]]),Object(i["w"])(Object(i["i"])("h6",Oe," Rename ",512),[[i["t"],e.editName]]),Object(i["w"])(Object(i["i"])("h2",{onDblclick:t[1]||(t[1]=function(e){return s.toggleEditName()}),class:"noselect buttonPadding"},Object(i["q"])(n.recipe.name),545),[[i["t"],!e.editName]]),Object(i["w"])(Object(i["i"])("h2",he,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field whiteText mediumField",ref:"newNameIn","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.newName=t}),onfocus:"this.select();",onKeyup:[t[3]||(t[3]=Object(i["x"])((function(e){return s.submitNewName()}),["enter"])),t[4]||(t[4]=Object(i["x"])((function(e){return s.submitNewName(!1)}),["esc"]))]},null,544),[[i["s"],e.newName]]),Object(i["i"])("div",je,[Object(i["i"])("button",{class:"btn red smallB",onClick:t[5]||(t[5]=function(e){return s.submitNewName(!1)})},"X"),Object(i["i"])("button",{class:"btn grey smallB",onClick:t[6]||(t[6]=function(e){return s.submitNewName()})},"Ok")])],512),[[i["t"],e.editName]])]),Object(i["i"])("div",ge,[s.isReady()?(Object(i["k"])(),Object(i["f"])("h2",ve,"Sufficient ingrediens")):s.isReadyWithExp()?(Object(i["k"])(),Object(i["f"])("h2",ye,[we,Ie,Ne])):(Object(i["k"])(),Object(i["f"])("h2",xe,"Insufficient ingrediens"))]),Object(i["i"])("div",De,[ke,this.showItems?(Object(i["k"])(),Object(i["f"])("div",Ce,[(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["o"])(n.recipe.items,(function(e){return Object(i["k"])(),Object(i["f"])(r,{key:e.id,ingredient:e},null,8,["ingredient"])})),128))])):Object(i["g"])("",!0),Object(i["i"])("div",{class:"showButton",onClick:t[7]||(t[7]=function(e){return s.toggleItems()})},[Object(i["i"])("i",{class:["arrow",[e.showItems?"up":"down"]]},null,2)])]),Object(i["i"])("div",Se,[Object(i["i"])("button",{class:"btn red",onClick:t[8]||(t[8]=function(e){return s.Delete(n.recipe)})},"Delete"),Object(i["i"])("button",{class:"btn grey",onClick:t[9]||(t[9]=function(e){return s.makeRecipe(n.recipe)})},"Make")])])})),Ae=Object(i["y"])("data-v-57339948");Object(i["m"])("data-v-57339948");var Re={class:"ingredient"},Ve={class:"ingredientStats"},_e={class:"progress"},Ee={class:"percentageBar"},Te={class:"inputContainer"};Object(i["l"])();var Fe=Ae((function(e,t,n,a,c,s){var r=Object(i["p"])("itemTypes");return Object(i["k"])(),Object(i["f"])("div",{class:"IngredientContainer",onDblclick:t[12]||(t[12]=function(e){return s.toggleEdit()})},[Object(i["w"])(Object(i["i"])("div",Re,[Object(i["i"])("i",{class:["dot",s.checkIngredient(n.ingredient)]},null,2),Object(i["i"])("div",Ve,[Object(i["i"])("h3",null,Object(i["q"])(n.ingredient.name)+" :   "+Object(i["q"])(n.ingredient.ammount)+" "+Object(i["q"])(n.ingredient.type),1)]),Object(i["i"])("div",_e,[Object(i["i"])("div",Ee,[Object(i["i"])("div",{class:"fillPercent",style:s.calculateProgresPercentStyle()},null,4)])])],512),[[i["t"],!e.editItem]]),Object(i["w"])(Object(i["i"])("div",Te,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field xtrSmallField",ref:"ingrNameIn","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newName=t}),onfocus:"this.select();",onKeyup:[t[2]||(t[2]=Object(i["x"])((function(e){return s.submitEdit()}),["enter"])),t[3]||(t[3]=Object(i["x"])((function(e){return s.submitEdit(!1)}),["esc"]))]},null,544),[[i["s"],e.newName]]),Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field xxtrSmallField","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.newAmmount=t}),onfocus:"this.select();",onKeyup:[t[5]||(t[5]=Object(i["x"])((function(e){return s.submitEdit()}),["enter"])),t[6]||(t[6]=Object(i["x"])((function(e){return s.submitEdit(!1)}),["esc"]))]},null,544),[[i["s"],e.newAmmount]]),Object(i["w"])(Object(i["i"])("select",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.newType=t}),class:"form__field xtrSmallField selectdiv",onKeyup:[t[8]||(t[8]=Object(i["x"])((function(e){return s.submitEdit()}),["enter"])),t[9]||(t[9]=Object(i["x"])((function(e){return s.submitEdit(!1)}),["esc"]))]},[Object(i["i"])(r)],544),[[i["r"],e.newType]]),Object(i["i"])("button",{class:"btn red FloatBRight smallB",onClick:t[10]||(t[10]=function(e){return s.toggleEdit()})},"X"),Object(i["i"])("button",{class:"btn blue FloatBRight smallB",onClick:t[11]||(t[11]=function(e){return s.submitEdit()})},"ok")],512),[[i["t"],e.editItem]])],32)})),Be={name:"Ingredient",props:["ingredient"],components:{itemTypes:P},data:function(){return{percentage:0,ingrStorage:{},editItem:!1,newName:"",newAmmount:"",newType:""}},methods:{checkIngredient:function(e){return this.ingrStorage=this.$store.getters.getItemByName(e.name,e.type),this.percentage=100*this.getIngredientPercentage(e),this.ingrStorage.ammount>=e.ammount?"greenDot":this.ingrStorage.ammount+this.ingrStorage.expAmmount>=e.ammount?"orangeDot":"redDot"},getIngredientPercentage:function(e){var t=this.ingrStorage.ammount+this.ingrStorage.expAmmount;return t>=e.ammount?1:t<e.ammount&&t>0?t/e.ammount:t<=0?0:void 0},calculateProgresPercentStyle:function(){var e=this.percentage,t=e.toString()+"%",n="#5f1919";return e>=100&&(n="#2A265F"),{width:t,"--fill-color":n}},toggleEdit:function(){this.newName=this.ingredient.name,this.newAmmount=this.ingredient.ammount,"Item"==this.ingredient.type||"Items"==this.ingredient.type?this.newType="":this.newType=this.ingredient.type,this.editItem=!this.editItem},submitEdit:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];/^ *$/.test(this.newName)&&(this.newName=this.ingredient.name),e&&this.$store.commit("updateRecipeItem",{recipeId:this.ingredient.recipeId,itemId:this.ingredient.id,newName:this.newName,newAmmount:this.newAmmount,newType:this.newType}),this.editItem=!this.editItem},updated:function(){this.editItem&&this.$refs.ingrNameIn.focus(),console.log("test")}}};n("5bde");Be.render=Fe,Be.__scopeId="data-v-57339948";var $e=Be,Pe={name:"Recipe",props:["recipe"],components:{ingredient:$e},data:function(){return{showItems:!1,editName:!1,expItems:[],newName:""}},methods:{toggleItems:function(){this.showItems=!this.showItems,this.$forceUpdate()},isReady:function(){return this.checkIngridientStatus(this.recipe),this.recipe.isReady},isReadyWithExp:function(){return this.checkIngridientStatus(this.recipe),this.recipe.isReadyWithExp},checkIngridientStatus:function(e){this.$store.commit("checkRecipeStatus",e.id)},Delete:function(e){this.$store.commit("removeRecipe",e)},makeRecipe:function(e){e.isReady&&this.$store.commit("executeRecipe",e)},editRecipe:function(e){console.log("Editing "+e.name)},toggleEditName:function(){this.newName=this.recipe.name,this.editName=!this.editName},submitNewName:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];/^ *$/.test(this.newName)&&(this.newName=this.recipe.name),e&&this.$store.commit("renameRecipe",{recipeId:this.recipe.id,newName:this.newName}),this.editName=!this.editName}},updated:function(){this.editName&&this.$refs.newNameIn.focus()}};n("609f");Pe.render=qe,Pe.__scopeId="data-v-76b4e149";var Ke=Pe,Me=Object(i["y"])("data-v-5ac3f028");Object(i["m"])("data-v-5ac3f028");var Ue={class:"recipeCard creator"},Ye={class:"recipeName cardSection"},Je=Object(i["i"])("h6",{class:"noselect"},"New Recipe",-1),We={class:"cardSection addNewItem"},Xe=Object(i["i"])("h6",{class:"noselect"},"Add new ingredient",-1),Le={class:"inputContainer"},He={class:"show cardSection greySection"},Ze=Object(i["i"])("h6",{class:"noselect"},"Added ingredients",-1),ze={class:"recipieItems cardSection"},Ge=Object(i["i"])("i",{class:"dot"},null,-1),Qe={class:"newItemInfo noselect"},et={class:"buttonContainer cardSection blueSection"};Object(i["l"])();var tt=Me((function(e,t,n,a,c,s){var r=Object(i["p"])("itemTypes");return Object(i["k"])(),Object(i["f"])("div",Ue,[Object(i["i"])("div",Ye,[Je,Object(i["i"])("h2",null,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field whiteText","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newRecipeValues.name=e}),placeholder:"Recipe Name"},null,512),[[i["s"],c.newRecipeValues.name]])])]),Object(i["i"])("div",We,[Xe,Object(i["i"])("div",Le,[Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field smallField","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.addItemValues.name=e}),placeholder:"Name"},null,512),[[i["s"],c.addItemValues.name]]),Object(i["w"])(Object(i["i"])("input",{type:"text",class:"form__field xtrSmallField","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.addItemValues.quantity.ammount=e}),placeholder:"1"},null,512),[[i["s"],c.addItemValues.quantity.ammount]]),Object(i["w"])(Object(i["i"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.addItemValues.quantity.type=e}),class:"form__field xtrSmallField selectdiv"},[Object(i["i"])(r)],512),[[i["r"],c.addItemValues.quantity.type]]),Object(i["i"])("button",{class:"btn blue FloatBRight smallButton",onClick:t[5]||(t[5]=function(e){return s.addItem()})},"+")])]),Object(i["i"])("div",He,[Ze,Object(i["i"])("ul",ze,[(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["o"])(c.addedItems,(function(e){return Object(i["k"])(),Object(i["f"])("li",{class:"newItem",key:e.id,onMouseover:function(t){return s.hoverOver(e)},onMouseleave:function(t){return s.leaveOver(e)}},[Ge,Object(i["i"])("div",Qe,Object(i["q"])(e.name)+" | "+Object(i["q"])(e.ammount)+" "+Object(i["q"])(e.type),1),Object(i["w"])(Object(i["i"])("button",{class:"btn red FloatBRight smallButton",onClick:function(t){return s.removeItem(e)}},"-",8,["onClick"]),[[i["t"],c.removeBs[e.index]]])],40,["onMouseover","onMouseleave"])})),128))])]),Object(i["i"])("div",et,[Object(i["i"])("button",{class:"btn grey",onClick:t[6]||(t[6]=function(e){return s.submitForm()})},"Add Recipe")])])}));n("c740"),n("a434");function nt(){return{name:"",items:[]}}function it(){return{name:"",quantity:{ammount:"",type:""}}}var at={name:"New Recipe",components:{itemTypes:P},data:function(){return{newRecipeValues:nt(),addItemValues:it(),addedItems:[],removeBs:[],recipeId:ie["a"].v4()}},methods:{submitForm:function(){var e={};e.id=this.recipeId,e.name=this.newRecipeValues.name,""==e.name&&(e.name="New Recipe"),e.items=this.addedItems,this.newRecipeValues=nt(),this.addItemValues=it(),this.addedItems=[],this.removeBs=[],this.recipeId=ie["a"].v4(),e.items.length>0&&this.$store.commit("addRecipe",e)},addItem:function(){var e={};e.recipeId=this.recipeId,e.id=ie["a"].v4(),e.index=this.addedItems.length,e.name=this.addItemValues.name,""==e.name&&(e.name="New Item"),e.ammount=parseInt(this.addItemValues.quantity.ammount),(isNaN(e.ammount)||e.ammount<=0)&&(e.ammount=1);var t=this.addItemValues.quantity.type;e.type=""==t?"Item"+(1==e.ammount?"":"s"):t;var n=this.addedItems.findIndex((function(t){return t.name==e.name&&W.compareTypes(t.type,e.type)}));n<0?(this.removeBs.push(!1),this.addedItems.push(e)):this.addedItems[n].ammount+=e.ammount,this.addItemValues=it()},removeItem:function(e){var t=this.addedItems.findIndex((function(t){return t.id===e.id}));this.addedItems.splice(t,1);for(var n=t;n<this.addedItems.length;n++)this.addedItems[n].index--;for(var i=0;i<this.removeBs.length;i++)this.removeBs[i]=!1},hoverOver:function(e){this.removeBs[e.index]=!0},leaveOver:function(e){this.removeBs[e.index]=!1}}};n("8c5f");at.render=tt,at.__scopeId="data-v-5ac3f028";var ct=at,st={name:"Recipes",components:{recipeCard:Ke,recipeCreator:ct},props:["recipes"],data:function(){return{recipeCreatorKey:ie["a"].v4()}},methods:{enter:function(e,t){Object(re["a"])({targets:e,duration:350,translateY:[50,0],scale:[.5,1],opacity:[0,1],easing:"easeInOutSine",complete:t})},leave:function(e,t){Object(re["a"])({targets:e,duration:350,translateX:[0,50],scale:{delay:100,value:[1,.5]},opacity:[1,0],easing:"easeInOutSine",complete:t})}}};st.render=de;var rt=st,ot={name:"App",components:{itemsContainer:ue,recipesContainer:rt},data:function(){return{showItems:!0,showRecipes:!0}},mixins:[W],created:function(){this.$store.commit("initialise")}};n("64be");ot.render=d;var ut=ot,mt=(n("a623"),n("4de4"),n("4160"),n("13d5"),n("159b"),n("5502")),dt=Object(mt["a"])({state:{items:[],recipes:[],devSettings:{}},getters:{getAllItems:function(e){return e.items},getAllRecipes:function(e){return e.recipes},getItemByName:function(e){return function(t,n){var i=e.items.filter((function(e){return e.name==t&&W.compareTypes(e.quantity.type,n)}));if(0==i.length)return{ammount:0,expAmmount:0,type:"items"};var a=0,c=0;return i.forEach((function(e){vt(e.date.expiring)?c+=e.quantity.ammount:a+=e.quantity.ammount})),{ammount:a,expAmmount:c,type:i[0].quantity.type}}},getItemExpDate:function(e){return function(t){var n=e.items.filter((function(e){return e.name==t}));if(0==n.length)return null;var i=[];n.forEach((function(e){i.push(e.date.expiring)}));var a=W.getFormatedDate(i.reduce((function(e,t){return e<t?e:t})));return a}}},mutations:{initialise:function(e){e.devSettings=Ot(W.getDevSettingsKey())||W.getDefaultDevSettings(),e.devSettings.appVersion<W.getCurrentAppVersion()&&(console.log("Reseting storage"),e.items=[],pt(e),e.recipes=[],bt(e),e.devSettings.appVersion=W.getCurrentAppVersion()),e.items=Ot(W.getItemsStorageKey())||[],e.recipes=Ot(W.getRecipesStorageKey())||[],ht(e.items),ft(e)},addItem:function(e,t){if(!(t.quantity.ammount<=0)){var n=e.items.findIndex((function(e){return e.name===t.name&&W.sameDay(e.date.expiring,t.date.expiring)&&W.compareTypes(e.quantity.type,t.quantity.type)}));n<0?e.items.push(t):(e.items[n].quantity.ammount+=t.quantity.ammount,W.fixItemType(e.items[n].quantity)),pt(e)}},removeItem:function(e,t){var n=e.items.findIndex((function(e){return e.id==t.id}));e.items.splice(n,1),pt(e)},consumeItem:function(e,t){var n=t.consumeItem,i=t.ammount;e.items.forEach((function(e,t,a){if(e.id==n.id){var c=parseFloat(i);isNaN(c)&&(c=0),e.quantity.ammount-=c,W.fixItemType(e.quantity),e.quantity.ammount<=0&&a.splice(t,1)}})),pt(e)},renameItem:function(e,t){var n=t.itemId,i=t.newName,a=e.items.findIndex((function(e){return e.id==n}));e.items[a].name=i,pt(e)},repopulateItem:function(e,t){var n=t.itemId,i=t.newAmmount,a=t.newType,c=e.items.findIndex((function(e){return e.id==n})),s=parseFloat(i);!isNaN(s)&&s>0&&(e.items[c].quantity.ammount=s,""==a&&(a="Item"+(1==s?"":"s")),e.items[c].quantity.type=a),pt(e)},updateDateItem:function(e,t){var n=t.itemId,i=t.newDate,a=e.items.findIndex((function(e){return e.id==n})),c=new Date(i),s=new Date(c.getFullYear(),c.getMonth(),c.getDate());e.items[a].date.expiring=s,pt(e)},addRecipe:function(e,t){e.recipes.push(t),bt(e)},removeRecipe:function(e,t){var n=e.recipes.findIndex((function(e){return e.id==t.id}));e.recipes.splice(n,1),bt(e)},checkRecipeStatus:function(e,t){var n=this;e.recipes.forEach((function(e){if(e.id==t){var i=jt(n,e);e.isReady=i.isReady,e.isReadyWithExp=i.isReadyWithExp,e.expItems=gt(n,e)}}))},executeRecipe:function(e,t){t.items.forEach((function(t){yt(e,t)}))},renameRecipe:function(e,t){var n=t.recipeId,i=t.newName,a=e.recipes.findIndex((function(e){return e.id==n}));e.recipes[a].name=i,bt(e)},updateRecipeItem:function(e,t){var n=e.recipes.findIndex((function(e){return e.id==t.recipeId})),i=e.recipes[n].items.findIndex((function(e){return e.id==t.itemId}));e.recipes[n].items[i].name=t.newName;var a=parseFloat(t.newAmmount);!isNaN(a)&&a>0&&(e.recipes[n].items[i].ammount=a,""==t.newType&&(t.newType="Item"+(1==a?"":"s")),e.recipes[n].items[i].type=t.newType),bt(e)}}}),lt=dt;function pt(e){localStorage.setItem(W.getItemsStorageKey(),JSON.stringify(e.items))}function bt(e){localStorage.setItem(W.getRecipesStorageKey(),JSON.stringify(e.recipes))}function ft(e){localStorage.setItem(W.getDevSettingsKey(),JSON.stringify(e.devSettings))}function Ot(e){var t=localStorage.getItem(e);return JSON.parse(t,W.JsonDateParser)}function ht(e){e.forEach((function(e){e.date.hasExpired=!(e.date.expiring>W.getFormatedDate(Date.now()))}))}function jt(e,t){var n=!0,i=!0,a=0;return t.items.forEach((function(t){var c=e.getters.getItemByName(t.name,t.type);a=c.ammount+c.expAmmount,t.ammount>c.ammount&&(n=!1),t.ammount>a&&(i=!1)})),{isReady:n,isReadyWithExp:i}}function gt(e,t){var n=[],i=W.getFormatedDate(Date.now());return t.items.forEach((function(t){var a=e.getters.getItemExpDate(t.name);null!=a&&a<=i&&n.push(t)})),n}function vt(e){var t=W.getFormatedDate(Date.now());return t>=e}function yt(e,t){var n=t.ammount,i=0,a=e.items.filter((function(e){return e.name==t.name&&W.compareTypes(e.quantity.type,t.type)&&!vt(e.date.expiring)}));a.sort((function(e,t){return e.quantity.ammount-t.quantity.ammount})),a.every((function(t){return i=t.quantity.ammount,t.quantity.ammount-=n,W.fixItemType(t.quantity),n-=i,!(t.quantity.ammount>0)&&(0==t.quantity.ammount?(wt(e,t),!1):t.quantity.ammount<0?(wt(e,t),!0):void 0)})),pt(e)}function wt(e,t){var n=0;n=e.items.findIndex((function(e){return e.id===t.id})),e.items.splice(n,1)}Object(i["e"])(ut).use(lt).mount("#app")},"5bde":function(e,t,n){"use strict";n("a3dc")},"609f":function(e,t,n){"use strict";n("9a2d")},"64be":function(e,t,n){"use strict";n("3068")},"8c5f":function(e,t,n){"use strict";n("e4d4")},"9a2d":function(e,t,n){},a3dc:function(e,t,n){},c99b:function(e,t,n){},e4d4:function(e,t,n){}});
//# sourceMappingURL=app.d2d17167.js.map