//瀑布流 模拟AJAX请求获取数据
$(function(){
	// 获取高度最小的ul列表
	function getMinUl(){
			var $minUl = $('.col').eq(0);
			for(var i=1; i<2; i++){
				if($minUl.height() > $('.col').eq(i).height()){
					$minUl = $('.col').eq(i);
				}
			}
			return $minUl;
		}

	var bLoad = true; //判断是否该加载新数据
	var isEnd = false; //判断是不是加载完数据库中的所有数据

	$(window).on('scroll', function(){
		if(bLoad){
			bLoad = false;
			$.getJSON('js/data.json', function(res){
				setTimeout(function(){
					if(!res.isEnd){
						for(var i=0; i<res.data.length; i++){
							var articleData = res.data[i];
							// 判断是否有标题
							if(articleData.article_title != ""){
										var html = '<li>'
													+'<div class="activity">'
														+'<a href=""><img src="'+articleData.article_img+'" alt=""></a>'
														+'<div class="info">'
															+'<span class="date info-detail"><strong>'+articleData.article_time+'</strong>'+articleData.article_date+'</span>'
															+'<span class="position info-detail"><i></i>'+articleData.article_position+'</span>'
														+'</div>'
													+'</div>'
													+'<div class="detail">'
														+'<p class="title">'+articleData.article_title+'</p>'
														+'<div class="person">'
															+'<a class="photo" href=""><img src="'+articleData.article_photo+'" alt=""></a>'
															+'<span class="name">'+articleData.article_author+'</span>'
														+'</div>'
													+'</div>'
												+'</li>';
									}else{
										var html = '<li>'
											+'<div class="activity">'
												+'<a href=""><img src="'+articleData.article_img+'" alt=""></a>'
												+'<div class="info">'
													+'<span class="date info-detail"><strong>'+articleData.article_time+'</strong>'+articleData.article_date+'</span>'
													+'<span class="position info-detail"><i></i>'+articleData.article_position+'</span>'
												+'</div>'
											+'</div>'
											+'<div class="detail">'
												+'<div class="person">'
													+'<a class="photo" href=""><img src="'+articleData.article_photo+'" alt=""></a>'
													+'<span class="name">'+articleData.article_author+'</span>'
												+'</div>'
											+'</div>'
										+'</li>';
									}
						var $minUl = getMinUl();
						$minUl.append(html);
					}
					}else{
						isEnd = true;
					}
				}, 500);
			});
			var $minUl = getMinUl();
			if($(window).height()+$(window).scrollTop() >= $minUl.offset().top+$minUl.height()){
				bLoad = true;
			}
		}
 	});	
});
