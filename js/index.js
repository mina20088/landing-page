let x = document.querySelectorAll('.Navigation li a')
x.forEach(element=>{
    element.addEventListener('click',(event)=>{
        event.preventDefault();
        document.querySelector(element.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        })
    })
})