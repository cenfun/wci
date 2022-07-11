!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("open-store",[],t):"object"==typeof exports?exports["open-store"]=t():e["open-store"]=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c,deleteDB:()=>a,getDBs:()=>i,openStore:()=>d});const r=new Map,o=()=>{if("undefined"==typeof indexedDB)throw new Error("Your browser doesn't support indexedDB")},s=e=>{const t=r.get(e);t&&(t.close(),r.delete(e))};class n{constructor(e,t,r){this.dbName=e,this.storeName=t,this.initStoreOptions(r)}initStoreOptions(e){this.storeOptions={},this.indexOptions=null,e&&("string"!=typeof e?"boolean"!=typeof e?"object"==typeof e&&this.initObjectStoreOptions(e):this.storeOptions={autoIncrement:!0}:this.storeOptions={keyPath:e})}initObjectStoreOptions(e){"string"==typeof e.keyPath&&e.keyPath&&(this.storeOptions.keyPath=e.keyPath),e.autoIncrement&&(this.storeOptions.autoIncrement=!0),"object"==typeof e.index&&e.index&&(this.indexOptions=e.index)}open(e,t){return new Promise((o=>{s(this.dbName);const n=indexedDB.open(this.dbName,t);n.onerror=e=>{o()},n.onblocked=e=>{o()},n.onsuccess=()=>{const e=n.result;r.set(this.dbName,e),o(e)},n.onupgradeneeded=()=>{e.call(this,n.result)}}))}async upgrade(e){const t=parseInt(this.db.version)+1;this.db=await this.open(e,t)}async init(){return this.db?this:(this.db=await this.open(this.createStoreHandler),this.db.objectStoreNames.contains(this.storeName)||await this.upgrade(this.createStoreHandler),this)}createStoreHandler(e){const t=e.createObjectStore(this.storeName,this.storeOptions);this.indexOptions&&Object.keys(this.indexOptions).forEach((e=>{const r=this.indexOptions[e],o=this.indexNameHandler(e);t.createIndex(o,e,r)}))}indexNameHandler(e){if(e&&"string"==typeof e)return"by_".concat(e)}getCurrentStore(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"readonly";return this.db.transaction(this.storeName,e).objectStore(this.storeName)}promisedRequest(e,t){return new Promise((r=>{const o=this.getCurrentStore(e),s=t.call(this,o);s.onsuccess=function(e){r({result:s.result})},s.onerror=function(e){r({error:s.error})}}))}hasStore(e){return this.db.objectStoreNames.contains(e)}async deleteStore(e){e&&"string"==typeof e&&this.hasStore(e)&&await this.upgrade((t=>{t.deleteObjectStore(e)}))}async createStore(e,t){e&&"string"==typeof e&&(this.hasStore(e)||(this.storeName=e,this.initStoreOptions(t),await this.upgrade(this.createStoreHandler)))}useStore(e){e&&"string"==typeof e&&this.hasStore(e)&&(this.storeName=e)}getStoreNames(){return Array.from(this.db.objectStoreNames)}add(e,t){return this.promisedRequest("readwrite",(r=>r.add(e,t)))}put(e,t){return this.promisedRequest("readwrite",(r=>r.put(e,t)))}delete(e){return this.promisedRequest("readwrite",(t=>t.delete(e)))}set(e,t){return this.storeOptions.keyPath?this.put(e):this.put(t,e)}async get(e,t){const r=await this.promisedRequest("readonly",(r=>{const o=this.indexNameHandler(t);return o&&r.indexNames.contains(o)?r.index(o).get(e):r.get(e)}));if(!r.error)return r.result;console.error(r.error)}async getAll(e,t){const r=await this.promisedRequest("readonly",(r=>r.getAll(e,t)));return r.error?(console.error(r.error),[]):r.result}each(e){return new Promise((t=>{const r=this.getCurrentStore().openCursor();let o=0;r.onsuccess=r=>{const s=r.target.result;s?(e.call(this,s.value,o,s),o+=1,s.continue()):t()},r.onerror=()=>{t()}}))}async count(){const e=await this.promisedRequest("readonly",(e=>e.count()));if(!e.error)return e.result;console.error(e.error)}clear(){return this.promisedRequest("readwrite",(e=>e.clear()))}close(){s(this.dbName),this.db=null}}const i=()=>(o(),indexedDB.databases()),a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db";return o(),new Promise((t=>{s(e);const r=indexedDB.deleteDatabase(e);r.onerror=function(){t(r.error)},r.onblocked=function(){t("blocked on delete database")},r.onsuccess=function(){t()}}))},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"db",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"store",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(),!e||"string"!=typeof e)return;if(!t||"string"!=typeof t)return;const s=new n(e,t,r);return s.init()},c=d;return t})()));
//# sourceMappingURL=open-store.js.map