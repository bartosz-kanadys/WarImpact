import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea,ReferenceLine, Label, Brush, ResponsiveContainer } from 'recharts';

type Price = {
  date: string,
  price: number,
}
type Conflict = {
  name:string,
  begin: string,
  end:string,
}
type Props = {
  Prices: Price[],
  Conflicts: Conflict[],
} 

const CustomTooltip = ({ active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-slate-600 p-2 border-2 border-black">
        <p className="label">{`${label}-01 : ${payload[0].value}$`}</p>
      </div>
    );
  }

  return null;
};

export const ChartComponent = ({Prices, Conflicts} :Props) => {
    return (
      <ResponsiveContainer  height={500} >
      <LineChart
        data={Prices}
        margin={{
          top: 20, right: 100, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        {Conflicts.map(period => {

          return (
              <ReferenceLine key={`${period.name}StartLine`} x={period.begin} stroke="red" >
                <Label fill="white" angle={-90}  offset={10}>{period.name}</Label>
              </ReferenceLine>
          );

          })}
          {Conflicts.map(period => {

          return (
              <ReferenceLine key={`${period.name}EndLine`} x={period.end} stroke="red" >
                <Label fill="rgba(255, 255, 255, 0.5)" angle={-90}  offset={10}>{period.name} - koniec</Label>
              </ReferenceLine>
          );

          })}
          {Conflicts.map(period => {
            return (
              <ReferenceArea
                key={period.name}
                x1={period.begin}
                x2={period.end}
                ifOverflow='visible'
                fill="rgba(255, 0, 0, 0.2)"
              >
              </ReferenceArea>
            );
        })}
        <Brush dataKey="date" height={30} stroke="#8884d8" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
      </LineChart>
      </ResponsiveContainer>
    );
  };
