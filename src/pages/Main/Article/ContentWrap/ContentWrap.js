import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ContentWrap.scss';

class ContentWrap extends Component {
  render() {
    return (
      <article className="contentWrap">
        <header className="productWrap">
          <h2 className="productWrap_text">나만 알고 싶은 향기</h2>
          <div className="productsList">
            {COMMENT_LIST.map(product => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        </header>
        <div className="bannerRolling">
          <img
            src="./images/main/banner/middle/pinkbeach.jpg"
            alt="pink beach"
          />
        </div>
      </article>
    );
  }
}

const COMMENT_LIST = [
  {
    id: 1,
    name: '지훈님바보',
    thumbnail_image:
      'https://cdn.pixabay.com/photo/2016/11/26/12/52/bottle-1860617_1280.png',
    price: '25,000',
    tags: ['장미의촉촉함', '해초팩'],
  },
  {
    id: 2,
    name: '치훈님짱짱',
    thumbnail_image:
      'https://lush.co.kr/data/goods/12/03/07/97/97_main_074.jpg',
    price: '20,000',
    tags: ['꿀의촉촉함', '데일리팩'],
  },
  {
    id: 3,
    name: '인터갈락틱',
    thumbnail_image:
      'https://lush.co.kr/data/goods/16/03/18/174/174_main_074.jpg',
    price: '17,000',
    tags: ['배쓰밤', '환상적'],
  },
  {
    id: 4,
    name: '더 컴포터',
    thumbnail_image:
      'https://lush.co.kr/data/goods/11/01/20/18/18_main_080.jpg',
    price: '18,000',
    tags: ['입욕로망', '핑크핑크'],
  },
  {
    id: 5,
    name: '엔젤스 온',
    thumbnail_image:
      'https://lush.co.kr/data/goods/12/03/07/97/97_main_074.jpg',
    price: '22,000',
    tags: ['클렌저', '산뜻마무리'],
  },
  {
    id: 6,
    name: '뉴',
    thumbnail_image:
      'https://lush.co.kr/data/goods/17/05/30/241/241_main_049.jpg',
    price: '15,000',
    tags: ['고체샴푸', '뿌리튼튼'],
  },
];

export default ContentWrap;
