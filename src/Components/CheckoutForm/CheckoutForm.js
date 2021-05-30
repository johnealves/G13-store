import React from 'react';
import { Form, Row } from 'react-bootstrap';
import PaymentForm from '../PaymentForm/PaymentForm';
import './CheckoutForm.css';

function CheckoutForm() {
  return (
    <div className="checkout-container">
      <Form className="checkout-form form-delivery">
        <h4>Dados para entrega</h4>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-fullname">
            Nome completo: 
          </Form.Label>
          <Form.Control id="checkout-fullname" type="text" placeholder="Digite seu nome" />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-email">Email: </Form.Label>
          <Form.Control id="checkout-email" type="email" placeholder="Digite seu email"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-cpf">CPF</Form.Label>
          <Form.Control id="checkout-cpf" type="text" placeholder="Digite seu CPF"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-phone-number">Telefone</Form.Label>
          <Form.Control id="checkout-phone-number" type="text" placeholder="Digite um telefone para contato"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-address">Endereço: </Form.Label>
          <Form.Control id="checkout-address" type="text" placeholder="Endereço"/>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label htmlFor="checkout-district">Bairro: </Form.Label>
          <Form.Control id="checkout-district" type="text" placeholder="Bairro"/>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-city">Cidade: </Form.Label>
            <Form.Control id="checkout-city" type="text" placeholder="Cidade"/>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-state">Estado: </Form.Label>
            <Form.Control id="checkout-state" type="text" placeholder="Estado"/>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="checkout-cpf">CEP</Form.Label>
            <Form.Control id="checkout-cpf" type="text" placeholder="Ex.: 12345000"/>
          </Form.Group>
        </Row>
      </Form>
      <PaymentForm />
    </div>
  );
}

export default CheckoutForm;
