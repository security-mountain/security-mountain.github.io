"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{3488:function(e,t,a){var n=a(7294),r=a(1597),l=function(e){var t,a=e.description,l=(e.lang,e.title),c=e.children,i=(0,r.K2)("3000541721").site,o=a||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m?l+" | "+m:l),n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:o}),n.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"}),c)};l.defaultProps={description:""},t.Z=l},8678:function(e,t,a){var n=a(7294),r=a(1597);t.Z=function(e){var t=e.location,a=(e.title,e.children),l=e.isFullScreen,c="/"===t.pathname;return l?n.createElement("div",{className:"body-full-screen-wrapper","data-is-root-path":c},a):(c?n.createElement("header",{id:"navbar"},n.createElement(r.rU,{className:"logo",to:"/"},n.createElement("img",{src:"logo.png",alt:"logo",className:"logo1"})),n.createElement("nav",{id:"nav"},n.createElement("ul",{class:"nav__links"},n.createElement("li",null,n.createElement(r.rU,{to:"/",className:"cta"},"Home",n.createElement("i",{class:"fas fa-home"})))))):n.createElement("header",null),n.createElement("div",{className:t},n.createElement("div",{className:"global-wrapper","data-is-root-path":c},n.createElement("main",null,a))))}},4982:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var n=a(7294),r=a(1597),l=a(8678),c=a(3488),i=function(e){var t=e.data.markdownRemark;return n.createElement(c.Z,{title:t.frontmatter.title,description:t.frontmatter.description})};t.default=function(e){var t,a=e.data,c=(a.previous,a.next,a.site),i=a.markdownRemark,o=e.location,m=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Security Mountain";return n.createElement(l.Z,{location:o,title:m},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement(r.rU,{to:"/"},n.createElement("i",{class:"bi bi-arrow-left"})),n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},i.frontmatter.title)),n.createElement("section",{dangerouslySetInnerHTML:{__html:i.frontmatter.description},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("p",null,i.frontmatter.date),n.createElement("footer",null)),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c2c30afb351e30cc4bb5.js.map