"use strict";(self.webpackChunkdokc_docs=self.webpackChunkdokc_docs||[]).push([[13],{8665:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3366),r=a(7294),l=a(6010),c=a(2773),s=a(9960),i="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",E=a(5999);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];function f(e){var t=e.sidebar,a=e.toc,s=e.children,i=(0,n.Z)(e,v),m=t&&t.items.length>0;return r.createElement(c.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},94:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(8665),l=a(3306),c=a(3725);function s(e){var t=e.tags,a=e.sidebar,s=(0,c.MA)();return n.createElement(r.Z,{title:s,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,s),n.createElement(l.Z,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),c="tag_hD8n",s="tagRegular_D6E_",i="tagWithCount_i0QQ";function m(e){var t,a=e.permalink,m=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&n.createElement("span",null,o))}},3306:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(7774),l=a(3725),c="tag_Shcx";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(r.Z,e))}))),n.createElement("hr",null))}function i(e){var t=e.tags,a=(0,l.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}}}]);