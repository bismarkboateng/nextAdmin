"use client"

import { LineChart, YAxis, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function Chart() {

  const data = [
    {
      name: "Mon",
      visit: 1000,
      click: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 5000,
    },
    {
      name: "Wed",
      visit: 500,
      click: 1200,
    },
    {
      name: "Thurs",
      visit: 200,
      click: 1000,
    },
    {
      name: "Fri",
      visit: 1400,
      click: 3000,
    },
    {
      name: "Sat",
      visit: 300,
      click: 1000,
    },
    {
      name: "Sun",
      visit: 1350,
      click: 3000,
    },
  ]



  return (
    <section className="h-[450px] bg-[#182237] p-5 rounded-xl">
     <h1 className="font-light text-[#b7bac1] mb-5">Weekly Recap</h1>
     <ResponsiveContainer width="100%" height="90%" > 
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
      }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ background: "#151c2c", borderRadius: "6px", border: "none"}} />
        <Legend />
        <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
      </LineChart>
     </ResponsiveContainer>
    </section>
  )
}
