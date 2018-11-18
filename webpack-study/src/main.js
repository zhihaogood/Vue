// import导入的库的对象的变量名
// from可以写具体的路径也可以写包名如果写的是包名就会去/node_modules中查找
import $ from 'jquery'

//import除了可以导入Js模块也可以导入css模块
import './css/index.css'

//还可以导入less文件
import './css/test.less'

//还可以导入scss
import './css/demo.scss'

$(function(){
    $('ul>li:odd').css('backgroundColor','blue')
    $('ul>li:even').css('backgroundColor','cyan')
})