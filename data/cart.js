// Declare a variable to store the cart
export let cart;

// Load existing cart data from localStorage
loadFromStorage();

// Function to load cart data from localStorage
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  // If no cart data is found, initialize an empty cart
  if (!cart) {
    cart = [];
  }

  // If cart is empty, display a message
  if (cart.length === 0) {
    document.write('You have not picked anything.');
  }
}

// Function to save cart data to localStorage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart
export function addToCart(productId) {
  let matchingItem;

  // Check if the item already exists in the cart
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If the item exists, increment its quantity; otherwise, add it to the cart
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  // Save the updated cart data to localStorage
  saveToStorage();
}

// Function to remove an item from the cart
export function removeFromCart(productId) {
  const newCart = [];

  // Create a new cart without the item to be removed
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  // Update the cart with the new cart data
  cart = newCart;

  // Save the updated cart data to localStorage
  saveToStorage();
}

// Function to update delivery option for an item in the cart
export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  // Find the matching item in the cart
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Update the delivery option for the matching item
  matchingItem.deliveryOptionId = deliveryOptionId;

  // Save the updated cart data to localStorage
  saveToStorage();
}
