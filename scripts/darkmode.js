const html = document.querySelector("html")
const preferenciaDark = localStorage.getItem('darkmode')
const imgDark = document.querySelector("#imgDark")
if(preferenciaDark){
     html.classList.add("dark-mode")
     imgDark.src = "./assets/img/sun.png"
 }
 
function darkMode(){
    const botaoDark = document.querySelector("#darkMode")

    botaoDark.addEventListener("click", ()=>{
        html.classList.toggle("dark-mode")
        
        const preferencia = localStorage.getItem('darkmode')
        if(!preferencia){
            localStorage.setItem('darkmode', true)
            console.log(preferencia)
        }else{
            localStorage.removeItem('darkmode')
            console.log(preferencia)
        }
        console.log("html",html)
        

        if(!html.classList.contains("dark-mode")){
            imgDark.src = "./assets/img/moon.png"
        }else{
            imgDark.src = "./assets/img/sun.png"
        }
    })
}
darkMode()

