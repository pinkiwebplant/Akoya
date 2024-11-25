$('.header .hdr_nav .menu-wrapper>ul>li.menuItem.has-submenu,.hdr_login_menu .hs-menu-wrapper>ul>li').hover(function(){
	$('.menu-overlay').toggleClass('menu-active');
})
$('.header .hdr_nav .menu-wrapper>ul>li.menuItem.has-submenu,.hdr_login_menu .hs-menu-wrapper>ul>li').hover(function(){
	$('html').toggleClass('menu-active');
})
$('.hdr_login_menu .hs-menu-wrapper>ul>li>ul>li>a').append('<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.99997C10 4.89377 9.94858 4.76094 9.84574 4.6813L5.47557 0.139473C5.2956 -0.0464909 5.01286 -0.0464909 4.83289 0.139473C4.65298 0.351936 4.65298 0.644099 4.83289 0.829996L8.40618 4.52191H0.462714C0.205679 4.52191 0 4.73437 0 4.99997C0 5.26563 0.205679 5.47809 0.462714 5.47809H8.40618L4.83289 9.19657C4.65298 9.38247 4.65298 9.67463 4.83289 9.86053C5.01286 10.0465 5.2956 10.0465 5.47557 9.86053L9.84574 5.34526C9.94858 5.26563 10 5.1328 10 4.99997Z" fill="#00819E"/></svg>');

$('.hdr_login_menu .hs-menu-wrapper>ul>li.hs-item-has-children>a').append('<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.862061 1.16358C0.64624 1.38169 0.64624 1.73533 0.862061 1.95342L3.80944 4.93216C4.02526 5.15027 4.37511 5.15027 4.59094 4.93216L7.53833 1.95342C7.75415 1.73533 7.75415 1.38169 7.53833 1.16358C7.32252 0.945472 6.97261 0.945472 6.75679 1.16358L4.20019 3.74736L1.64356 1.16358C1.42774 0.945472 1.07788 0.945472 0.862061 1.16358Z" fill="#00161D" stroke="#00161D"></path></svg>');

$('.header .menu-trigger').click(function(){
	$('body').toggleClass('menu-open')
})
$('.header .hdr_nav .menu-wrapper>ul>li.menuItem.has-submenu>a,.hdr_login_menu .hs-menu-wrapper>ul>li>a').click(function(e){
	e.preventDefault();
	$(this).next().slideToggle(250);
	$(this).parent().toggleClass('child-active');
})
$('.menu-overlay').click(function(){
	$('body').removeClass('menu-open');
})
$('.hdr_search .search_icon').click(function(){
	$('body').toggleClass('search-open');
})
$('.header-outer .hdr_site_search .material-symbols-outlined').click(function(){
	$('body').removeClass('search-open');
})
