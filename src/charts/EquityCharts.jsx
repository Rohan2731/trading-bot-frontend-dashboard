import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { equityData } from "../data/equityData";

function EquityChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={equityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default EquityChart;