    window.addEventListener('DOMContentLoaded', () => {
        const bikeBtn = document.querySelector('#bikeBtn')
        const dropdown = document.querySelector('#dropdown')

        bikeBtn.addEventListener('click', () => {
            /* if(dropdown.classList.contains('hidden')){
                dropdown.classList.remove('hidden');
                dropdown.classList.add('flex');
            }else{
                dropdown.classList.remove('flex')
                dropdown.classList.add('hidden')
            } */

            dropdown.classList.toggle('hidden')
            dropdown.classList.toggle('flex')
        })

    })
