import { useEffect, useState } from 'react';
import { fetchCurrency } from 'services/API-PB-currency';
import {
  CurrencyDataItem,
  CurrencyData,
  CurrencyBox,
  CurrencyTitle,
  CurrencyTitleItem,
  CurrencyDataItemText,
  ButtonBox,
  ButtonCurrency,
  CurrencyWrapper
} from './Currency.styled';

const Currency = () => {
  const [foundedCashlessCurrency, setFoundedCashlessCurrency] = useState([]);
  const [foundedCashCurrency, setFoundedCashCurrency] = useState([]);
  const [searchParams, setSearchParams] = useState('cashless');

  useEffect(() => {
    fetchCurrency('cashless').then(setFoundedCashlessCurrency);
    fetchCurrency('cash').then(setFoundedCashCurrency);
  }, []);

  //counter dynamic
  const changeSearchValue = value => {
    setSearchParams(value);
    if (value === 'cashless') {
      foundedCashlessCurrency.map(({ code, buy, sell }, i, prevArray) => {
        prevArray = foundedCashCurrency;
        return (
          counter(`${code}Buy`, prevArray[i].buy, buy.toFixed(2), 3),
          counter(`${code}Sell`, prevArray[i].sell, sell.toFixed(2), 3)
        );
      });
    } else {
      foundedCashCurrency.map(({ code, buy, sell }, i, prevArray) => {
        prevArray = foundedCashlessCurrency;
        return (
          counter(`${code}Buy`, prevArray[i].buy, buy.toFixed(2), 3),
          counter(`${code}Sell`, prevArray[i].sell, sell.toFixed(2), 3)
        );
      });
    }
  };

  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 0.01 : -0.01,
      step = duration / range,
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current.toFixed(2);
        if (current.toFixed(2) === end) {
          clearInterval(timer);
        }
      }, step);
  }
  //counter dynamic

  return (
    <CurrencyWrapper>
    <CurrencyBox>
      <CurrencyTitle>
        <CurrencyTitleItem>Currency</CurrencyTitleItem>
        <CurrencyTitleItem>Purchase</CurrencyTitleItem>
        <CurrencyTitleItem>Sale</CurrencyTitleItem>
      </CurrencyTitle>
      <CurrencyData>
        {foundedCashlessCurrency.map(
          ({ code = 'No Data', buy = '00.00', sell = '00.00' }) => {
            return (
              <CurrencyDataItem key={code}>
                <CurrencyDataItemText>{code}</CurrencyDataItemText>
                <CurrencyDataItemText id={`${code}Buy`}>
                  {parseFloat(buy).toFixed(2)}
                </CurrencyDataItemText>
                <CurrencyDataItemText id={`${code}Sell`}>
                  {parseFloat(sell).toFixed(2)}
                </CurrencyDataItemText>
              </CurrencyDataItem>
            );
          }
        )}
      </CurrencyData>
      <ButtonBox>
        <ButtonCurrency
          disabled={searchParams === 'cash' ? true : false}
          onClick={() => {
            changeSearchValue('cash');
          }}
        >
          Cash
        </ButtonCurrency>
        <ButtonCurrency
          disabled={searchParams === 'cashless' ? true : false}
          onClick={() => {
            changeSearchValue('cashless');
          }}
        >
          Cashless
        </ButtonCurrency>
      </ButtonBox>
    </CurrencyBox>
    </CurrencyWrapper>
      );
};

export default Currency;
