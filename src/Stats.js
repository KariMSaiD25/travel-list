export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to the packing list 🚀</em>
      </footer>
    );
  let totalItems = items.length;
  let packedItems =
    totalItems - items.filter((item) => item.packed === false).length;
  let stats = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {stats !== 100 ? (
        <em>
          💼 You have {totalItems} items on Your list, and already packed{" "}
          {packedItems} ({stats}%){" "}
        </em>
      ) : (
        <em>You got everything ready to go ✈</em>
      )}
    </footer>
  );
}
