document.addEventListener('DOMContentLoaded', function () {
    const cart = document.querySelector('.cart');
    const orderForm = document.getElementById('order-form');

    // Récupérer les produits du panier (vous devez implémenter cette partie)
    const productsInCart = getProductsFromCart();

    // Afficher les produits dans le panier
    productsInCart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        cart.appendChild(listItem);
    });

    // Gestionnaire d'événements pour soumettre le formulaire de commande
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        // Envoyer les informations de la commande et les produits au serveur (vous devez implémenter cette partie)
        submitOrder(name, email, address, productsInCart);

        // Réinitialiser le formulaire
        orderForm.reset();
        cart.innerHTML = ''; // Efface le contenu du panier

        alert('Commande passée avec succès !');
    });
});

function getProductsFromCart() {
    // Vous devez implémenter cette fonction pour récupérer les produits du panier
    // Cette fonction doit renvoyer un tableau de produits
    // Exemple : return ["Produit 1", "Produit 2"];
}

function submitOrder(name, email, address, products) {
    // Vous devez implémenter cette fonction pour envoyer la commande au serveur
    // Cette fonction devrait envoyer les données de la commande (nom, email, adresse) et les produits à une API de traitement des commandes.
    // Vous pouvez utiliser des requêtes AJAX ou fetch pour cela.
}
