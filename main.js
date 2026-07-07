
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(15,15,15,.92)";
        navbar.style.padding = "15px 40px";
        navbar.style.boxShadow = "0 15px 35px rgba(0,0,0,.25)";

    }else{

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.padding = "18px 40px";
        navbar.style.boxShadow = "none";

    }

});


//================ MOBILE MENU ================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


const video = document.querySelector(".video-bg");

video.addEventListener("loadeddata", () => {
    video.playbackRate = 1.5;
});

gsap.from(".hero-content span",{
    y:60,
    opacity:0,
    duration:1
})

gsap.from(".hero-content h1",{
    y:80,
    opacity:0,
    duration:1.3,
    delay:.3
})

gsap.from(".hero-content p",{
    y:50,
    opacity:0,
    duration:1,
    delay:.7
})

gsap.from(".buttons",{
    y:40,
    opacity:0,
    duration:1,
    delay:1
})


gsap.from(".about-image",{

    x:-120,

    opacity:0,

    duration:0.5,

    scrollTrigger:{

        trigger:".about",

        start:"top 70%"

    }

});

gsap.from(".about-content",{

    x:120,

    opacity:0,

    duration:1.2,

    scrollTrigger:{

        trigger:".about",

        start:"top 70%"

    }

});

gsap.from(".card",{
    y:80,
    opacity:0,
    stagger:0.2,
    duration:1,
    clearProps:"transform",
    scrollTrigger:{
        trigger:".about-cards",
        start:"top 80%"
    }
});




const modal = document.getElementById("projectModal");
const mainImage = document.getElementById("mainImage");
const title = document.getElementById("projectTitle");
const category = document.getElementById("projectCategory");
const description = document.getElementById("projectDescription");
const thumbnails = document.querySelector(".thumbnail-container");
const closeBtn = document.querySelector(".close-modal");

const projects = {

    house1:{

        title:"Girardot Cundinamarca",

        category:"Diseño Residencial",

        description:"Lujosa residencia con diseño arquitectónico moderno y acabados de alta calidad.",

        images:[
            "images/house1-1.png",
            "images/house1-2.png",
            "images/house1-3.png",
            "images/house1-4.png"
        ]

    },

    house2:{

        title:"Flandes Tolima",

        category:"Diseño Residencial",

        description:"Residencia moderna con diseño minimalista y espacios abiertos.",

        images:[
            "images/house2-1.png",
            "images/house2-2.png",
            "images/house2-3.png",
            "images/house2-4.jpg"
        ]

    },

    house3:{

        title:"Arbelaez Cundinamarca",

        category:"Diseño Residencial",

        description:"Residencia campestre contemporánea con diseño innovador y enfoque en sostenibilidad.",

        images:[
            "images/house3-1.png",
            "images/house3-2.png",
            "images/house3-3.png"
        ]

    },

    house4:{

        title:"Michigan USA",

        category:"Diseño Residencial",

        description:"Residencia moderna de 2 pisos en Michigan, Estados Unidos.",

        images:[
            "images/house4-1.png",
            "images/house4-2.png",
            "images/house4-3.png"
        ]

    }

};

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("click",()=>{

        const project = projects[card.dataset.project];

        title.textContent = project.title;

        category.textContent = project.category;

        description.textContent = project.description;

        mainImage.src = project.images[0];

        thumbnails.innerHTML="";

        project.images.forEach(image=>{

            const div=document.createElement("div");

            div.className="thumbnail";

            div.innerHTML=`<img src="${image}">`;

            div.onclick=()=>{

                mainImage.style.opacity="0";

                setTimeout(()=>{

                    mainImage.src=image;

                    mainImage.style.opacity="1";

                },200);

            }

            thumbnails.appendChild(div);

        });

        modal.classList.add("active");

    });

});

closeBtn.onclick=()=>{

    modal.classList.remove("active");

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");

    }

});






/*================ OTROS PROYECTOS ================*/

/*==================== SLIDER ====================*/

const slider = document.getElementById("projectSlider");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

nextBtn.onclick = () => {

slider.scrollBy({

left:460,

behavior:"smooth"

});

};

prevBtn.onclick = () => {

slider.scrollBy({

left:-460,

behavior:"smooth"

});

};





const otherProjects = {

    proyecto1:{

        title:"Estacion de Bombeo Santiago",

        category:"Industrial",

        location:"Santiago, Panama",

        company:"MDARQ Studio",

        area:"550 m²",

        year:"2026",

        description:"Diseño Estructural y detalles constructivos de la estación de bombeo.",

        images:[

            "otros/estacion.png",

            "otros/estacion1.png",

            "otros/estacion2.png",

            "otros/estacion3.png"

        ]

    },

    proyecto2:{

        title:"Bodegas Rosalinda",

        category:"Industrial",

        location:"Bogota, Cundinamarca",

        company:"ETSTECHNOLOGY",

        area:"1.520 m²",

        year:"2026",

        description:"Diseño Estructural y despiece de acero para plano taller de bodegas.",

        images:[

            "otros/bodega.png",

            "otros/bodega1.png",

            "otros/bodega2.png",

            "otros/bodega3.png"

        ]

    },


    proyecto3:{

        title:"Red Electrica Spa",

        category:"Comercial",

        location:"Bogota, Cundinamarca",

        company:"ETSTECHNOLOGY",

        area:"340 m²",

        year:"2026",

        description:"Diseño de spa con instalaciones modernas.",

        images:[

            "otros/spa1.png",

            "otros/spa2.png",

            "otros/spa3.png",

            "otros/spa4.png"

        ]

    },


    proyecto4:{

        title:"Red Electrica Registraduria Sahagun",

        category:"Comercial",

        location:"Sincelejo, Sucre",

        company:"MYM TECNICOS INGENIEROS SAS",

        area:"410 m²",

        year:"2025",

        description:"Diseño de red electrica de instalaciones modernas.",

        images:[

            "otros/registraduria.png",

            "otros/registraduria1.png",

            "otros/registraduria2.png"

        ]

    }

};





const otherModal = document.getElementById("otherModal");

const otherImage = document.getElementById("otherMainImage");

const otherThumbs = document.querySelector(".other-thumbnails");

const otherClose = document.querySelector(".other-close");

document.querySelectorAll(".view-project").forEach(btn => {

    btn.addEventListener("click", function(e){

        e.preventDefault();

        const project = otherProjects[this.dataset.project];

        if(!project){
            console.log("Proyecto no encontrado");
            return;
        }

        document.getElementById("otherTitle").textContent = project.title;
        document.getElementById("otherCategory").textContent = project.category;
        document.getElementById("otherLocation").textContent = "📍 " + project.location;
        document.getElementById("otherCompany").textContent = "🏢 " + project.company;
        document.getElementById("otherArea").textContent = "📐 " + project.area;
        document.getElementById("otherYear").textContent = "📅 " + project.year;
        document.getElementById("otherDescription").textContent = project.description;

        otherImage.src = project.images[0];

        otherThumbs.innerHTML = "";

        project.images.forEach(img => {

            const image = document.createElement("img");

            image.src = img;

            image.classList.add("thumb");

            image.addEventListener("click", ()=>{

                otherImage.src = img;

            });

            otherThumbs.appendChild(image);

        });

        otherModal.classList.add("active");

    });

});


/*================ CERRAR ================*/

otherClose.addEventListener("click", ()=>{

    otherModal.classList.remove("active");

});


/* clic por fuera */

otherModal.addEventListener("click",(e)=>{

    if(e.target===otherModal){

        otherModal.classList.remove("active");

    }

});


/* ESC */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        otherModal.classList.remove("active");

    }

});







//================ EMAIL JS ================//

emailjs.init("fgrGLnqpLVV-oSH99");

const contactForm = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const button = contactForm.querySelector(".btn");
const buttonText = button.querySelector(".btn-text");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    message.className = "form-message";
    message.textContent = "";

    button.classList.add("loading");
    buttonText.textContent = "Sending...";

    emailjs.sendForm(
        "service_q70l866",
        "template_oqqxh4x",
        contactForm
    )
    .then(() => {

        message.classList.add("success");
        message.textContent = "Your message has been sent successfully!";

        contactForm.reset();

    })
    .catch((error) => {

        console.error(error);

        message.classList.add("error");
        message.textContent = "Something went wrong. Please try again.";

    })
    .finally(() => {

        button.classList.remove("loading");
        buttonText.textContent = "Send Message";

        setTimeout(() => {

            message.className = "form-message";
            message.textContent = "";

        }, 5000);

    });

});
