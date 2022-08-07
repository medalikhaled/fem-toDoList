import { useId, useState } from "react";
import { ListItem, ClearButton, Check } from "../../styles/List";

function Item({ item, handleRemoveItem, chosenTheme }) {
  const [checked, setchecked] = useState(false);
  const id = useId();

  const handleChange = () => {
    setchecked(!checked);
  };

  const checkBoxState = {
    decoration: checked ? "line-through" : "none",
    color: checked
      ? "${({ chosenTheme }) => chosenTheme.colors.checked}"
      : "${({ chosenTheme }) => chosenTheme.colors.fontColor}",
  };

  return (
    <ListItem check={checkBoxState} chosenTheme={chosenTheme}>
      <label id={id + "label"}>
        <Check
          id={id + "input"}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {item.name}
      </label>
      {/* use AutoAnimate library to animate the list */}
      <ClearButton onClick={() => handleRemoveItem(item.id)}>
        <img src="./assets/icon-cross.svg" alt="clear item from the list" />
      </ClearButton>
    </ListItem>
  );
}

export default Item;
