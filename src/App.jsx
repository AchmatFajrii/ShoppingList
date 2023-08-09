import { useState } from "react";
import "./App.css";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import FormSearch from "./components/FormSearch";
import Info from "./components/Info";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Roti Coklat", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank list!");
      return;
    } else if (!isNaN(value)) {
      alert("No number list");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = todos.slice();
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = todos.slice();
    if (newTodos[index].count > 1) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />
      <Container>
        <FormSearch
          handleSubmit={handleSubmit}
          targetValue={(e) => setValue(e.target.value)}
          value={value}
        />
        <Info
          todoLength={todos.length}
          totalCounts={getTotalCounts()}
          setTodos={() => setTodos([])}
        ></Info>

        {todos.length > 0 ? (
          <div className="todos shadow-lg overflow-x-hidden overflow-y-auto rounded-lg max-h-[640px]">
            {todos.map((todo, index) => {
              return (
                <div
                  className="todo flex justify-between items-center h-[60px] py-[12px] px-[16px] text-black-400 text-[16px] font-semibold"
                  key={index}
                >
                  {todo.title}
                  <div className="todo-icon-wrapper flex items-center justify-between w-[120px]">
                    <div className="todo-count flex justify-center items-center w-[32px] h-[24px] rounded-sm text-slate-400 shadow-md">
                      {todo.count}
                    </div>
                    <button
                      onClick={() => handleSubstractionCount(index)}
                      className="todo-action-button text-[20px]"
                    >
                      <span>
                        <BiMinusCircle />
                      </span>
                    </button>
                    <button
                      onClick={() => handleAdditionCount(index)}
                      className="todo-action-button text-[20px]"
                    >
                      <span>
                        <BiPlusCircle />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center text-gray-400 mt-20 font-bold">
            Wah kosong nih
          </div>
        )}
      </Container>
    </>
  );
};

export default App;
