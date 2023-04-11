# 后台管理系统项目是什么
前端开发领域当中，后台管理系统项目不是java、php等后台语言开发的项目。

电商平台项目（前台项目）主要针对的是用户、游客，可以让用户在平台当中进行浏览、购买产品等操作。但是用户购买产品时信息从何而来？来源于卖家数据库。  
前台项目当中的数据来源于卖家（公司），但是卖家不会数据库操作。对于卖家而言，需要把产品的信息上传于服务器，写入数据库。卖家并非程序员，不会数据库操作（增删改查），因此卖家找程序员开发一个产品，可以让卖家可视化操作数据库（增删改查），这个产品就是后台管理项目。

卖家（公司）不同角色看到、操作的内容是不同的。对于老板来说：开发这个项目，什么都可以操作（产品的上架和下架、查看员工的个人业绩、其他等等）。对于员工来说：可能只有查看个人业绩。

综上所述，后台管理系统项目可以让用户通过一个可视化工具，实现对数据库进行增删改查的操作。一般不需要注册。


# 模板介绍
简洁版: <https://github.com/PanJiaChen/vue-admin-template>  
加强版: <https://github.com/PanJiaChen/vue-element-admin>  

本项目使用简洁版。  


# 文件夹介绍
build  
- index.js：放置webpack配置文件。很少修改这个文件。

mock：放置mock数据的文件夹。可以模拟一些假的数据，通过mockjs实现。因为实际开发的时候，利用的是真的接口（数据），因此可以不关注这个文件夹。

node_modules：放置所有安装到项目的包。require()导入第三方包时，就是从这个目录中查找并加载包。  

public：放置ico图标+静态页面。public文件夹里面经常放置一些静态资源，(MARK：)在项目打包的时候webpack不会编译这个文件夹，原封不动的打包到dist文件夹里面。

src：放置程序员源代码。  
- api文件夹：放置与请求相关的文件。  
- assets文件夹：放置一些静态资源（一般共享的），(MARK：)放在assets文件夹里面的静态资源在webpack打包的时候会进行编译。  
- components文件夹：放置非路由组件或者全局组件。  
- icons：放置一些svg矢量图。  
- layout文件夹：放置一些组件与混入。  
- router文件夹：放置与路由相关的文件。  
- store文件夹：放置与vuex相关的文件。  
- style文件夹：放置与样式相关的文件。  
- utils文件夹：放置一些实用性工具。  
    - request.js：（MARK：）放置axios二次封装文件。  
- views文件夹：放置路由组件。  
- App.vue：放置根组件。
- main.js：放置入口文件。
- permission.js：放置导航守卫相关的文件。
- settings.js：放置项目配置项文件。

tests：放置测试文件。

.editorconfig：放置编辑器配置文件。

.env.development：放置webpack开发环境配置文件。

.env.production：放置webpack上线环境配置文件。 

.env.staging：放置webpack测试环境配置文件。

.eslintignore：放置eslint忽略文件。

.eslintrc.js：放置eslint配置文件。

.gitignore：放置git忽略文件。

babel.config.js：放置babel配置文件。

jest.config.js：放置jest测试框架配置文件。

jsconfig.json：放置src别名文件。

LICENSE：放置版权声明文件。  

package-lock.json：记录node_modules目录下每一个包的下载信息，eg包的名字、版本号、下载地址等。  

package.json/包管理配置文件：记录与项目有关的配置信息，eg项目的名称、版本号、描述等；项目中都用到了哪些包；哪些包只会在开发期间使用；哪些包在开发和部署都需要用到。  

postcss.config.js：放置CSS相关文件。

vue.config.js：可以当作webpack.config.js。


# 登录业务
1.完成静态组件。  
2.
