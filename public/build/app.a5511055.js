(self.webpackChunk=self.webpackChunk||[]).push([[143],{1488:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=1488,t.exports=e},8205:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={}},3212:(t,e,n)=>{"use strict";n(2731),n(90),n(666),n(2077),n(2238),n(9755);var r=n(2230),s=n(1689),o=n(9006);r.Z.registerLanguage("php",s.Z),r.Z.registerLanguage("twig",o.Z),r.Z.highlightAll();n(2682),(0,n(2192).x)(n(1488))},2682:(t,e,n)=>{"use strict";var r=n(9755);n(9826),n(4916),n(5306),n(4603),n(9714),n(9600),n(7941),n(4723),r((function(){var t=r("#sourceCodeModal"),e=t.find("code.php"),n=t.find("code.twig");function s(t,e){return'<a class="doclink" target="_blank" href="'+t+'">'+e+"</a>"}t.find(".hljs-comment").each((function(){r(this).html(r(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g,(function(t){return s(t,t)})))}));var o={Cache:"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html",IsGranted:"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted",ParamConverter:"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html",Route:"https://symfony.com/doc/current/routing.html#creating-routes-as-attributes-or-annotations",Security:"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security"};e.find(".hljs-meta").each((function(){var t,e=r(this).text();r(this).html((t=o,e.replace(new RegExp(Object.keys(t).join("|"),"g"),(function(e){return s(t[e],e)}))))})),n.find(".hljs-template-tag + .hljs-name").each((function(){var t=r(this).text();if("else"!==t&&!t.match(/^end/)){var e="https://twig.symfony.com/doc/3.x/tags/"+t+".html#"+t;r(this).html(s(e,t))}})),n.find(".hljs-template-variable > .hljs-name").each((function(){var t=r(this).text(),e="https://twig.symfony.com/doc/3.x/functions/"+t+".html#"+t;r(this).html(s(e,t))}))}))}},t=>{"use strict";t.O(0,[755,498,979],(()=>{return e=3212,t(t.s=e);var e}));t.O()}]);