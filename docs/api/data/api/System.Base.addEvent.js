﻿jsonp({"fullName":'System.Base.addEvent',"source":'base.js',"sourceFile":'data/source/base.js.html#JPlus-Base-addEvent',"summary":'<p>\u4e3a\u5f53\u524d\u7c7b\u6ce8\u518c\u4e00\u4e2a\u4e8b\u4ef6\u3002</p>\n',"params":[{"type":'String',"name":'eventName',"summary":'<p>\u4e8b\u4ef6\u540d\u3002\u5982\u679c\u591a\u4e2a\u4e8b\u4ef6\u4f7f\u7528\u7a7a\u683c\u9694\u5f00\u3002</p>\n'},{"type":'Object',"name":'properties',"defaultValue":'{}',"summary":'<p>\u4e8b\u4ef6\u4fe1\u606f\u3002 \u5177\u4f53\u89c1\u5907\u6ce8\u3002</p>\n'}],"returns":{"type":'',"summary":'<p>this</p>\n'},"remark":'<p>\u4e8b\u4ef6\u4fe1\u606f\u662f\u4e00\u4e2aJSON\u5bf9\u8c61\uff0c\u5b83\u8868\u660e\u4e86\u4e00\u4e2a\u4e8b\u4ef6\u5728\u7ed1\u5b9a\u3001\u5220\u9664\u548c\u89e6\u53d1\u540e\u7684\u4e00\u4e9b\u64cd\u4f5c\u3002</p>\n\n<p>\u4e8b\u4ef6\u4fe1\u606f\u7684\u539f\u578b\u5982:</p>\n\n<pre>\n({\n\n// \u5f53\u7528\u6237\u6267\u884c target.on(type, fn) \u65f6\u6267\u884c\u4e0b\u5217\u51fd\u6570:\nadd: function(target, type, fn){\n// \u5176\u4e2d target \u662f\u76ee\u6807\u5bf9\u8c61\uff0ctype\u662f\u4e8b\u4ef6\u540d\uff0c fn\u662f\u6267\u884c\u7684\u51fd\u6570\u3002\n},\n\n// \u5f53\u7528\u6237\u6267\u884c target.un(type, fn) \u65f6\u6267\u884c\u4e0b\u5217\u51fd\u6570:\nremove: function(target, type, fn){\n// \u5176\u4e2d target \u662f\u76ee\u6807\u5bf9\u8c61\uff0ctype\u662f\u4e8b\u4ef6\u540d\uff0c fn\u662f\u6267\u884c\u7684\u51fd\u6570\u3002\n},\n\n// \u5f53\u7528\u6237\u6267\u884c target.trigger(e) \u65f6\u6267\u884c\u4e0b\u5217\u51fd\u6570:\ntrigger: function(target, type, fn, e){\n// \u5176\u4e2d target \u662f\u76ee\u6807\u5bf9\u8c61\uff0ctype\u662f\u4e8b\u4ef6\u540d\uff0c fn\u662f\u6267\u884c\u7684\u51fd\u6570\u3002e \u662f\u53c2\u6570\u3002\n},\n\n// \u5f53 fn \u88ab\u6267\u884c\u65f6\u9996\u5148\u6267\u884c\u4e0b\u5217\u51fd\u6570:\ninitEvent: function(e){\n// \u5176\u4e2d e \u662f\u53c2\u6570\u3002\n}\n\n});\n</pre>\n\n<p>\u5f53\u7528\u6237\u4f7f\u7528 obj.on(\'\u4e8b\u4ef6\u540d\', \u51fd\u6570) \u65f6\uff0c \u7cfb\u7edf\u4f1a\u5224\u65ad\u8fd9\u4e2a\u4e8b\u4ef6\u662f\u5426\u5df2\u7ecf\u7ed1\u5b9a\u8fc7\uff0c \u5982\u679c\u4e4b\u524d\u672a\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u5219\u4f1a\u521b\u5efa\u65b0\u7684\u51fd\u6570\nevtTrigger\uff0c evtTrigger \u51fd\u6570\u5c06\u904d\u5386\u5e76\u6267\u884c evtTrigger.handlers \u91cc\u7684\u6210\u5458,\n\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u540e\u8fd4\u56de false\uff0c \u5219\u4e2d\u6b62\u6267\u884c\uff0c\u5e76\u8fd4\u56de false\uff0c \u5426\u5219\u8fd4\u56de true\u3002\nevtTrigger.handlers \u8868\u793a \u5f53\u524d\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u6240\u6709\u5b9e\u9645\u8c03\u7528\u7684\u51fd\u6570\u7684\u6570\u7ec4\u3002\n\u7136\u540e\u7cfb\u7edf\u4f1a\u8c03\u7528 add(obj, \'\u4e8b\u4ef6\u540d\', evtTrigger) \u7136\u540e\u628a evtTrigger \u4fdd\u5b58\u5728 obj.dataField().$event[\'\u4e8b\u4ef6\u540d\'] \u4e2d\u3002\n\u5982\u679c \u4e4b\u524d\u5df2\u7ecf\u7ed1\u5b9a\u4e86\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u5219 evtTrigger \u5df2\u5b58\u5728\uff0c\u65e0\u9700\u521b\u5efa\u3002 \u8fd9\u65f6\u7cfb\u7edf\u53ea\u9700\u628a \u51fd\u6570 \u653e\u5230 evtTrigger.handlers \u5373\u53ef\u3002</p>\n\n<p>\u771f\u6b63\u7684\u4e8b\u4ef6\u89e6\u53d1\u51fd\u6570\u662f evtTrigger\uff0c evtTrigger\u4f1a\u6267\u884c initEvent \u548c\u7528\u6237\u5b9a\u4e49\u7684\u4e00\u4e2a\u4e8b\u4ef6\u5168\u90e8\u51fd\u6570\u3002</p>\n\n<p>\u5f53\u7528\u6237\u4f7f\u7528 obj.un(\'\u4e8b\u4ef6\u540d\', \u51fd\u6570) \u65f6\uff0c \u7cfb\u7edf\u4f1a\u627e\u5230\u76f8\u5e94 evtTrigger\uff0c \u5e76\u4ece\nevtTrigger.handlers \u5220\u9664 \u51fd\u6570\u3002 \u5982\u679c evtTrigger.handlers \u662f\u7a7a\u6570\u7ec4\uff0c \u5219\u4f7f\u7528\nremove(obj, \'\u4e8b\u4ef6\u540d\', evtTrigger) \u79fb\u9664\u4e8b\u4ef6\u3002</p>\n\n<p>\u5f53\u7528\u6237\u4f7f\u7528 obj.trigger(\u53c2\u6570) \u65f6\uff0c \u7cfb\u7edf\u4f1a\u627e\u5230\u76f8\u5e94 evtTrigger\uff0c \u5982\u679c\u4e8b\u4ef6\u6709trigger\uff0c \u5219\u4f7f\u7528\ntrigger(obj, \'\u4e8b\u4ef6\u540d\', evtTrigger, \u53c2\u6570) \u89e6\u53d1\u4e8b\u4ef6\u3002 \u5982\u679c\u6ca1\u6709\uff0c \u5219\u76f4\u63a5\u8c03\u7528\nevtTrigger(\u53c2\u6570)\u3002</p>\n\n<p>\u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u5404\u51fd\u6570\u7684\u5177\u4f53\u5185\u5bb9\u3002</p>\n\n<p>add \u8868\u793a \u4e8b\u4ef6\u88ab\u7ed1\u5b9a\u65f6\u7684\u64cd\u4f5c\u3002 \u539f\u578b\u4e3a:</p>\n\n<pre>\nfunction add(elem, type, fn) {\n// \u5bf9\u4e8e\u6807\u51c6\u7684 DOM \u4e8b\u4ef6\uff0c \u5b83\u4f1a\u8c03\u7528 elem.addEventListener(type, fn, false);\n}\n</pre>\n\n<p>elem\u8868\u793a\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5bf9\u8c61\uff0c\u5373\u7c7b\u5b9e\u4f8b\u3002 type \u662f\u4e8b\u4ef6\u7c7b\u578b\uff0c \u5b83\u5c31\u662f\u4e8b\u4ef6\u540d\uff0c\u56e0\u4e3a\u591a\u4e2a\u4e8b\u4ef6\u7684 add \u51fd\u6570\u80af\u80fd\u4e00\u6837\u7684\uff0c\n\u56e0\u6b64 type \u662f\u533a\u5206\u4e8b\u4ef6\u7c7b\u578b\u7684\u5173\u952e\u3002fn \u5219\u662f\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u51fd\u6570\u3002</p>\n\n<p>remove \u7c7b\u4f3c add\u3002</p>\n\n<p>$default \u662f\u7279\u6b8a\u7684\u4e8b\u4ef6\u540d\uff0c\u5b83\u7684\u5404\u4e2a\u4fe1\u606f\u5c06\u4f1a\u8986\u76d6\u540c\u7c7b\u4e2d\u5176\u5b83\u4e8b\u4ef6\u672a\u5b9a\u4e49\u7684\u4fe1\u606f\u3002</p>\n',"example":'<p>\u4e0b\u9762\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u7ed9\u4e00\u4e2a\u7c7b\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u5e76\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u7ed1\u5b9a\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u3002 </p>\n\n<pre>\n// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\u3002\nvar MyCls = new Class();\n\nMyCls.addEvent(\'click\', {\n\nadd:  function (elem, type, fn) {\nalert(\"\u4e3a  elem \u7ed1\u5b9a \u4e8b\u4ef6 \" + type );\n}\n\n});\n\nvar m = new MyCls;\nm.on(\'myEvt\', function () {  //  \u8f93\u51fa \u4e3a  elem \u7ed1\u5b9a \u4e8b\u4ef6  myEvt\nalert(\' \u4e8b\u4ef6 \u89e6\u53d1 \');\n});\n\nm.trigger(\'myEvt\', 2);\n\n</pre>\n',"name":'addEvent',"memberOf":'System.Base',"memberType":'method'});