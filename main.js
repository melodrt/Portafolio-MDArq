
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

        title:"Interior Rendering",

        category:"3D Visualization",

        description:"Photorealistic rendering for residential interior design.",

        images:[
            "images/house3-1.png",
            "images/house3-2.png",
            "images/house3-3.png"
        ]

    },

    house4:{

        title:"Business Center",

        category:"Commercial",

        description:"Commercial office building designed for corporate environments.",

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
