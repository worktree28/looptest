document.addEventListener('DOMContentLoaded',function () {
	console.log('Loaded');
	txt = "#keeploopin";
	loop_txt = document.querySelector("#typewrite");
	
	function dp(){
		
		if(i < txt.length){
			loop_txt.innerHTML = loop_txt.innerHTML + txt.charAt(i);

			i++;
			setTimeout(dp,200);
		}
	}
	i = 0;
	dp();
	setInterval(function(){
		i = 0;
		loop_txt.innerHTML = "";
		dp();
	},4000);
	
	console.log('yes');
	document.querySelector('#dropper').onclick = function(){
		console.log("OK");
		if(document.querySelector('#dropdown').style.display == 'block')
			document.querySelector('#dropdown').style.display = 'none';
		else{
			console.log("Hello");
			document.querySelector('#dropdown').style.display = 'block';
		}
	}
	document.querySelectorAll('.flex-item').forEach(function(x){
		x.onmouseover = function(){
			x.querySelector('.info').style.display = 'none';
			x.querySelector('.team-mem').style.display  = "block";			
		}
		x.onmouseout = function(){
			x.querySelector('.info').style.display = 'inline-block';
			x.querySelector('.team-mem').style.display  = "none";
		}
	});
});