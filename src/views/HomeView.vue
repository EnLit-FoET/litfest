<template>
	<section id="hero">
		<h1>EnLit</h1>
		<p class="theme1">presents</p>
		<h1 id="heading">Lit-Fest</h1>
		<p>
			Embrace the <span class="theme2">mystic</span> world of
			<span class="theme2">literature.</span>
		</p>
		<TimeBox />
		<div>
			<button><router-link to="/dashboard">Register Now >>></router-link></button>
			<button style="background-color: transparent; border: 1px solid white;"><a href="#competition">Competitions >>></a></button>
		</div>
	</section>
	<AboutPage />
	<EventSection />
	<SponsorSection />
	<FooterSection />
</template>

<script>
import EventSection from "./EventSection.vue";
import TimeBox from "../components/TimeBox.vue";
import AboutPage from "@/components/AboutPage.vue";
import FooterSection from "@/components/FooterSection.vue";
import SponsorSection from "@/components/SponsorSection.vue";

export default {
	name: "HomeView",
	components: { EventSection, TimeBox, AboutPage, FooterSection, SponsorSection },
};
</script>

<style scoped>
#hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 85vh;
}

#hero p {
	font-weight: 500;
	padding: 0;
	margin: 0;
	font-size: 1.3em;
	line-height: 1em;
}

#hero h1 {
	line-height: 1em;
	padding: 0;
	margin: 0;
	font-size: 3rem;
}

#heading {
	/* text-transform: uppercase; */
	font-size: 8rem !important;
	animation: shimmer 3s linear 1 !important;
	font-weight: 800;
	line-height: 0.85em !important;
	margin-bottom: 13px !important;
}

@keyframes shimmer {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@media screen and (max-width:430px) {
	#hero p {
		width: 85%;
	}
}

@media screen and (max-width:350px) {
	#heading {
		font-size: 6em !important;
	}
}

button {
	background-color: var(--theme1);
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	margin: 10px;
	cursor: pointer;
}
a{
	text-decoration: none;
	color: white;
	width: fit-content;
}
</style>
