
window.onload=function(){
    var img1=document.querySelector('.active');
    var logo=document.querySelector('.logo');
    logo.onmouseenter=function(){
        img1.style.display='none';
    }
    logo.onmouseleave=function(){
        img1.style.display='block';
    }
}

var have_list=document.querySelectorAll('header .have_list');
var hide_list=document.querySelectorAll('header .hide_list');
for(var i=0;i<have_list.length;i++){
    have_list[i].onmouseenter=function(){
        this.children[1].style.display='block';
        this.style.background='rgba(0,0,0,.5)';
    }
    have_list[i].onmouseleave=function(){
        this.children[1].style.display='none';
        this.style.background='';
    }
}