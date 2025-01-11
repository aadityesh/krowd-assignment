import React, { useState } from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const [item, setItem] = useState("");
  const [itemContainer, setItemContainer] = useState([]);

  const pushItem = () => {
    if (item.length > 0) {
      setItemContainer([...itemContainer, item]);
      setItem("");
    }
  };

  const handleDelete = (item) => {
    let newItems = [...itemContainer];
    newItems = newItems.filter((value) => value !== item);
    setItemContainer(newItems);
  };

  return (
    <>
      <Navigation title={"Item List App"} />
      <div className="p-8 text-center">
        <Title title={"Item List"} />
        <section className="min-w-full pt-[80px] flex flex-col gap-5 items-center justify-center">
          <input
            type="text"
            value={item}
            placeholder="Enter item"
            onChange={(e) => setItem(e.target.value)}
            className="border-[3px] p-2 min-w-[50%] border-black rounded-md text-[28px] outline-none"
          />
          <button
            onClick={pushItem}
            className="bg-[#4CD964] hover:bg-[#66f87e] rounded-md min-w-[50%] p-3 text-xl font-semibold border-black border shadow-md"
          >
            + Add Item
          </button>
        </section>
        <section className="pt-[40px] flex flex-col gap-6 justify-center items-center">
          {itemContainer.length === 0 ? (
            <p className="text-[20px]">Please add some items</p>
          ) : (
            <>
              <Title title={"List"} />
              {itemContainer.map((item) => (
                <ItemCard item={item} handleDelete={handleDelete} />
              ))}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ItemList;
