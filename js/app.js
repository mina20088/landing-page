console.log(performance.now())
/* Global Variables*/
let facebook = document.getElementById('facebookicon');
let twitter = document.getElementById('istgramicon');
let instgram = document.getElementById('twittericon');
let navButton = document.getElementById('Nav');
let mainnav = document.getElementById('mainNavigtion')
const mainNavigtion = document.querySelector('#mainNavigtion');
const Sections =  [document.getElementById('About'),document.getElementById('Education'),document.getElementById('Career'),document.getElementById('personal')]
const sectionsLenght = document.getElementsByClassName('Sections').item(0).children.length

/*Global Functions */

/*Navigation menu function for small devices*/
function createNav(){
    let Navigation = document.createDocumentFragment();
    let ul = document.createElement('ul');
    let linkIDs = ['first','second','third','forth']
    if(window.innerWidth <768){
        ul.setAttribute('class','nav flex-column')
        ul.setAttribute('id','navigation')
        for(let i = 0; i < sectionsLenght; i++){
            let li = document.createElement('li');
            li.setAttribute('class','nav-link active')
            li.setAttribute('id',linkIDs[i])
            ul.appendChild(li)
        }
        Navigation.appendChild(ul);
        mainNavigtion.appendChild(Navigation);
    }else if(window.innerWidth >= 768){
        ul.setAttribute('class','nav');
        ul.setAttribute('id','navigation');
        for(let i = 0; i < sectionsLenght; i++){
            let li = document.createElement('li');
            li.setAttribute('class','nav-item');
            li.setAttribute('id',linkIDs[i]);
            ul.appendChild(li);
        }
        Navigation.appendChild(ul);
        mainNavigtion.appendChild(Navigation);
    }
}
createNav()

/*Add Links To nav*/
function addlinks(){
    let navigation = document.getElementById('navigation');
    let values = [document.querySelector('#info'),document.querySelector('#Edu'),document.querySelector('#Car'),document.querySelector('#person')]
    let[aboutheader,edu,Care,personal] = values;
    let navigationItemslenght = navigation.children.length
    for(let i = 0; i < navigationItemslenght; i++){
        let a = document.createElement('a')
        a.textContent = values[i].innerHTML
        navigation.children.item(i).appendChild(a);
    }
}
addlinks();


/*navigation removels in for widh less than 768*/
function navRemovals(){
    let nav = document.getElementById('mainNavigtion');
    let navbutton = document.getElementById('Nav')
    if(window.innerWidth >= 768){
        nav.style.display = 'block';
        navbutton.style.display = 'none';
    }
}
navRemovals();

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
navButton.addEventListener('click',()=>{
    mainnav.classList.toggle('navshowhide')
})

/*addfunction for scrolling over the content of the page*/
const navigationlenght = document.querySelector('#navigation').children.length
for(let i = 0; i < navigationlenght; i++){
    const navigation  = document.getElementById('navigation').children.item(i).children.item(0)
    navigation.setAttribute('href',`http://localhost:63342/landing-page/index.html?#${Sections[i].id}`)
}
console.log(performance.now())