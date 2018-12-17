<?php
	header("Content-Type:text/html;charset=utf-8");
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("nuomi",$conn)){
		die("数据库选择失败".mysql_error());
	}
	$page = isset($_GET['page']) ? (int)trim($_GET['page']) : 1;
	$pageSize = isset($_GET['pageSize']) ? (int)trim($_GET['pageSize']) : 10;
	//3）、传输数据（过桥）
	$limit = ' limit '.($page-1)*$pageSize.','.$pageSize.';';
	$sqlstr = "select * from goodsInfo ".$limit;
	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
	if(!$result){
		die("获取数据失败".mysql_error());
	}
	$ret_array = ['page'=>$page,'pageSize'=>$pageSize];
	
	//查询行数
    $ret_array['count'] =mysql_num_rows($result);
    //echo "行数：".$query_num;
	$goodsList = [];
	while ($row = mysql_fetch_assoc($result)) {
		$goodsList[] = $row;
	}
	$ret_array['goodsList'] = $goodsList;
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo json_encode($ret_array);
?>
