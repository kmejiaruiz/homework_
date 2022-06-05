addEventListener('DOMContentLoaded', ()=>{
    const images = [
        '/images/cent18.jpg', '/images/spresso.jpg', '/images/Rolex.jpeg'
    ]

    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100/images.length
    let porcentaje_actual = porcentaje_base

    for (let index = 0; index < images.length; index++) {
        const div = document.createElement('div');
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    }

    progressBar.style.width = `${porcentaje_base}%`
    img1.src = images[0]
     const circles = document.querySelectorAll('.circles')
     circles[0].classList.add('resaltado')

     const slideshow = () =>{
         img2.src = images[i]
         const circles_actual = Array.from(circles).find(el => el.id == i)
         Array.from(circles).forEach(cir => cir.classList.remove('resaltado'))
         circles_actual.classList.add('resaltado')

         img2.classList.add('active')
         i++
         porcentaje_actual += porcentaje_base
         progressBar.style.width = `${porcentaje_actual}%`
         if (i == images.length) {
             i = 0
             porcentaje_actual = porcentaje_base - porcentaje_base
         }

         setTimeout(() =>{
             img1.src = img2.src
             img2.classList.remove('active')
         }, 1000) 
     }

     setInterval(slideshow, 6000)
})