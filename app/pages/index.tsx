import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface DataCoinProps{
  data: Array<any>;
}

export default function Home(props: DataCoinProps) {
  const {data} = props;
  console.log(data)
  return (
    <>
    <p className='text-[40px] font-bold mb-[20px]'>Crypto Currency</p>
    <div>
      {data.map(coin =>{
        return(
          <div className='flex justify-between mb-[10px] mx-[40px] border-2 border-white rounded-lg p-[10px] items-center'>
            <div className='flex items-center'>
              <img src={coin.image} className="w-[30px] mr-[10px]"></img>
              <div>
                <p className='text-[20px]'>{coin.symbol}</p>
                <p className='text-[10px]'>{coin.name}</p>
              </div>
            </div>
            <p>{coin.current_price}</p>
          </div>
        )
      })}
    </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
  const data = await res.json();
  return{
      props:{
          data,
      },
  }
}
