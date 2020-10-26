// {price: 3000, websiteName: jumia}

interface PriceProps {
   price: number
   store: string
}

export const getAveragePrice = (prices: PriceProps[]) => {
   // get store names
   const storeNames = prices?.map((item) => item.store).filter(uniqueArray)

   let refinedPriceList = []
   for (const store of storeNames) {
      const commonItems = prices.filter((item) => item.store === store)
      const commonItemPrices = commonItems.map((item) => item.price)

      // get total prices in each store
      const totalPriceinStore = commonItemPrices.reduce(
         (total, accumulator) => total + accumulator
      )

      // get average store prices
      const averageStorePrice = Math.floor(
         totalPriceinStore / commonItemPrices.length
      )

      refinedPriceList.push({ store, averageStorePrice })
   }
   return refinedPriceList
}

// unique array function
function uniqueArray(value: any, index: any, self: any) {
   return self.indexOf(value) === index
}
