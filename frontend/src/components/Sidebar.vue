<template>
    <div class="sidebar">
        <section class="sidebar--title">
            <h1>SimplyHR</h1>
        </section>
        <section class="sidebar--options">
            <div class="item"><span>Schedule</span></div>
            <div class="item">Payroll</div>
            <div class="item">Interviews</div>
        </section>
    </div>
</template>
<script>

export default {
    name: "Sidebar",

}
</script>
<style lang="scss" scoped>
    .sidebar{
        width: 250px;
        height: 100vh;
        
        position: fixed;
        box-shadow: 0px 0px 3px 1px rgb(150, 150, 150);

        &--title{
            background-color: rgba(255, 0, 0, 0.281);
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
            background-color: greenyellow;
            display: flex;
            flex-direction: column;
            gap: 10px;

            & > .item{
                background-color: red;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                & > span{
                    
                    background-color: bisque;
                }

                &:hover{
                    cursor: pointer;
                }

            }

        }
    }
</style>
