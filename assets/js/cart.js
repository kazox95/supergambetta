const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.querySelector('.cart');
const totalElement = document.getElementById('total');
const clearCartButton = document.getElementById('clear-cart'); // Sélectionne le bouton "Effacer le panier"
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        total += price;
        totalElement.textContent = total.toFixed(2);
        const listItem = document.createElement('li');
        listItem.textContent = button.previousElementSibling.textContent;
        cart.appendChild(listItem);
    });
});

// Gestionnaire d'événements pour effacer le panier
clearCartButton.addEventListener('click', () => {
    cart.innerHTML = ''; // Efface tous les éléments du panier
    total = 0; // Réinitialise le total
    totalElement.textContent = '0.00'; // Met à jour l'affichage du total
});
