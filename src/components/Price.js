import stockData from '../data';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Stock () {
  
  const { symbol } = useParams()
  const [stock, setStock] = useState(null)

  
  useEffect(() => {
    const getStock = async () => {
        try {
            const data = stockData.find(theStock => theStock.symbol === symbol);
            setStock(data);
        } catch (error) {
            console.error(error);
        }
    }
    getStock();
    }, [symbol]);

  const loaded = () => {
    return (
        <div>
            <h1>{stock.name} / {stock.symbol}</h1>
            <h2>Last Price : {stock.lastPrice}</h2>
            <h2 className='changeElement'>Change : {stock.change}</h2>
            <h2>High : {stock.high}</h2>
            <h2>Low : {stock.low}</h2>
            <h2>Open : {stock.open}</h2>

            
        </div>
    )
}
  const loading = () => {
    return (
    <h1>Loading...</h1>
    )
  }

  return (
    stock && stock.name ? loaded() : loading()
  )
}