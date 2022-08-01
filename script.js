const rateButton1 = document.getElementById('one');
const rateButton2 = document.getElementById('two');
const rateButton3 = document.getElementById('three');
const rateButton4 = document.getElementById('four');
const rateButton5 = document.getElementById('five');
const submitButton = document.querySelector('.btn');
console.log(submitButton);





rateButton1.addEventListener('click', () => {
    document.querySelector('.two').style.visibility = 'hidden';
  document.querySelector('.three').style.visibility = 'hidden';
  document.querySelector('.four').style.visibility = 'hidden';
  document.querySelector('.five').style.visibility = 'hidden';

} )


rateButton2.addEventListener('click', () => {
    document.querySelector('.two').style.visibility = 'visible';
  document.querySelector('.three').style.visibility = 'hidden';
  document.querySelector('.four').style.visibility = 'hidden';
  document.querySelector('.five').style.visibility = 'hidden';

} )


rateButton3.addEventListener('click', () => {
    document.querySelector('.two').style.visibility = 'visible';
  document.querySelector('.three').style.visibility = 'visible';
  document.querySelector('.four').style.visibility = 'hidden';
  document.querySelector('.five').style.visibility = 'hidden';

} )


rateButton4.addEventListener('click', () => {
    document.querySelector('.two').style.visibility = 'visible';
  document.querySelector('.three').style.visibility = 'visible';
  document.querySelector('.four').style.visibility = 'visible';
  document.querySelector('.five').style.visibility = 'hidden';

} )


rateButton5.addEventListener('click', () => {
    document.querySelector('.two').style.visibility = 'visible';
  document.querySelector('.three').style.visibility = 'visible';
  document.querySelector('.four').style.visibility = 'visible';
  document.querySelector('.five').style.visibility = 'visible';

} )

submitButton.addEventListener('click', () => {
  document.querySelector('.thank-you').style.visibility = 'visible';
    document.querySelector('.select-rating').style.visibility = 'hidden';
})
