import './styles.scss'; // entry point for styles
import $ from 'jquery';
// import tab from 'jquery-ui/ui/widgets/tabs';
// import sort from 'jquery-ui/ui/widgets/sortable';
import { rand } from './app/helpers';


// PARI
let bet = prompt('Place your bets.');
parseInt($('.money').text((100 - bet) + "e"));
/******************** JETONS ********************/
const jetonDiv = '<div class="jeton"><img src="assets/images/token.png" alt="picture of token"></div>';

$('.case').on('click', function () {
    $(this).append(jetonDiv);
    $(this).addClass('caseJeton');
});

$('#turn').on('click', function() {
        const randomNb = rand(0, 36);

        spinRoulette();
        $('.random').text(randomNb); 

        for(let i=0; ++i<=36;){
            // Si on tombe sur une case normale
            if(parseInt($(`#${i}`).text()) === randomNb && $(`#${i}`).hasClass('caseJeton')){
                console.log('Bravo! Vous recevez 2 fois votre pari.');
                parseInt($('.money').text((100 +(2 * bet)) + "e"));
            } // Si on tombe sur la case 0
            else if (randomNb === 0){
            console.log('0! Bravo! Vous recevez 36 fois votre pari.');
            parseInt($('.money').text((100 + (36 * bet)) + "e"));
        } 
    }
});

// JETONS REMOVE
    $('#turn').on('click', function () {
        $('.jeton').remove();
        $('.case').removeClass('caseJeton');
    });
    


/******************** ROULETTE ********************/
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


