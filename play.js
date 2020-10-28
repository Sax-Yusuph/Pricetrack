// // const fs = require('fs')
// // const db = {
// //    products: [
// //       {
// //          id: Math.floor(Math.random() * 100 + 1).toString(),
// //          name: 'infinix note 8',
// //          items: [
// //             {
// //                id: '290',
// //                websiteName: 'jumia',
// //                productName:
// //                   'Scanfrost 6.8kg Twin Tub Semi-Automatic Washing Machine - SFSANTTD6.- White',
// //                productLink:
// //                   'https://www.jumia.com.ng//scanfrost-6.8kg-twin-tub-semi-automatic-washing-machine-sfsanttd6.-white-21153934.html',
// //                productImage:
// //                   'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/935112/1.jpg?0510',
// //                productStore: 'not provided',
// //                productAvailability: 'Official Store',
// //                officialBadge: 'not provided',
// //                price: '₦ 47,990',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '171',
// //                websiteName: 'jumia',
// //                productName:
// //                   'Nexus 4.5kg Single Tub Washing Machine (NX-WM-4SASR)',
// //                productLink:
// //                   'https://www.jumia.com.ng//4.5kg-single-tub-wasing-machine-nexus-mpg232354.html',
// //                productImage:
// //                   'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/939202/1.jpg?5906',
// //                productStore: 'not provided',
// //                productAvailability: 'Official Store',
// //                officialBadge: 'not provided',
// //                price: '₦ 29,526',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '442',
// //                websiteName: 'jumia',
// //                productName:
// //                   'Binatone Semi-Automatic 7kg Washing Machine BWM-070B- White',
// //                productLink:
// //                   'https://www.jumia.com.ng//semi-automatic-7kg-washing-machine-bwm-070b-white-binatone-mpg1239127.html',
// //                productImage:
// //                   'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/221852/1.jpg?4026',
// //                productStore: 'not provided',
// //                productAvailability: 'Official Store',
// //                officialBadge: 'not provided',
// //                price: '₦ 48,490',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '573',
// //                websiteName: 'jumia',
// //                productName: 'Century 6kg Automatic Washing Machine CW8523-A',
// //                productLink:
// //                   'https://www.jumia.com.ng//century-6kg-automatic-washing-machine-cw8523-a-45127438.html',
// //                productImage:
// //                   'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/472154/1.jpg?8832',
// //                productStore: 'not provided',
// //                productAvailability: 'Official Store',
// //                officialBadge: 'not provided',
// //                price: '₦ 60,190',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '854',
// //                websiteName: 'kara',
// //                productName: 'Polystar Washing Machine 4.5Kg Single Tube',
// //                productLink:
// //                   'https://www.kara.com.ng/polystar-washing-machine-4-5kg-single-tube',
// //                productImage:
// //                   'https://www.kara.com.ng/pub/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/p/o/pol.jpg',
// //                price: '₦29,700.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '925',
// //                websiteName: 'kara',
// //                productName:
// //                   'Century 8kg Top Loader Twin Tub Washing Machine - CW-8522-A',
// //                productLink:
// //                   'https://www.kara.com.ng/century-8kg-top-loader-twin-tub-washing-machine-cw-8522-a',
// //                productImage:
// //                   'https://www.kara.com.ng/pub/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/c/w/cw-8522-a1.png',
// //                price: '₦29,700.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '126',
// //                websiteName: 'kara',
// //                productName: 'Century Century 10.2kg Twin Tub Washing Machine ',
// //                productLink:
// //                   'https://www.kara.com.ng/century-century-10-2kg-twin-tub-washing-machine',
// //                productImage:
// //                   'https://www.kara.com.ng/pub/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/2/_/2_4.jpg',
// //                price: '₦73,370.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '637',
// //                websiteName: 'kara',
// //                productName: 'Bosch Washing Machine Front Load 6KG - WAB2026SKE',
// //                productLink:
// //                   'https://www.kara.com.ng/bosch-washing-machine-front-load-6kg-wab2026ske',
// //                productImage:
// //                   'https://www.kara.com.ng/pub/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/b/o/bosch_washing_machine_front_load_6kg_-_wab2026ske.jpg',
// //                price: '₦195,910.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '198',
// //                websiteName: 'kara',
// //                productName: 'Century 6KG Top-Load Washing Machine',
// //                productLink:
// //                   'https://www.kara.com.ng/century-6kg-top-load-washing-machine',
// //                productImage:
// //                   'https://www.kara.com.ng/pub/media/catalog/product/cache/acf1a829635e5a35e3be9ccd68062a20/1/_/1_1_3.jpg',
// //                price: '₦44,550.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '879',
// //                websiteName: 'ebay',
// //                productName:
// //                   'GE Washing Machine Model WCVH6800J1WW Top Panel WH44X10193',
// //                productLink:
// //                   'https://www.ebay.com/itm/GE-Washing-Machine-Model-WCVH6800J1WW-Top-Panel-WH44X10193/322947967510?epid=11011676161&_trkparms=ispr%3D1&hash=item4b3132ea16:g:W3cAAOSwIJlaObUE&enc=AQAFAAACcBaobrjLl8XobRIiIML1V4Imu%2Fn%2BzU5L90Z278x5ickk5v8gVt3hEWLVg%2F253w6XCdr%2BWHJ5lto%2BkNS0j4r9lfjuqaFAvOukcBBrR6W7fP6AgumKVzNKq87s3N8Q7eEA2XpDm6iphIqXkHrp4b%2BR8ENaTMBtqQPz9uGN1iGbhjWmf6CVBOxCQtfrRVgMqJqhlAD7yAxkUkzcsw6xCGKIFBvSAhWNlGayOBOzeVqK8qTDSbxdQzW9kFWbVQdgXuqHF8sSkJUAB8a8%2FIrUbWEJ7pRV4%2BaicslxNS20EhF7f7y5hbXQ26Q0Wl8WBeov2L%2BgKIo6X2eu1hxj5ivWsI4%2B9f9%2F%2By%2F4c7%2FXzYI6tafthnmTYSmX9Q8azYrutQfIX6Vxio%2FvVCjBp0Rf7%2F%2FkBoF2O83eqan6IJstTd%2F2AMcJIkuvsNyhRulaWG%2B%2Byppw1nKyyzl9ys3vq%2BJkPlYPAa4qMo1FMFkgZ5vCVIAvN8in42XXq2nGpu6smlVQ0uISVhsLWPmC%2F1SygxbkFe%2B7D4uVTdaa137c9OlDA2xnRrLlgPN5d7TEY2ctq604B8EpG3rYQ3zaE4Wz2mCg%2Fw0fafAzeFoFq9%2BAT1GPngHQfonKWvIsrFhVFDQ744kdGV8pAM9BDdjFYCDIxWV7d%2BYocrnAzkq1BWM2rqS3joujfFy%2FnyV%2FVJB0h7bfyTt1uvi184g3xcvzmgV00ls0AC6kPHd%2Bq4oO86T0Z%2BK3rP5lB20BEShenDlB%2B2cD7e%2FJugr9VIbJXgicsLr1T4jZivYrwIXLIcyadEKvG9qYJ6jhS9LgWgzPRRFcjThdUJQYE5bSIj0t7g%3D%3D&checksum=3229479675106bddd584f358428a87b6ce154821c9ab',
// //                productImage:
// //                   'https://i.ebayimg.com/thumbs/images/g/W3cAAOSwIJlaObUE/s-l225.jpg',
// //                productAvailability: 'Pre-Owned',
// //                shipping: 'Shipping not specified || From United States',
// //                price: '$160.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '6710',
// //                websiteName: 'ebay',
// //                productName:
// //                   'Daewoo DWD-03MCWR Appliances Wall Mounted Mini Drum Washing Machine 220_UR',
// //                productLink:
// //                   'https://www.ebay.com/itm/Daewoo-DWD-03MCWR-Appliances-Wall-Mounted-Mini-Drum-Washing-Machine-220-UR/254461276438?_trkparms=ispr%3D1&hash=item3b3f12f116:g:S9sAAOSwaZdeACOs&enc=AQAFAAACcBaobrjLl8XobRIiIML1V4Imu%2Fn%2BzU5L90Z278x5ickkrDx%2B2NLp21dg6hHbHAkGMQ0QU5VOBiTvIhbo6BH1bAqzE6h56qJuTLAo3Ee5KnbLFuia8UXc2ZDUZh%2Ff3jtsn126%2FmDWMyK18hX6XG%2FcseKqPe7FpbCFbbjHdbHb%2BXfKara4EffJw1IAmet1WDA%2Bg0otRWbKMO4%2FSgoCnnKmm7LNUI10xz2gheQIrjsh5pa2whHXOn2lR%2B6Bg5vBZi0tml%2BiNJBDb%2BFrT6SdAf3cYVbyzekC8EPgvY9%2FjFAapD1hLaOcX4OTrdwnkPUGACRzld5I%2F5dQIu%2FkLpuEGzUYk68bGXtoe7dsJmaZhylm3g0rWuUjWIrKt1NU2jjZ0yxeStfU%2BLiWJXujAP%2B4M%2FweHmPEa%2BLMZyr9pGjABzI7lizkRwWfNoA5wNymE1bEqivPEBIoyJMAgvo5q7yYsJms3VVVxtJxDlxwoGHZ0lS1lqZZqn3NJHmJk1gStLl74DjX7hBF4jzrVt4wcMxj9h%2F7AR9ddVIPKjhKfTM2mwQoQojefnKYwDSREj3mOm0m4pdBIzS%2F7XfgKUjatN8KM0kSXpByN2umjiAe2te8ghQ9bgigW3cyZhj6C7ZPdEQXBUFyBDMt17kn5HHoaeyErDjNz%2BAYK76C4X9uVGhUEq4T4Zk3%2FU2qGdCsWBrBNV2FufhkVuuZ9L3BaZFPlMenvJ%2F2DUPzYUA3kzQGLBzDszfCIgdaBb2akMj7VIDg5BU46OZiAZKJfcO4PB%2BKngPQFRatFZx9fL4DFp6zgNEWWn4gB7FjKjxAlBa4diurfEwNS6qWIw%3D%3D&checksum=2544612764386bddd584f358428a87b6ce154821c9ab',
// //                productImage:
// //                   'https://i.ebayimg.com/thumbs/images/g/S9sAAOSwaZdeACOs/s-l225.jpg',
// //                productAvailability: 'Brand New',
// //                shipping:
// //                   'Free International Shipping || Top Rated SellerFrom Korea, South',
// //                price: '$556.79',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '611',
// //                websiteName: 'ebay',
// //                productName:
// //                   'ECTOOL PRO WASHING MACHINE INNER TUB REMOVAL TOOL BASKET PULLER WHIRLPOOL MAYTAG',
// //                productLink:
// //                   'https://www.ebay.com/itm/ECTOOL-PRO-WASHING-MACHINE-INNER-TUB-REMOVAL-TOOL-BASKET-PULLER-WHIRLPOOL-MAYTAG/254210218588?_trkparms=ispr%3D1&hash=item3b301c1a5c:g:ktgAAOSwixRcwJGE&enc=AQAFAAACcBaobrjLl8XobRIiIML1V4Imu%2Fn%2BzU5L90Z278x5ickkrDx%2B2NLp21dg6hHbHAkGMUJmVFjRv5Ol6QAe19OhjR9ZDgdnPX2bg4wisP%2F%2FbMVSTR4oERHanIuq6Vmj9DHUGgrWMJHakn5W9Uw%2BI61NhR4l6CrBinq4A4DgUmB%2F5yhMSxBNKTjZevY%2Bu45%2BDTRLSi5z7y24Rb1J1g7by8912OZ6d%2F9AmP4O%2FbEbsR9WzIt%2B4bKH4REJ3p5y0wWTcJSIDCGDdzhR8kjZNYJB3%2FuqRhs1zfFPw5AaLdr3B6TIDUnTXujDJtAi2uDBHyBuCdbxbg86rzhyyZWhHwKVHOdPdLzxtIXYF9qAuB%2Fs%2BseROIcWKxbD4gtnfnOxt7S3ZnLzxdr2cT5X%2FaX1L11HyljIIxZmeiDzNi7aCATYp5dM2L3AIeEJ3XBGoQCpHx6On1QxwSFmQS4fYkEfv%2Bin4Rj3apR%2BGPWsf8qmz2CZwLWJZ5RpqTR7%2FCPHLK40df5bXGWlYaxItDLnW95NEfaBiAL%2F8EpjxpWqFQwo1NXE2RqB2aa3bho3zy0yF1N1j7mJa7xOmcBgaQ%2FagkqPA%2BoR8K1QNdbHUWnXAz0SylQWvi83NdtVcwkAm0y%2FZQbQEEIxBjOZFNGzKKoTvce12DeJn7UQVZx2isiPJyXMLcx8Tfrko1t3B99bKwb5dHMd5DPTIjFuLHNwgChG8lEZFy%2Bdk7k%2BH58%2FL5Flicn6rz2Hf7vfbOqKyJN2xKG5KLfb2%2FMb5L6xofLl9%2FW%2F%2FAnsMX243wfOWnyduFOMjNQ1LRMcn9i3Ktiy6zNyHXgEXJkOkC80bl0GWw%3D%3D&checksum=2542102185886bddd584f358428a87b6ce154821c9ab',
// //                productImage:
// //                   'https://i.ebayimg.com/thumbs/images/g/ktgAAOSwixRcwJGE/s-l225.jpg',
// //                productAvailability: 'Brand New',
// //                shipping: '+$40.50 shipping || From United States',
// //                price: '$139.00',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '6512',
// //                websiteName: 'ebay',
// //                productName:
// //                   'PORTABLE COMPACT TWIN MINI WASHING MACHINE 5.2kg SPIN DRYER with DRAIN PUMP',
// //                productLink:
// //                   'https://www.ebay.com/itm/PORTABLE-COMPACT-TWIN-MINI-WASHING-MACHINE-5-2kg-SPIN-DRYER-with-DRAIN-PUMP/372867646964?hash=item56d0a4c5f4:g:UiUAAOSwsLtVeuNQ',
// //                productImage:
// //                   'https://i.ebayimg.com/thumbs/images/g/UiUAAOSwsLtVeuNQ/s-l225.jpg',
// //                productAvailability: 'Brand New',
// //                shipping: 'Free International Shipping || From Germany',
// //                price: '$181.54',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '6013',
// //                websiteName: 'ebay',
// //                productName:
// //                   'Daewoo DWD-03MCWR Appliances Wall Mounted Mini Drum Washing Machine 220_UA',
// //                productLink:
// //                   'https://www.ebay.com/itm/Daewoo-DWD-03MCWR-Appliances-Wall-Mounted-Mini-Drum-Washing-Machine-220-UA/223810079675?_trkparms=ispr%3D1&hash=item341c1ecbbb:g:QowAAOSwdOxeACP7&enc=AQAFAAACcBaobrjLl8XobRIiIML1V4Imu%2Fn%2BzU5L90Z278x5ickkgCVySCgrNFPU8Iu85TabMG2M40P3zE9c324fuiwUf2u6TviutSiTH%2FwDEiLRRExmItuTe%2FqPAzbCr%2FtTbKw54oikISIbVggT49QlerTBMqbcKeHd8wXWolE47Ps0gJVP1ZCye51fT6SxTgQvsfLwqFPawie3dGPzL3Jvai5VRFuxapUymWiHo27aXgkj5KeXEz2de4hKIIfxqvAkZpEbtdYKe05iGXnbJtsQKFc%2Bc7RHeIUIS6fuXDhCbCjDolrkVTFt7Sg9EPKp97qZyYCvtnZuzRvqrB6eoQPCTjt3fncmDnpvxlnXFbQIyZY1AypAnRvLvHN2ebpLtc5eFYtpLlNtv6OoQ0NDLQ3BfBKn73hV1488vnuSioOxSuq3JUf9JPA%2FZAw2JBIyCDHpXzWOjHmcXo%2B1nNdic9QfiHYkHvmYAYZbZtAWjRt8vfLsXmPCdBfAINQOA8D5qfvY5eXkxZftbY9B9beQQBgm4VyOo8IhDAW84HpB5q%2F9faMv5hx%2BCBg6h1%2B%2F615WcC9EiDJkFneE19pSSaK8D4iLcV%2FS9fQOJskuVsK%2BTCpJjspjRinPfHY%2FCINYs2AnpJ7SsESK%2B7ZFsSMhv7Vqcigng0QjDXm%2FwkPi48E%2FDBAkXZ8A%2F6ru8SWhRpgVQva4L7dh7sRKN9nTBhNdJ5F7OFT9SMq%2Bb%2FtG35z0E4L0XmKCNi6U3In%2BOAHBmtL5DR8fpAy%2Fb2f2R%2B6KhoNCCtSqKVWX4hIu%2F9mElermf4jJRsde6rFRLNs0gv%2Bj3R0AXrUzSuvLAF2yxQ%3D%3D&checksum=2238100796756bddd584f358428a87b6ce154821c9ab',
// //                productImage:
// //                   'https://i.ebayimg.com/thumbs/images/g/QowAAOSwdOxeACP7/s-l225.jpg',
// //                productAvailability: 'Brand New',
// //                shipping:
// //                   'Free International Shipping || Top Rated SellerFrom Korea, South',
// //                price: '$561.79',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //             },
// //             {
// //                id: '3414',
// //                websiteName: 'ali_express',
// //                productName:
// //                   'Washing-Machine Turbo Ultrasonic Mini Portable USB Travel Home Business Convenient Personal',
// //                productLink:
// //                   'https://www.aliexpress.com/item/4001102688558.html',
// //                price: 'US $5.34 - 17.12',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //                shipping: 'Shipping: US $10.04',
// //                productAvailability: '44 Sold',
// //                productImage:
// //                   'https://ae01.alicdn.com/kf/H0e3f786bd6ad4440b4c6cff40058ad52Z/Mini-Ultrasonic-Washing-Machine-Portable-Turbo-Personal-Rotating-Washer-Convenient-Travel-Home-Business-Travel-USB.jpg_220x220xz.jpg',
// //             },
// //             {
// //                id: '7315',
// //                websiteName: 'ali_express',
// //                productName:
// //                   'Underwear Washing-Machine Portable Mini Baby Small Household Travel Dolly-Tub Clear Folding',
// //                productLink:
// //                   'https://www.aliexpress.com/item/4001166894813.html',
// //                price: 'US $99.99',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //                shipping: 'Shipping: US $39.76',
// //                productAvailability: '1 Sold',
// //                productImage:
// //                   'https://ae01.alicdn.com/kf/H77c0417d18ca447dbfabe6fa642c1cccF/Folding-Washing-Machine-Household-Baby-Small-Portable-Simple-Tube-Underwear-Mini-Clear-Dolly-Tub-Travel.jpg_220x220xz.jpg',
// //             },
// //             {
// //                id: '3316',
// //                websiteName: 'ali_express',
// //                productName:
// //                   'Wash-Machine Underwear Portable Mini Panties Care Folding Business-Trip',
// //                productLink:
// //                   'https://www.aliexpress.com/item/4000191021507.html',
// //                price: 'US $238.98',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //                shipping: 'Free Shipping',
// //                productAvailability: '1 Sold',
// //                productImage:
// //                   'https://ae01.alicdn.com/kf/H8a8fb6667a8845e795ed1260400bf2abX/Mini-Wash-Machine-Folding-Washing-Machine-Underwear-Panties-Care-Business-Trip-Portable.jpg_220x220xz.jpg',
// //             },
// //             {
// //                id: '4517',
// //                websiteName: 'ali_express',
// //                productName:
// //                   'Small Ultrasound-Turbo-Washer Washing-Machine Laundry-Cleaning Mini Portable Travel Household',
// //                productLink: 'https://www.aliexpress.com/item/32980381629.html',
// //                price: 'US $13.63',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //                shipping: 'Shipping: US $4.96',
// //                productAvailability: '22 Sold',
// //                productImage:
// //                   'https://ae01.alicdn.com/kf/HLB1uTuAKyLaK1RjSZFxq6ymPFXaP/200-rpm-min-Washing-Machine-Mini-Travel-Portable-Household-Small-Washing-Machine-Ultrasound-Turbo-Washer-Laundry.jpg_220x220xz.jpg',
// //             },
// //             {
// //                id: '3618',
// //                websiteName: 'ali_express',
// //                productName:
// //                   'Turbine-Washer Washing-Machine Trip Mini Portable Personal Home H0172 Rotating Business',
// //                productLink: 'https://www.aliexpress.com/item/33029404023.html',
// //                price: 'US $14.34 - 17.62',
// //                actualPrice: {
// //                   value: 4000,
// //                   dollarPrice: 200,
// //                   currency: '$',
// //                },
// //                shipping: 'Shipping: US $11.28',
// //                productAvailability: '127 Sold',
// //                productImage:
// //                   'https://ae01.alicdn.com/kf/HTB1FMSTbgKG3KVjSZFLq6yMvXXa8/Mini-Washing-Machine-Portable-Personal-Rotating-Turbine-Washer-Home-Business-Trip-H0172.jpg_220x220xz.jpg',
// //             },
// //          ],
// //       },
// //    ],
// // }
// // fs.writeFileSync('db.json', JSON.stringify(db, null, 3))
// // console.log('done boss!')

// // {price: 3000, websiteName: jumia}
// function unique(value, index, self) {
//    return self.indexOf(value) === index
// }

// const getAveragePrice = (prices) => {
//    // get store names
//    const storeNames = prices.map((item) => item.store).filter(unique)

//    let refinedPriceList = []
//    console.log({ refinedPriceList })
//    for (const store of storeNames) {
//       const commonItems = prices.filter((item) => item.store === store)
//       const commonItemPrices = commonItems.map((item) => item.price)

//       // get total prices in each store
//       const totalPriceinStore = commonItemPrices.reduce(
//          (total, accumulator) => total + accumulator
//       )
//       // get average store prices
//       const averageStorePrice = Math.floor(
//          totalPriceinStore / commonItemPrices.length
//       )

//       refinedPriceList.push({ store, averageStorePrice })
//    }
//    console.log(refinedPriceList)
// }

// const priceList = [
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'slot', price: 4300 },
//    { store: 'slot', price: 4300 },
//    { store: 'slot', price: 4300 },
//    { store: 'slot', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4560 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 3000 },
//    { store: 'kara', price: 4000 },
//    { store: 'kara', price: 4000 },
//    { store: 'kara', price: 4000 },
//    { store: 'kara', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'jumia', price: 4000 },
//    { store: 'kara', price: 4420 },
//    { store: 'kara', price: 4100 },
//    { store: 'kara', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'jumia', price: 4000 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'ebay', price: 5500 },
//    { store: 'jumia', price: 4000 },
// ]

// console.log(getAveragePrice(priceList))

function isEmpty(obj) {
   for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false
   }
   return true
}

console.log(!isEmpty({ a: 1 }))
