import { getAveragePrice } from '../utils/getAverage'

interface PriceProps {
   price: number
   store: string
}

const useChart = (priceData: PriceProps[]) => {
   // priceData should look like this
   // [{ store: 'jumia', price: 4000 },
   //    { store: 'kara', price: 4000 },
   //    { store: 'slot', price: 4000 },
   // ]

   let DataPoints, Labels

   if (priceData !== undefined && priceData.length !== 0) {
      const av = getAveragePrice(priceData)
      DataPoints = av.map((points) => points.averageStorePrice)
      Labels = av.map((points) => points.store)

      return {
         chartData: {
            labels: Labels,
            datasets: [
               {
                  label: 'Tracked prices across stores',
                  data: DataPoints,
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
            maintainAspectRatio: false,
            responsive: true,
         },
      }
   } else {
      return null
   }
}

export default useChart

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
