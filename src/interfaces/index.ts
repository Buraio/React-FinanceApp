export type tSetLogin = React.Dispatch<React.SetStateAction<boolean>>;

export type tSetCards = React.Dispatch<React.SetStateAction<ICard[]>>;

export type tChildrenProp = React.ReactNode;

export type tSetTotalValue = React.Dispatch<React.SetStateAction<number>>;

export type tSetLength = React.Dispatch<React.SetStateAction<number>>;

export type tSetFilter = React.Dispatch<React.SetStateAction<string>>;

export interface ICard {
  description: string;
  value: string;
  type: string;
}
