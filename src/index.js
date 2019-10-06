import './styles.scss'; // entry point for styles
import $ from 'jquery';
// import tab from 'jquery-ui/ui/widgets/tabs';
// import sort from 'jquery-ui/ui/widgets/sortable';
import { rand } from './app/helpers';


/******************** ROTATION ROULETTE ********************/

// $('button').on('click', function() {
//     $('.wheel').css({
//         "transition": "transform 3s",
//         "transform": "rotate(2080deg)"
//     })
// });

/******************** JETON ********************/

$('.case').on('click', function () {
    $(this).append('<div class="jeton">1€</div>');
    
    $('button').on('click', function () {
    $('.jeton').remove();
});
});

/******************** NOMBRE ALEATOIRE ********************/

$(document).ready(function() {
    $('button').on('click', function() {
        spinRoulette();
        
        const randomNb = rand(0, 36);
        $('.random').text(randomNb);
    })
});

let degree = 0;
function spinRoulette() {
     $('.wheel').css({
        "transition": "transform 3s",
        "transform": "rotate(" + degree + "deg)"
    })
    degree += 2080;
}



    // console.log(randomNb);
    // console.log($(".case").find('.jeton').length);

