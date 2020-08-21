console.log(performance.now())
/* Global Variables*/
let facebook = document.getElementById('facebookicon');
let twitter = document.getElementById('istgramicon');
let instgram = document.getElementById('twittericon');
const mainNavigtion = document.querySelector('#NavCol');
const sectionsLenght = document.getElementsByClassName('Sections').item(0).children.length;
let LinksArray = ['m','n','p','q']

/*Global Functions */

/*Navigation menu function for small devices*/
function createNav(){
    let linkIDs = ['first','second','third','forth']
    let Navigation = document.createDocumentFragment();
    let ul = document.createElement('ul');
    ul.setAttribute('class','navbar-nav mr-auto');
    ul.setAttribute('id','navigation');
    ul.classList.add('Navigation')
    for(let i = 0; i < sectionsLenght; i++){
        let li = document.createElement('li');
        li.setAttribute('class','nav-item');
        li.setAttribute('id',linkIDs[i]);
        ul.appendChild(li);
    }
    Navigation.appendChild(ul);
    mainNavigtion.appendChild(Navigation);
}
createNav()

/*Add Links To nav*/
function addlinks(){
    let navigation = document.getElementById('navigation');
    let values =
        [
            document.querySelector('#info'),
            document.querySelector('#Edu'),
            document.querySelector('#Car'),
            document.querySelector('#person')
        ]
    let[aboutheader,edu,Care,personal] = values;
    let navigationItemslenght = navigation.children.length
    for(let i = 0; i < navigationItemslenght; i++){
        let a = document.createElement('a')
        a.textContent = values[i].innerHTML
        a.setAttribute('href',`#${values[i].id}`)
        a.setAttribute('class','nav-link')
        a.setAttribute('id',LinksArray[i])
        navigation.children.item(i).appendChild(a);
    }
}
addlinks();

/* Event listener*/


facebook.addEventListener('mouseover',()=> {
     facebook.classList.toggle('animate__shakeX');
});
twitter.addEventListener('mouseover',()=>{
     twitter.classList.toggle('animate__shakeX');
})
instgram.addEventListener('mouseover',()=>{
      instgram.classList.toggle('animate__shakeX');
});
// navButton.addEventListener('click',()=>{
//     mainnav.classList.toggle('navshowhide')
// })

/*addfunction for scrolling over the content of the page and highlight the active section and nav items*/

console.log(performance.now());
