<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <main class="board">
    <h1>Payroll</h1>
	<section class=""></section>
  </main>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'


export default {
  name: 'Payroll',
  components: {
    Sidebar

  }
}
</script>

<style lang="scss" scoped>

@import "./../assets/styles.scss";

main{
	background-color: aquamarine;
	width: calc(100% - 250px);
	position: relative;
	z-index: 0;
	float: right;

	min-height: 100vh;

	& > h1{
		text-align: left;
		padding: 20px 0px 0px 50px;
		font-size: 50px;
	}

	& > section{
		width: 85%;
		margin: auto;
		height: 500px;
		border-radius: 30px;
		background-color: white;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.301);
		margin-top: 40px;

	}
}
</style>
