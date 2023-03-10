import React, { useEffect, useState } from "react";
import { IData } from "../models";

interface DataProps {
  inputText: string;
  items: IData[];
}

function Data({ items, inputText }: DataProps) {
  const [itemsToView, setItemsToView] = useState<IData[]>([]);
  const [searchItems, setSearchItems] = useState<IData[]>([]);
  const [directionSort, setDirectionSort] = useState(true);

  useEffect(() => {
    setItemsToView(items);
  }, [items]);

  // const test = useCallback((type) => {
  //
  //}, [itemsToView])

  function handleSort(type: string) {
    let sortedData = [...itemsToView];

    if (type === "id") {
      if (directionSort) {
        sortedData = sortedData.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
      }
      sortedData = sortedData.reverse();
    }

    if (type === "title") {
      if (directionSort) {
        sortedData = sortedData.sort((a, b) => {
          return a.title > b.title ? 1 : -1;
        });
      }
      sortedData = sortedData.reverse();
    }

    if (type === "body") {
      if (directionSort) {
        sortedData = sortedData.sort((a, b) => {
          return a.body > b.body ? 1 : -1;
        });
      }
      sortedData = sortedData.reverse();
    }

    setItemsToView(sortedData);
    setDirectionSort(!directionSort);
  }

  useEffect(() => {
    if (inputText && inputText.length > 0) {
      const newItems = items.filter((el) => {
        if (
          el.title.toLowerCase().includes(inputText) ||
          el.body.toLowerCase().includes(inputText)
        ) {
          return el;
        }
      });
      setSearchItems(newItems);
    } else {
      setSearchItems(items);
    }
  }, [inputText]);

  useEffect(() => {
    setItemsToView(searchItems);
  }, [searchItems]);

  return (
    <div className="">
      <table className="font-sans">
        <thead className="bg-table-head text-slate-200">
          <tr className="">
            <th
              className="w-24 text-center  py-4 px-2"
              onClick={() => handleSort("id")}
            >
              ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </th>
            <th className="" onClick={() => handleSort("title")}>
              Title
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </th>
            <th className="" onClick={() => handleSort("body")}>
              Description
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {itemsToView.map((item) => (
            <tr className="border-2 " key={item.id}>
              <td className="border-2 text-center">{item.id} </td>
              <td className="border-2 px-2 py-1">{item.title}</td>
              <td className="border-2 px-2 py-1">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
