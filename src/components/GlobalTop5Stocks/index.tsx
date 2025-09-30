import React from "react";
import GlobalStocks from "@/components/GlobalTop5Stocks/GlobalStocks";
import GlobalStockChart from "@/components/GlobalTop5Stocks/GlobalStockChart";
import stocks from "@/fakeData/top5Stocks.json";
import { Stock } from "@/types/stocks";

const GlobalTop5Stocks = () => {
  const [stocksLists, setStocksLists] = React.useState(
    stocks.top5GlobalStocks
      .sort((a: Stock, b: Stock) => b.daily_percentage - a.daily_percentage)
      .slice(0, 5),
  );

  const filterStock = (value: string) => {
    const lists = stocks.top5Stocks.filter(
      (item: Stock) => item.category === value,
    );
    setStocksLists(lists.slice(0, 5));
  };

  const props = { stocksLists, setStocksLists, filterStock };
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <GlobalStocks {...props} />
      <GlobalStockChart {...props} />
    </div>
  );
};

export default GlobalTop5Stocks;
