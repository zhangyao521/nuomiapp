var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>

//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\项目"));
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\项目\\js"));
});
gulp.task("copy-css",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\项目\\css"));
});
gulp.task("copy-img",function(){
	gulp.src("img/*.{jpg,png,tmp,gif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\项目\\img"));
});
//监听
gulp.task("watchall",function(){
	//监视index.html文件是否有变化，如果有变化，就执行任务：copy-index
	gulp.watch("*.html",["copy-html"]);
	gulp.watch('img/*.{jpg,png,tmp,gif}',["copy-images"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.css",["copy-css"]);
	
});
