import { useEffect, useState } from "react";
import { Chart} from "../Chart";
import { SideOptions } from "../SideOptions";
import { format, parseISO } from "date-fns";


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

export const ChartPage = () => {
    const [link, setLink] = useState("/res/copper/getAll");
    const [name, setName] = useState("Copper price history");
    const [prices, setPrices] = useState<Price[]>([]);
    const [conflicts, setConflicts] = useState<Conflict[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        try {
          const pricesResponse = await fetch('http://localhost:5000'+link);
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

    const handleClick = (link:string,name:string) => {
        setLink(link)
        setName(name)
        fetchData();
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <SideOptions handleClick={handleClick}/>
                    <Chart prices={roundedCommodityPrices} conflicts={roundedConflictPeriods} name={name}/>
            </div>
        </section>
      )
  };