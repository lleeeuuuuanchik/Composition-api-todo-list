<template>
	<header class="header container">
		<p class="header__logo">LOGO</p>
		<nav class="header__nav">
			<router-link class="header__nav-link" to="/">Главная</router-link>
			<router-link class="header__nav-link" to="/todo">Cписок задач</router-link>
		</nav>
	</header>
	<section class="page container">
		<router-view />
	</section>
</template>

<style lang="scss">
@import url('./assets/styles/app.scss');
</style>
