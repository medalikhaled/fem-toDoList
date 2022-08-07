import Item from "../Item";

function List({ items, setNewList, setIncrement, increment, chosenTheme }) {
  function handleRemoveItem(id) {
    setNewList(items.filter((object) => object.id !== id));
    setIncrement(increment - 1);
  }
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
          chosenTheme={chosenTheme}
        />
      ))}
    </>
  );
}

export default List;
