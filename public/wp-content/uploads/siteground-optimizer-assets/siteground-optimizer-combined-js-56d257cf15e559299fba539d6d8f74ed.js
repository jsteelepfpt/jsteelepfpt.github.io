window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/joshuapsteele.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.1"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);;
document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );;
document.body.classList.remove("no-js");;
function toggleDarkMode() { // jshint ignore:line
	var toggler = document.getElementById( 'dark-mode-toggler' );

	if ( 'false' === toggler.getAttribute( 'aria-pressed' ) ) {
		toggler.setAttribute( 'aria-pressed', 'true' );
		document.documentElement.classList.add( 'is-dark-theme' );
		document.body.classList.add( 'is-dark-theme' );
		window.localStorage.setItem( 'twentytwentyoneDarkMode', 'yes' );
	} else {
		toggler.setAttribute( 'aria-pressed', 'false' );
		document.documentElement.classList.remove( 'is-dark-theme' );
		document.body.classList.remove( 'is-dark-theme' );
		window.localStorage.setItem( 'twentytwentyoneDarkMode', 'no' );
	}
}

function twentytwentyoneIsDarkMode() {
	var isDarkMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

	if ( 'yes' === window.localStorage.getItem( 'twentytwentyoneDarkMode' ) ) {
		isDarkMode = true;
	} else if ( 'no' === window.localStorage.getItem( 'twentytwentyoneDarkMode' ) ) {
		isDarkMode = false;
	}

	return isDarkMode;
}

function darkModeInitialLoad() {
	var toggler = document.getElementById( 'dark-mode-toggler' ),
		isDarkMode = twentytwentyoneIsDarkMode();

	if ( isDarkMode ) {
		document.documentElement.classList.add( 'is-dark-theme' );
		document.body.classList.add( 'is-dark-theme' );
	} else {
		document.documentElement.classList.remove( 'is-dark-theme' );
		document.body.classList.remove( 'is-dark-theme' );
	}

	if ( toggler && isDarkMode ) {
		toggler.setAttribute( 'aria-pressed', 'true' );
	}
}

function darkModeRepositionTogglerOnScroll() {

	var toggler = document.getElementById( 'dark-mode-toggler' ),
		prevScroll = window.scrollY || document.documentElement.scrollTop,
		currentScroll,

		checkScroll = function() {
			currentScroll = window.scrollY || document.documentElement.scrollTop;
			if (
				currentScroll + ( window.innerHeight * 1.5 ) > document.body.clientHeight ||
				currentScroll < prevScroll
			) {
				toggler.classList.remove( 'hide' );
			} else if ( currentScroll > prevScroll && 250 < currentScroll ) {
				toggler.classList.add( 'hide' );
			}
			prevScroll = currentScroll;
		};

	if ( toggler ) {
		window.addEventListener( 'scroll', checkScroll );
	}
}

darkModeInitialLoad();
darkModeRepositionTogglerOnScroll();;
if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
		document.body.classList.add( 'is-IE' );
	};
/*! lazysizes - v5.3.1 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:1,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
document.addEventListener('DOMContentLoaded',function(){var b=document.querySelectorAll('.show-additional-facepiles'),c=document.querySelectorAll('.mention-list'),a,f,d,g,e;if(b.length===0||c.length===0)return;for(a=0;a<c.length;a++)f=c[a],f.classList.add('initialized');for(a=0;a<b.length;a++)d=b[a],g=d.parentNode.parentNode.querySelector('.hide-additional-facepiles'),d.addEventListener('click',function(){e(this)}),g.addEventListener('click',function(){e(this)});e=function(b){var a=b.parentNode,c=a.classList.contains('is-hidden')?a.parentNode.querySelector('.additional-facepile-button-list-item:not(.is-hidden)'):a.parentNode.querySelector('.additional-facepile-button-list-item.is-hidden');a.classList.toggle('is-hidden'),c.classList.toggle('is-hidden')}});
/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);;
/**
 * File polyfills.js.
 *
 * Polyfills for IE11.
 */

/**
 * Polyfill for Element.closest() because we need to support IE11.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if ( ! Element.prototype.matches ) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if ( ! Element.prototype.closest ) {
	Element.prototype.closest = function( s ) {
		var el = this;
		do {
			if ( Element.prototype.matches.call( el, s ) ) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while ( el !== null && el.nodeType === 1 );
		return null;
	};
}

/**
 * Polyfill for NodeList.foreach() because we need to support IE11.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if ( window.NodeList && ! NodeList.prototype.forEach ) {
	NodeList.prototype.forEach = function( callback, thisArg ) {
		var i;
		thisArg = thisArg || window;
		for ( i = 0; i < this.length; i++ ) {
			callback.call( thisArg, this[i], i, this );
		}
	};
}
;
function twentytwentyoneToggleAriaExpanded(a,b){'true'!==a.getAttribute('aria-expanded')?(a.setAttribute('aria-expanded','true'),twentytwentyoneSubmenuPosition(a.parentElement),b&&document.addEventListener('click',twentytwentyoneCollapseMenuOnClickOutside)):(a.setAttribute('aria-expanded','false'),b&&document.removeEventListener('click',twentytwentyoneCollapseMenuOnClickOutside))}function twentytwentyoneCollapseMenuOnClickOutside(a){document.getElementById('site-navigation').contains(a.target)||document.getElementById('site-navigation').querySelectorAll('.sub-menu-toggle').forEach(function(a){a.setAttribute('aria-expanded','false')})}function twentytwentyoneSubmenuPosition(f){var a=f.querySelector('ul.sub-menu'),b,c,d,e;if(!a)return;b=a.getBoundingClientRect(),c=Math.round(b.right),d=Math.round(b.left),e=Math.round(window.innerWidth),c>e?a.classList.add('submenu-reposition-right'):document.body.classList.contains('rtl')&&d<0&&a.classList.add('submenu-reposition-left')}function twentytwentyoneExpandSubMenu(a){a.closest('nav').querySelectorAll('.sub-menu-toggle').forEach(function(b){b!==a&&b.setAttribute('aria-expanded','false')}),twentytwentyoneToggleAriaExpanded(a,!0),a.parentNode.querySelectorAll('ul > li:last-child > a').forEach(function(b){b.addEventListener('blur',function(b){a.parentNode.contains(b.relatedTarget)||a.setAttribute('aria-expanded','false')})})}(function(){var a=function(b){var c=document.body,a=document.getElementById(b+'-mobile-menu'),d=document.getElementById('site-navigation');if(!d)return;a&&(a.onclick=function(){c.classList.toggle(b+'-navigation-open'),c.classList.toggle('lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),a.focus()}),document.addEventListener('keydown',function(d){var l,e,k,g,h,i,f,j,m;if(!c.classList.contains(b+'-navigation-open'))return;l=document.querySelector('.'+b+'-navigation'),k='input, a, button',e=l.querySelectorAll(k),e=Array.prototype.slice.call(e),f=d.keyCode===9,j=d.shiftKey,m=d.keyCode===27,i=document.activeElement,g=e[e.length-1],h=e[0],m&&(d.preventDefault(),c.classList.remove(b+'-navigation-open','lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),a.focus()),!j&&f&&g===i&&(d.preventDefault(),h.focus()),j&&f&&h===i&&(d.preventDefault(),g.focus()),f&&h===g&&d.preventDefault()}),document.addEventListener('click',function(d){d.target.hash&&d.target.hash.includes('#')&&(c.classList.remove(b+'-navigation-open','lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),setTimeout(function(){var a=document.getElementById(d.target.hash.slice(1));a&&a.scrollIntoView()},550))}),d.querySelectorAll('.menu-wrapper > .menu-item-has-children').forEach(function(a){a.addEventListener('mouseenter',function(){this.querySelector('.sub-menu-toggle').setAttribute('aria-expanded','true'),twentytwentyoneSubmenuPosition(a)}),a.addEventListener('mouseleave',function(){this.querySelector('.sub-menu-toggle').setAttribute('aria-expanded','false')})})};window.addEventListener('load',function(){new a('primary')})})();
function twentytwentyoneResponsiveEmbeds(){var a,b;document.querySelectorAll('iframe').forEach(function(c){c.width&&c.height&&(a=parseFloat(c.width)/parseFloat(c.height),b=parseFloat(window.getComputedStyle(c.parentElement,null).width.replace('px','')),c.style.maxWidth='100%',c.style.maxHeight=Math.round(b/a).toString()+'px')})}twentytwentyoneResponsiveEmbeds(),window.onresize=twentytwentyoneResponsiveEmbeds;
/**
 * Observe how the user enters content into the comment form in order to determine whether it's a bot or not.
 *
 * Note that no actual input is being saved here, only counts and timings between events.
 */

( function() {
	// Passive event listeners are guaranteed to never call e.preventDefault(),
	// but they're not supported in all browsers.  Use this feature detection
	// to determine whether they're available for use.
	var supportsPassive = false;

	try {
		var opts = Object.defineProperty( {}, 'passive', {
			get : function() {
				supportsPassive = true;
			}
		} );

		window.addEventListener( 'testPassive', null, opts );
		window.removeEventListener( 'testPassive', null, opts );
	} catch ( e ) {}

	function init() {
		var input_begin = '';

		var keydowns = {};
		var lastKeyup = null;
		var lastKeydown = null;
		var keypresses = [];

		var modifierKeys = [];
		var correctionKeys = [];

		var lastMouseup = null;
		var lastMousedown = null;
		var mouseclicks = [];

		var mousemoveTimer = null;
		var lastMousemoveX = null;
		var lastMousemoveY = null;
		var mousemoveStart = null;
		var mousemoves = [];

		var touchmoveCountTimer = null;
		var touchmoveCount = 0;

		var lastTouchEnd = null;
		var lastTouchStart = null;
		var touchEvents = [];

		var scrollCountTimer = null;
		var scrollCount = 0;

		var correctionKeyCodes = [ 'Backspace', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown' ];
		var modifierKeyCodes = [ 'Shift', 'CapsLock' ];

		var forms = document.querySelectorAll( 'form[method=post]' );

		for ( var i = 0; i < forms.length; i++ ) {
			var form = forms[i];

			var formAction = form.getAttribute( 'action' );

			// Ignore forms that POST directly to other domains; these could be things like payment forms.
			if ( formAction ) {
				// Check that the form is posting to an external URL, not a path.
				if ( formAction.indexOf( 'http://' ) == 0 || formAction.indexOf( 'https://' ) == 0 ) {
					if ( formAction.indexOf( 'http://' + window.location.hostname + '/' ) != 0 && formAction.indexOf( 'https://' + window.location.hostname + '/' ) != 0 ) {
						continue;
					}
				}
			}

			form.addEventListener( 'submit', function () {
				var ak_bkp = prepare_timestamp_array_for_request( keypresses );
				var ak_bmc = prepare_timestamp_array_for_request( mouseclicks );
				var ak_bte = prepare_timestamp_array_for_request( touchEvents );
				var ak_bmm = prepare_timestamp_array_for_request( mousemoves );

				var input_fields = {
					// When did the user begin entering any input?
					'ak_bib': input_begin,

					// When was the form submitted?
					'ak_bfs': Date.now(),

					// How many keypresses did they make?
					'ak_bkpc': keypresses.length,

					// How quickly did they press a sample of keys, and how long between them?
					'ak_bkp': ak_bkp,

					// How quickly did they click the mouse, and how long between clicks?
					'ak_bmc': ak_bmc,

					// How many mouseclicks did they make?
					'ak_bmcc': mouseclicks.length,

					// When did they press modifier keys (like Shift or Capslock)?
					'ak_bmk': modifierKeys.join( ';' ),

					// When did they correct themselves? e.g., press Backspace, or use the arrow keys to move the cursor back
					'ak_bck': correctionKeys.join( ';' ),

					// How many times did they move the mouse?
					'ak_bmmc': mousemoves.length,

					// How many times did they move around using a touchscreen?
					'ak_btmc': touchmoveCount,

					// How many times did they scroll?
					'ak_bsc': scrollCount,

					// How quickly did they perform touch events, and how long between them?
					'ak_bte': ak_bte,

					// How many touch events were there?
					'ak_btec' : touchEvents.length,

					// How quickly did they move the mouse, and how long between moves?
					'ak_bmm' : ak_bmm
				};

				for ( var field_name in input_fields ) {
					var field = document.createElement( 'input' );
					field.setAttribute( 'type', 'hidden' );
					field.setAttribute( 'name', field_name );
					field.setAttribute( 'value', input_fields[ field_name ] );
					this.appendChild( field );
				}
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keydown', function ( e ) {
				// If you hold a key down, some browsers send multiple keydown events in a row.
				// Ignore any keydown events for a key that hasn't come back up yet.
				if ( e.key in keydowns ) {
					return;
				}

				var keydownTime = ( new Date() ).getTime();
				keydowns[ e.key ] = [ keydownTime ];

				if ( ! input_begin ) {
					input_begin = keydownTime;
				}

				// In some situations, we don't want to record an interval since the last keypress -- for example,
				// on the first keypress, or on a keypress after focus has changed to another element. Normally,
				// we want to record the time between the last keyup and this keydown. But if they press a
				// key while already pressing a key, we want to record the time between the two keydowns.

				var lastKeyEvent = Math.max( lastKeydown, lastKeyup );

				if ( lastKeyEvent ) {
					keydowns[ e.key ].push( keydownTime - lastKeyEvent );
				}

				lastKeydown = keydownTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keyup', function ( e ) {
				if ( ! ( e.key in keydowns ) ) {
					// This key was pressed before this script was loaded, or a mouseclick happened during the keypress, or...
					return;
				}

				var keyupTime = ( new Date() ).getTime();

				if ( 'TEXTAREA' === e.target.nodeName || 'INPUT' === e.target.nodeName ) {
					if ( -1 !== modifierKeyCodes.indexOf( e.key ) ) {
						modifierKeys.push( keypresses.length - 1 );
					} else if ( -1 !== correctionKeyCodes.indexOf( e.key ) ) {
						correctionKeys.push( keypresses.length - 1 );
					} else {
						// ^ Don't record timings for keys like Shift or backspace, since they
						// typically get held down for longer than regular typing.

						var keydownTime = keydowns[ e.key ][0];

						var keypress = [];

						// Keypress duration.
						keypress.push( keyupTime - keydownTime );

						// Amount of time between this keypress and the previous keypress.
						if ( keydowns[ e.key ].length > 1 ) {
							keypress.push( keydowns[ e.key ][1] );
						}

						keypresses.push( keypress );
					}
				}

				delete keydowns[ e.key ];

				lastKeyup = keyupTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusin", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusout", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );
		}

		document.addEventListener( 'mousedown', function ( e ) {
			lastMousedown = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mouseup', function ( e ) {
			if ( ! lastMousedown ) {
				// If the mousedown happened before this script was loaded, but the mouseup happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var mouseclick = [];
			mouseclick.push( now - lastMousedown );

			if ( lastMouseup ) {
				mouseclick.push( lastMousedown - lastMouseup );
			}

			mouseclicks.push( mouseclick );

			lastMouseup = now;

			// If the mouse has been clicked, don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mousemove', function ( e ) {
			if ( mousemoveTimer ) {
				clearTimeout( mousemoveTimer );
				mousemoveTimer = null;
			}
			else {
				mousemoveStart = ( new Date() ).getTime();
				lastMousemoveX = e.offsetX;
				lastMousemoveY = e.offsetY;
			}

			mousemoveTimer = setTimeout( function ( theEvent, originalMousemoveStart ) {
				var now = ( new Date() ).getTime() - 250; // To account for the timer delay.

				var mousemove = [];
				mousemove.push( now - originalMousemoveStart );
				mousemove.push(
					Math.round(
						Math.sqrt(
							Math.pow( theEvent.offsetX - lastMousemoveX, 2 ) +
							Math.pow( theEvent.offsetY - lastMousemoveY, 2 )
						)
					)
				);

				if ( mousemove[1] > 0 ) {
					// If there was no measurable distance, then it wasn't really a move.
					mousemoves.push( mousemove );
				}

				mousemoveStart = null;
				mousemoveTimer = null;
			}, 250, e, mousemoveStart );
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'touchmove', function ( e ) {
			if ( touchmoveCountTimer ) {
				clearTimeout( touchmoveCountTimer );
			}

			touchmoveCountTimer = setTimeout( function () {
				touchmoveCount++;
			}, 250 );
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchstart', function ( e ) {
			lastTouchStart = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchend', function ( e ) {
			if ( ! lastTouchStart ) {
				// If the touchstart happened before this script was loaded, but the touchend happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var touchEvent = [];
			touchEvent.push( now - lastTouchStart );

			if ( lastTouchEnd ) {
				touchEvent.push( lastTouchStart - lastTouchEnd );
			}

			touchEvents.push( touchEvent );

			lastTouchEnd = now;

			// Don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'scroll', function ( e ) {
			if ( scrollCountTimer ) {
				clearTimeout( scrollCountTimer );
			}

			scrollCountTimer = setTimeout( function () {
				scrollCount++;
			}, 250 );
		}, supportsPassive ? { passive: true } : false );
	}

	/**
	 * For the timestamp data that is collected, don't send more than `limit` data points in the request.
	 * Choose a random slice and send those.
	 */
	function prepare_timestamp_array_for_request( a, limit ) {
		if ( ! limit ) {
			limit = 100;
		}

		var rv = '';

		if ( a.length > 0 ) {
			var random_starting_point = Math.max( 0, Math.floor( Math.random() * a.length - limit ) );

			for ( var i = 0; i < limit && i < a.length; i++ ) {
				rv += a[ random_starting_point + i ][0];

				if ( a[ random_starting_point + i ].length >= 2 ) {
					rv += "," + a[ random_starting_point + i ][1];
				}

				rv += ";";
			}
		}

		return rv;
	}

	if ( document.readyState !== 'loading' ) {
		init();
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}
})();;
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);