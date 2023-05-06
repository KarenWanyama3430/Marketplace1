import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import { Item } from "./components/item";
import { Menu } from "./components/menu";
import { useRef } from "react";

function App() {

  // Declare State 
  const [data, setData] = useState([]);
  const [restore, setRestore] = useState([]);
const [search, setSearch] = useState("");

// Create reference for input field
  const ref = useRef();

  // function to update state for search

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(ref.current.value);
  };


// side effect for filtering results, avoid adding other dependeci
  useEffect(() => {
    if (search === "") {
      setData(restore);
    } else if (data != []) {
      setData(
        restore.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search]);


 //  fetch json data from file //todo: replace with sever fetch
  const getData = async () => {
    await fetch("/src/assets/data.json")
      .then((data) => data.json())
      .then((data) => {
        setData(data.message.result);
        setRestore(data.message.result);
      });
  };

  // fetch data on initial page load
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-slate-200 h-full min-h-screen relative justify-center">
      <input
        placeholder="Search For Dealers"
        type="text"
        ref={ref}
        onChange={handleChange}
        className="md:w-[50%] h-12 p-2 w-[88%] mx-[6%] md:mx-[25%] rounded-md mb-12 mt-2"
      />
      <div className="  ">
        {/* Conditional Loading, Prefferably use a spinner*/}
        {data != [] ? (
          <div className="">
            <div className="grid mx-auto md:mx-[15%] grid-flow-row place-content-center">
              {data.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Menu />
    </div>
  );
}

export default App;
