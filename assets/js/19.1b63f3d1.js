(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{218:function(t,a,e){"use strict";e.r(a);var s=e(28),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public"}},[t._v("#")]),t._v(" public")]),t._v(" "),e("p",[t._v("public中所有API的请求都需要"),e("code",[t._v("language")]),t._v("参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Culture Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Locale Language Country/Region")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Locallanguage name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("en")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("English")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("English")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("zh-Hans")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Chinese (Simplified)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中文（简体）")])])])]),t._v(" "),e("p",[t._v("参考："),e("a",{attrs:{href:"https://www.cnblogs.com/binsys/articles/2278679.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/binsys/articles/2278679.html"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"列表查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列表查询"}},[t._v("#")]),t._v(" 列表查询")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("列表名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("notice")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("公告")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("node")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("menu")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点菜单")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("例：查询notice（公告）列表：\nGET notice-columns\nGET notice-list\nGET notice-pick\n")])])]),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("h3",{attrs:{id:"get-captcha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-captcha"}},[t._v("#")]),t._v(" GET captcha")]),t._v(" "),e("blockquote",[e("p",[t._v("获取一个验证码显示到前端")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("请求示例：language=en\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("请求参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必须")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("language")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否，默认en")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('成功返回：{\n    "Result":1,\n    "HashId":"...",    //验证码的id\n    "Picture":"..."    //一串base64，解码后是一张PNG\n}\n//后面也可能会有audio什么的。。。\n')])])]),e("h3",{attrs:{id:"get-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-default"}},[t._v("#")]),t._v(" GET default")]),t._v(" "),e("blockquote",[e("p",[t._v("获取默认配置")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("请求示例：language=en\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("请求参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必须")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("language")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否，默认en")])])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("成功返回："),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Languages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认语言    ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Timezone"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本站使用的时区")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据库总是以设定的时区存储")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//除非特别说明，API默认返回设定的时区    ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CNY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最终结算货币")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//https://en.wikipedia.org/wiki/ISO_4217")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Cycle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本站账单周期")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"get-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-resource"}},[t._v("#")]),t._v(" GET resource")]),t._v(" "),e("blockquote",[e("p",[t._v("获取资源（比如背景图什么的）")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("请求示例：language=en&name=background-public\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("请求参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必须")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("language")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否，默认en")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("资源名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])])])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("成功返回："),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Resource"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);