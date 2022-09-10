
let dropDown=document.getElementsByClassName("dropdown-menu")
let link=document.getElementsByClassName("nav-item")
let drop=dropDown
let links=link

for(let i=0 ;i<drop.length ;i++){
    links[i].onmouseover=()=>{
        drop[i].classList.add("drop-toggle")
    }
}
for(let i=0 ;i<drop.length ;i++){
    links[i].onmouseout=()=>{
        drop[i].classList.remove("drop-toggle")
    }
}

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    // fade: true,
  });
let next=document.getElementsByClassName("slick-next")[0]
let prev=document.getElementsByClassName("slick-prev")[0]
next.innerHTML=`<i class="fa-solid fa-circle-left left-icon"></i>`
prev.innerHTML=`<i class="fa-solid fa-circle-right right-icon"></i>`