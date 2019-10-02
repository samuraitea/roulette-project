import './styles.scss'; // entry point for styles
import $ from 'jquery';
import tab from 'jquery-ui/ui/widgets/tabs';
import sort from 'jquery-ui/ui/widgets/sortable';
import { test } from './app/main'; // example of an ES6 import
import { rand } from './app/helpers';

console.log(test); // should display "it works!" in console on launch

$('.case').on('click', function () {
    $(this).append('<div class="jeton">1€</div>');
});


$('button').on('click', function () {
    const randomNb = rand(0, 36);
    $('.random').text(randomNb);
    console.log(randomNb);

    console.log($(".case").find('.jeton').length);

    $('jeton').remove();
});



