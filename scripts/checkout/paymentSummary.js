import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  const totalBeforeTaxCents = productPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cart.length}):</div>
      <div class="payment-summary-money">
        Ksh${formatCurrency(productPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        Ksh${formatCurrency(totalBeforeTaxCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        Ksh${formatCurrency(taxCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        Ksh${formatCurrency(totalCents)}
      </div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>

    <button id="whatsapp-button" class="whatsapp-button button-secondary">
      <img class="whatsapp-logo" src="/images/whatsapp_logo.png" alt="">  
      Confirm your order here (via WhatsApp)
    </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  // WhatsApp button event listener
  const whatsappButton = document.getElementById("whatsapp-button");
  whatsappButton.addEventListener("click", () => {
    const phoneNumber = "+254713128088";
    const message = generateWhatsAppMessage(
      productPriceCents,
      totalBeforeTaxCents,
      taxCents,
      totalCents
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  });
}

function generateWhatsAppMessage(
  productPriceCents,
  totalBeforeTaxCents,
  taxCents,
  totalCents
) {
  let message = "WELCOME To FARMLAND ELECTRICALS:\n \nI would like to confirm the order of the following:\n\n";

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    message += `Name: ${product.name}\n`;
    message += `Price: Ksh${formatCurrency(product.priceCents)}\n\n`;
  });

  message += `Total Items: ${cart.length}\n`;
  message += `Total before tax: Ksh${formatCurrency(totalBeforeTaxCents)}\n`;
  message += `Estimated tax (10%): Ksh${formatCurrency(taxCents)}\n`;
  message += `Order total: Ksh${formatCurrency(totalCents)}\n`;

  return message;
}
