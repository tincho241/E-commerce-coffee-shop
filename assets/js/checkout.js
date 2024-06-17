function nextStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((stepElement, index) => {
        stepElement.style.display = (index + 1 === step) ? 'block' : 'none';
    });
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    nextStep(3);
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pago completado con éxito.');
    // Aquí puedes agregar la lógica para procesar el pago
});
