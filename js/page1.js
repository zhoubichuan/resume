//page1页
//选择按钮位置
var vist=document.getElementById("visted")
visted.style.top=(Number(viewHeight)-200)/2+'px'
//导航处的选项点击事件
nav_right_li[0].className='changbackgroundcolor';
for(var i=0;i<nav_right_li.length;i++){
	nav_right_li[i].index=i;
	nav_right_li[i].onclick=function(){
		addClassName(this.index)//封装函数一
	for(var i=0;i<nav_right_li.length;i++){
		nav_right_li[i].className='';
		visted_li[i].className='';
	}
	this.className='changbackgroundcolor';
	visted_li[this.index].className='active';
	//++
	if(oldindex<this.index){
			page[this.index].className='page showleft';
			page[oldindex].className='page hidesleft';
			//--
		}else if(oldindex>this.index){
			page[this.index].className='page showright';
			page[oldindex].className='page hidesright';
		}
		oldindex=this.index;//将当前的图片下标赋值给oldindex
	}
}
//快速切换选项的点击事件
for (var i=0;i<visted_li.length;i++) {
	visted_li[i].index=i;
	visted_li[i].onclick=function(){//下标点击事件
		addClassName(this.index)//封装函数一
		for (var i=0;i<visted_li.length;i++) {//点击后设置样式前清空颜色
			nav_right_li[i].className='';
			visted_li[i].className='';
		}
		nav_right_li[this.index].className='changbackgroundcolor';
		this.className='active';
		
		if(oldindex<this.index){//左往右运动
			page[this.index].className='page showleft';
			page[oldindex].className='page hidesleft';
		}else if(oldindex>this.index){//右到左
			page[this.index].className='page showright';
			page[oldindex].className='page hidesright';
		}
		oldindex=this.index;//将当前的图片下标赋值给oldindex
	}
}
var myexprice=document.getElementById("myexprice")
myexprice.onclick=function(){
	location.href='#page2'
}
