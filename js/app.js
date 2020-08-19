console.log(performance.now())
/* Global Variables*/
let facebook = document.getElementById('facebookicon');
let twitter = document.getElementById('istgramicon');
let instgram = document.getElementById('twittericon');
let navButton = document.getElementById('Nav');
let mainnav = document.getElementById('mainNavigtion');
const mainNavigtion = document.querySelector('#mainNavigtion');
const Sections =
    [
        document.getElementById('About'),
        document.getElementById('Education'),
        document.getElementById('Career'),
        document.getElementById('personal')
    ]
const [About,Education,Career,personal] = Sections;
const sectionheaders =
    [
        document.querySelector('#info'),
        document.querySelector('#Edu'),
        document.querySelector('#Car'),
        document.querySelector('#person')
    ]
const [info,Edu,Car,person] = sectionheaders;
const sectionsLenght = document.getElementsByClassName('Sections').item(0).children.length;
let LinksArray = ['m','n','p','q']



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
    }else if(window.innerWidth >= 768){
        ul.setAttribute('class','nav');
        ul.setAttribute('id','navigation');
        for(let i = 0; i < sectionsLenght; i++){
            let li = document.createElement('li');
            li.setAttribute('class','nav-item');
            li.setAttribute('id',linkIDs[i]);
            ul.appendChild(li);
        }
    }
    Navigation.appendChild(ul);
    mainNavigtion.appendChild(Navigation);

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
        a.setAttribute('id',LinksArray[i])
        navigation.children.item(i).appendChild(a);

    }
}
addlinks();


/*navigation removels in for widh less than 768*/
function navRemovals(){
    let nav = document.getElementById('mainNavigtion');
    let navbutton = document.getElementById('Nav')
    if(window.innerWidth >= 768) {
        nav.style.display = 'block';
        navbutton.style.display = 'none';
    }
}
navRemovals();
/* Event listener*/
let links=
    [
        document.querySelector('#m'),
        document.querySelector('#n'),
        document.querySelector('#p'),
        document.querySelector('#q')
    ]
let [link1,link2,link3,link4] = links

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

/*addfunction for scrolling over the content of the page and highlight the active section and nav items*/

link1.addEventListener('click',function(){

    let y = About.getBoundingClientRect().y;
    let x = About.getBoundingClientRect().x;
    window.scrollTo(x,y);
    info.style.background  = 'yellowgreen'
    Edu.style.background = 'none';
    Car.style.background = 'none';
    person.style.background = 'none'
    link1.style.background = 'yellowgreen'
    link2.style.background = 'none'
    link3.style.background = 'none';
    link4.style.background = 'none'
})
link2.addEventListener('click',function (){
    let y = Education.getBoundingClientRect().y;
    let x = Education.getBoundingClientRect().x;
    window.scrollTo(x,y);
    info.style.background  = 'none'
    Edu.style.background = 'yellowgreen';
    link1.style.background = 'none'
    link2.style.background = 'yellowgreen'
    link3.style.background = 'none'
    link4.style.background = 'none'
})
link3.addEventListener('click',function (){
    let y = Career.getBoundingClientRect().y;
    let x = Career.getBoundingClientRect().x;
    window.scrollTo(x,y);
    info.style.background  = 'none'
    Edu.style.background = 'none';
    Car.style.background = 'yellowgreen';
    link1.style.background = 'none';
    link2.style.background = 'none'
    link3.style.background = 'yellowgreen'
    link4.style.background = 'none';
})

link4.addEventListener('click',function(){
    let y = personal.getBoundingClientRect().y;
    let x = personal.getBoundingClientRect().x;
    window.scrollTo(x,y);
    info.style.background  = 'none'
    Edu.style.background = 'none';
    Car.style.background = 'none';
    person.style.background = 'yellowgreen';
    link1.style.background = 'none';
    link2.style.background = 'none'
    link3.style.background = 'none'
    link4.style.background = 'yellowgreen';
})

console.log(performance.now());
