const sections = document.querySelectorAll('section');
const options =
    {
        root:document.querySelector('.h'),
        threshold: 0,
        rootMargin:"0px"
    };
const observer = new IntersectionObserver(function
    (entries,observer){
    entries.forEach(entry=>{
            console.log(entry.target)
        // entry.target.classList.toggle('changeContentColor')
    })
},options)

sections.forEach(section => {
    observer.observe(section);
})
