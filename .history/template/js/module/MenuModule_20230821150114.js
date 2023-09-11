export default function MenuModule() {
    // const listDr = document.querySelectorAll(".dropdown");
    
    // listDr.forEach((ele, i) => {
    //     const icon = document.createElement("i")
    //     // <i class="fas fa-angle-down"></i>
    //     icon.className = "fas fa-angle-down"
    //     ele.querySelectorAll("a")[0].appendChild(icon);
    //     icon.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         icon.classList.toggle("active")
    //         $(ele.querySelectorAll(".menu-list")[0]).stop().slideToggle(300,"linear");
    //     })
        
    // })

    // const listDr2 = document.querySelectorAll(".header-ct .dropdown");
    
    // listDr2.forEach((ele, i) => {
    //     const icon = document.createElement("i")
    //     // <i class="fa-solid fa-caret-down"></i>
    //     icon.className = "ti-angle-right"
    //     ele.querySelectorAll("a")[0].appendChild(icon);
    //     icon.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         icon.classList.toggle("active")
    //         $(ele.querySelectorAll(".menu-list")[0]).stop().slideToggle(300,);
    //     })
        
    // })

    const drmbs = document.querySelectorAll(".drmb");
    if(drmbs){
        drmbs.forEach((drmb)=>{
            const icMenuChild = drmb.querySelector(".btn-menu-child");
            console.log(icMenuChild);
            icMenuChild.addEventListener("click", ()=>{
                const menuListMb = drmb.querySelector(".menu-list-mb");
                const menuIcMb = drmb.querySelector(".menu-ic-mb");
    
                $(menuListMb).slideToggle(500);
                menuIcMb.classList.toggle("actived");
            })
        })
       
    }

    const drmb2s = document.querySelectorAll(".drmb2");
    if(drmb2s){
        drmb2s.forEach((drmb2)=>{
   
            const icMenuChild = drmb2.querySelector(".btn-menu-child2");
          
            icMenuChild.addEventListener("click", ()=>{
              
                const menuListMb = drmb2.querySelector(".menu-list-mb");
                const menuIcMb = drmb2.querySelector(".menu-ic-mb");
    
                $(menuListMb).slideToggle(500);
                menuIcMb.classList.toggle("actived");
            })
        })
    }
}