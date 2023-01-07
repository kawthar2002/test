const fakeAPi = [
  {
    id: 1,
    name: "Участник №1",
    standart: "-",
    date: 80,
    garantee: 24,
    condition: "30%",
    price: "3,700,000",
  },
  {
    id: 2,
    name: "Участник №2",
    standart: "-",
    date: 90,
    garantee: 24,
    condition: "100%",
    price: "3,200,000",
  },
  {
    id: 3,
    name: "Участник №3",
    standart: "-",
    date: 75,
    garantee: 22,
    condition: "60%",
    price: "2,800,000",
  },
];

export const getDataFromfakeAPi = () => {
  return fakeAPi;
};
