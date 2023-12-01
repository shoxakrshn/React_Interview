export type DataType = {
  id: number;
  type: string;
  color: string;
  amount: number;
};

export const items: DataType[] = [
  { id: 1, type: 'mug', color: 'yellow', amount: 10 },
  { id: 2, type: 'book', color: 'white', amount: 1 },
  { id: 3, type: 'box', color: 'black', amount: 5 },
  { id: 4, type: 'mug', color: 'green', amount: 3 },
];
