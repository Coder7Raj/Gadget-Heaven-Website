import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { year: 2020, Revenue: 120000, Employees: 250 },
  { year: 2021, Revenue: 180000, Employees: 470 },
  { year: 2022, Revenue: 250000, Employees: 644 },
  { year: 2023, Revenue: 350000, Employees: 822 },
];

const Statistics = () => {
  return (
    <div
      className="w-11/12 lg:w-full md:w-full mb-20 lg:mb-10 md:mb-16"
      style={{ height: 400 }}
    >
      <h3 className="font-bold text-xl mt-4 mb-10">Gadget Heaven Growth</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="0%" // Keeps the bars aligned without extra gaps
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Revenue Bar with xOffset for gap */}
          <Bar
            dataKey="Revenue"
            fill="#8e24aa"
            barSize={20}
            // Add an xOffset for the Revenue Bar to create a gap
            xOffset={-10}
          >
            <LabelList dataKey="Revenue" position="top" />
          </Bar>

          {/* Employees Bar with xOffset for gap */}
          <Bar
            dataKey="Employees"
            fill="#42a5f5"
            barSize={20}
            // Add an xOffset for the Employees Bar to create a gap
            xOffset={10}
          >
            <LabelList dataKey="Employees" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
