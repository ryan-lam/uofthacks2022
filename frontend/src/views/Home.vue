<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  
  <main class="board">
	<section class="header">
		<h1 class="header--title">Schedule</h1>
		<div class="header--date">
			<input type="date" id="scheduler">
			<button v-on:click="changingDate()">Search</button>
		</div>
	</section>
    
	<section class="list">
		<div style="height: 40px"></div>

		<div class="list--item working" v-for="item in working">
			<div class="list--item__profile">
				<img src="./../assets/portrait.png" alt="">
				<h2>{{item.name}}</h2>
			</div>
			<p>Start Time: {{item.start}}</p>
			<p>End Time: {{item.end}}</p>
		</div>

		<div class="list--item notworking" v-for="item in notworking">
			<div class="list--item__profile">
				<img src="./../assets/portrait.png" alt="">
				<h2>{{item.name}}</h2>
			</div>
			
		</div>
		<div style="height: 40px"></div>
		
	</section>
	<div style="height: 50px"></div>
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
			working: [],
			notworking:[],
			searchingDate: "01012022"
		}
	},
	methods:{
		changingDate(){
			console.log("CALL HAS BEEN MADE")
			let arr = document.getElementById("scheduler").value.split("-");
			
			this.searchingDate = arr.reverse().join("");
			this.search();

			
			
		},
		async search(){
			this.working = [];
			const responsepromise = await fetch(`http://localhost:3000/scheduler/${this.searchingDate}`, {
                method: 'GET',
                headers: {
                   'Content-Type': 'application/json',
                },
            }).then(response => response.json()).then(data => {
				console.log(data);
				data.working.forEach(element => {
					console.log(element.name);
					// console.log(element[`${this.searchingDate}`]);
					this.working.push({
						name: element.name,
						start: element[`${this.searchingDate}Start`],
						end: element[`${this.searchingDate}End`],
					})
					
				});

				data.notWorking.forEach(element => {
					console.log(element.name);
					// console.log(element[`${this.searchingDate}`]);
					this.notworking.push({
						name: element.name,
			
					})
					
				});
			
			});

		}

	},
	async mounted(){
		
		console.log("IT WORKEED");
		document.getElementById("scheduler").value = "2022-01-01";
		this.search();
		
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

	
	height: min-content;

	& > h1{
		text-align: left;
		padding: 20px 0px 0px 50px;
		font-size: 50px;
	}

}

.list{
	width: 90%;
	margin: auto;
	height: min-content;
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

	& > .working{
		border: 3px solid $green;
	}

	& > .notworking{
		border: 3px solid grey;
	}
}
.header{
		width: 90%;
		margin: auto;

		height: 100px;
	&--title{
		text-align: left;
		padding: 20px 0px 0px 50px;
		font-size: 50px;
		width: max-content;
		float: left;
	}

	&--date{
		float: right;
		background-color: white;
		padding: 20px 30px;
		width: min-content;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-radius: 20px;
		margin-top: 20px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.301);
		& > button{
			padding: 10px 20px;
			font-size: 20px;
			background-color: $green;
			color: white;
			margin-left: 20px;
		}
	}
}

</style>
