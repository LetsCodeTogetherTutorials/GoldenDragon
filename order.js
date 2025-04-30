  // const quantityInputs = document.querySelectorAll('#menu-items input[type="number"]');
  // const totalDisplay = document.getElementById('total');
  // const paymentSelect = document.getElementById('payment');
  // const cardInfo = document.getElementById('card-info');
  // const checkoutForm = document.getElementById('checkout-form');

  // function calculateTotal() {
  //   let total = 0;
  //   quantityInputs.forEach(input => {
  //     const price = Number(input.getAttribute('data-price'));
  //     const quantity = Number(input.value);
  //     total += price * quantity;
  //   });
  //   totalDisplay.textContent = `Total: $${total}`;
  // }

  // quantityInputs.forEach(input => {
  //   input.addEventListener('input', calculateTotal);
  // });

  // paymentSelect.addEventListener('change', function() {
  //   if (paymentSelect.value === 'card') {
  //     cardInfo.style.display = 'block';
  //   } else {
  //     cardInfo.style.display = 'none';
  //   }
  // });

  // checkoutForm.addEventListener('submit', function(e) {
  //   e.preventDefault(); // stop real form submit
  //   window.location.href = 'thankyou.html'; // go to thank you page
  // });


  const quantityInputs = document.querySelectorAll('#menu-items input[type="number"], #drink-items input[type="number"]');
  const totalDisplay = document.getElementById('total');
  const cartItemsList = document.getElementById('cart-items');
  const paymentSelect = document.getElementById('payment');
  const cardInfo = document.getElementById('card-info');
  const checkoutForm = document.getElementById('checkout-form');
  const clearCartBtn = document.getElementById('clear-cart');
  
  function calculateTotalAndUpdateCart() {
    let totalCents = 0;
    cartItemsList.innerHTML = ''; // Clear current cart items
  
    quantityInputs.forEach(input => {
      const priceInDollars = Number(input.getAttribute('data-price'));
      const priceInCents = Math.round(priceInDollars * 100);
      const quantity = Number(input.value);
      const dishName = input.getAttribute('data-name');
  
      if (quantity > 0) {
        const itemTotalDollars = (priceInCents * quantity) / 100;
        const listItem = document.createElement('li');
        // listItem.textContent = `${dishName} x${quantity} - $${itemTotalDollars.toFixed(2)}`;
        listItem.innerHTML = 
        `
          <span class="dish-name">${dishName} x ${quantity}</span>          
          <span class="dish-price">$${itemTotalDollars.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(listItem);
      }
  
      totalCents += priceInCents * quantity;
    });
  
    const totalDollars = (totalCents / 100).toFixed(2);
    totalDisplay.textContent = `Total: $${totalDollars}`;
  }
  
  quantityInputs.forEach(input => {
    input.addEventListener('input', calculateTotalAndUpdateCart);
  });
  
  paymentSelect.addEventListener('change', function() {
    if (paymentSelect.value === 'card') {
      cardInfo.style.display = 'block';
    } else {
      cardInfo.style.display = 'none';
    }
  });
  
  // Clear cart functionality
  clearCartBtn.addEventListener('click', function() {
    quantityInputs.forEach(input => input.value = 0);
    calculateTotalAndUpdateCart();
  });

  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop real form submit    
    const name = document.getElementById('name').value.trim();

    // check for empty credit number
    const selection = document.getElementById("payment").value;
    const card_number = document.getElementById("card_no").value.trim();
    if(selection === "card" && card_number === "")
    {
      alert("Card number must be entered!");
      return;
    }
    
    //check for valid total amount to check out    
    if(totalDisplay.textContent === "Total: $0.00"){
      alert("You need to select your orders first!");
      return;
    }
    sessionStorage.setItem('customerName', name);
    window.location.href = 'thankyou.html'; // go to thank you page
  });
  
  // Optionally: Handle form submit (for the future)
  // document.getElementById('checkout-form').addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   alert('Order placed successfully!');
  // });
  