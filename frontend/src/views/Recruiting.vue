<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  
  <main class="board">
	<section class="header">
		<h1 class="header--title">Recruiting</h1>
		
	</section>
    
	<section class="list">
        <div style="height: 20px"></div>

		<div style="height: 40px" class="list--header">
            <p>Name</p>
            <p>Position</p>
            <p>Position Type</p>
            <p>Hourly Wage</p>
            <p>Hours Worked</p>
            <p>Paycheck Value</p>
        </div>
        <div style="height: 1px; width: 100%; background-color: rgba(0,0,0,0.3)"></div>

		<div class="list--item" v-for="(item, index) in people" :style="[index%2==0 ? {'background-color': 'white'} : {'background-color': 'rgb(219, 242, 255)'}]">
			<p>{{item.name}}</p>
            <p>{{item.position}}</p>
            <p>{{item.positionType}}</p>
            <p>{{item.hourlyWage}}</p>
            <p>{{item.hoursWorked}}</p>
            <p>{{item.paycheckValue}}</p>
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
			people: [],
			searchingDate: "01012022"
		}
	},
	methods:{
		changingDate(){
	
			let arr = document.getElementById("scheduler").value.split("-");
			
			this.searchingDate = arr.reverse().join("");
			this.search();

			
			
		},
		async search(){

            console.log("Payroll is called");
			const responsepromise = await fetch("http://localhost:3000/payroll", {
                method: 'GET',
                headers: {
                   'Content-Type': 'application/json',
                },
            }).then(response => response.json()).then(data => {
				console.log(data);
				data.payrolls.forEach(element => {
					// console.log(element[`${this.searchingDate}`]);
					this.people.push({
                        name: element.name,
                        position: element.position,
                        positionType: element.positionType,
                        hourlyWage: element.hourlyWage,
                        hoursWorked: element.hoursWorked,
                        paycheckValue: element.paycheckValue
                        
					})
					
				});

			});

		},
		

	},
	async mounted(){

		this.search();
		
	}

}
</script>

<style lang="scss" scoped>

@import "./../assets/styles.scss";

main{
	// background-color: rgb(213, 245, 255);
	background: rgb(23,206,212);
    background: linear-gradient(344deg, rgba(23,206,212,1) 0%, rgba(50,216,204,1) 39%, rgba(73,224,156,1) 77%);
	width: calc(100% - 250px);
	position: relative;
	z-index: 0;
	float: right;

	min-height: 100vh;
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
    &--header{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        // background-color: aqua;
        &>p{
            // background-color: red;
            border-radius: 10px;
        }
        & > p:nth-child(1){
            flex: 1.4;
        }
        & > p:nth-child(2){
            flex: 1.4;
        }
        & > p:nth-child(3){
            flex: 1.4;
        }
        & > p:nth-child(4){
            flex: 1.1;
        }
        & > p:nth-child(5){
            flex: 1.1;
        }
        & > p:nth-child(6){
            flex: 1.1;
        }
    }
	&--item{
		width: 100%;
		margin: auto;
		
		height: 80px;
		// border-radius: 15px;
		background-color: rgb(219, 242, 255);
		transition: all 0.5s;
		// box-shadow: 0px 0px 3px 0px rgba(211, 211, 211, 0.637);
		// box-shadow: 0px 0px 3px 1px $green;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		
		& > p:nth-child(1){
            flex: 1.4;
        }
        & > p:nth-child(2){
            flex: 1.4;
        }
        & > p:nth-child(3){
            flex: 1.4;
        }
        & > p:nth-child(4){
            flex: 1.1;
        }
        & > p:nth-child(5){
            flex: 1.1;
        }
        & > p:nth-child(6){
            flex: 1.1;
        }
		
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

	
}

</style>
