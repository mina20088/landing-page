const section = document.querySelectorAll('section');
const navItens = document.querySelectorAll('#navigation')
const options = {

    root: document.querySelector('#viewPort'),
    rootMargin:'-48px 0px 0px 0',
    thresholds:0.4

};

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        entry.target.style.scrollBehavior = 'smooth'
        if(entry.isIntersecting) {
            if(entry.target.id == 'About'){
                entry.target.classList.add('changeContentColor');
                document.querySelector('#Education').classList.remove('changeContentColor')
                document.querySelector('#Career').classList.remove('changeContentColor')
                document.querySelector('#personal').classList.remove('changeContentColor')
            }else if(entry.target.id == 'Education'){
                document.querySelector('#About').classList.remove('changeContentColor')
                entry.target.classList.add('changeContentColor');
                document.querySelector('#Career').classList.remove('changeContentColor')
                document.querySelector('#personal').classList.remove('changeContentColor')
            }else if(entry.target.id == 'Career'){
                document.querySelector('#About').classList.remove('changeContentColor')
                document.querySelector('#Education').classList.remove('changeContentColor')
                entry.target.classList.add('changeContentColor');
                document.querySelector('#personal').classList.remove('changeContentColor')

            }else if(entry.target.id == 'personal'){
                document.querySelector('#About').classList.remove('changeContentColor')
                document.querySelector('#Education').classList.remove('changeContentColor')
                document.querySelector('#Career').classList.remove('changeContentColor')
                entry.target.classList.add('changeContentColor');
            }else{
                entry.target.classList.remove('changeContentColor');
            }
            observer.unobserve(entry.target)
            console.log(observer.thresholds)
        }

    },options)
})

section.forEach(item=>{
    window.addEventListener('scroll',function (event){
        // event.preventDefault()
        observer.observe(item)
    })
})

console.log(navItens)