import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchValueCoins = (url) => {
    const [ btcValue, setBtcValue ] = useState(null)
    const [ ethValue, setEthValue ] = useState(null)

    const getData = async () => {
        const { data } = await axios(url);
        const bitcoinValue = data.data[0].metrics.market_data.price_usd
        const ethereumValue = data.data[1].metrics.market_data.price_usd
        setBtcValue(bitcoinValue)
        setEthValue(ethereumValue)
    }
    useEffect(() => {
        getData();
    }, [url]);
  return [btcValue, ethValue]
}

export default useFetchValueCoins