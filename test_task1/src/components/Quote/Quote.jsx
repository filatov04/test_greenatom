import React, {useEffect, useState} from 'react';
import './Quote.scss';
import axios from 'axios';

export const Quote = () => {
  const [quote, setQuote] = useState({author: '', text: ''})

  async function getQuote() {
    let requests = await axios
      .get("https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?")
      .then(response => {
        let temp = response.data;
        temp = JSON.parse(temp.slice(2, -1));
        const quoteTemp = {
          author: temp.quoteAuthor,
          text: temp.quoteText 
        }
        setQuote(quoteTemp);
        console.log(quoteTemp)
      })
      .catch(error => {
        console.error("Ошибка: ", error);
      })
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <>
      <div className='content__quoteBlock quoteBlock'>
        <p className='quoteBlock__header'>
            Quote
        </p>
        <div className='quoteBlock__quote'>
            <p>{quote.text}</p>
        </div>
        <div className='quoteBlock__author'>
            <p>{quote.author}</p>
        </div>  
      </div>
      <div className='content__button'>
        <button onClick={() => getQuote()}>New Quote</button>
      </div>
    </>
  )
}