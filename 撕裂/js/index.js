
// 图片近大远小动画效果

var lis=document.querySelectorAll('.news_box .list1 li');
for(var i=0;i<lis.length;i++){
    lis[i].onmouseenter=function(){
        this.children[0].style.transform='translateZ(50px)';
        this.children[0].style.transition='all 0.5s linear';
    }
    lis[i].onmouseleave=function(){
        this.children[0].style.transform='translateZ(0)';
        this.children[0].style.transition='all 0.5s linear';
    }
}
var lis=document.querySelectorAll('.news_box .list2 li');
for(var i=0;i<lis.length;i++){
    lis[i].onmouseenter=function(){
        this.children[0].style.transform='translateZ(80px)';
        this.children[0].style.transition='all 0.2s linear';
    }
    lis[i].onmouseleave=function(){
        this.children[0].style.transform='translateZ(0)';
        this.children[0].style.transition='all 0.2s linear';
    }
}


// 隐藏的内容显示动画效果


$('.list1 li').mouseenter(function(){
    $(this).children('.cover').children('.see').stop().hide();
    $(this).children('.cover').children('.content').stop().slideDown(300);
})
$('.list1 li').mouseleave(function(){
    
    $(this).children('.cover').children('.content').stop().slideUp(300);
    $(this).children('.cover').children('.see').stop().slideDown();
})




// 小鹿模块动画

var body=document.querySelector('body');
var item1=document.querySelector('.survive .item');
var item2=document.querySelector('.conquer .item');
var item3=document.querySelector('.ascend .item');
var big_box=document.querySelector('.survive');
var distance=big_box.offsetTop-300;
// var hide_distance=

window.onscroll=function(){
    if(body.scrollTop<distance-200){
        dh(item1,0,0);
    }
    if(body.scrollTop>distance){
        dh(item1,1,-200);
    }
    if(body.scrollTop>distance+300){
        dh(item2,1,200);
        dh(item1,0,200);
    }
    if(body.scrollTop>distance+800){
        dh(item3,1,-200);
        dh(item2,0,-200)
    }
    if(body.scrollTop>distance+1200){
        dh(item3,0,200);
    }
    if(body.scrollTop>start_space && body.scrollTop<end_space){
        var scroll_dis=body.scrollTop-start_space+90;
        scroll_box.style.top=scroll_dis+'px';
        // console.log(scroll_dis);
    }
}
function dh(elment,opa,val){
    elment.style.transform='translateX('+val+'px)';
    elment.style.opacity=opa;
    elment.style.transition='all 0.3s linear';
}

// 小鹿里边近大远小
var lis_small=document.querySelectorAll('.item li');
for(var i=0;i<lis_small.length;i++){
    lis_small[i].onmouseenter=function(){
        this.children[0].style.transform='translateZ(100px)';
        this.children[1].style.transform='translateZ(-400px)';
        this.children[1].style.background='transparent';
        this.children[0].style.transition='all 0.1s linear';
    }
    lis_small[i].onmouseleave=function(){
        this.children[0].style.transform='translateZ(0)';
        this.children[1].style.transform='translateZ(0)';
        this.children[1].style.background='rgba(0, 0, 0, .5)';
        this.children[0].style.transition='all 0.1s linear';
    }
}

// 固定区域
// 先获取元素据文档的垂直距离
// 当滚出去的距离大于该距离之后，元素跟着滚轮移动
// 当元素到达footer 元素的时候停止移动
// 当滚轮向上的时候元素接着移动
// 回到原来位置之后停止移动
var space=document.querySelector('.space');
var scroll_box=document.querySelector('.scroll_box');
var footer=document.querySelector('footer .main');
var start_space=space.offsetTop;
var end_space=space.offsetTop+390;
// console.log(start_space);




// 自由发挥模块


var dotted=document.querySelector('.dotted');
var rbtn=document.querySelector('.rbtn');
var lbtn=document.querySelector('.lbtn');
var ul=document.querySelector('.lbt ul');
var img_index=0;

creatSpan();

var last_li=document.createElement('li');
var img1=document.createElement('img');
img1.src='img/free1.jpg';
last_li.appendChild(img1);
ul.appendChild(last_li);

rbtn.onclick=function(){       
    img_index++;
    if(img_index==6){
        img_index=0;
        ul.style.left='0';
    }
    animation(ul,ul.offsetLeft,-img_index*340,50,20);

    getDotted();
            
}

lbtn.onclick=function(){
    
    if(img_index==0){
        img_index=6;
        ul.style.left='-2380px';
    }
    img_index--;
    animation(ul,ul.offsetLeft,-img_index*340,50,20);
    getDotted();
}



// 创建小圆点
function creatSpan(){
    for(var i=0;i<ul.children.length;i++){
    var span=document.createElement('span');
    if(i==0){
        span.className='active';
    }
    // 调用点击小圆点切换函数
    span.pic_index=i;
    span.onclick=move;
    dotted.appendChild(span);
    }
}

// 点击小圆点切换
function move(){
    img_index=this.pic_index;
    animation(ul,ul.offsetLeft,-img_index*340,50,20);
    getDotted();
}



    // for(var i=0;i<ul.children.length;i++){
    //     img_index=i;
    //     dotted.children[i].onclick=function(){ 
    //         animation(ul,ul.offsetLeft,-img_index*590,50,20);
    //         getDotted();
    //     }
    // }

// 让小圆点根据图片切换样式
function getDotted(){
            for(var i=0;i<dotted.children.length;i++){
            dotted.children[i].className='';
            }
            dotted.children[img_index].className='active';
    }

// 自动播放
var elemId=null;
var lbt=document.querySelector('.lbt');
lbt.onmouseenter=function(){
    clearInterval(elemId);
}
lbt.onmouseleave=function(){
    Autoplay();
}
function Autoplay(){
    elemId=setInterval(function(){
        rbtn.click();
    },1000)
}
Autoplay();