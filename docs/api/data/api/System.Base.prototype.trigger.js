﻿jsonp({"fullName":'System.Base.prototype.trigger',"source":'base.js',"sourceFile":'data/source/base.js.html#JPlus-Base-prototype-trigger',"summary":'<p>\u624b\u52a8\u89e6\u53d1\u4e00\u4e2a\u76d1\u542c\u5668\u3002</p>\n',"params":[{"type":'String',"name":'type',"summary":'<p>\u76d1\u542c\u540d\u5b57\u3002</p>\n'},{"type":'Object',"name":'e',"defaultValue":'',"summary":'<p>\u4f20\u9012\u7ed9\u76d1\u542c\u5668\u7684\u4e8b\u4ef6\u5bf9\u8c61\u3002</p>\n'}],"returns":{"type":'',"summary":'<p>this</p>\n'},"example":'<pre>\n\n// \u521b\u5efa\u4e00\u4e2a\u7c7b A\nvar A = new Class({\n\n});\n\n// \u521b\u5efa\u4e00\u4e2a\u53d8\u91cf\u3002\nvar a = new A();\n\n// \u7ed1\u5b9a\u4e00\u4e2a click \u4e8b\u4ef6\u3002\na.on(\'click\', function (e) {\nreturn true;\n});\n\n// \u624b\u52a8\u89e6\u53d1 click\uff0c \u5373\u6267\u884c  on(\'click\') \u8fc7\u7684\u51fd\u6570\u3002\na.trigger(\'click\');\n</pre>\n',"name":'trigger',"memberOf":'System.Base',"memberType":'method'});