// Cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("button_home");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplázate hacia arriba de la página
document.getElementById('button_home').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(form);
    
    try {
    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
    });

    if (response.ok) {
        window.location.href = "/thank-you.html"; // Redirige a la página de agradecimiento
    } else {
        alert("Hubo un problema al enviar el formulario.");
    }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error. Inténtalo nuevamente.");
    }
});