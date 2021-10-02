<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import SwiperCore, { Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import Svg from '../Default/Svg.svelte';
	SwiperCore.use([Pagination]);
</script>

<Swiper
	centeredSlides={true}
	pagination={true}
	loop={true}
	spaceBetween={16}
	slidesPerView={'auto'}
	breakpoints={{
		'1600': {
			pagination: false,
			spaceBetween: 105,
			grabCursor: true,
		},
		'700': {
			spaceBetween: 35,
		},
	}}
>
	<SwiperSlide>
		<img src="images/featured-videos-1.webp" alt="белое восточное здание у берега" />
		<button aria-label="play" class="play"><Svg width="20" height="26" id="playAlt" /></button>
		<h3>A Guide To Rocky Mountain Vacations</h3>
		<div class="mask" />
	</SwiperSlide>

	<SwiperSlide>
		<img src="images/sb-4.webp" alt="белое восточное здание у берега" />

		<button aria-label="play" class="play"><Svg width="20" height="26" id="playAlt" /></button>
		<h3>A Guide To Rocky Mountain Vacations</h3>
		<div class="mask" />
	</SwiperSlide>

	<SwiperSlide>
		<img src="images/featured-videos-3.webp" alt="белое восточное здание у берега" />
		<button aria-label="play" class="play"><Svg width="20" height="26" id="playAlt" /></button>
		<h3>A Guide To Rocky Mountain Vacations</h3>
		<div class="mask" />
	</SwiperSlide>
</Swiper>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	.mask {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 50;
		border-radius: 8px;
		width: 100%;
		height: 65%;
		background: linear-gradient(180deg, #0000 50%, #00000076 100%);
	}
	h3 {
		position: absolute;
		bottom: 40px;
		left: 40px;
		font-weight: bold;
		font-size: 2em;
		line-height: 1.25em;
		color: #ffffff;
		z-index: 55;
	}
	.play {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		padding-left: 4px;
		top: 40px;
		left: 40px;
		background: $tomato;
		width: 93px;
		height: 93px;
		border-radius: 50%;
	}

	// <=760px
	@include max-screen(700px) {
		.play {
			top: 25px;
			left: 25px;
		}
		h3 {
			font-size: 1.5em;
			bottom: 25px;
			left: 25px;
		}
		.play {
			width: 60px;
			height: 60px;
		}
	}

	@include max-height(800px) {
		.play {
			display: none;
		}
	}
</style>
