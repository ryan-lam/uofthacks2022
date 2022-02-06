<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  
  <main class="board">
    <h1>Schedule</h1>
	<section class="list">
		<div style="height: 40px"></div>
		<div class="list--item">
			<div class="list--item__profile">
				<img src="./../assets/portrait.png" alt="">
				<h2>Ryan Lam</h2>
			</div>
			<p>Start Time: 8:00</p>
			<p>End Time: 17:00</p>
		</div>
		<div class="item"></div>
		<div class="item"></div>
	</section>
  </main>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'


export default {
	name: 'Home',
	components: {
		Sidebar

	},
	data(){
		return{
			working: [

			]
		}
	},

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

}

.list{
	width: 85%;
	margin: auto;
	height: 500px;
	border-radius: 30px;
	background-color: white;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.301);
	margin-top: 40px;

	&--item{
		width: 90%;
		margin: auto;
		margin-top: 20px;
		height: 80px;
		border-radius: 15px;
		background-color: rgb(219, 242, 255);
		border: 3px solid $green;
		// box-shadow: 0px 0px 3px 0px rgba(211, 211, 211, 0.637);
		// box-shadow: 0px 0px 3px 1px $green;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		
		&__profile{
			display: flex;
			flex-direction: row;
			transform: translateX(-30px);
			align-items: center;
			& > img{
				display: block;
				height: 50px;
			}
			& > h2{
				margin-left: 20px;
			}

		}
		
	}

}
</style>
