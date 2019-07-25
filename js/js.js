//页面布局
var main=document.getElementById("mian");
var nav =document.getElementById("nav");
var nav_right=document.getElementById("nav_right")
var nav_right_li=nav_right.getElementsByTagName('li');

var visted=document.getElementById("visted");
var	visted_li=visted.getElementsByTagName('li');

var length=document.getElementById('length');

var page=document.getElementsByClassName('page');

var page1=document.getElementById("page1");
var page1_header=document.getElementById("page1_header");	
var initTop=0;
var a=0;
var b=[];
var x=0

//获取可视区宽度
var viewWidth=window.innerWidth;
//获取可视区高度
var viewHeight=window.innerHeight;

//滚轮事件:事件1页面滚动、事件2快速选项卡移动、事件3导航处选项卡移动
document.addEventListener("mousewheel", mousewheelHandler, false);
document.addEventListener('DOMMouseScroll',mousewheelHandler,false);
var oldindex=0;
//document.addEventListener('touchmove',function(e){
//	if (e.targetTouches.length>1 ||e.scale&&e.scale!==1)return 
//	var touch=e.targetTouches[0];
//	endPos={ }
//	console.log(e)
//	move(e)
//});
function mousewheelHandler(e){
//事件1页面滚动
move(e)
	
} 
function move(e){
	var delta =(e.wheelDelta || -e.detail)>0?true:false;
	if(!delta){//向下滚动
		if(oldindex!=6){oldindex++;}
			page[oldindex].className='page showleft';
			page[oldindex-1].className='page hidesleft';
	}else{
		if(oldindex!=0){oldindex--;}
			page[oldindex].className='page showright';
			page[oldindex+1].className='page hidesright';
	}
	
//事件2快速选项卡移动
	for(var i=0;i<visted_li.length;i++){//将快速切换选项的颜色清空
		visted_li[i].className='';
		}
	
	visted_li[oldindex].className='active';
	
//事件3导航处选项卡移动
	for(var i=0;i<nav_right_li.length;i++){
		nav_right_li[i].className=''
	}
	nav_right_li[oldindex].className='changbackgroundcolor';
	addClassName(oldindex)//封装函数一
}
page1_header.className='apped local';				
			
	
			
//封装函数放到最后
//一、封装每个页面的过渡动画
function addClassName(data){
	var page1_header=document.getElementById("page1_header");
	page1_header.className='';
	
	var page2_header=document.getElementById("page2_header");
	page2_header.className='';
	
	var page3_header=document.getElementById("page3_header");
	page3_header.className='';
	var page3_li=page3.getElementsByTagName("li");
	for(var i=0;i<page3_li.length;i++){
		page3_li[i].className='';
	}
	
	var page4_header=document.getElementById("page4_header");
	page4_header.className='';
	
	var page5_header=document.getElementById("page5_header");
	page5_header.className='';
	
	var page6_header=document.getElementById("page6_header");
	page6_header.className='';
	
	var page7_header=document.getElementById("page7_header");
	page7_header.className='';
	switch(data){
		case 0:page1_header.className='apped local';
		break;
		case 1: page2_header.className='apped local';
		break;
		case 2:page3_header.className='apped local';
			for(var i=0;i<page3_li.length;i++){
				page3_li[i].className='apped local';
			}
		break;
		case 3:page4_header.className='apped local';
		break;
		case 4:page5_header.className='apped local';
		break;
		case 5:page6_header.className='apped local';
		break;
		case 6:page7_header.className='apped local';
		break;
	}
}
//小屏的汉堡包菜单，在点击完要收起来
		$('.navbar-collapse span').on('click',function(){
			$('.navbar-collapse').collapse('hide');
		});
		