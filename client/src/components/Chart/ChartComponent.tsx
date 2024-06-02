import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea,ReferenceLine, Label } from 'recharts';

type Price = {
  date: string,
  price: number,
}
type Conflict = {
  start: string,
  end:string,
}
type Props = {
  Prices: Price[],
  Conflicts: Conflict[],
} 
export const ChartComponent = ({Prices, Conflicts} :Props) => {
    return (
      <LineChart
        width={1000}
        height={500}
        data={Prices}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        {Conflicts.map(period => {
          if (period.start === period.end) {
            return (
                <ReferenceLine x={period.start} stroke="red" >
                  <Label fill="white">conflict</Label>
                </ReferenceLine>
            );
          } else {
            return (
              <ReferenceArea
                key={`${period.start}-${period.end}`}
                x1={period.start}
                x2={period.end}
                stroke='yellow'
                strokeOpacity={0.3}
              >
                <Label fill="white">conflict</Label>
              </ReferenceArea>
            );
          }
        })}
      </LineChart>
    );
  };
