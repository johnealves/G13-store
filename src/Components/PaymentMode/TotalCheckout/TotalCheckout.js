import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTotalCheckout, resetTotalCheckout } from '../../../Redux/actions';
import './TotalCheckout.css'

function TotalCheckout({ shoppingCartList, totalCount, resetTotal, total }) {
  useEffect(() => {
    resetTotal()
    fetchShoppingCart()
  }, [])

  async function fetchShoppingCart() {
    shoppingCartList.forEach(async (item) => {
      const fecthID = await fetch(`https://api.mercadolibre.com/items?ids=${item.id}`)
      const resp = await fecthID.json();
      const product = await resp[0].body
      const { price } = product;
      totalCount(price * item.quantity)
    })
  }
  return(
    <div className="total-checkout-container">
      <p>Total: </p>
      <p>{ total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shoppingCartList: state.shoppingStore.shoppingCart,
  total: state.shoppingStore.totalCheckout
 });

 const mapDispatchToProps = (dispatch) => ({
   totalCount: (value) => dispatch(addTotalCheckout(value)),
   resetTotal: () =>dispatch(resetTotalCheckout())
 })

export default connect(mapStateToProps, mapDispatchToProps)(TotalCheckout);
