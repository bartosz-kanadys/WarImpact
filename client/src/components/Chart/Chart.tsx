import { ChartComponent } from "./ChartComponent"
//import { commodityPrices, conflictPeriods } from './data';

type Props = {
  prices: Price[],
  conflicts: Conflict[],
  name:string
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

export const Chart = ({prices,conflicts,name}:Props) => {
    return(
        <>
            <h1>{name}</h1>
            <ChartComponent Prices={prices} Conflicts={conflicts}/>
        </>
    )
}