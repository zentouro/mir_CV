try{
if(window.jstiming){window.jstiming.Fi={};window.jstiming.Tp=1;var ua=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],void 0!=c?e=c:e=e[0],Math.round(d-e)};window.jstiming.getTick=ua;window.jstiming.getLabels=function(a){var b=[],c;for(c in a.t)b.push(c);return b};var va=function(a,b,c){var d="";window.jstiming.srt&&(d+="&srt="+window.jstiming.srt);window.jstiming.pt&&(d+="&tbsrt="+window.jstiming.pt);try{window.external&&window.external.tran?d+="&tran="+window.external.tran:
window.gtbExternal&&window.gtbExternal.tran?d+="&tran="+window.gtbExternal.tran():window.chrome&&window.chrome.csi&&(d+="&tran="+window.chrome.csi().tran)}catch(r){}var e=window.chrome;if(e&&(e=e.loadTimes)){e().wasFetchedViaSpdy&&(d+="&p=s");if(e().wasNpnNegotiated){d+="&npn=1";var f=e().npnNegotiatedProtocol;f&&(d+="&npnv="+(encodeURIComponent||escape)(f))}e().wasAlternateProtocolAvailable&&(d+="&apa=1")}var g=a.t,k=g.start;e=[];f=[];for(var l in g)if("start"!=l&&0!=l.indexOf("_")){var m=g[l][1];
m?g[m]&&f.push(l+"."+ua(a,l,g[m][0])):k&&e.push(l+"."+ua(a,l))}if(b)for(var p in b)d+="&"+p+"="+b[p];(b=c)||(b="https:"==document.location.protocol?"https://csi.gstatic.com/csi":"http://csi.gstatic.com/csi");return[b,"?v=3","&s="+(window.jstiming.sn||"common_sharing")+"&action=",a.name,f.length?"&it="+f.join(","):"",d,"&rt=",e.join(",")].join("")},wa=function(a,b,c){a=va(a,b,c);if(!a)return"";b=new Image;var d=window.jstiming.Tp++;window.jstiming.Fi[d]=b;b.onload=b.onerror=function(){window.jstiming&&
delete window.jstiming.Fi[d]};b.src=a;b=null;return a};window.jstiming.report=function(a,b,c){var d=document.visibilityState,e="visibilitychange";d||(d=document.webkitVisibilityState,e="webkitvisibilitychange");if("prerender"==d){var f=!1,g=function(){if(!f){b?b.prerender="1":b={prerender:"1"};if("prerender"==(document.visibilityState||document.webkitVisibilityState))var k=!1;else wa(a,b,c),k=!0;k&&(f=!0,document.removeEventListener(e,g,!1))}};document.addEventListener(e,g,!1);return""}return wa(a, b,c)}}
;
}catch(e){_DumpException(e)}
// Google Inc.