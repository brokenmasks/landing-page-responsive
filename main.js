
let menu = document.querySelector( 'nav ul' );
let menuBar = document.querySelector( 'nav .menu-icon' );
let menuIcon = document.querySelector( 'nav .menu-icon img' );

menuBar.addEventListener( 'click', ( )=>{
    if( menuIcon.getAttribute( 'src' ) == 'imagens/menu.png' ){
        menuIcon.setAttribute( 'src', 'imagens/close.png' );
    }
    else{
        menuIcon.setAttribute( 'src', 'imagens/menu.png' );
    }

    menu.classList.toggle( 'active' );
} )