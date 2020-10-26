import { useState, useEffect } from 'react'
import { getAveragePrice } from '../utils/getAverage'

interface PriceProps {
   price: number
   store: string
}

// initialize data
const initData: number[] = []

// initialize labels
const initLabel: string[] = []

const useChart = (priceData: PriceProps[]) => {
   // priceData should look like this
   // [{ store: 'jumia', price: 4000 },
   //    { store: 'kara', price: 4000 },
   //    { store: 'slot', price: 4000 },
   // ]

   const [dataPoints, setDataPoints] = useState(initData)
   const [storeLabels, setStoreLabels] = useState(initLabel)

   useEffect(() => {
      const averagePrice = () => {
         if (priceData !== undefined && priceData.length !== 0) {
            const av = getAveragePrice(priceData)
            const getDataPoints = av.map((points) => points.averageStorePrice)
            const getLabels = av.map((points) => points.store)
            setDataPoints(getDataPoints)
            setStoreLabels(getLabels)
         }
      }

      // average data should look like this.
      //[
      //    { store: 'jumia', averageStorePrice: 4037.3333333333335 },
      //    { store: 'slot', averageStorePrice: 4225 },
      //    { store: 'kara', averageStorePrice: 3578.4615384615386 },
      //    { store: 'ebay', averageStorePrice: 5500 }
      //  ]

      return () => averagePrice()
   }, [priceData, dataPoints])

   return {
      chartData: {
         labels: storeLabels,
         datasets: [
            {
               label: 'Tracked prices across stores',
               data: dataPoints,
               fill: false,
               backgroundColor: 'rgba(75,192,192,0.4)',
               borderColor: 'rgba(75,192,192,1)',
               lineTension: 0,
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: 'rgba(75,192,192,1)',
               pointBackgroundColor: '#fff',
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
               pointHoverBorderColor: 'rgba(220,220,220,1)',
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
         ],
      },
      chartOptions: {
         scales: {
            yAxes: [
               {
                  ticks: {
                     maxTicksLimit: 5,
                  },
               },
            ],
         },
         maintainAspectRatio: true,
         responsive: true,
      },
   }

   //    {datasets: [
   //       {
   // label: "# of Votes",
   //          fill: false,
   //          lineTension: 0,
   //          backgroundColor: 'rgba(75,192,192,0.4)',
   //          borderColor: 'rgba(75,192,192,1)',
   //          borderCapStyle: 'butt',
   //          borderDash: [],
   //          borderDashOffset: 0.0,
   //          borderJoinStyle: 'miter',
   //          pointBorderColor: 'rgba(75,192,192,1)',
   //          pointBackgroundColor: '#fff',
   //          pointBorderWidth: 1,
   //          pointHoverRadius: 5,
   //          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
   //          pointHoverBorderColor: 'rgba(220,220,220,1)',
   //          pointHoverBorderWidth: 2,
   //          pointRadius: 1,
   //          pointHitRadius: 10,
   //          data: dataPoints,
   //       },
   //    ],
   // }
}

export default useChart
