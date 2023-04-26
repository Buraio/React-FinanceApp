import "./cardList.css";
import { tChildrenProp } from "../../interfaces";

interface ICardListProps {
  children: tChildrenProp;
}

const CardList = ({ children }: ICardListProps) => {
  return <ul id="entryList">{children}</ul>;
};

export default CardList;
