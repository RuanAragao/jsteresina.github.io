(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{G8lS:function(t,e,a){},ZUrO:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return l})),a.d(e,"pageQuery",(function(){return p}));var n=a("q1tI"),r=a.n(n),o=a("Zttt"),s=a("i1GD"),c=a("okzv");var l=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.data,a=t.pathContext.tag,n=this.props.location.pathname;return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{title:"Tag: "+a,description:'Todos os posts marcados com a tag "'+a+'" no CodeStack Brasil',url:n}),r.a.createElement("h2",{style:{fontSize:"22px",padding:"0px 15px"}},"Todos os posts com a tag: ",a),r.a.createElement(s.a,{data:e})))},n}(n.Component),p="676658028"},i1GD:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),s=(a("G8lS"),function(t){var e=t.data.allMarkdownRemark.edges.map((function(t){var e=t.node;return r.a.createElement("div",{key:e.fields.slug,className:"post"},r.a.createElement(o.Link,{to:e.fields.slug,className:"post-title"},r.a.createElement("h2",null,e.frontmatter.title)),r.a.createElement("p",{className:"post-date"},e.frontmatter.date),r.a.createElement("p",null,e.frontmatter.description))}));return r.a.createElement("div",{className:"posts"},e)})}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-df083bb0623766919d5c.js.map