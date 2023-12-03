const slide = [ "About" ,"Skills", "Projects" ,"Contacts"];
const ulTage = document.querySelector(".slide-bar-ul")
console.log(ulTage)
// loading
window.addEventListener('load' , _=>{
    document.querySelector(".loading").style.display ="none";
}
)

// profilefunction
const porfileButton = document.querySelector(".profile-button")
porfileButton.addEventListener("click" , _=>{
    document.querySelector(".profile-view").style.display = "block";
    const profileViewTag = document.querySelector(".profile-view-child")
    profileViewTag.classList.add("animate__fadeIn");
    profileViewTag.classList.remove("animate__fadeOut");
})

const exitButton = document.querySelector(".exit")
exitButton.addEventListener("click" , _=>{
    
    const profileViewTag = document.querySelector(".profile-view-child")
    profileViewTag.classList.add("animate__fadeOut");
    profileViewTag.classList.remove("animate__fadeIn");
    setTimeout(() => {
        document.querySelector(".profile-view").style.display = "none";
      }, 600);
    
    
})

const tagItem = (event)=>{
    const ClickTagId = event.target.id;
    console.log(ClickTagId)
    const hBodyTag = document.querySelector(".h-body");
    const projectTag = document.querySelector(".h-project");
    const skillTag = document.querySelector(".h-skill");
    const contactTag = document.querySelector(".h-contact")
    
    for (let i = ClickTagId; i < slide.length; ) {
        let slideId = slide[i]
        console.log(slideId)
        // About
        if(slideId === "About"){
            hBodyTag.style.display = "inline";
            projectTag.style.display = "none";
            skillTag.style.display = "none";
            contactTag.style.display = "none";
            const addressTag = document.querySelector(".address");
            addressTag.style.display = "none";
            
            return
        }else{
            hBodyTag.style.display = "none";
        }
        
        // skill
        if(slideId === "Skills"){
            
            skillTag.style.display = "inline";
            projectTag.style.display = "none";  
            hBodyTag.style.display = "none";
            contactTag.style.display = "none";
            const addressTag = document.querySelector(".address");
            addressTag.style.display = "none"
            return
        }else{
            skillTag.style.display = "none";
        }
        
        // project
        if(slideId === "Projects"){
            projectTag.style.display = "inline";    
            hBodyTag.style.display = "none";
            skillTag.style.display = "none";
            contactTag.style.display = "none";
            const addressTag = document.querySelector(".address");
            addressTag.style.display = "none"
           
            return
        }else{
            projectTag.style.display = "none";
        }

        // contacts
        if(slideId === "Contacts"){
            contactTag.style.display = "inline";
            projectTag.style.display = "none";    
            hBodyTag.style.display = "none";
            skillTag.style.display = "none";
            const addressTag = document.querySelector(".address");
            addressTag.style.display = "inline"
            if (window.matchMedia("(max-width: 450px)").matches) {
                const addressTag = document.querySelector(".address");
                addressTag.style.display = "none";  
                $('.slide').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    
                  });  
            } else{
                const addressTag = document.querySelector(".address");
                addressTag.style.display = "inline";    
            }
            return
        }else{
            contactTag.style.display = "none";
        }

    }
}
for (let i = 0; i < slide.length; i++) {
    
    const liTage = document.createElement('li')
    liTage.classList.add("slidecolor")
    liTage.append(slide[i].toUpperCase());
    liTage.id = i ;
    liTage.addEventListener("click", tagItem)
    ulTage.appendChild(liTage)
}

function checkWidth() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        console.log("450px is work")
       const removeflexcolum = document.querySelector(".rightS-b");
       removeflexcolum.classList.remove("flex-column");   
       $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
       console.log(removeflexcolum)
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        const removeflexcolum = document.querySelector(".rightS-b");
        removeflexcolum.classList.add(".flex-column");       
       
    } else if (window.matchMedia("(max-width: 800px)").matches) {
        console.log("800px is work")
        $('.slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            
          });
        const removeflexcolum = document.querySelector(".rightS-b");
        removeflexcolum.classList.remove(".flex-column");  
          
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        $('.slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        const removeflexcolum = document.querySelector(".rightS-b");
        removeflexcolum.classList.add(".flex-column");  
          
    } 
    
}

// Call the function on page load and resize
window.addEventListener("load", checkWidth);
window.addEventListener("resize", checkWidth);
