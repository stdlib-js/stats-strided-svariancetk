"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var f=c(function(A,x){
var a=require('@stdlib/number-float64-base-to-float32/dist');function S(r,e,i,t,R){var n,s,v,u,o,q;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||t===0)return 0;for(s=R,n=0,v=0,q=0;q<r;q++)u=i[s],n=a(n+a(u*u)),v=a(v+u),s+=t;return a(a(n-a(a(v/r)*v))/o)}x.exports=S
});var d=c(function(B,y){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=f();function F(r,e,i,t){return E(r,e,i,t,_(r,t))}y.exports=F
});var j=c(function(C,l){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),T=f();O(k,"ndarray",T);l.exports=k
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=j(),p,m=g(b(__dirname,"./native.js"));h(m)?p=w:p=m;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
