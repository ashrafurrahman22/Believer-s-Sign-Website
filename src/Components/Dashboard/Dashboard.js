import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];


    return (
       <div className='charts'>
            <div>
            <LineChart width={500} height={500} data={data}>
             <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey={'sell'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <YAxis></YAxis>
        </LineChart>
            </div>
        
        <div>
            <BarChart width={500} height={500} data={data}>
                <Bar dataKey={'revenue'} fill='#8884d8'></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
            <p className='barname'>Revenue Summary</p>
        </div>

       </div>
        
    );
};

export default Dashboard;