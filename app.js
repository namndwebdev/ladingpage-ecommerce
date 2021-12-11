var listImage = ['./images/slide1.jpeg', './images/slide2.jpeg', './images/slide1.jpeg']

let prevBtn = document.querySelector('.control .prev')
let nextBtn = document.querySelector('.control .next')
let banner = document.querySelector('.banner')
let btnSearch = document.querySelector('.search-box')
let searchInput = document.querySelector('.search-input')

let currentIndexBanner = 0


prevBtn.addEventListener('click', function(){
    currentIndexBanner--
    
    if(currentIndexBanner < 0){
        currentIndexBanner = 0
    }

    banner.setAttribute('src', listImage[currentIndexBanner])
    banner.classList.remove('animation-fadeout')
    setTimeout(function(){
        banner.classList.add('animation-fadeout')
    })
})


nextBtn.addEventListener('click', function(){
    currentIndexBanner++
    
    if(currentIndexBanner > listImage.length - 1){
        currentIndexBanner = listImage.length - 1
    }
    
    banner.setAttribute('src', listImage[currentIndexBanner])
    banner.classList.remove('animation-fadeout')
    setTimeout(function(){
        banner.classList.add('animation-fadeout')
    })
})

btnSearch.addEventListener('click', function(){
    searchInput.classList.toggle('hide')
})

document.addEventListener('click', function(e){
    if(e.target != btnSearch){
        searchInput.classList.add('hide')
    }
})