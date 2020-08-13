(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(n,e,t){"use strict";t.r(e);var a=t(28),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"adapter推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adapter推送"}},[n._v("#")]),n._v(" adapter推送")]),n._v(" "),t("p",[n._v("下发安装指定版本指令：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "Element":"version",\n    "Semver":"1.2.*"\n}\n\n//这里使用语义化版本\n//https://semver.org/lang/zh-CN/\n')])])]),t("p",[n._v("如果web端启用了v2ray，则会收到v2ray的json：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('v2ray配置更新：{\n    "Element": "v2ray",\n    "Operation": "config",\n    "InboundConfig": {\n        "Port": 443,\n        "GrpcApiPort": 2333,\n        "Tag":"xxx",     //需要唯一性,如果缺失则使用默认tag\n        "Protocol": "vmess",    //"shadowsocks" (这里的ss拿来做ss+ws的提示，user信息还是按照ss信息给我就好)\n        "StreamSettings": {\n            "Network": "tcp", // "ws","kcp"\n            "KcpSettings": {\n                "Header": {\n                    "Type": "none"\n                }\n            },\n            "WsSettings": {\n                "Path": "/",\n                "Headers": {\n                    "Host": "v2ray.com"\n                }\n            },\n            "TlsSettings": {\n                "ServerName": "server.com"\n            }\n        }\n\n    }\n}\n\nv2ray用户变更：{\n   "Element":"v2ray",\n    "Operation":"user",\n    "Removes":[\n        {"Email":"uuu@vv.com"}    //删除时只有email字段\n    ],\n    "Updates":[    //新增、更新\n        {\n            "Email":"ccc@dd.com",\n            "Uuid":"xxxxxxxxx",\n            "Speed": 40,\n            "Language":1,\n            //用户的语言，用于显示审计规则等文字\n            "State":1/2/3/4,\n            //1：正常 2：过期 3：[余额/流量]耗尽 4：被禁止使用\n            //如果State不为1，用户访问任何页面都只会显示提示文字            \n            "AlterId": 2 //默认2 \n        }\n    ]\n}\n//先处理remove再处理update\n')])])]),t("p",[n._v("审计规则json：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('规则变更：{\n    "Element":"censorship",\n    "Removes":[\n        {"HashId":"..."}    //id不是数字，而是字符串（hash id）\n    ],\n    "Update":[\n        {\n            "HashId":"...",\n            "Rule":".*"\n        }\n    ]\n}\n\n//推荐使用DFA(确定有限状态机)实现，而不是遍历审计规则查看是否符合审计\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);