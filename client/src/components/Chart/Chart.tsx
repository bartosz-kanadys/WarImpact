import { ChartComponent } from "./ChartComponent"
import { commodityPrices, conflictPeriods } from './data';
import { format, parseISO } from 'date-fns';

// Funkcja do zaokrąglania daty do roku i miesiąca
const roundDateToMonth = (dateString: string): string => {
  const date = parseISO(dateString);
  const roundedDate = new Date(date.getFullYear(), date.getMonth());
  return format(roundedDate, 'yyyy-MM');
};

// Zaokrąglanie dat w danych wejściowych
const roundedCommodityPrices = commodityPrices.map(price => ({
  ...price,
  date: roundDateToMonth(price.date),
}));

// Zaokrąglanie dat w danych dotyczących okresów konfliktów
const roundedConflictPeriods = conflictPeriods.map(period => ({
  ...period,
  start: roundDateToMonth(period.start),
  end: roundDateToMonth(period.end),
}));

export const Chart = () => {
    return(
        <>
            <ChartComponent Prices={roundedCommodityPrices} Conflicts={roundedConflictPeriods}/>
        </>
    )
}