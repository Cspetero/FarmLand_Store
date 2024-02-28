import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <!-- Payment summary details for items, shipping, total, etc. -->

    <button class="place-order-button button-primary">
      Place your order
    </button>

    <button id="whatsapp-button" class="whatsapp-button button-secondary">
      <img class="whatsapp-logo" src="/FarmLand_store/images/whatsapp_logo.png" alt="WhatsApp Logo">  
      Confirm your order here (via WhatsApp)
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  // WhatsApp button event listener
  const whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.addEventListener('click', () => {
    const phoneNumber = '+254114477854';
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  });
}

function generateWhatsAppMessage() {
  let message = 'I would like to confirm the order of the following:\n\n';

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    message += `Name: ${product.name}\n`;
    message += `Price: Ksh${formatCurrency(product.priceCents)}\n\n`;
    // Convert image URL to base64 data URI
    message += `![Product Image](${product.image})\n\n`;
  });

  return message;
}
