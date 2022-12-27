import { Link } from "react-router-dom";
import stockData from '../data';

export default function Stocks () {
  return (
    <div className="stocks">
      {stockData.map((stock) => {
        const { name, symbol, } = stock;

        return (
          <Link key={symbol} to={`/price/${symbol}`}>
            <h3>{name}</h3>
          </Link>
        );
      })}
    </div>
  );
};