interface HeroProps {
    onClickSearch: () => void
}

const Hero: React.FC<HeroProps> = (props) => {
  const cards = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Apple" },
  ];

  const { onClickSearch } = props

  return (
    <div className="m-12 mt-36 grid grid-rows-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">
      <div className="mx-auto flex flex-col justify-center items-center text-center w-full lg:col-span-2 xl:col-span-1 lg:items-start lg:text-left sm:w-[575px]">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl sm:leading-tight lg:leading-tight font-semibold mb-8">
          Data to <span className="text-green-600">Jumpstart</span> Your Next Investment
        </h1>
        <div onClick={onClickSearch} className="relative p-5 pl-10 w-full rounded-lg border border-gray-300 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
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
          <div className="text-sm text-gray-500">
            <p className="text-left">Search Companies<span className="sm:hidden">...</span><span className="hidden sm:inline">, Trends...</span></p>
          </div>
          <p className="text-white absolute right-2.5 bottom-3 bg-green-600 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600">
            Search
          </p>
        </div>
      </div>
      <div className="w-full max-w-[575px] lg:w-[300px] xl:w-[500px] mx-auto flex lg:block">
        {cards.map((card) => (
          <div key={card.id} className="my-4 first:mr-4 last:hidden sm:last:block sm:last:ml-4 lg:first:mr-0 lg:last:ml-0 p-4 w-full border rounded-lg ">
            <div>{card.name}</div>
            <p>___/-----</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
