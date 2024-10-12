// Función para abrir el menú en móviles
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}


// Función para abrir el modal con un proyecto
function openModal(url) {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("iframeModal").src = url;
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("iframeModal").src = "";
}

// Cerrar el modal con tecla Escape
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
