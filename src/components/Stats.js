export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p className="stats">
          <em>Start adding some items to your bag!</em>
        </p>
        <p>
          Made with{" "}
          <span
            style={{
              color: "#f1356d",
            }}
          >
            ❤
          </span>{" "}
          by Pranjal Pratap Singh with React ⚛{" "}
        </p>
      </footer>
    );
  const itemsLength = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / itemsLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything Set & Packed. Ready to Go!!✈✈🌍🌏🌎"
          : `
        💼 You have ${itemsLength} items on your list, and you have already
        packed ${itemsPacked} items (${percentage}%)`}
      </em>
      <p>
        Made with{" "}
        <span
          style={{
            color: "#f1356d",
          }}
        >
          ❤
        </span>
        by Pranjal Pratap Singh with React ⚛{" "}
      </p>
    </footer>
  );
}
