import { useState } from "react";
import { Adder, Button, Input } from "../../styles/List";
function AddItem({ newItem, setIncrement, increment, chosenTheme }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    item &&
      newItem({ id: "Item_" + (Math.random() * 5).toString(), name: item });
    setIncrement(increment + 1);
    setItem("");
  }

  return (
    <Adder chosenTheme={chosenTheme}>
      <form onSubmit={handleSubmit}>
        <Input>
          <div />
          <input
            type="text"
            placeholder="Create a new item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </Input>

        <Button type="submit" />
      </form>
    </Adder>
  );
}

export default AddItem;
