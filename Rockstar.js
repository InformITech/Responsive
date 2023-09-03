

function SwitchFunc(Num) {

    let div1=document.getElementById("div1")
    let div2=document.getElementById("div2")
    let div3=document.getElementById("div3")
    let div4=document.getElementById("div4")
    
    let Img1 = document.getElementById("Imagescarousel1") 
    let Img2 = document.getElementById("Imagescarousel2") 
    let Img3 = document.getElementById("Imagescarousel3") 
    let Img4 = document.getElementById("Imagescarousel4") 

    if(Num==2) {
        div2.className+=" active"
        div1.className = "carousel-item"
        div3.className = "carousel-item"
        div4.className = "carousel-item"


        Img2.className+="active"
        Img1.className = "carousel-item"
        Img4.className = "carousel-item"
        Img3.className = "carousel-item"

    }
    else if(Num==3) {
        div3.className+=" active"
        div1.className = "carousel-item"
        div2.className = "carousel-item"
        div4.className = "carousel-item"


        Img3.className+="active"
        Img1.className = "carousel-item"
        Img4.className = "carousel-item"
        Img2.className = "carousel-item"
    }
    else if(Num==4) {
        div4.className+=" active"
        div1.className = "carousel-item"
        div3.className = "carousel-item"
        div2.className = "carousel-item"



        Img4.className+="active"
        Img1.className = "carousel-item"
        Img2.className = "carousel-item"
        Img3.className = "carousel-item"
    }
    if(Num==1) {
        div1.className+=" active"
        div2.className = "carousel-item"
        div3.className = "carousel-item"
        div4 .className= "carousel-item"

        Img1.className+="active"
        Img2.className = "carousel-item"
        Img4.className = "carousel-item"
        Img3.className = "carousel-item"
    }
}


function MenuBar(num) {

    let Tp = document.getElementById("Ham-tp");
    let Bp = document.getElementById("Ham-Bp");
    
    if(num%2!=0) {
        Tp.style.opacity = "0%"
        Bp.style.opacity = "0%"
    }
    else if (num%2==0) {
        Tp.style.opacity = "100%"
        Bp.style.opacity = "100%"
    }
}







