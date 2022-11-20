import './totalMoney.css';

export const TotalMoney = ({ totalValue }) => {

  return (
    <div id="totalMoneyDiv">
      <div>
        <h2>Valor total:</h2>
        <span className='value'>R$ {totalValue}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
