
// 打字效果
(function(){
	var arr = new Array();
    arr[0] = "孙鹏博";
    arr[1] = "web前端工程师(实习生)";
    var i = 0;
    var k = 0;
    function show(){
          setInterval(function(){
          document.getElementById("introduce").getElementsByTagName("h1")[0].innerHTML = arr[0].substring(0,i+1);
          if(i == arr[0].length){
            var timerOne = setInterval(function(){
              document.getElementById("introduce").getElementsByTagName("h3")[0].innerHTML = arr[1].substring(0,k+1);
              k++;
            },200);
          }
          i++;
      },200);
    }
    show();
})();

// 瀑布流方式展示小作品
// $(window).on('scroll', function(){
// 			if($(window).height()+$(window).scrollTop() >= iHeadSectionTop+iHeadSectionHeight && !isEnd){
// 				if(bLoad){
// 					bLoad = false;
// 					$.get('js/data.json'+page, function(res){
// 						if(!res.isEnd){
// 							for(var i=0; i<res.data.length; i++){
// 								var blog = res.data[i];
// 								var html = '<li>'
// 										+ '<a href="welcome/detail?blog_id='+blog.blog_id+'"><img src="imgs/blog-post.jpg" title="blog_img" /></a>'
// 										+ '<h3><a href="welcome/single">'+blog.blog_title+'</a></h3>'
// 										+ '<span>'+blog.admin_name+' | <a href="#">13 comments</a></span>'
// 										+ '<p>'+blog.content+'</p>'
// 										+ '<a class="see-more" href="welcome/single">See More</a>'
// 										+ '</li>';
// 								var $minUl = getMinUl();
// 								$minUl.append(html);
// 							}
// 							bLoaded = true;
// 							page += 6;
// 						}else{
// 							isEnd = true;
// 						}
// 					}, 'json');
// 				}

// 				var $minUl = getMinUl();
// 				if($(window).height()+$(window).scrollTop() >= $minUl.offset().top+$minUl.height() && bLoaded){
// 					bLoad = true;
// 					bLoaded = false;
// 				}
// 			}
// 		});

//回到顶部
(function(){
    var topWechat = document.getElementById('top-wechat');
    var goTop = topWechat.getElementsByClassName('top')[0];
    goTop.onclick = function(){
        window.scrollTo(0,0);
    }
})()
