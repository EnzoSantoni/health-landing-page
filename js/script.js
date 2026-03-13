const tabs = document.querySelectorAll(".tab");
const slidesContainer = document.querySelector(".slides");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Cambiar tab activa
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Obtener el index del slide
        const index = tab.dataset.slide;

        // Mover el slider
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    });
});

const faqs = document.querySelectorAll("details");

faqs.forEach(details => {
    const summary = details.querySelector("summary");
    const content = details.querySelector(".detailContent");

    // Evitamos que summary abra/cierre automáticamente
    summary.addEventListener("click", e => {
        e.preventDefault();

        const isOpen = details.hasAttribute("open");

        // Cerrar todos los demás
        faqs.forEach(f => {
            if (f !== details) {
                f.removeAttribute("open");
                f.querySelector(".detailContent").style.maxHeight = "0px";
            }
        });

        if (!isOpen) {
            details.setAttribute("open", "");
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            details.removeAttribute("open");
            content.style.maxHeight = "0px";
        }
    });
});


function checkDesktopWarning() {
    const modal = document.getElementById('desktop-warning');

    if (window.innerWidth > 700) {
    modal.style.display = 'flex';
    } else {
    modal.style.display = 'none';
    }
}

// Mostrar al cargar
checkDesktopWarning();

// Mostrar/ocultar cuando se cambia el tamaño de la ventana
window.addEventListener('resize', checkDesktopWarning);

// Botón cerrar
document.getElementById('close-desktop-warning')
    .addEventListener('click', () => {
    document.getElementById('desktop-warning').style.display = 'none';
});
