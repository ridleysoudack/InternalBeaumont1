System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},r={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){r.SHOW_ON_MAP_DATA_ID_PREFIX=e.SHOW_ON_MAP_DATA_ID_PREFIX,r.ShowOnMapDataType=e.ShowOnMapDataType}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=r},48891:e=>{e.exports=a}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>a});var e=o(48891),t=o(26826);class a extends e.AbstractMessageAction{filterMessageType(t,a){return t===e.MessageType.DataRecordSetChange}filterMessage(e){return!0}onRemoveListen(t,a){var r;const o=(null===(r=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===r?void 0:r.showOnMapDatas)||{},i={};Object.entries(o).forEach((e=>{var t;(null===(t=e[1])||void 0===t?void 0:t.messageWidgetId)!==a&&(i[e[0]]=e[1])})),e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",i)}onExecute(a,r){var o,i,n;const s=this._getActiveViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),d=this._getDefaultViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),g=s||d;let c=(null===(o=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===o?void 0:o.showOnMapDatas)||{};const p=`${t.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${a.dataRecordSetId}_`,u=`${p}???`,l=s?`${p}${s}`:u;if(d&&d===s&&delete c[u],a.changeType===e.RecordSetChangeType.Create||a.changeType===e.RecordSetChangeType.Update)c[l]={mapWidgetId:this.widgetId,messageWidgetId:a.widgetId,jimuMapViewId:g,dataSource:null===(i=a.dataRecordSet)||void 0===i?void 0:i.dataSource,records:null===(n=a.dataRecordSet)||void 0===n?void 0:n.records,type:t.ShowOnMapDataType.MessageAction,title:l};else if(a.changeType===e.RecordSetChangeType.Remove){const e={};Object.entries(c).forEach((t=>{0!==t[0].indexOf(p)&&(e[t[0]]=t[1])})),c=e}return e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",c),Promise.resolve(!0)}_getActiveViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e&&t[a].isActive))}_getDefaultViewId(e,t){return Object.keys(t||{}).find((a=>t[a].mapWidgetId===e))}}})(),i})())}}}));