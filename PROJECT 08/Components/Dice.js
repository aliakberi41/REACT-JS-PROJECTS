import React from 'react'

const Dice = (props) => {
  const styles={
    backgroundColor: props.isHeld ? "#59E391" :"white"
  }
  return (
    <>
  <div style={styles} className='dice-face' onClick={props.onHold}>
    <h2 className='die-num'>{props.value} </h2>
    </div>
    </>
  )
}

export default Dice