window.addEventListener("scroll", function () {
    let scrollButton = document.getElementById("button_home");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      scrollButton.classList.remove("button_scroll"); // Mostrar botón
    } else {
      scrollButton.classList.add("button_scroll"); // Ocultar botón
    }
});

// Cuando el usuario hace clic en el botón, desplázate hacia arriba de la página
document.getElementById('button_home').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const form = document.getElementById("contact_form");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(form);
    
    try {
    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
    });

    if (response.ok) {
        window.location.href = "http://127.0.0.1:5500/#home"; // Redirige a la página de agradecimiento
    } else {
        alert("Hubo un problema al enviar el formulario.");
    }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error. Inténtalo nuevamente.");
    }
});