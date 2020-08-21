console.log(performance.now())
/* Global Variables*/
let facebook = document.getElementById('facebookicon');
let twitter = document.getElementById('istgramicon');
let instgram = document.getElementById('twittericon');
const mainNavigtion = document.querySelector('#NavCol');
const sectionsLenght = document.querySelectorAll('section').length
console.log(sectionsLenght.length)
let LinksArray = ['m','n','p','q']
let x = document.querySelectorAll('.Navigation li a')

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


x.forEach(element=>{
    element.addEventListener('click',(event)=>{
        event.preventDefault();
        document.querySelector(element.getAttribute('href')).scrollIntoView(
            {
                behavior:"smooth",block:"center"
            });
        if(element.id === 'm'){
            document.querySelector('#n').style.background = 'white';
            document.querySelector('#p').style.background = 'white';
            document.querySelector('#q').style.background = 'white';
            document.querySelector('#Education').style.background = 'none';
            document.querySelector('#Career').style.background = 'none';
            document.querySelector('#personal').style.background = 'none';
            document.querySelector('#About').style.background = '#3E2E44';
            element.style.background = 'black';
        }
        if(element.id === 'n'){
            document.querySelector('#m').style.background = 'white';
            document.querySelector('#p').style.background = 'white';
            document.querySelector('#q').style.background = 'white';
            document.querySelector('#About').style.background = 'none';
            document.querySelector('#Career').style.background = 'none';
            document.querySelector('#personal').style.background = 'none';
            document.querySelector('#Education').style.background = '#3E2E44';
            element.style.background = 'black';
        }
        if(element.id === 'p'){
            document.querySelector('#m').style.background = 'white'
            document.querySelector('#n').style.background = 'white'
            document.querySelector('#q').style.background = 'white'
            document.querySelector('#About').style.background = 'none';
            document.querySelector('#Career').style.background = '#3E2E44';
            document.querySelector('#personal').style.background = 'none';
            document.querySelector('#Education').style.background = 'none';
            element.style.background = 'black';
        }
        if(element.id === 'q'){
            document.querySelector('#m').style.background = 'white'
            document.querySelector('#n').style.background = 'white'
            document.querySelector('#p').style.background = 'white'
            document.querySelector('#About').style.background = 'none';
            document.querySelector('#Career').style.background = 'none';
            document.querySelector('#personal').style.background = '#3E2E44';
            document.querySelector('#Education').style.background = 'none';
            element.style.background = 'black';
        }

    })
})

console.log(performance.now());
