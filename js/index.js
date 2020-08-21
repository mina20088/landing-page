let x = document.querySelectorAll('.Navigation li a')

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