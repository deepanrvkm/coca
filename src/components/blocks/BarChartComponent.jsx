'use client';
import LoadingPage from '@/app/loading';
import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/chart');
        const result = await response.json();
        const formattedData = result.map((item) => ({
          name: item.month,
          value: item.value,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <ResponsiveContainer width="100%" height={370}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <XAxis
          dataKey="name"
          tick={{ angle: 90, textAnchor: 'start', fontSize: 12, dx: 4 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis ticks={[0, 1500, 2500]} axisLine={false} tickLine={false} />
        <Bar
          dataKey="value"
          radius={[10, 10, 10, 10]}
          barSize={16}
          onMouseOver={(_, index) => setHoveredIndex(index)}
          onMouseOut={() => setHoveredIndex(null)}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === hoveredIndex ? '#4e9aff' : '#8fbfff'}
            />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            content={({ x = 0, y = 0, value, index }) =>
              hoveredIndex === index ? (
                <foreignObject x={x - 17} y={y - 40} width={50} height={40}>
                  <div
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      padding: '4px 5px',
                      borderRadius: '4px',
                      textAlign: 'center',
                      position: 'relative',
                      fontSize: '13px',
                    }}
                  >
                    {value}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '5px solid black',
                      }}
                    />
                  </div>
                </foreignObject>
              ) : null
            }
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;