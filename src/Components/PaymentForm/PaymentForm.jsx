import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaCreditCard } from 'react-icons/fa';
import { AiOutlineBarcode } from 'react-icons/ai';
import PaymentTicket from '../PaymentMode/PaymentTicket/PaymentTicket';
import PaymentCredit from '../PaymentMode/PaymentCredit/PaymentCredit';
import './PaymentForm.css';

function PaymentForm() {
  const [paymentMode, setPaymentMode] = useState('credit-card')

  return (
    <div>
      <Form>
        <h4>Formas de pagamento</h4>
        <section className="select-payment">
        <Button
          className="button-payment"
          type="button"
          name="credit-card"
          onClick={ () => setPaymentMode('credit-card') }
        >
          <FaCreditCard className="payment-icon" value="credit-card" />
          <p>Cartão de crédito</p>
        </Button>
        <Button
          className="button-payment"
          type="button"
          name="ticket"
          onClick={ () => setPaymentMode('ticket') }
        >
          <AiOutlineBarcode className="payment-icon" value="ticket" />
          <p>Boleto</p>
        </Button>
        </section>
        { (paymentMode === 'ticket')
        ? <PaymentTicket />
        : <PaymentCredit /> }
      </Form>
    </div>
  )
}

export default PaymentForm;
