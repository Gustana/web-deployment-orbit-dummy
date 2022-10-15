var slideImgFromLeft = {
    distance: '70%',
    origin: 'left',
    opacity: 0.2,
    duration: 2000,
    reset: true,
};

var slideImgFromRight = {
    distance: '40%',
    origin: 'right',
    opacity: 0.2,
    duration: 2000,
    reset: true,
};

var slideFruitNameFromRight = {
    distance: '30%',
    origin: 'right',
    opacity: 0,
    duration: 1000,
    delay:1500,
};

var slideFruitNameFromLeft = {
    distance: '30%',
    origin: 'left',
    opacity: 0,
    duration: 1000,
    delay:1500,
};

var slideFromBottom = {
    distance: '70%',
    origin: 'bottom',
    opacity: 0,
    duration: 2000,
    delay:2000,
};

reveal('.img_fruits_left', slideImgFromLeft)
reveal('.fruits_name_right', slideFruitNameFromRight)

reveal('.img_fruits_right', slideImgFromRight)
reveal('.fruits_name_left', slideFruitNameFromLeft)

reveal('.fruits_desc', slideFromBottom)


function reveal(element, options){
    ScrollReveal().reveal(element, options)
}

$(document).ready(()=>{
    $('#btn_explore').click(()=>{
        let scrollDestination = $('.content_container')[0]

        scrollDestination.scrollIntoView()
        scrollDestination.scrollIntoView(true);
        scrollDestination.scrollIntoView({block: "start"});
        scrollDestination.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
})