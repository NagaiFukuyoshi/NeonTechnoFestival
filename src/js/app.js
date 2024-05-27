document.addEventListener('DOMContentLoaded',function(){
    barraFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function barraFija(){
    const header = document.querySelector('.navegacion')
    const infoFestival = document.querySelector('.seccion')

    document.addEventListener('scroll', function(){
        if(infoFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        } else{
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria__imagenes')

        const cantidadImagenes = 16;

        for(let i = 1; i <= cantidadImagenes; i++){
            const imagen = document.createElement('IMG')
            imagen.src = `src/img/gallery/full/${i}.jpg`
            imagen.alt ='imagen galleria'

            //event handler
            imagen.onclick = function(){
                mostrarImagen(i)
            }

            galeria.appendChild(imagen)
        }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt ='imagen galleria'
    
    //crear modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    //crearlo en el HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade--out')
    setTimeout(() =>{
        modal.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },500);
    
}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion__menu a')

        let actual = '';
        sections.forEach( section =>{
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
                //console.log(actual)
            }
        })

        navLinks.forEach( link =>{
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
                //console.log(link)
            }
        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion__menu')

    navLinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior : 'smooth'})
            //console.log(section)
            //console.log(e.target)
        })
    })
}