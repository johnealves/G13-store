import React from 'react';
import { Button } from 'react-bootstrap';
import TotalCheckout from '../TotalCheckout/TotalCheckout';
import './PaymentTicket.css';

function PaymentTicket() {
  return(
    <div className="payment-ticket-container">
      <p>imprima o boleto e pague no banco</p>
      <p>ou pague pela internet utilizando o código de barras do boleto</p>
      <p>o prazo de validade do boleto é de 1 dia util</p>
      <TotalCheckout />
      <Button
        variant="danger"
        className="button-checkout"
      >Finalizar compra</Button> 
    </div>
  )
}

export default PaymentTicket;
