<?php
	header("Content-type:text/html;charset=utf-8");
	//1 接收数据
	$user = $_POST['userId'];
	$pwd = $_POST['userPass'];
	//2 处理（连接数据库，保存数据）
	//1）建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2)选择数据库（目的地）
		mysql_select_db("nuomi",$con);
		//3)执行SQL数据（运输数据）
		$sqlstr="select * from userTable where userId='$user' and userPass='$pwd'";
		$result = mysql_query($sqlstr,$con);
		-mysql_close($con);
		
		$rows = mysql_num_rows($result);
		if($rows==0){
			echo "登录失败";
		}else{
			header("location:index.html");		
		}
	}
	
	
?>