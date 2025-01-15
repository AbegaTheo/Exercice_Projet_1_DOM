// Fonction pour mettre à jour le prix total
function TotaPrix() {
    const prix = document.querySelectorAll(".prix-unitaire");
    const quantité = document.querySelectorAll(".quantité");
    let total = 0;
  
    prix.forEach((price, index) => {
      const prixUnité = parseInt(price.textContent.replace("XOF", ""));
      const quantity = parseInt(quantité[index].textContent);
      total += prixUnité * quantity;
    });
  
    document.getElementById("prix-total").textContent = `${total} XOF`;	
  }
  
  // Gestion des boutons "+" pour augmenter la quantité
  document.querySelectorAll(".plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantity = btn.nextElementSibling;
      quantity.textContent = parseInt(quantity.textContent) + 1;
      TotaPrix();
    });
  });
  
  // Gestion des boutons "-" pour diminuer la quantité
  document.querySelectorAll(".minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantity = btn.previousElementSibling;
      if (parseInt(quantity.textContent) > 0) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        TotaPrix();
      }
    });
  });
  
  // Gestion des boutons "corbeille" pour supprimer un article
  document.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".col-md-4");
      card.remove();
      TotaPrix();
    });
  });
  
  // Gestion des boutons "like" pour aimer un article
  document.querySelectorAll(".favorite").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });