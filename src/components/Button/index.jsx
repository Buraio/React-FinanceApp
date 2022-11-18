import "./button.css";

export const Button = () => {
  return (
    <div id="listHeader">
      <span>Resumo financeiro</span>
      <div id="filterDiv">
        <button className="filter smallBtn btnHover">Todos</button>
        <button className="filter smallBtn btnHover">Entradas</button>
        <button className="filter smallBtn btnHover">Despesas</button>
      </div>
    </div>
  );
};
