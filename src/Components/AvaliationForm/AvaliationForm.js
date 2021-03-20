import React, { Component } from 'react';
import './AvaliationForm.css';

class AvaliationForm extends Component {
  render() {
    return (
      <div>
        <form className="avaliationFormContainer">
          <fieldset>
            <legend>Avaliação</legend>
            <div className="input-group mb-3">
              <input
                className="form-control avaliation-input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                className="form-control mb-3"
                placeholder="Mensagem (opcional)"
                cols="50"
                rows="5"
                data-testid="product-detail-evaluation"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Avaliar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AvaliationForm;
