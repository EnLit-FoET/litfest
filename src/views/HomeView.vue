<template>
	<section id="hero">
		<h1>EnLit</h1>
		<p>presents</p>
		<h1 id="heading">Lit Fest</h1>
	</section>
	<h1>Events</h1>
	<section id="events">
		This is first event
	</section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>


<style scoped>
	#hero{
		text-align: center;
		padding: 4rem;
	}
	#heading{
		font-size: 5rem;
		animation : shimmer 3s linear 1 !important;
	}
	@keyframes shimmer{
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
</style>
