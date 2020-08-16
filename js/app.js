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

/*Global Functions */

/*Navigation menu function*/

function createNav(){
    const mainNavigtion = document.querySelector('#mainNavigtion')
    let Navigation = document.createDocumentFragment();
    let ul = document.createElement('ul');
    ul.setAttribute('class','nav flex-column')
    Navigation.appendChild(ul);
    mainNavigtion.appendChild(Navigation)
    console.log(mainNavigtion);
}

createNav()