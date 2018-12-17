			
			
			
			

			$(window).scroll(function(){
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop >= 561){
					$("#nav_1").css({
						"position":"fixed",
						"top":"-20px",
						"z-index":"5",
						"background":"white",
						"left":"185px",
					});
					$("#u1").css({
						"display":"none"
					});
					$("#u2").css({
						"display":"none"
					});
					$("#u3").css({
						"display":"none"
					})
					$("#fen").css({
						"position":"ablative",
						"top":"791px",
						"left":"329px"
					});
					$("#fen1").css({
						"position":"ablative",
						"top":"791px",
						"left":"534px"
					});
					$("#fen2").css({
						"position":"ablative",
						"top":"791px",
						"left":"741px"
					});
					$("#fen3").css({
						"position":"ablative",
						"top":"791px",
						"left":"947px"
					});
					$("#fen4").css({
						"position":"ablative",
						"top":"791px",
						"left":"1153px"
					});
					$("#fen5").css({
						"position":"ablative",
						"top":"791px",
						"left":"1359px"
					});
				}else if(scrollTop <= 561){
					$("#nav_1").css({
						"width":"1210px",
						"margin": "auto",
						"height":"89px",
						"margin-top":"20px",
						"position": "relative",
						"left":"0"
					});
					$("#u1").css({
						"display":"block"
					});
					$("#u2").css({
						"display":"block"
					});
					$("#u3").css({
						"display":"block"
					});
					$("#fen").css({
						"position":"ablative",
						"top":"901px"
					//	"left":"150px"
					});
					$("#fen1").css({
						"position":"ablative",
						"top":"901px",
						"left":"456px"
					});
					$("#fen2").css({
						"position":"ablative",
						"top":"901px",
						"left":"741px"
					});
					$("#fen3").css({
						"position":"ablative",
						"top":"901px",
						"left":"946px"
					});
					$("#fen4").css({
						"position":"ablative",
						"top":"901px",
						"left":"1153px"
					});
					$("#fen5").css({
						"position":"ablative",
						"top":"901px",
						"left":"1359px"
					});
				}
			})
			