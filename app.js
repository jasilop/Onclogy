
document.getElementsByClassName('navbar_menu')[0].addEventListener('click', function (event) {
    let isFlex = document.getElementsByClassName('navbar_menu_items')[0].style.display
    if(isFlex){
        document.getElementsByClassName('navbar_menu')[0].getElementsByTagName('img')[0].src = "Assets/menu.png"
        document.getElementsByClassName('navbar_menu_items')[0].style.display = ''
    }else{
        document.getElementsByClassName('navbar_menu')[0].getElementsByTagName('img')[0].src = "Assets/icons8-close-30.png"
        document.getElementsByClassName('navbar_menu_items')[0].style.display = 'flex'
    }
});

document.addEventListener("click", function(el){
    if(el.target && el.target.classList.contains('project')){
        let element = document.getElementById('our-project');
        element.scrollIntoView({
            behavior: "smooth"
        });
    }else if(el.target && el.target.classList.contains('about')){
        let element = document.getElementById('about-us');
        element.scrollIntoView({
            behavior: "smooth"
        });
    }else if(el.target && el.target.classList.contains('button-contact')){
        let element = document.getElementById('form');
        element.scrollIntoView({
            behavior: "smooth"
        });
    }else if(el.target && el.target.classList.contains('strategy')){
        let element = document.getElementById('description');
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
})

function changeImg(img){
    imgSrc = img.getAttribute("src")
    let headerImage = document.getElementById('headerImg')
    switch (imgSrc) {
        case 'Assets/multi-1.jpg':
            headerImage.src = "Assets/construction-concept-with-engineering-tools 1 (1).jpg"
            break;
        case 'Assets/multi-2.jpg':
            headerImage.src = "Assets/Rectangle 13.jpg"
            break;
        case 'Assets/multi-3.jpg':
            break;
    
        default:
            break;
    }
}

function resetImg(){
    let headerImage = document.getElementById('headerImg')
    headerImage.src = "Assets/construction-concept-with-engineering-tools 1 (1).jpg"
}