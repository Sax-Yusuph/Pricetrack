import { getAveragePrice } from '../utils/getAverage'

interface PriceProps {
	price: number
	store: string
}

const useChart = (priceData?: PriceProps[]) => {
	// priceData should look like this
	// [{ store: 'jumia', price: 4000 },
	//    { store: 'kara', price: 4000 },
	//    { store: 'slot', price: 4000 },
	// ]

	if (priceData !== undefined && priceData.length !== 0) {
		const av = getAveragePrice(priceData)
		const DataPoints = av.map(points => points.averageStorePrice)
		const Labels = av.map(points => points.store)

		return {
			chartData: {
				labels: Labels,
				datasets: [
					{
						label: 'average selling price',
						data: DataPoints,
						fill: false,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: '#fff', //graph line color
						// borderColor: '#1d8cf8',
						borderWidth: 2,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBackgroundColor: '#3db83a',
						pointBorderColor: 'rgba(255,255,255,0)',
						pointHoverBackgroundColor: '#5464ed',
						//pointHoverBorderColor:'rgba(35,46,55,1)',
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4,
					},
				],
			},
			chartOptions: {
				title: {
					display: true,
					text: 'Prices across stores',
					fontColor: '#fff',
				},
				scales: {
					yAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								// drawBorder: true,
								color: 'rgba(81, 33, 111, 0.25)',
								zeroLineColor: 'transparent',
							},
							ticks: {
								maxTicksLimit: 5,
								// display: false,
								// suggestedMin: 0,
								// suggestedMax: 350,
								padding: 20,
								fontColor: '#fff',
							},
						},
					],
					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(81, 33, 111, 0.25)',
								zeroLineColor: 'rgba(81, 33, 111, 0.25)',
							},
							ticks: {
								padding: 20,
								fontColor: '#fff',
							},
						},
					],
				},
				maintainAspectRatio: false,
				responsive: true,
				legend: {
					display: false,
				},

				tooltips: {
					backgroundColor: '#fff',
					titleFontColor: '#3db83a',
					bodyFontColor: '#666',
					bodySpacing: 4,
					xPadding: 12,
					mode: 'nearest',
					intersect: 0,
					position: 'nearest',
				},
			},
		}
	} else {
		return {
			// chartData: [200, 300, 400, 500, 600],
			// chartOptions: null,
			chartData: {
				labels: ['jumia', 'konga', 'aliexpress', 'ebay', 'kara'], //Labels,
				datasets: [
					{
						label: 'average selling price',
						data: [80, 160, 200, 160, 250], //DataPoints,
						fill: false,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: '#fff', //graph line color
						// borderColor: '#1d8cf8',
						borderWidth: 2,
						borderDash: [],
						borderDashOffset: 0.0,
						pointBackgroundColor: '#3db83a',
						pointBorderColor: 'rgba(255,255,255,0)',
						pointHoverBackgroundColor: '#5464ed',
						//pointHoverBorderColor:'rgba(35,46,55,1)',
						pointBorderWidth: 20,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 15,
						pointRadius: 4,
					},
				],
			},
			chartOptions: {
				title: {
					display: true,
					text: 'Prices across stores',
					fontColor: '#fff',
				},
				scales: {
					yAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								// drawBorder: true,
								color: 'rgba(81, 33, 111, 0.25)',
								zeroLineColor: 'transparent',
							},
							ticks: {
								maxTicksLimit: 5,
								// display: false,
								// suggestedMin: 0,
								// suggestedMax: 350,
								padding: 20,
								fontColor: '#fff',
							},
						},
					],
					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(81, 33, 111, 0.25)',
								zeroLineColor: 'rgba(81, 33, 111, 0.25)',
							},
							ticks: {
								padding: 20,
								fontColor: '#fff',
							},
						},
					],
				},
				maintainAspectRatio: false,
				responsive: true,
				legend: {
					display: false,
				},

				tooltips: {
					backgroundColor: '#fff',
					titleFontColor: '#3db83a',
					bodyFontColor: '#666',
					bodySpacing: 4,
					xPadding: 12,
					mode: 'nearest',
					intersect: 0,
					position: 'nearest',
				},
			},
		}
	}
}

export default useChart

// chartData: {
//             labels: Labels,
//             datasets: [
//                {
//                   label: 'Tracked prices across stores',
//                   data: DataPoints,
//                   fill: false,
//                   backgroundColor: 'rgba(75,192,192,0.4)',
//                   borderColor: 'rgba(75,192,192,1)',
//                   lineTension: 0,
//                   borderCapStyle: 'butt',
//                   borderDash: [],
//                   borderDashOffset: 0.0,
//                   borderJoinStyle: 'miter',
//                   pointBorderColor: 'rgba(75,192,192,1)',
//                   pointBackgroundColor: '#fff',
//                   pointBorderWidth: 1,
//                   pointHoverRadius: 5,
//                   pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                   pointHoverBorderColor: 'rgba(220,220,220,1)',
//                   pointHoverBorderWidth: 2,
//                   pointRadius: 1,
//                   pointHitRadius: 10,
//                },
//             ],
//          },
//          chartOptions: {
//             scales: {
//                yAxes: [
//                   {
//                      ticks: {
//                         maxTicksLimit: 5,
//                      },
//                   },
//                ],
//             },
//             maintainAspectRatio: false,
//             responsive: true,
//          },
//       }
