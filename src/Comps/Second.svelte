<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import SwiperCore, { Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	SwiperCore.use([Pagination]);
	import smoothScroll from '../Functions/smoothScroll.js';
	let height;
</script>

<section
	bind:this={height}
	on:mousewheel|preventDefault={e => smoothScroll(e, height)}
	class="second"
>
	<div class="container">
		<h2>Become A Travel Pro In One Easy Lesson</h2>
		<ul>
			<li>
				<img src="images/sb-1.jpg" alt="снежные горы" />
				<div class="bg" />
				<h3>Vacation Home Rental Success</h3>
			</li>
			<li>
				<img src="images/sb-2.jpg" alt="горы и ручей" />
				<div class="bg" />
				<h3>Vacation Home Rental Success</h3>
			</li>
			<li>
				<img src="images/sb-3.jpg" alt="замок в лесу на холме" />
				<div class="bg" />
				<h3>Vacation Home Rental Success</h3>
			</li>
			<li>
				<img src="images/sb-4.jpg" alt="белое восточное здание у берега" />
				<div class="bg" />
				<h3>Vacation Home Rental Success</h3>
			</li>
		</ul>
	</div>
	<Swiper
		pagination={true}
		centeredSlides={true}
		loop={true}
		spaceBetween={16}
		slidesPerView={'auto'}
	>
		<SwiperSlide>
			<img src="images/sb-1.jpg" alt="снежные горы" />
		</SwiperSlide>
		<SwiperSlide>
			<img src="images/sb-2.jpg" alt="горы и ручей" />
		</SwiperSlide>
		<SwiperSlide>
			<img src="images/sb-3-alt.jpg" alt="замок в лесу на холме" />
		</SwiperSlide>
		<SwiperSlide>
			<img src="images/sb-4.jpg" alt="белое восточное здание у берега" />
		</SwiperSlide>
	</Swiper>
</section>

<style lang="scss">
	@import '../Scss/vars.scss';
	@import '../Scss/mixins.scss';
	section {
		height: 100vh;
		padding: min(4%, 150px) 0;
	}
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
	h2 {
		align-self: flex-start;
		max-width: 22ch;
		text-align: left;
		color: $dark-blue;
		margin-bottom: clamp(25px, 8%, 96px);
	}
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 32px;
		place-items: center;
	}
	li {
		position: relative;
		height: 100%;
		border-radius: 8px;

		&:hover .bg {
			opacity: 0.6;
		}
		&:hover h3 {
			opacity: 1;
		}
	}
	img {
		object-fit: cover;
		height: 100%;
		overflow: hidden;
		border-radius: 8px;

		&:hover {
			background: $neptun;
		}
	}
	.bg {
		transition: 0.4s ease-in-out;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $dark-blue;
		opacity: 0;
		border-radius: 8px;
	}
	h3 {
		opacity: 0;
		transition: 0.2s ease-in-out;
		left: 50px;
		bottom: 60px;
		position: absolute;
		width: 13ch;
		color: white;
		font-weight: bold;
		font-size: 24px;
		line-height: 31px;
	}
	// <=1600px
	@include max-screen(1600px) {
		.container {
			height: auto;
		}
		ul {
			display: none;
		}
	}
	// <=700px
	@include max-screen(700px) {
		h2 {
			margin-top: 5%;
		}
	}
</style>
