(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{260:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"处理响应-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理响应-header","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理响应 header")]),t._v(" "),a("h2",{attrs:{id:"需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 需求分析")]),t._v(" "),a("p",[t._v("我们通过 "),a("code",[t._v("XMLHttpRequest")]),t._v(" 对象的 "),a("code",[t._v("getAllResponseHeaders")]),t._v(" 方法获取到的值是如下一段字符串：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('date: Fri, 05 Apr 2019 12:40:49 GMT\netag: W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"\nconnection: keep-alive\nx-powered-by: Express\ncontent-length: 13\ncontent-type: application/json; charset=utf-8\n')])])]),a("p",[t._v("每一行都是以回车符和换行符 "),a("code",[t._v("\\r\\n")]),t._v(" 结束，它们是每个 "),a("code",[t._v("header")]),t._v(" 属性的分隔符。对于上面这串字符串，我们希望最终解析成一个对象结构：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Fri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),t._v(" Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" GMT'\n  etag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'W/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"')]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'keep-alive'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  'x-powered-by'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Express'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  'content-length'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("'\n  'content-type'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'application/json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset=utf-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"parseheaders-函数实现及应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseheaders-函数实现及应用","aria-hidden":"true"}},[t._v("#")]),t._v(" parseHeaders 函数实现及应用")]),t._v(" "),a("p",[t._v("根据需求分析，我们要实现一个 "),a("code",[t._v("parseHeaders")]),t._v(" 工具函数。")]),t._v(" "),a("p",[a("code",[t._v("helpers/headers.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parsed\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\r\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    parsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parsed\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后我们使用这个工具函数：")]),t._v(" "),a("p",[a("code",[t._v("xhr.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" responseHeaders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllResponseHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("接着我们再去看刚才的 demo，发现我们已经把响应的 "),a("code",[t._v("headers")]),t._v(" 字段从字符串解析成对象结构了。那么接下来，我们在解决之前遗留的第二个问题：对响应 "),a("code",[t._v("data")]),t._v(" 字段的处理。")])])},[],!1,null,null,null);s.default=e.exports}}]);