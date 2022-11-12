import React from 'react'
import "./bear-cards.scss"
function BearCards() {
  return (
    <div className='bear-cards-container'>
      <img
        src={require(`../../assets/png/Group 1000002593.png`)}
        className="bear-cards"
      />
      <img
        src={require(`../../assets/png/Group 1000002594.png`)}
        className="bear-cards"
      />
      <img
        src={require(`../../assets/png/Group 1000002588.png`)}
        className="bear-cards"
      />
      <img
        src={require(`../../assets/png/Group 1000002590.png`)}
        className="bear-cards"
      />
      <img
        src={require(`../../assets/png/Group 1000002592.png`)}
        className="bear-cards"
      />
    </div>
  );
}

export default BearCards