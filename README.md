# 项目预览
一个练习项目

|图片|图片|
|---|---|
|![首页](https://lizhenqiangcool.github.io/youngtrip/img/youngtrip1.png)| ![喜欢页](https://lizhenqiangcool.github.io/youngtrip/img/youngtrip4.png)|
|![内容页](https://lizhenqiangcool.github.io/youngtrip/img/youngtrip2.png)|  ![喜欢与点赞](https://lizhenqiangcool.github.io/youngtrip/img/youngtrip3.png)|

# 技术栈
1. 前端: Vue + Vuex + Vue-router + Vuetify + axios
2. 后端：Django + DRF + celery + mysql + redis + rabbitmq
3. 开发与部署：前端部署GithubPage(cloudflare CDN加速), 后端阿里云docker-compose单主机部署(nginx、gunicore)
4. 监控 cADVisor通过ＡPI提供实时信息
5. 编程环境: 深度deepin(基于debian)、vscode

## 开发todolist
- [x] ~~基本页面开发:首页、喜欢、个人、搜索~~
- [x] ~~用户相关登录、注册、找回密码~~
- [x] ~~发表游记卡片、喜欢、评论~~
- [x] ~~邮件验证，celery异步执行~~
- [x] ~~定时任务获取某接口图片，并保存服务器上做header背景图~~
- [x] ~~粉丝关注功能~~
- [x] ~~新建游记模式，多图片上传，再写内容生成多游记卡片~~
- [x] ~~游记卡片展示整合成一游记时间线展示~~
- [x] ~~分页~~
- [x] ~~可用短视频代替图片分享~~


# youngtrip

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
