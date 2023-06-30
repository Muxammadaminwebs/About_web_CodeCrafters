import "./styles.scss";
import Google from "../../assets/image/reviewsImages/google.svg";
import Star from "../../assets/image/reviewsImages/star.svg";
import User from "../../assets/image/reviewsImages/user.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div className="review-wrapper container-fluid">
      <div className="review-top">
        <h1 className="review-top__title">Reviews</h1>
        <div className="review-google">
          <div className="review-divider"></div>
          <a href="/">
            <img className="review-top__img" src={Google} alt="google" />
          </a>
          <div className="review-divider"></div>
        </div>
        <p className="review-top__subtitle">Exellent</p>
        <div className="review-top__stars">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
      </div>
      <div className="review-bottom">
        <Slider {...settings}>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
          <div className="review-block">
            <div className="review-block__top">
              <div className="review-block__user">
                <div>
                  <img src={User} alt="user" />
                </div>
                <div className="review-block__stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
              </div>
              <div className="review-block__date">12.12.2021</div>
            </div>
            <div className="review-block__bottom">
              8Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
