import './styles.scss'; // entry point for styles
import $ from 'jquery';
// import tab from 'jquery-ui/ui/widgets/tabs';
// import sort from 'jquery-ui/ui/widgets/sortable';
import { rand } from './app/helpers';

// let bet = prompt('Place your bets.');


/******************** JETONS ********************/
$('.case').on('click', function () {
    $(this).append('<div class="jeton"><img src="assets/images/token.png" alt="picture of token"></div>');
});

$('#turn').on('click', function() {
        const randomNb = rand(0, 36);
        const caseTxt = $('.case').text();
        
        console.log(caseTxt);
        console.log(randomNb);

        $('.random').text(randomNb);
        
    });

// JETONS REMOVE
    $('#turn').on('click', function () {
        $('.jeton').remove();
    });
    


/******************** ROULETTE ********************/
    $('#turn').on('click', function() {
        spinRoulette();
    });

// ROTATION ROULETTE
let degree = 0;
function spinRoulette() {
     $('.wheel').css({
        "transition": "transform 3s",
        "transform": "rotate(" + degree + "deg)"
    })
    degree += 2080;
};



    // console.log(randomNb);
    // console.log($(".case").find('.jeton').length);


