import React from 'react'

// Internal and Inline Styles
const Subscription = () => {

  // internal style 
  // instead creating objects in JS try comp-specific css file -- Subscription.css 
  const myStyles = {
    paraStyle: { 
      backgroundColor: 'red', 
      color: '#fff', 
      textAlign:'center' 
    },
    btnStyle: {
      border: 'solid 1px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px'
    }
  }

  return (
    <div className='text-center'>
      {/* External Styles from index.css */}
      <h3 className='info'>You are an active Subscriber!</h3>

      {/* Inline Styling - Never ever try this in loops */}
      <p style={ { backgroundColor: 'red', color: '#fff', textAlign:'center' } }>Your Subscription ends in 15 days!</p>

      {/* Internal Styling */}
      <p  style={myStyles.paraStyle}>Renew Now at 50% discount. Apply Coupon: OFFER50</p>
      <button type='button' style={myStyles.btnStyle} >RENEW NOW</button>
    </div>
  )
}

export default Subscription