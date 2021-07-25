const button = document.getElementsByClassName('btn')
const banner = document.getElementById('banner')

button[0].onclick = function(){
    banner.src = "./images/pic1.png"
    animation()
    this.classList.add("active")
}
button[1].onclick = function(){
    banner.src = "./images/pic2.png"
    animation()
    this.classList.add("active")
}
button[2].onclick = function(){
    banner.src = "./images/pic3.png"
    animation()
    this.classList.add("active")
}

function animation(){
    banner.classList.add("zoom")
    setTimeout(()=> {
        banner.classList.remove("zoom")
    },500)

    for(b of button){
        b.classList.remove("active")
    }
}