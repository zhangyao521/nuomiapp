
 




//#20cd4f
function getColor(){
	var str="#";
	for(var i=0;i<6;i++){
		str+=(parseInt(Math.random()*16)).toString(16);
	}
	return str;
}


function suiJi(n){
			var str="qwertyuiopasdfghjklzxcvbnm0123456789";
			var g="";
			for(var i=0;i<n;i++){
				var index=Math.floor(Math.random()*(str.length-1));
				g+=str[index];
			}
			return g;
		}
