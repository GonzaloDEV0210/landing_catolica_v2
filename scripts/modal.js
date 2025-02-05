const container_modal = document.querySelector('.container_modal');
const icon_cerrar_modal = document.querySelector('.icon_cerrar_modal');

setTimeout(function(){
    container_modal.classList.remove('ocultar_modal')
    container_modal.classList.add('mostrar_modal')
}, 3000);

icon_cerrar_modal.addEventListener('click', ()=>{
    container_modal.classList.add('ocultar_modal')
    container_modal.classList.remove('mostrar_modal')
})