const changeColorNotis = document.querySelectorAll(".noti__item");
for(const changeColorNoti of changeColorNotis){
    changeColorNoti.addEventListener('click', function(){
        changeColorNoti.classList.add('whiteBg');
    });
}