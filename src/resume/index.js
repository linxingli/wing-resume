import Markdown from 'markdown-to-jsx';
import React from 'react';
// import { render } from 'react-dom';
import './index.css';
// import lxl from './lxl.md'


let md = `
# 林兴立

>应聘岗位：前端工程师  
>工作年限：5年  
>出生年月：1993-07  
>专 业：电子信息工程

## 联系方式

>电话：13723779442              		          
>邮箱：1531780174@qq.com                      
>GitHub:  [https://github.com/linxingli](https://github.com/linxingli)

## 专业技能

- 熟练使用vue、element-ui、vant-ui、Ueditor、vue-dragable、Echarts、Zepto、Bootstrap等主流前端技术框架
- 掌握JavaScript原生基础，熟悉ES6-9新语法，对Vue、jQuery底层源码有深入了解
- 熟悉HTML5、CSS3新特性，熟悉flex布局、响应式媒体查询，能够开发适配多种终端的h5页面
- 熟练使用git、svn代码版本管理工具
- 了解Node.js，熟悉webpack、vue-cli配置工作，可高效完成前端工程化开发

## 综述

- 积累大型SaaS系统、物流管理系统、多个手机端h5项目及商城项目的开发经验，能竭尽所能对新需求提供合理的实现方案
- 对于新技术，永远保持好奇心，善于利用自己的个人时间做学习计划
- 对于项目源码，不制造任何有害代码，决不容忍有缺陷的代码累积

## 工作经历

- 跨越速运集团有限公司 （2018/12至今）
负责ERP系统KTS/HR/OA模块及呼叫中心工单插件前端开发
- 深圳市汇聚华企科技有限公司 （2017/3- 2018/12）
负责sass自定义办公管理系统前端开发

## 项目经验

| 项目名称 | **跨越速运ERP物流系统** |
| ------ | ------ |
| 项目描述 | 该项目是跨越速运集团内部物流erp管理系统，处理整个公司所有的线上业务，包括OA，HR，CRM,进销存，财务管理系统，物流管理系统，车辆管理系统，内控系统，工单系统等。整个项目投入人力800+，其中Java后台200余人，前端80余人，前端代码超两百万行，是一个巨型项目。 |
|项目职责  | 1、负责工单系统插件的开发，工单插件是独立于整个erp系统外运行的纯原生js脚本，整个项目下来对webpack前端工程化工具、函数封装、webSocket及控制Dom开销等js底层更加深刻理解。<br>2、负责工单模板配置开发，该模块是基于vue开发的工单系统核心组件，使用vue-dragable实现表单组件自由拼装成各种表单。<br>3、负责工单报表组件开发，该组件使用echarts插件实现数据可视化。<br>4、负责工单工作台重构工作，增加人性化交互及推送数据，兼容通用表单自由搭建的同时也能支持大型表单的定制化。<br>5、负责OA审批流、总裁热线、越心安、工单管理等多个h5项目的开发，其中2020年2月在家办公期间高效完成工单系统h5项目的立项到开发完毕。<br>6、负责部门前端管理，编写工单及OA工作流接入规范文档，封装h5公共组件，制定代码分支管理规范及新手快速入门规范。 |

| 项目名称 | **teamface自定义办公系统** |
| ------ | ------ |
| 项目描述 | 该项目是前端基于vue框架开发的大型sass办公管理系统，该系统集OA、CRM、HR系统一体化、数据一体化、流程一体化。 |
|项目职责  | 1、负责审批模块、闻中心及帮助中心模块开发，使用vuex进行数据管理，使用vue-dragable实现帮助文档的可拖拽三级菜单。二次封装项目的axios组件，统一控制loding，把http请求方法挂在vue的原型链上以便全局调用。<br>2、负责邮件模块开发，该模块下的组件使用子路由实现跳转，为支持vue开发及邮件模块需求封装ueditor插件，全面兼容第三方邮件的富文本展示，使用htmlTocanvas实现用户自定义生成名片签名。<br> 3、负责备忘录开发，为保证与ios/android端数据通用，备忘录的富文本编辑器支持待办标记、排序、插入图片、插入地图、关联自定义数据、设置提醒时间及共享人员功能。<br> 4、考勤规则设置，排班表支持按天排班及固定班次循环排班，可实时统计部门所有人员排班情况，表格分页处理提高渲染速度。 <br> 5、App的数据分析功能，由webview+h5实现，前端使用vue-echarts、vue-scroller插件实现，支持图表懒加载、横屏、数据可视化功能。|
  
  
## 获奖荣誉

- 在校期间获得一次**国家奖学金**，三次**二等奖学金**
- 毕业期间荣获学校**优秀毕业生称号**，毕业设计被评定为**优秀毕业作品**（基于c语言开发的智能家居及APP设计）

`
// class Resume extends Component {
//     render () {
//         return (
//             <Markdown children={md}></Markdown>
//         )
//     }
// }

function Resume () {
    return (
        <Markdown children={md}></Markdown>
    )
}

export default Resume