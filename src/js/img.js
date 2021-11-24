const imgLogo = document.getElementById ('imgLogo');

const imgLogoTamano=()=>{

    imgLogo.height = 300;
    imgLogo.width = 400;
    imgLogo.style.display="block";
    imgLogo.style.margin = "auto";

}

export {

    imgLogoTamano,carouselTamano
    
    }

    const carouselCubo = document.getElementsByClassName('d-block');

    const carouselTamano = ()=>{
       carouselCubo.width = 800;
        
    }