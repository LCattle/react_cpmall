import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Swiper, Slide } from 'react-dynamic-swiper';
import '../../../static/css/react-dynamic-swiper/styles.css';

@connect(
  state => ({page: state.page})
)

export default class HomeBanner extends Component {
	static propTypes = {
  		page: PropTypes.object
	};

  constructor(props, context) {
    super(props, context);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    const silders = [];

    // 头部轮播图
    for (const bigBanner of this.props.page.data.big_banners) {
      silders.push({
        url: bigBanner.url,
        priority: bigBanner.priority,
        image: bigBanner.mobile_image
      });
    }

    this.state = {
      slideCount: 5,
      slides: silders,
      options: {
        swiperOptions: {
          loop: true,
          speed: 600,
          autoplay: 3000,
        },
        navigation: false,
        pagination: true,
        scrollBar: false,
      },
    };
  }
  increment(event) {
    event.preventDefault();
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  decrement(event) {
    event.preventDefault();
    this.setState({ slideCount: this.state.slideCount - 1 });
  }
  render() {
    return (
  		<Swiper
            swiperOptions={{scrollbarHide: false}}
            {...this.state.options}>
            {((this.state.slides).map((slide, idx) => (
              <Slide class="sliders" key={idx}>
                <a class="slider_item" href={slide.url} data-id={idx} data-position={idx} data-name="" data-priority={slide.priority} data-image={slide.image}>
                  <img u="image" class="slider_image" src={slide.image} />
                </a>

              </Slide>
            )))}
          </Swiper>
  	);
  }
}
