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
            <p>Date</p>
            <p>Time</p>
            <p>RVSP</p>
           
        </div>
        <div style="height: 1px; width: 100%; background-color: rgba(0,0,0,0.3)"></div>

		<div class="list--item" v-for="(item, index) in people" :style="[index%2==0 ? {'background-color': 'white'} : {'background-color': 'rgb(219, 242, 255)'}]">
			<p>{{item.name}}</p>
            <p>{{item.date}}</p>
            <p>{{item.time}}</p>
            <p><input type="checkbox" v-model="item.rvsp"></p>
        
		</div>
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
			const responsepromise = await fetch("http://localhost:3000/recruiting", {
                method: 'GET',
                headers: {
                   'Content-Type': 'application/json',
                },
            }).then(response => response.json()).then(data => {
				console.log(data);
				data.interviews.forEach(element => {
					// console.log(element[`${this.searchingDate}`]);
					this.people.push({
                        name: element.name,
                        date: element.date,
                        time: element.time,
                        rvsp: element.RVSP,
              
                        
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
    background-image: url("data:image/svg+xml,%3Csvg%20id%3D%22visual%22%20viewBox%3D%220%200%20900%20675%22%20width%3D%22900%22%20height%3D%22675%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M0%20197L180%20204L360%20177L540%20237L720%20210L900%20170L900%200L720%200L540%200L360%200L180%200L0%200Z%22%20fill%3D%22%23e1de7b%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%20359L180%20406L360%20339L540%20386L720%20339L900%20359L900%20168L720%20208L540%20235L360%20175L180%20202L0%20195Z%22%20fill%3D%22%23e2c968%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%20467L180%20473L360%20460L540%20480L720%20447L900%20453L900%20357L720%20337L540%20384L360%20337L180%20404L0%20357Z%22%20fill%3D%22%23e1b35a%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%20541L180%20534L360%20541L540%20534L720%20534L900%20541L900%20451L720%20445L540%20478L360%20458L180%20471L0%20465Z%22%20fill%3D%22%23de9d50%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M0%20676L180%20676L360%20676L540%20676L720%20676L900%20676L900%20539L720%20532L540%20532L360%20539L180%20532L0%20539Z%22%20fill%3D%22%23d9874a%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-size: cover;

	
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
    overflow: hidden;
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
