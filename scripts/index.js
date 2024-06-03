var slide1= document.getElementById("slide1").getAttribute("data-bs-slide-to")
var slide2= document.getElementById("slide2").getAttribute("data-bs-slide-to")
var slide3= document.getElementById("slide3").getAttribute("data-bs-slide-to")
var slide4= document.getElementById("slide4").getAttribute("data-bs-slide-to")

var pag1= document.getElementById("pag1")
var pag2= document.getElementById("pag2")
var pag3= document.getElementById("pag3")
var pag4= document.getElementById("pag4")

var botao= document.getElementById("buttonBlock")

function mudarBlock() {
    if (document.getElementById("slide1").classList== 'active') {
        botao.href= "https://www.fiec.com.br/site/noticia/5289/ver.do"
        botao.setAttribute("target","_blank")
        pag1.style.display= "block"
        pag2.style.display= "none"
        pag3.style.display= "none"
        pag4.style.display= "none"
    }
    if (document.getElementById("slide2").classList== 'active') {
        botao.href= "templates/componentes.html"
        botao.setAttribute("target","_self")
        pag1.style.display= "none"
        pag2.style.display= "block"
        pag3.style.display= "none"
        pag4.style.display= "none"
    }
    if (document.getElementById("slide3").classList== 'active') {
        botao.href= "templates/jogos.html"
        botao.setAttribute("target","_self")
        pag1.style.display= "none"
        pag2.style.display= "none"
        pag3.style.display= "block"
        pag4.style.display= "none"
    }
    if (document.getElementById("slide4").classList== 'active') {
        botao.href= "templates/formulario.html"
        botao.setAttribute("target","_self")
        pag1.style.display= "none"
        pag2.style.display= "none"
        pag3.style.display= "none"
        pag4.style.display= "block"
    }
}