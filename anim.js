const page= document.getElementsByTagName('html')

if(page[0].classList.contains('p2')){
    const fallImg= document.getElementById("fallingImage");
    const blkgrnd= document.getElementById('blackground');
    const main= document.getElementById('main');
    const links= document.getElementById('links');
    
    function loaded() {
        fallImg.classList.add('fall')
        blkgrnd.classList.add('blackin')
        for(let i=0; i<main.children.length; i++){
            main.children[i].classList.add('goUp')
        }
        main.classList.add('mainGone')
        links.firstElementChild.firstElementChild.classList.add('goDown')
    }
    fallImg.addEventListener('load', loaded)    
}