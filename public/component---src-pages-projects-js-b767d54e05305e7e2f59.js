(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"16l3":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),c=r.n(n),o=r("Bl7J"),a=r("vrFN"),l=r("Wbzz"),s=function(e){var t=e.project;return c.a.createElement("article",null,c.a.createElement("h2",null,c.a.createElement(l.Link,{to:t.slug},t.title)),c.a.createElement("div",null,t.custonExcerpt),c.a.createElement(l.Link,{to:t.slug},"read this project →"))},p=r("Qy0I"),u=function(){return p.data.wpgraphql.myProjects.nodes.map((function(e){return{title:e.title,slug:"projects/"+e.slug,custonExcerpt:e.myProjects.customExcerpt}}))};t.default=function(){var e=u();return console.log(e),c.a.createElement(o.a,null,c.a.createElement(a.a,{title:"About Me"}),c.a.createElement("h1",null,"Hi from the Projects page"),e.map((function(e){return c.a.createElement(s,{key:e.id,project:e})})))}},Qy0I:function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"myProjects":{"nodes":[{"myProjects":{"customExcerpt":"<p>text custom excerpt</p>\\n","description":"<p>test project description.</p>\\n"},"slug":"test-project","title":"Test Project"}]}}}}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-b767d54e05305e7e2f59.js.map