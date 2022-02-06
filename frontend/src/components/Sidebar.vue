<template>
    <div class="sidebar">
        <section class="sidebar--title">
            <h1>SimplyHR</h1>
        </section>
        <section class="sidebar--options">
            <div class="item" v-on:click="schedule"><span>Schedule</span></div>
            <div class="item" v-on:click="payroll"><span>Payroll</span></div>
            <div class="item"><span>Recruiting</span></div>
             <div class="item"><span>Records</span></div>
        </section>
    </div>
</template>
<script>

export default {
    name: "Sidebar",
    methods:{
        schedule(){
            this.$router.push("/");
        },
        payroll(){
            this.$router.push("/payroll");
        }
    }

}
</script>
<style lang="scss" scoped>
    .sidebar{
        width: 250px;
        height: 100vh;
        z-index: 2;
        position: fixed;
        box-shadow: 0px 0px 3px 1px rgb(150, 150, 150);

        &--title{
            background-color: rgb(129, 230, 255);
            height: 150px;
            position: relative;
            & > h1{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &--options{
            // background-color: greenyellow;
            display: flex;
            flex-direction: column;
            
           

            & > .item{
                
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                & > span{
                    font-size: 1.5rem;
                    transition: transform .5s;
                    user-select: none;
                }

                &:hover{
                    cursor: pointer;
                    background-color: rgb(100, 201, 226);
                }

                &:hover > span{
                    transform: translateX(25px);
                }

                &:active{
                    background-color: rgb(50, 141, 163);
                }
                &:active > span{
                    color: white;
                }


            }

        }
    }
</style>
