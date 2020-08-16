/* Global Variables*/
let facebook = document.getElementById('facebookicon');
let twitter = document.getElementById('istgramicon');
let instgram = document.getElementById('twittericon');

/* Event listener*/
facebook.addEventListener('mouseover',()=> {
     facebook.classList.toggle('animate__shakeX');
});
twitter.addEventListener('mouseover',()=>{
     twitter.classList.toggle('animate__shakeX');
})
instgram.addEventListener('mouseover',()=>{
      instgram.classList.toggle('animate__shakeX');
})