import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { data } from '../data/data';

const COUNTRIES = [
  {
    area: 'amazon.com',
    name: 'USA',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.ca',
    name: 'Canada',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.com.br',
    name: 'Brazil',
    checked: false,
    paragraph: 'Compre agora na Amazon'
  },
  {
    area: 'amazon.com.mx',
    name: 'Mexico',
    checked: false,
    paragraph: 'Comprar ahora en Amazon'
  },
  {
    area: 'amazon.in',
    name: 'India',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.co.jp',
    name: 'Japan',
    checked: false,
    paragraph: '今すぐ購入 Amazon'
  },
  {
    area: 'amazon.sg',
    name: 'Singapore',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.com.au',
    name: 'Australia',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.co.uk',
    name: 'UK',
    checked: false,
    paragraph: 'Buy Now on Amazon'
  },
  {
    area: 'amazon.de',
    name: 'Germany',
    checked: false,
    paragraph: 'Kaufen Sie jetzt auf Amazon'
  },
  {
    area: 'amazon.it',
    name: 'Italia',
    checked: false,
    paragraph: 'Acquista ora su Amazon'
  },
  {
    area: 'amazon.fr',
    name: 'France',
    checked: false,
    paragraph: 'Achetez maintenant sur Amazon'
  },
  {
    area: 'amazon.es',
    name: 'Spain',
    checked: false,
    paragraph: 'Compra ahora en Amazon'
  },
  {
    area: 'amazon.se',
    name: 'Sweden',
    checked: false,
    paragraph: 'Köp nu på Amazon'
  },
  {
    area: 'amazon.com.tr',
    name: 'Turkey',
    checked: false,
    paragraph: 'Şimdi Satın Al Amazon'
  },
  {
    area: 'amazon.nl',
    name: 'Netherlands',
    checked: false,
    paragraph: 'Koop nu op Amazon'
  }
];

export default function Home() {
  const [inputSearch, setInputSearch] = useState('');
  const [listProduct, setListProduct] = useState(data);
  const [country, setCountry] = useState('amazon.in');
  const [nameCountry, setNameCountry] = useState('India');
  const [title, setTitle] = useState('Buy Now on Amazon');
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const clearInput = (e) => {
    setInputSearch('');
  };

  const filterData = data.filter((item, index) => {
    if (inputSearch === '' && index) {
      return item;
    } else if (inputSearch !== '') {
      // return item.name.toLowerCase().includes(inputSearch);
      return [item].find((e) => e.name == inputSearch);
    }
  });
  const replaceArea = (string, area) => {
    return string.replace('amazon.com', area);
  };

  const fetchMoreData = () => {
    setListProduct(data.slice(0, listProduct.length + 10));
  };

  const handleChangeSelected = (e) => {
    const prevCountry = 'amazon.com';
    let index = e.nativeEvent.target.selectedIndex;
    const currentCountry = e.nativeEvent.target[index].text;
    const titleCountry = COUNTRIES.find((e) => e.name == currentCountry);
    setTitle(titleCountry.paragraph);
    setNameCountry(currentCountry);
    setCountry(e.target.value);
  };

  useEffect(() => {
    setListProduct(data.slice(0, 10));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [inputSearch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bấm vào đây để xem tất cả sản phẩm! TienIchMoi.Shop </title>
        <meta
          name='description'
          content={`Our mission is to help you find the perfect gift for your loved ones (or yourself) whether it's birthdays, holidays or surprise days in life's moments.`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='search-bar'>
        <div className='content-title'>
          <p className='pb-05'>Vui lòng nhập mã sản phẩm ở thước phim vào ô tìm kiếm bên dưới</p>
          <p className='pb-05-notify'>
            <a
              href='https://www.youtube.com/results?search_query=h%C6%B0%E1%BB%9Bng+d%E1%BA%ABn+mua+h%C3%A0ng+tr%C3%AAn+shoppe'
              target='_blank'
            >
              Bấm vào đây để xem hướng dẫn mua hàng.
            </a>
          </p>
        </div>
        <div className='input-content'>
          <input
            className='input-search'
            type='text'
            placeholder='Nhập mã sản phẩm vào đây, ví dụ: 5'
            onChange={inputHandler}
            value={inputSearch}
            autoFocus
          />
          {inputSearch && (
            <span className='clear-input' onClick={clearInput}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                color='#afafaf'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          )}
          <div className='icon-search'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='#aaa' width='18px' height='18px' viewBox='0 0 512 512'>
              <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='container-list'>
        {inputSearch ? (
          <div className='product-list'>
            <div className='banner-search'></div>
            {filterData.reverse().map((item, index) => (
              <div className='product-item' key={index}>
                <a href={item.usalink} target='_blank'>
                  <img src={item.imglink} className='imglink' />
                </a>
                <div className='product-text'>
                  <p>
                    <span className='code'>{item.name}</span>
                  </p>

                  {/* {item.aliexpress && (
                    <>
                      <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                        Compre agora no Aliexpress
                      </a>
                    </>
                  )} */}

                  {item.aliexpress && (
                    <>
                      <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                        Buy Now Link 1
                      </a>
                    </>
                  )}
                  {item.usalink && (
                    <>
                      <a href={item.usalink} target='_blank' className='custom-button'>
                        Buy Now Link 2
                      </a>
                    </>
                  )}
                  {item.customlink && (
                    <>
                      <a href={item.customlink} target='_blank' className='custom-button aliexpress'>
                        Xem giá
                      </a>
                    </>
                  )}
                  {/* {item.podlink && (
                    <>
                      <a href={item.podlink} target='_blank' className='custom-button aliexpress'>
                        Family Gifts for All Your Loved Ones
                      </a>
                    </>
                  )} */}
                  {/* {item.aliexpress && (
                    <>
                      <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                        Comprar ahora en Aliexpress
                      </a>
                    </>
                  )}
                  {item.aliexpress && (
                    <>
                      <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                        지금 구매 Aliexpress
                      </a>
                    </>
                  )} */}
                  {/* {item.usalink && (
                    <>
                      <a href={item.usalink} target='_blank' className='custom-button'>
                        USA - Buy Now on Amazon
                      </a>
                    </>
                  )} */}
                  {/* {item.usalink && (
                    <>
                      <a href={replaceArea(item.usalink, 'amazon.com.br')} target='_blank' className='custom-button'>
                        Brazil - Compre agora na Amazon
                      </a>
                    </>
                  )} */}

                  {/* {item.usalink && (
                    <>
                      <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                        India - Buy Now on Amazon
                      </a>
                    </>
                  )} */}
                  {/* {item.usalink && (
                    <>
                      <h5 className='north-america'>SELECT COUNTRY</h5>
                      <div className='selected-country'>
                        <select
                          name=''
                          className='custom-selected'
                          value={country}
                          id='countries'
                          onChange={handleChangeSelected}
                        >
                          <option value='amazon.com' disabled>
                            USA
                          </option>
                          {COUNTRIES.map((item, index) => (
                            <option value={item.area} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <a href={replaceArea(item.usalink, country)} target='_blank' className='custom-button'>
                        {nameCountry} - {title}
                      </a>
                    </>
                  )} */}
                </div>
              </div>
            ))}
            <div>{!filterData.length ? <p>No matching results. Please search again</p> : <p></p>}</div>
          </div>
        ) : (
          <div>
            {
              <InfiniteScroll
                dataLength={listProduct.length}
                next={fetchMoreData}
                hasMore={listProduct.length == data.length ? false : true}
                loader={<div className='dashed-loading'></div>}
                className='product-list'
              >
                <div className='product-item'>
                  <a href='https://shope.ee/20PYzTNPPM' target='_blank'>
                    <img
                      src='https://ae01.alicdn.com/kf/S79895e416c4a4a94b77c405ba33f343dP/Portable-Electric-Juicer-Blender-Usb-Mini-Fruit-Mixers-Juicers-Fruit-Extractors-Food-Milkshake-Multifunction-Juice-Maker.jpg_350x350.jpg_.webp'
                      className='imglink'
                    />
                  </a>
                  <div className='product-text'>
                    <p>
                      <span className='code'></span>
                    </p>

                    <a href='https://shope.ee/20PYzTNPPM' className='custom-button aliexpress'>
                      Sản phẩm giá 1.000 Vnđ
                    </a>
                  </div>
                </div>
                {listProduct.map((item, index) => (
                  <div className='product-item' key={index}>
                    <a href={item.usalink} target='_blank'>
                      <img src={item.imglink} className='imglink' />
                    </a>
                    <div className='product-text'>
                      {item.sameproduct && <h6 className='mt-5'>Similar products</h6>}
                      <p>
                        <span className='code'>{item.name}</span>
                      </p>

                      {item.aliexpress && (
                        <>
                          <a href={item.aliexpress} className='custom-button aliexpress'>
                            Buy Now Link 1
                          </a>
                        </>
                      )}

                      {item.usalink && (
                        <>
                          <a href={item.usalink} target='_blank' className='custom-button'>
                            Buy Now Link 2
                          </a>
                        </>
                      )}
                      {item.customlink && (
                        <>
                          <a href={item.customlink} target='_blank' className='custom-button aliexpress'>
                            Xem giá
                          </a>
                        </>
                      )}
                      {/* {item.podlink && (
                        <>
                          <a href={item.podlink} target='_blank' className='custom-button aliexpress'>
                            Family Gifts for All Your Loved Ones
                          </a>
                        </>
                      )} */}
                      {/* {item.aliexpress && (
                        <>
                          <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                            Compre agora no Aliexpress
                          </a>
                        </>
                      )}
                      {item.aliexpress && (
                        <>
                          <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                            Comprar ahora en Aliexpress
                          </a>
                        </>
                      )}
                      {item.aliexpress && (
                        <>
                          <a href={item.aliexpress} target='_blank' className='custom-button aliexpress'>
                            지금 구매 Aliexpress
                          </a>
                        </>
                      )} */}

                      {/* {item.usalink && (
                        <>
                          <a
                            href={replaceArea(item.usalink, 'amazon.com.br')}
                            target='_blank'
                            className='custom-button'
                          >
                            Brazil - Compre agora na Amazon
                          </a>
                        </>
                      )} */}
                      {/* {item.usalink && (
                        <>
                          <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                            India - Buy Now on Amazon
                          </a>
                        </>
                      )} */}

                      {/* {item.usalink && (
                        <>
                          <h5 className='north-america'>SELECT COUNTRY</h5>
                          <div className='selected-country'>
                            <select
                              name=''
                              className='custom-selected'
                              value={country}
                              id='countries'
                              onChange={handleChangeSelected}
                            >
                              <option value='amazon.com' disabled>
                                USA
                              </option>
                              {COUNTRIES.map((item, index) => (
                                <option value={item.area} key={index}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <a href={replaceArea(item.usalink, country)} target='_blank' className='custom-button'>
                            {nameCountry} - {title}
                          </a>
                        </>
                      )} */}
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            }
          </div>
        )}
      </div>
    </div>
  );
}
