(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[a("a",{attrs:{href:"https://github.com/alexazhou/VeryNginx/blob/master/readme_zh.md#%E7%BC%96%E8%BE%91-nginx-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("指明了\n配置文件的位置，将 "),a("code",[t._v("/opt/verynginx/openresty/nginx/conf/nginx.conf")]),t._v(" 中被注释的 "),a("code",[t._v("gzip")]),t._v(" 打开即可：")]),t._m(6),t._m(7),a("p",[t._v("安装依赖：")]),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("以 node 8x 为例")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("以下是使用操作：")]),t._m(19),a("p",[t._v("为了方便，建立一个链接：")]),t._m(20),t._m(21),t._m(22),a("p",[t._v("MySQL 5.7")]),t._m(23),t._m(24),a("p",[t._v("以 x86_64 release 版本为例：")]),t._m(25),t._m(26),t._m(27),t._m(28),a("p",[t._v("如需卸载，直接删除这两个文件：")]),t._m(29),a("p",[t._v("安装获取："),a("a",{attrs:{href:"https://johnvansickle.com/ffmpeg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FFmpeg Static Builds"),a("OutboundLink")],1)]),a("p",[t._v("官方指南："),a("a",{attrs:{href:"https://www.johnvansickle.com/ffmpeg/faq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FFrequently Asked Questions"),a("OutboundLink")],1)]),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),a("p",[t._v("更多 Prettier 选项参考："),a("a",{attrs:{href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Options · Prettier"),a("OutboundLink")],1)]),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"速食记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速食记","aria-hidden":"true"}},[this._v("#")]),this._v(" 速食记")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("将零散的代码、知识放置于此，便于在日常使用中查找")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-cli3-项目中添加-pug-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-项目中添加-pug-支持","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli3 项目中添加 pug 支持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在项目中安装 "),s("code",[this._v("pug")]),this._v("、"),s("code",[this._v("pug-plain-loader")]),this._v(" 依赖即可")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add pug pug-plain-loader -D\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"verynginx-开启-gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verynginx-开启-gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" VeryNginx 开启 Gzip")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("gzip")]),t._v("  on"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("#this line shoud be include in every http block")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("opt"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("verynginx"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("verynginx"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx_conf"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("in_http_block"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("#this line shoud be include in every server block")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("opt"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("verynginx"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("verynginx"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx_conf"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("in_server_block"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("root")]),t._v("   html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-cli3-项目配置-stylus-nib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-项目配置-stylus-nib","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli3 项目配置 stylus nib")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add nib\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("vue.config.js")]),this._v(" 文件中加入相关 Loader 配置：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    css"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loaderOptions"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// see doc here http://stylus.github.io/nib/")]),t._v("\n            stylus"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'nib'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'~nib/lib/nib/index.styl'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"centos-7-的-nodejs-环境布置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-的-nodejs-环境布置","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS 7 的 NodeJS 环境布置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 卸载旧的")]),t._v("\nyum erase nodejs node -y\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 设置 nodesource 源")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://rpm.nodesource.com/setup_8.x "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 安装新的")]),t._v("\nyum "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" nodejs -y\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 设置淘宝 npm 源")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nodejs-安装常用的-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-安装常用的-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeJS 安装常用的 cli")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# vue-cli3 脚手架，new")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# react 脚手架")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# angular 脚手架，new")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g yarn @vue/cli create-react-app @angular/cli \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"centos-7-安装-verynginx-的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-安装-verynginx-的坑","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS 7 安装 VeryNginx 的坑")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果安装时报 "),s("code",[this._v("not fount")]),this._v("，肯定是少了依赖，那就把这几个装上：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yum install gcc pcre pcre-devel openssl openssl-devel -y\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("还需要一个名为 "),s("code",[this._v("nginx")]),this._v(" 的用户，可以创建，也可以改 "),s("code",[this._v("/opt/verynginx/openresty/nginx/conf/nginx.conf")]),this._v(" 里的 "),s("code",[this._v("user")]),this._v(" 名。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("#启动服务")]),this._v("\n/opt/verynginx/openresty/nginx/sbin/nginx\n\n"),s("span",{attrs:{class:"token comment"}},[this._v("#停止服务")]),this._v("\n/opt/verynginx/openresty/nginx/sbin/nginx -s stop\n\n"),s("span",{attrs:{class:"token comment"}},[this._v("#重启服务")]),this._v("\n/opt/verynginx/openresty/nginx/sbin/nginx -s reload\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("ln")]),this._v(" -s /opt/verynginx/openresty/nginx/sbin/nginx /usr/local/bin/nginx\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样就可以愉快地使用 "),s("code",[this._v("nginx")]),this._v(" 命令了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"docker-启动-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-启动-mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 启动 MySQL")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run \\ \n    --name mysql57 \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 容器别名")]),t._v("\n    -e MYSQL_ROOT_PASSWORD"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("scitc2018 \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# root 用户密码")]),t._v("\n    -e MYSQL_DATABASE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("scitc \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 默认创建的库")]),t._v("\n    -e MYSQL_USER"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("scitc \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 默认创建的用户")]),t._v("\n    -e MYSQL_PASSWORD"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("scitc2018 \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 默认创建的用户的密码")]),t._v("\n    --character-set-server"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 默认字符集")]),t._v("\n    --collation-server"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4_unicode_ci \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 默认字符集")]),t._v("\n    --lower_case_table_names \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 使用全小写表名，避免 linux 服务器上区分大小写")]),t._v("\n    --restart"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("always \\ "),a("span",{attrs:{class:"token comment"}},[t._v("# 跟随 Docker 自启动")]),t._v("\n    -p 3316:3306 \\  "),a("span",{attrs:{class:"token comment"}},[t._v("# 端口映射，本机端口:容器端口")]),t._v("\n    -d \\      "),a("span",{attrs:{class:"token comment"}},[t._v("# 后台运行")]),t._v("\n    mysql:5.7 "),a("span",{attrs:{class:"token comment"}},[t._v("# 官方 5.7")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"centos-7-安装最新版-ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-安装最新版-ffmpeg","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS 7 安装最新版 FFmpeg")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ffmpeg-install\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ffmpeg-install\n"),a("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-64bit-static.tar.xz\n"),a("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf ffmpeg-release-64bit-static.tar.xz "),a("span",{attrs:{class:"token comment"}},[t._v("# 解压")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此时 "),s("code",[this._v("ffmpeg-install")]),this._v(" 文件夹下出现最新版本解压后的文件夹，文件夹名字带版本号，以实际情况为准，"),s("strong",[this._v("切换至解压出的文件夹下")]),this._v("，执行命令：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("cp")]),this._v(" ffmpeg ffprobe /usr/local/bin/\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可执行文件有两个，使用以上命令复制到 "),s("code",[this._v("bin")]),this._v(" 目录下，就能使用 "),s("code",[this._v("ffmpeg")]),this._v(" 命令。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("rm")]),this._v(" /usr/local/bin/ffmpeg /usr/local/bin/ffprobe\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"curl-快速测试-url-并查看返回头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl-快速测试-url-并查看返回头","aria-hidden":"true"}},[this._v("#")]),this._v(" curl 快速测试 url 并查看返回头")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I https://example.com   "),a("span",{attrs:{class:"token comment"}},[t._v("# 只获取请求/响应头")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Content-Encoding: gzip")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Accept-Ranges: bytes")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Cache-Control: max-age=604800")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Content-Type: text/html")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Date: Sat, 21 Jul 2018 15:52:41 GMT")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('# Etag: "1541025663"')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Expires: Sat, 28 Jul 2018 15:52:41 GMT")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Last-Modified: Fri, 09 Aug 2013 23:54:35 GMT")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Server: ECS (oxr/8313)")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# X-Cache: HIT")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Content-Length: 606")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-cli3-之-eslint-prettier-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-之-eslint-prettier-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli3 之 ESlint & Prettier 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将 "),s("strong",[this._v("package.json")]),this._v(" 的 "),s("code",[this._v("eslintConfig")]),this._v(" 配置成如下即可，其它配置文件同理：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eslintConfig"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"root"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"env"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"node"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"plugin:vue/essential"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"@vue/prettier"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"prettier/prettier"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"warn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token property"}},[t._v('"singleQuote"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token property"}},[t._v('"semi"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token property"}},[t._v('"trailingComma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"parserOptions"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"parser"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-eslint"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v('"warn"')]),this._v(" 使用警告作为提示")]),s("li",[s("code",[this._v('"singleQuote"')]),this._v(" 是否用单引号")]),s("li",[s("code",[this._v('"trailingComma"')]),this._v(" 是否用分号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"javascript-小技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-小技巧","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript 小技巧")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 取当前时间戳")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("// 1531369989992")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 浮点数去除小数位（！非四舍五入）")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("~")]),a("span",{attrs:{class:"token operator"}},[t._v("~")]),a("span",{attrs:{class:"token number"}},[t._v("132.456")]),t._v("           "),a("span",{attrs:{class:"token comment"}},[t._v("// 132")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx 常用命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nginx -s stop       "),a("span",{attrs:{class:"token comment"}},[t._v("# 停止")]),t._v("\nnginx -s reopen     "),a("span",{attrs:{class:"token comment"}},[t._v("# 重开")]),t._v("\nnginx -s reload     "),a("span",{attrs:{class:"token comment"}},[t._v("# 重载配置")]),t._v("\nnginx -s quit       "),a("span",{attrs:{class:"token comment"}},[t._v("# 退出")]),t._v("\nnginx -t            "),a("span",{attrs:{class:"token comment"}},[t._v("# 检查配置文件格式")]),t._v("\nnginx -T            "),a("span",{attrs:{class:"token comment"}},[t._v("# 检查配置文件格式，确认正确再载入配置")]),t._v("\nnginx -c "),a("span",{attrs:{class:"token function"}},[t._v("file")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("# 指定载入配置文件")]),t._v("\nnginx -h            "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看帮助")]),t._v("\nnginx -v            "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看版本")]),t._v("\nnginx -V            "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看版本及配置")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-http-反向代理配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-http-反向代理配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx HTTP 反向代理配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vi /etc/nginx/nginx.conf")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# Example proxy for http://example.cnine.me to this server:80")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("          "),a("span",{attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("     example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cnine"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("              "),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cnine"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("        X"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("IP "),a("span",{attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("        Host "),a("span",{attrs:{class:"token variable"}},[t._v("$host")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("        X"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),a("span",{attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);