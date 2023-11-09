'use client'
import React, { Component, useEffect } from 'react';
import { createChart } from 'lightweight-charts';


const PriceHistory = () => {

    useEffect(() => {
        const chartOptions = {
            layout: {
                textColor: 'black',
                background: { type: 'solid', color: '#f4efea' }

            }
        }
        const chartElement = document.getElementById('chart') as HTMLElement;
        const chart = createChart(chartElement, chartOptions);

        const newSeries = chart.addAreaSeries({
            lineColor: 'rgba(33,150,243,0.8)',
            topColor: 'rgba(33,150,243,0.4)',
            bottomColor: 'rgba(33,150,243,0)',
        })
        const lineSeries = chart.addAreaSeries({ lineColor: '#000000', topColor: '#000000', bottomColor: '#aaa' });

        const initialData = [
            { time: '2022-02-12', value: 96.63 },
            { time: '2022-03-13', value: 76.64 },
            { time: '2022-04-14', value: 81.89 },
            { time: '2022-05-15', value: 74.43 },
            { time: '2022-06-16', value: 80.01 },
            { time: '2022-07-17', value: 96.63 },
            { time: '2022-08-18', value: 76.64 },
            { time: '2022-09-19', value: 81.89 },
            { time: '2022-10-20', value: 74.43 },
            { time: '2022-11-11', value: 80.01 },
            { time: '2022-12-11', value: 70.01 },
            { time: '2023-01-11', value: 80.01 },
            { time: '2023-02-12', value: 96.63 },
            { time: '2023-03-13', value: 76.64 },
            { time: '2023-04-14', value: 81.89 },
            { time: '2023-05-15', value: 74.43 },
            { time: '2023-06-16', value: 80.01 },
            { time: '2023-07-17', value: 96.63 },
            { time: '2023-08-18', value: 76.64 },
            { time: '2023-09-19', value: 81.89 },
            { time: '2023-10-20', value: 74.43 },
            { time: '2023-11-11', value: 70.01 },
        ]
        lineSeries.setData(initialData)

        chart.timeScale().fitContent();
        return () => [chart.remove()]
    }, [])

    return (

        <div id="chart" className='h-72'></div>

    )
}

export default PriceHistory                             