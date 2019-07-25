var username2=document.getElementById('username2');
var password2=document.getElementById('password2');
var btnLogin=document.getElementById('btnLogin');
var user = document.getElementById('user');
var logout = document.getElementById('logout');
var userinfo = document.getElementById('userinfo');
function getCookie(key){
	var arr1 = document.cookie.split('; ');			
	for (var i=0; i<arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if (arr2[0]==key) {
			return decodeURI(arr2[1]);
		}
	}	
};
function updateUserStatus(){
	var uid=getCookie('uid');
	var username=getCookie('username');
	if(uid){
		user.style.display='block';
		userinfo.innerHTML=username;
		reg.style.display='none';
		login.style.display='none';
	}else{
		user.style.display='none';
		userinfo.innerHTML='';
		reg.style.display='block';
		login.style.display='block';
	}	
}
updateUserStatus();
//注册
var username1=document.getElementById('username1');
var password1=document.getElementById('password1');
var btnReg=document.getElementById('btnReg');
var verifyUserNameMsg=document.getElementById('verifyUserNameMsg');
username1.onblur=function(){		
ajax('post','guestbook/index.php','m=index&a=verifyUserName&username='+username1.value+'',function(data){
	verifyUserNameMsg.innerHTML=JSON.parse(data).message;
	if(JSON.parse(data).code){
		verifyUserNameMsg.style.color='red';
	}else{
		verifyUserNameMsg.style.color='green';
	}
});
}
var reg_button=document.getElementById("reg_button");
var reg_box=document.getElementById("reg_box");
reg_button.onclick=function(){	
		reg_box.style.display='block';
	var y=window.innerHeight-reg_box.offsetHeight;
	var x=window.innerWidth-reg_box.offsetWidth;
		reg_box.style.left=x/2+'px';
		reg_box.style.top=y/2+'px';
		window.onresize=function(){
			var y=window.innerHeight-reg_box.offsetHeight;
			var x=window.innerWidth-reg_box.offsetWidth;
			reg_box.style.left=x/2+'px';
			reg_box.style.top=y/2+'px';
		}
}	
btnReg.onclick=function(){	
	reg_box.style.display='none';
	ajax('post','guestbook/index.php','m=index&a=reg&username='+username1.value+'&password='+password1.value+'',function(data){
	username1.value='';
	password1.value='';
	verifyUserNameMsg.innerHTML='';
	alert(JSON.parse(data).message);
	});
}
//登录
updateUserStatus()
btnLogin.onclick=function(){
	log_box.style.display='none';
	ajax('post','guestbook/index.php','m=index&a=login&username='+username2.value+'&password='+password2.value+'',function(data){
	username2.value='';
	password2.value='';
	alert(JSON.parse(data).message);
	updateUserStatus();
	});
}
var log_button=document.getElementById("log_button");
var log_box=document.getElementById("log_box");
log_button.onclick=function(){	
		log_box.style.display='block';
	var y=window.innerHeight-log_box.offsetHeight;
	var x=window.innerWidth-log_box.offsetWidth;
		log_box.style.left=x/2+'px';
		log_box.style.top=y/2+'px';
		window.onresize=function(){
		var y=window.innerHeight-log_box.offsetHeight;
		var x=window.innerWidth-log_box.offsetWidth;
			log_box.style.left=x/2+'px';
			log_box.style.top=y/2+'px';
		}
}
logout.onclick = function(){	
	ajax('get', 'guestbook/index.php', 'm=index&a=logout', function(data){
		alert(JSON.parse(data).message);
		//用户退出
		if(!JSON.parse(data).code)
		{
			updateUserStatus()
		}
	});	
	return false;
};	
//留言
var content=document.getElementById('content');
var btnPost=document.getElementById('btnPost');
var sendBox=document.getElementById('sendBox');
var list=document.getElementById('list');
var showMore=document.getElementById('showMore');
btnPost.onclick=function(){
ajax('post','guestbook/index.php','m=index&a=send&content='+content.value+'',function(data){
	content.value='';
	alert(JSON.parse(data).message)
	if(!JSON.parse(data).code){
	createList(JSON.parse(data).data,true)	
}
});	
}
var iPage=1;
showMore.onclick=function(){
	iPage++;
	ajax('post','guestbook/index.php','m=index&a=getList&n=2&page='+iPage,function(data){
		for(var i=0;i<JSON.parse(data).data.list.length;i++){
		createList(JSON.parse(data).data.list[i],true)
		}	
});	
}
function createList(data,insert){
	var dl=document.createElement('dl')
	list.appendChild(dl)
	var img=document.createElement('img')
	img.src='img/face.gif';
	dl.appendChild(img)
	var dt=document.createElement('dt')
	dl.appendChild(dt)
	var strong=document.createElement('strong')
	dt.appendChild(strong)
	strong.innerHTML=data.username+'：';
	var span=document.createElement('span')
	span.innerHTML=data.content;
	dt.appendChild(span)
	var div=document.createElement('div')
	div.className='t'
	dl.appendChild(div)
	var a=document.createElement('a')
	a.href='javascript:;'
	a.id='support'
	a.innerHTML='踩(<span>'+data.support+'</span>)';
	div.appendChild(a);
	var a=document.createElement('a');
	a.href='javascript:;'
	a.id='oppose';
	a.innerHTML='顶(<span>'+data.oppose+'</span>)'
	div.appendChild(a)
	var span=document.createElement('span')
	var arr=new Array();
	arr[0]=t=Math.floor(data.dateline/1000/60/60/24);
	arr[1]=s=Math.floor(data.dateline/1000/60/60)-24*t;
	arr[2]=f=Math.floor(data.dateline/1000/60)-60*s-1440*t;
	arr[3]=m=Math.floor(data.dateline/1000)-60*f-3600*s-86400*t;
	str=arr.join('')
	span.style.color='red';
	span.style.fontSize='12px'
	span.innerHTML='<span>'+arr[0]+'年'+(arr[1]+12)+'点'+arr[2]+'分钟'+arr[3]+'秒'+'</span>'
	div.appendChild(span)
	if (insert && list.children[0]) {
		list.insertBefore(dl, list.children[0]);
	} else {
		list.appendChild(dl);
	}
}
//		var support=document.getElementById('support');
//			support.onclick=function(){
//			data.support+=1;	
//			}
//		var support=document.getElementById('oppose');
//			oppose.onclick=function(){
//			data.oppose+=1;	
//			}