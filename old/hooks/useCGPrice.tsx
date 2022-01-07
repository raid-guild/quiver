import { get } from 'lodash'
import { useEffect, useState } from 'react'

export const useCGPrice = ({
  tokenId,
  vsCurrency = 'usd',
}: {
  tokenId: string
  vsCurrency?: 'usd'
}): [number, boolean] => {
  const [price, setPrice] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrice = async () => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=${vsCurrency}`
      )
      const data = await result.json()
      setPrice(get(data, `${tokenId}.${vsCurrency}`, 0))
      setLoading(false)
    }
    fetchPrice()
  }, [])

  return [price, loading]
}
