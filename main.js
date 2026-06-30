
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

    stagger:.2,

    duration:1,

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

        title:"Luxury Villa",

        category:"Residential Design",

        description:"Modern luxury house designed with clean architecture, large glass façades and premium finishes.",

        images:[
            "images/house1-1.png",
            "images/house1-2.png",
            "images/house1-3.png",
            "images/house1-4.png"
        ]

    },

    house2:{

        title:"Modern Residence",

        category:"Architecture",

        description:"Contemporary residence with minimalist design and open spaces.",

        images:[
            "images/house2-1.png",
            "images/house2-2.png",
            "images/house2-3.png"
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