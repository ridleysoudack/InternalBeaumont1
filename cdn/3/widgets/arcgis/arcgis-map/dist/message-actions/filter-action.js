System.register(["jimu-core"],(function(e,t){var a={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.DataSourceManager=e.DataSourceManager,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.dataSourceUtils=e.dataSourceUtils,a.lodash=e.lodash}],execute:function(){e((()=>{"use strict";var e={48891:e=>{e.exports=a}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>t});var e=r(48891);class t extends e.AbstractMessageAction{constructor(){super(...arguments),this.filterActions={}}filterMessageType(t,a){return t===e.MessageType.DataRecordsSelectionChange}filterMessage(e){return!0}onRemoveListen(t,a){Object.keys(this.filterActions||{}).forEach((t=>{Object.entries(this.filterActions[t]||{}).forEach((r=>{var s;const o=r[0];(null===(s=r[1])||void 0===s?void 0:s.messageWidgetId)===a&&e.lodash.setValue(this.filterActions,`${t}.${o}.querySQL`,"")}));const r={layerDataSourceId:t.slice("filterActionValue-".length),querySQL:this.getUnionAllFilterQuerySQL(t)};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,t,r)}))}onExecute(t,a){switch(t.type){case e.MessageType.DataRecordsSelectionChange:let r,s,o=null;if(a)if(a.messageUseDataSource&&a.actionUseDataSource){if(t.records.length>0&&t.records[0].dataSource.getMainDataSource().id!==a.messageUseDataSource.mainDataSourceId){e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"filterActionValue",null);break}if(r=e.DataSourceManager.getInstance().getDataSource(a.messageUseDataSource.mainDataSourceId),s=e.DataSourceManager.getInstance().getDataSource(a.actionUseDataSource.mainDataSourceId),r&&s)if(t.records.length<=0)o={layerDataSourceId:s&&s.id,querySQL:""};else if(a.enabledDataRelationShip){let l=null,i=null;if(a.messageUseDataSource.mainDataSourceId===a.actionUseDataSource.mainDataSourceId&&a.messageUseDataSource.rootDataSourceId===a.actionUseDataSource.rootDataSourceId){const e=r.getSchema(),t=e&&e.fields&&Object.keys(e.fields).find((t=>"esriFieldTypeOID"===e.fields[t].esriType));l=e&&e.fields&&e.fields[t],i=l}else{const e=a.messageUseDataSource.fields[0],t=a.actionUseDataSource.fields[0];l=r.getSchema().fields[e],i=s.getSchema().fields[t]}let n="";if(l&&i){const e=l.name,a=l.type,r=t,s=[];for(let t=0;t<r.records.length;t++){const o=r.records[t].getData()[e];s.includes(`${this.formatValue(o,a)}`)||s.push(`${this.formatValue(r.records[t].getData()[e],a)}`)}n=`${i.name} IN `,s.length>0?n+=`(${s.join(", ")})`:n=""}if(t.records.length>0){const t=a.sqlExprObj?e.dataSourceUtils.getArcGISSQL(a.sqlExprObj,s).sql:null;t&&(n=n?n+" AND "+t:t)}else n="";o={layerDataSourceId:s&&s.id,querySQL:n}}else{let r="";if(t.records.length>0){const t=a.sqlExprObj?e.dataSourceUtils.getArcGISSQL(a.sqlExprObj,s).sql:null;t&&(r=t)}else r="";o={layerDataSourceId:s&&s.id,querySQL:r}}else o=null}else o=null;const l=this.getFilterMessageKey(t.widgetId,null==r?void 0:r.id),i=this.getFilterActionKey(null==o?void 0:o.layerDataSourceId);o&&(e.lodash.setValue(this.filterActions,`${i}.${l}`,{querySQL:null==o?void 0:o.querySQL,messageWidgetId:t.widgetId}),o.querySQL=this.getUnionAllFilterQuerySQL(i)),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,i,o)}return!0}getUnionAllFilterQuerySQL(e){let t="";return Object.entries(this.filterActions[e]||{}).forEach((e=>{var a;const r=null===(a=e[1])||void 0===a?void 0:a.querySQL;t=t&&r?` ${t} AND ${r} `:r||t})),t}getFilterActionKey(e){return`filterActionValue-${e}`}getFilterMessageKey(e,t){return`filterMessageValue-${e}-${t}`}getLayerIdFromLayerDs(e){return e.layerId?e.layerId:e.layer?e.layer.id:null}formatValue(e,t){return"STRING"===t?`'${e}'`:"NUMBER"===t?`${e}`:"DATE"===t?`'${e}'`:void 0}}})(),s})())}}}));