document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('.routes__element_active__close').forEach((element)=>{
        element.addEventListener('click',(event)=>{
            event.__isOnClick=true;
            
            document.querySelectorAll('.routes__element_active').forEach((activeElement)=>{
                activeElement.classList.remove('routes__element_active_onClick')
            })
            document.querySelectorAll('.routes__element_unactive').forEach((unActiveElement=>{
                unActiveElement.classList.remove('display_none');

            }))

        })
    })
    document.querySelectorAll('.routes__element').forEach((element)=>{
        element.addEventListener('click',(event)=>{
            if(event.__isOnClick){
                return
            }
            window.scrollTo(pageYOffset,0);
            document.querySelectorAll('.routes__element_unactive').forEach((listElement=>{
                listElement.classList.add('display_none');
            }))
            element.querySelector('.routes__element_active').classList.add('routes__element_active_onClick')
        })
    })


    document.querySelectorAll('.search-bar__button').forEach((element)=>{
        element.addEventListener('click',(e)=>{
            e.preventDefault()
            document.querySelector('.search-engine__search-bar').classList.toggle('display_none');
            document.querySelector('.filters__search-bar').classList.toggle('display_block');
        })
    })
})