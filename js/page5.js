//page5
		 	var movecircle=document.getElementsByClassName('circle');
		 	var circle_a=0;
		 	var circle_d=0;
		 	var circle_e=0;
		 	var circle_f=0;
		 	var timer=null;
		 	timer=setInterval(function(){
		 		circle_a++;
		 		circle_d++;
		 		circle_e++;
		 		circle_f++;
		 		if (circle_a >= 324) {
		 		clearInterval(timer)	
		 		} 
		 		if (circle_d >= 324) {
		 		clearInterval(timer)	
		 		} 
		 		if (circle_e >= 306) {
		 		clearInterval(timer)	
		 		} 
		 		if (circle_f >= 313) {
		 		clearInterval(timer)	
		 		} 
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_a-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_a-90)*Math.PI/180)*45+35+'px'
		 		movecircle[0].appendChild(span)
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_d-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_d-90)*Math.PI/180)*45+35+'px'
		 		movecircle[1].appendChild(span)	
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_e-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_e-90)*Math.PI/180)*45+35+'px'
		 		movecircle[2].appendChild(span)	
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_f-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_f-90)*Math.PI/180)*45+35+'px'
		 		movecircle[3].appendChild(span)	;
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_e-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_e-90)*Math.PI/180)*45+35+'px'
		 		movecircle[4].appendChild(span)	
		 	var span=document.createElement('span');
		 		span.style.left=Math.cos((circle_f-90)*Math.PI/180)*45+35+'px'
		 		span.style.top=Math.sin((circle_f-90)*Math.PI/180)*45+35+'px'
		 		movecircle[5].appendChild(span)	
		 	},1)