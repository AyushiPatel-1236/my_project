import { NextResponse } from "next/server";
async function fetchCoins(){
  
  const response = await fetch('https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl',{
    "method": "GET",
    "headers": {
       
            'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
  })
  const coins = await response.json();
  return coins;
}

export async function GET(){
    const coins = await fetchCoins();
    return NextResponse.json(coins)
}