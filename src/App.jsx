// import { BsFillSunFill } from "react-icons/bs";
import AddItem from "./components/AddItem";
import List from "./components/List";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useState } from "react";
import {
  AppContainer,
  Mode,
  Header,
  ListContainer,
  Counter,
  Footer,
} from "./styles/Container";

export const theme = {
  colors: {
    AccentBlue: "hsl(220, 98%, 61%)",
    AccentGradiant: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
  },

  dark: {
    modeName: "dark",
    icon: "/assets/icon-sun.svg",
    colors: {
      mainBack: "hsl(235, 21%, 11%)",
      formBack: "hsl(235, 24%, 19%)",
      fontColor: "hsl(234, 39%, 85%)",
      statusColorActive: "hsl(236, 33%, 92%)",
      statusColor: "hsl(234, 11%, 52%)",
      bottomMsg: "hsl(233, 14%, 35%)",
      checked: "hsl(237, 14%, 26%)",
    },
  },

  light: {
    modeName: "light",
    icon: "/assets/icon-moon.svg",
    colors: {
      mainBack: "hsl(0, 0%, 98%)",
      formBack: "hsl(236, 33%, 92%)",
      checked: "hsl(233, 11%, 84%)",
      fontColor: "hsl(236, 9%, 61%)",
      statusColor: "hsl(235, 19%, 35%)",
    },
  },
};

function App() {
  const [mode, setMode] = useState("dark");
  const [items, setItems] = useState([]);
  const [increment, setIncrement] = useState(0);

  //choose the theme in the props (look at flip())
  const chosenTheme = theme[mode];

  //Add auto List Animation using AutoAnimate Library
  const [parent] = useAutoAnimate();

  // toggle mode
  function flip() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  // add new item to the list
  function setNewItems(newItem) {
    setItems(items.concat(newItem));
  }

  return (
    <AppContainer theme={theme} colors={chosenTheme}>
      <Header colors={chosenTheme}>
        <div>
          <h1>TODO</h1>
          <Mode onClick={() => flip()} theme={chosenTheme} />
        </div>
      </Header>

      <ListContainer ref={parent}>
        <AddItem
          chosenTheme={chosenTheme}
          newItem={setNewItems}
          increment={increment}
          setIncrement={setIncrement}
        />
        <List
          style={{ display: "grid", placeContent: "center" }}
          chosenTheme={chosenTheme}
          items={items}
          setNewList={setItems}
          setIncrement={setIncrement}
          increment={increment}
        />

        <Footer>
          <Counter>
            <span>{increment}</span>
          </Counter>
          {/* 
          update the number of checked (completed) items (to be added) 
          update the number of active (non checked) items (to be added) 
          */}
        </Footer>
      </ListContainer>
    </AppContainer>
  );
}

export default App;
