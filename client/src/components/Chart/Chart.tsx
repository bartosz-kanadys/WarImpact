import { useState,useEffect } from 'react';
import { ChartComponent } from "./ChartComponent"
//import { commodityPrices, conflictPeriods } from './data';
import { format, parseISO } from 'date-fns';

// Funkcja do zaokrąglania daty do roku i miesiąca
const roundDateToMonth = (dateString: string): string => {
  const date = parseISO(dateString);
  const roundedDate = new Date(date.getFullYear(), date.getMonth());
  return format(roundedDate, 'yyyy-MM');
};



type Price = {
  date: string,
  price: number,
}
type Conflict = {
  name:string,
  begin: string,
  end:string,
  victims: number,
}

export const Chart = () => {

  const [prices, setPrices] = useState<Price[]>([]);
  const [conflicts, setConflicts] = useState<Conflict[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pricesResponse = await fetch('http://localhost:5000/res/copper/getAll');
        const pricesData = await pricesResponse.json();

        const conflictsResponse = await fetch('http://localhost:5000/conflicts/getConflicts');
        const conflictsData = await conflictsResponse.json();

        setPrices(pricesData);
        setConflicts(conflictsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

        // Zaokrąglanie dat w danych wejściowych
    const roundedCommodityPrices = prices.map(price => ({
      ...price,
      date: roundDateToMonth(price.date),
    })).filter(price => price.price != 0).reverse();

    // Zaokrąglanie dat w danych dotyczących okresów konfliktów
    const roundedConflictPeriods = conflicts.map(conflict => ({
      ...conflict,
      begin: roundDateToMonth(conflict.begin),
      end: roundDateToMonth(conflict.end),
    })).filter(conflict => conflict.victims >= 500000);
    console.log(roundedCommodityPrices)
    console.log(roundedConflictPeriods)
    return(
        <>
            <ChartComponent Prices={roundedCommodityPrices} Conflicts={roundedConflictPeriods}/>
        </>
    )
}