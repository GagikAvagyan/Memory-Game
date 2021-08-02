let imgIndexNum = [], i = 0, check = [], click = 0;

$('button').click(() =>{  // function for random Images and add class
    while ( i < 2){
        while (imgIndexNum.length < 15){
            imgIndexNumber = parseInt(Math.random() * 15 + 1);
            imgIndexNum.includes(imgIndexNumber) !== true ? imgIndexNum.unshift(imgIndexNumber) : '';
        }
        for ( let i = 0; i < imgIndexNum.length; i++){
            $('section').append(`<div class="block"><img class="img-hiden" src="./images/${imgIndexNum[i]}.png"> 
                                    <img class="crack" src="./images/crack.png"> </div>`)
        }
        i++ , imgIndexNum = [];
    }
    $('.crack').hide();
    setTimeout(hide, 3000) , openImages(); // call functions
    $('.StartGame').hide();
})

function hide() {  // hide show function
        $('.img-hiden').hide();
        $('.crack').show();
}

function openImages() {  // onclick hide and show
    $('.block').on('click', function (){
        click+=1
        if(click<3){
            let imgfirst = $(this).children('.img-hiden').show();
            $(this).children('.crack').hide();

            check.unshift(imgfirst.attr('src'));

            check[0] > '' && check[1] > '' ?  checkValue(): '';
        }

        function checkValue(){
            if (check[0] === check[1]){
                $('.WinBorder').css('width', '+=30px');
                check = [], click = 0;
            }else {
                setTimeout(()=>{
                    $('[src="'+check[0]+'"]').hide().next('.crack').show()
                    $('[src="'+check[1]+'"]').hide().next('.crack').show()
                    check = [], click = 0;
                }, 1000);
            }
        }
    });
}