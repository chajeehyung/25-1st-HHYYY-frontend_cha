import React, { Component } from 'react';
import './BannerWrap.scss';

class bannerWrap extends Component {
  render() {
    return (
      <>
        <article className="bannerWrap">
          <section className="leftBanner">
            <h2 className="leftBanner_text">
              <span className="abocado">아보카도</span>는&nbsp;
              <span className="piboo">피부</span>에 양보하세요
            </h2>
            <img
              className="leftBanner_img"
              src="/images/main/banner/middle/banner01.jpg"
              alt="leftBanner_img"
            />
          </section>
          <section className="rightBannerTop">
            <h2 className="rightBannerTop_text">
              제주로부터 녹차팩이 도착했어요!
            </h2>
            <img
              className="rightBannerTop_img"
              src="/images/main/banner/middle/banner02.jpg"
              alt="rightBannerTop_img"
            />
          </section>
          <section className="rightBannerBottom_left">
            <h2 className="rightBannerBottom_left_text">
              딸기 왕자를
              <br />
              아시나요?
            </h2>
            <img
              src="/images/main/banner/middle/banner05.jpg"
              alt="rightBannerBottom_left_img"
              className="rightBannerBottom_left_img"
            />
          </section>
          <section className="rightBannerBottom_right">
            <h2 className="rightBannerBottom_right_text">
              가입시 포인트
              <br />
              5000원 증정
            </h2>
            <img
              className="rightBannerBottom_right_img"
              src="/images/main/banner/middle/banner03.jpg"
              alt="rightBannerBottom_right_img"
            />
          </section>
        </article>

        <article className="newProductWrap">
          <div className="productText">
            <h2 className="productText_big_text">
              NEW 탱글드 헤어
              <br />
              트리트먼트
            </h2>
            <p className="productText_small_text">
              전통 악기에서 영감을 받은 두피 트리트먼트로, 기분 좋은 낮잠에
              빠져들듯 부드럽고 편안한 시간을 선사합니다.
            </p>
          </div>
          <div className="productImg">
            <img
              className="productImg_longHair"
              src="./images/main/banner/middle/longhair.jpg"
              alt="long hair"
            />
          </div>
        </article>
      </>
    );
  }
}

export default bannerWrap;
