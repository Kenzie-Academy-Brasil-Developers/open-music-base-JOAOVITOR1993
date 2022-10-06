function darkMode(){
    const html = document.querySelector("html")
    const botaoDark = document.querySelector("#darkMode")
    const imgDark = document.querySelector("#imgDark")
    const preferenciaDark = localStorage.getItem('darkmode')

    if(preferenciaDark){
        html.classList.add("dark-mode")
        imgDark.src = "./assets/img/sun.png"
    }

    botaoDark.addEventListener("click", ()=>{
        html.classList.toggle("dark-mode")

        if(!preferenciaDark){
            localStorage.setItem('darkmode', true)
        }else{
            localStorage.removeItem('darkmode')
        }

        if(!html.classList.contains("dark-mode")){
            imgDark.src = "./assets/img/moon.png"
        }else{
            imgDark.src = "./assets/img/sun.png"
        }
    })
}
darkMode()

