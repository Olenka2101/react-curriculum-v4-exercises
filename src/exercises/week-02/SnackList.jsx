function SnackList() {
  const snacks = [
    {
      name: 'Bananas',
      rank: 3,
    },
    {
      name: 'Yogurt',
      rank: 2,
    },
    {
      name: 'Cheese Sticks',
      rank: 4,
    },
    {
      name: 'Strawberries',
      rank: 5,
    },
    {
      name: 'Chocolate',
      rank: 1,
    },
  ];
  snacks.sort((a, b) => a.rank - b.rank);
  return (
    <>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.rank}>
            {snack.rank} {snack.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SnackList;
