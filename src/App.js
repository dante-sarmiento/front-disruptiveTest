import './App.css';
import Table from './components/Table';
import useFetch from './hooks/useFetch';
import useFetchValueCoins from './hooks/useFetchValueCoins';

function App() {
  const dataCoins = useFetch('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd');
  const dataValueCoins = useFetchValueCoins('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd');

  return (
    <div className="App">
      <div className='container contCoins'>
        {dataCoins?.loading && <p>Loading...</p>}
        <h3 className='coinsV'>1 {dataCoins?.data?.data[0]?.slug} = usd {dataCoins?.data?.data[0]?.metrics.market_data.price_usd}</h3>
        <h3 className='coinsV'>1 {dataCoins?.data?.data[1]?.slug} = usd {dataCoins?.data?.data[1]?.metrics.market_data.price_usd}</h3>
      </div>
      <Table dataValueCoins={dataValueCoins}/>
    </div>
  );
}

export default App;
