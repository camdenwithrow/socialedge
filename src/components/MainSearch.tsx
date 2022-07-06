import React, { useState, useEffect, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

import { AiOutlineClose } from "react-icons/ai";

const results = [
  {
    id: 0,
    ticker: "AAPL",
    name: "Apple Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 1,
    ticker: "MSFT",
    name: "Microsoft Corporation",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 2,
    ticker: "GOOG",
    name: "Alphabet Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 3,
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 4,
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 5,
    ticker: "TSLA",
    name: "Tesla, Inc",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 6,
    ticker: "BRK-A",
    name: "Berkshire Hathaway Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 7,
    ticker: "BRK-B",
    name: "Berkshire Hathaway Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 8,
    ticker: "FB",
    name: "Meta Platforms, Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 9,
    ticker: "META",
    name: "Meta Platforms, Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 10,
    ticker: "JNJ",
    name: "Johnson & Johnson",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 11,
    ticker: "V",
    name: "Visa Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 12,
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 13,
    ticker: "JPM",
    name: "JPMorgan Chase & Co.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 14,
    ticker: "PG",
    name: "The Procter & Gamble Company",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 15,
    ticker: "WMT",
    name: "Walmart Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 16,
    ticker: "BAC",
    name: "Bank of America Corporation",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 17,
    ticker: "CVX",
    name: "Chevron Corporation",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 18,
    ticker: "MA",
    name: "Mastercard Incorporated",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 19,
    ticker: "HD",
    name: "The Home Depot, Inc.",
    tags: "",
    chart: {},
    price: 133.53,
  },
  {
    id: 20,
    ticker: "LLY",
    name: "Eli Lilly and Company",
    tags: "",
    chart: {},
    price: 133.53,
  },
];

export interface MainSearchProps {
  openSearch: boolean;
  setOpenSearch: (movies: boolean) => void;
}

const MainSearch: React.FC<MainSearchProps> = (props) => {
  const { openSearch, setOpenSearch } = props;

  const closeSearch = () => {
    setSearchVal("");
    setOpenSearch(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, closeSearch);

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (openSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  return (
    <div
      className={`${!openSearch && "hidden"} absolute z-50 inset-0 bg-white/90`}
    >
      <div
        ref={modalRef}
        className="relative mx-auto w-full sm:w-[640px] lg:w-[800px]"
      >
        <div className="w-full h-20 bg-white flex items-center">
          <form className="mx-auto w-full px-3 sm:w-[640px] lg:w-[800px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                ref={inputRef}
                type="search"
                id="default-search"
                value={searchVal}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Mockups, Logos..."
              />
              <button
                type="button"
                onClick={closeSearch}
                className="text-gray-500 absolute bottom-2 right-2 p-2 rounded hover:bg-gray-300"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto -mt-5 w-full px-3 sm:w-[640px] lg:w-[800px]">
          <div className="h-[32rem] px-4 pt-2 bg-white border rounded-lg overflow-y-scroll">
            <div className="sticky -top-0.5 pt-3 pb-4 bg-white grid grid-cols-12 text-gray-500 text-xs">
              <div className="col-span-2">SYMBOL</div>
              <div className="col-span-3">COMPANY</div>
              <div className="col-span-3">RELATED TAGS</div>
              <div className="col-span-2 text-right">CHART</div>
              <div className="col-span-2 text-right">PRICE</div>
            </div>
            {results.map((result) => (
              <div
                key={result.id}
                className="grid grid-cols-12 text-gray-500 text-sm py-3 border-b last:border-0"
              >
                <div className="col-span-2">{result.ticker}</div>
                <div className="col-span-3">{result.name}</div>
                <div className="col-span-3">{result.tags}</div>
                <div className="col-span-2 text-right"></div>
                <div className="col-span-2 text-right">${result.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
