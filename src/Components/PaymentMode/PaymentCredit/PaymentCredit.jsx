import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import TotalCheckout from '../TotalCheckout/TotalCheckout';
import './PaymentCredit.css'

function PaymentCredit() {
  return(
    <div className="payment-credit-container">
      <Form>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="credit-number">Numero do cartão</Form.Label>
          <Form.Control id="credit-number" type="text" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="credit-name">Nome impresso no cartão</Form.Label>
          <Form.Control id="credit-name" type="text" />
        </Form.Group>
        <Row>
          <Form.Group className="col-md-6 mb-2">
            <Form.Label htmlFor="credit-validity">Validade</Form.Label>
            <Form.Control id="credit-validity" type="text" />
          </Form.Group>
          <Form.Group className="col-md-6 mb-2">
            <Form.Label htmlFor="credit-cvv">CVV</Form.Label>
            <Form.Control id="credit-cvv" type="text" />
          </Form.Group>
          <TotalCheckout />
          <Button variant="danger" className="button-checkout-credit">
            Finalizar compra
          </Button> 
        </Row>
      </Form>
    </div>
  )
}

export default PaymentCredit;
