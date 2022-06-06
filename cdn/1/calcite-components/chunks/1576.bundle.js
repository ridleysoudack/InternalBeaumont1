/*! For license information please see 1576.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1576],{673:(t,e,n)=>{n.d(e,{H:()=>r,c:()=>i});var a=n(6030);function i(t){return Math.min(Math.max(Math.ceil(t),1),6)}var r=function(t,e){var n="h"+t.level;return delete t.level,(0,a.h)(n,Object.assign({},t),e)}},1576:(t,e,n)=>{n.r(e),n.d(e,{calcite_popover:()=>d,calcite_popover_manager:()=>u});var a=n(6030),i=n(6009),r=n(6553),o=n(669),s=n(673),l=function(t,e,n,a){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function o(t){try{l(a.next(t))}catch(t){r(t)}}function s(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){t.done?n(t.value):i(t.value).then(o,s)}l((a=a.apply(t,e||[])).next())}))},c=function(t,e){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},p="data-calcite-popover-reference",f="aria-controls",m="aria-expanded",d=function(){function t(t){var e=this;(0,a.r)(this,t),this.calcitePopoverClose=(0,a.c)(this,"calcitePopoverClose",7),this.calcitePopoverOpen=(0,a.c)(this,"calcitePopoverOpen",7),this.closeButton=!1,this.dismissible=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=i.d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.intlClose="Close",this.guid="calcite-popover-"+(0,r.g)(),this.activeTransitionProp="opacity",this.setUpReferenceElement=function(){e.removeReferences(),e.effectiveReferenceElement=e.getReferenceElement();var t=e,n=t.el,a=t.referenceElement,i=t.effectiveReferenceElement;a&&!i&&console.warn(n.tagName+': reference-element id "'+a+'" was not found.',{el:n}),e.addReferences(),e.createPopper()},this.getId=function(){return e.el.id||e.guid},this.setExpandedAttr=function(){var t=e,n=t.effectiveReferenceElement,a=t.open;n&&n.setAttribute(m,a.toString())},this.addReferences=function(){var t=e.effectiveReferenceElement;if(t){var n=e.getId();t.setAttribute(p,n),t.setAttribute(f,n),e.setExpandedAttr()}},this.removeReferences=function(){var t=e.effectiveReferenceElement;t&&(t.removeAttribute(p),t.removeAttribute(f),t.removeAttribute(m))},this.hide=function(){e.open=!1},this.transitionEnd=function(t){t.propertyName===e.activeTransitionProp&&(e.open?e.calcitePopoverOpen.emit():e.calcitePopoverClose.emit())}}return t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()},t.prototype.offsetSkiddingHandler=function(){this.reposition()},t.prototype.openHandler=function(){this.reposition(),this.setExpandedAttr()},t.prototype.placementHandler=function(){this.reposition()},t.prototype.referenceElementHandler=function(){this.setUpReferenceElement()},t.prototype.componentWillLoad=function(){this.setUpReferenceElement()},t.prototype.componentDidLoad=function(){this.reposition()},t.prototype.disconnectedCallback=function(){this.removeReferences(),this.destroyPopper()},t.prototype.reposition=function(){return l(this,void 0,void 0,(function(){var t,e,n,a,r;return c(this,(function(o){switch(o.label){case 0:return e=(t=this).popper,n=t.el,a=t.placement,r=this.getModifiers(),e?[4,(0,i.u)({el:n,modifiers:r,placement:a,popper:e})]:[3,2];case 1:return o.sent(),[3,3];case 2:this.createPopper(),o.label=3;case 3:return[2]}}))}))},t.prototype.setFocus=function(t){return l(this,void 0,void 0,(function(){var e,n;return c(this,(function(i){return n=this.closeButtonEl,"close-button"===t&&n?((0,a.f)(n),n.setFocus(),[2]):(null===(e=this.el)||void 0===e||e.focus(),[2])}))}))},t.prototype.toggle=function(t){return void 0===t&&(t=!this.open),l(this,void 0,void 0,(function(){return c(this,(function(e){return this.open=t,[2]}))}))},t.prototype.getReferenceElement=function(){var t=this.referenceElement,e=this.el;return("string"==typeof t?(0,o.q)(e,{id:t}):t)||null},t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,n=t.flipPlacements,a=t.disableFlip,i=t.disablePointer,r=t.offsetDistance,o=t.offsetSkidding,s={name:"flip",enabled:!a};n&&(s.options={fallbackPlacements:n});var l={name:"arrow",enabled:!i};return e&&(l.options={element:e}),[l,s,{name:"offset",enabled:!0,options:{offset:[o,r]}}]},t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,n=t.placement,a=t.effectiveReferenceElement,r=t.overlayPositioning,o=this.getModifiers();this.popper=(0,i.c)({el:e,modifiers:o,overlayPositioning:r,placement:n,referenceEl:a})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.renderCloseButton=function(){var t=this,e=this,n=e.dismissible,i=e.closeButton,r=e.intlClose;return n||i?(0,a.h)("div",{class:"close-button-container"},(0,a.h)("calcite-action",{class:"close-button",onClick:this.hide,ref:function(e){return t.closeButtonEl=e},text:r},(0,a.h)("calcite-icon",{icon:"x",scale:"m"}))):null},t.prototype.renderHeader=function(){var t=this.heading,e=this.headingLevel,n=t?(0,a.h)(s.H,{class:"heading",level:e||2},t):null;return n?(0,a.h)("div",{class:"header"},n,this.renderCloseButton()):null},t.prototype.render=function(){var t,e,n=this,r=this,o=r.effectiveReferenceElement,s=r.heading,l=r.label,c=r.open,p=o&&c,f=!p,m=r.disablePointer?null:(0,a.h)("div",{class:"arrow",ref:function(t){return n.arrowEl=t}});return(0,a.h)(a.H,{"aria-hidden":f.toString(),"aria-label":l,"calcite-hydrated-hidden":f,id:this.getId(),role:"dialog"},(0,a.h)("div",{class:(t={},t[i.C.animation]=!0,t[i.C.animationActive]=p,t),onTransitionEnd:this.transitionEnd},m,(0,a.h)("div",{class:(e={},e["has-header"]=!!s,e.container=!0,e)},this.renderHeader(),(0,a.h)("div",{class:"content"},(0,a.h)("slot",null)),s?null:this.renderCloseButton())))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:!1,configurable:!0}),t}();d.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:0 0 auto;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';var u=function(){function t(t){var e=this;(0,a.r)(this,t),this.selector="["+p+"]",this.autoClose=!1,this.queryPopover=function(t){var n=e.el;if(!t.includes(n))return null;var a=t.find((function(t){var e;return null===(e=null==t?void 0:t.hasAttribute)||void 0===e?void 0:e.call(t,p)}));if(!a)return null;var i=a.getAttribute(p);return(0,o.q)(n,{id:i})}}return t.prototype.render=function(){return(0,a.h)("slot",null)},t.prototype.closeOpenPopovers=function(t){var e=this.autoClose,n=this.el,a=t.composedPath(),i=this.queryPopover(a);i?i.toggle():e&&(0,o.h)(n,"calcite-popover").filter((function(t){return t.open&&!a.includes(t)})).forEach((function(t){return t.toggle(!1)}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.g)(this)},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}"}}]);