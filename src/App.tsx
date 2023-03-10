import { useEffect, useState, useMemo } from "react";
import Data from "./components/Data";
import axios from "axios";
import { IData } from "./models";

import { Route, Routes, useSearchParams } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

function App() {
  const [inputText, setInputText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = useMemo(
    () => Number(searchParams.get("page")),
    [searchParams]
  );

  const [items, setItems] = useState<IData[]>([]);
  const [activePage, setActivePage] = useState<number>(pageParam);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchItems(id: number) {
    setIsLoading(true);
    const response = await axios.get<IData[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    setItems(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchItems(activePage);
  }, [activePage]);

  useEffect(() => {
    setSearchParams({ page: `${activePage}` });
  }, [activePage]);

  return (
    <div className="container mx-auto pt-5 max-w-6xl">
      {isLoading && <Loader />}

      <SearchBar setInputText={setInputText} />

      <Routes>
        <Route
          path="/"
          element={<Data inputText={inputText} items={items} />}
        />
      </Routes>

      <Pagination setActivePage={setActivePage} activePage={activePage} />
    </div>
  );
}

export default App;
