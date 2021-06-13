const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

const navigation = document.querySelector('nav')
document.addEventListener('scroll', function(){
    if(scrollY >= 600){
        navigation.classList.add('N')
    }else if(scrollY < 600){
        navigation.classList.remove('N')
    }
})

document.addEventListener('scroll', function(){
    if(window.scrollY >= 1300){
        const items = document.querySelectorAll('.daily .item');
        items[0].classList.add('slidekanan');
        items[1].classList.add('slidebawah');
        items[2].classList.add('slideatas');
        items[3].classList.add('slidekiri');
    }
    if(window.scrollY >= 1900){
        const showPro = document.querySelectorAll('.create .showPro');
        showPro[0].classList.add('slidek');
        showPro[1].classList.add('slideo');
        showPro[2].classList.add('slidekk');
    }
});


const items = document.querySelectorAll('.daily .item');
items.forEach(function(item){
    item.addEventListener('mouseenter', function(e){
        e.target.style.transition = '0.2s'
        e.target.style.transform = 'scale(1.038)'
    })
    item.addEventListener('mouseleave', function(e){
        e.target.style.transform = 'scale(1)'
    })
})

const showPro = document.querySelectorAll('.create .showPro');
showPro.forEach(function(pro){
    pro.addEventListener('mouseenter', function(e){
        e.target.style.transition = '0.2s'
        e.target.style.transform = 'scale(1.038)'
    });
    pro.addEventListener('mouseleave', function(e){
        e.target.style.transform = 'scale(1)'
    });
})
