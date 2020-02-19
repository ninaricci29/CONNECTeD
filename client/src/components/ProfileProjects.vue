<template>
    <div class="projects">
        <h4> PROJECTS </h4>

        <section class="container">
            <b-form-input class="text-box" v-model="text" placeholder="What's your new project?"/>

        </section>


    </div>
</template>

<style scoped>
    * {
        box-sizing: border-box;
    }
    h4 {
        transform: translate(-40%, 10%);
        font-weight: bold;
    }

    .container{
        padding-left: 80px;
        padding-top: 20px;
    }

    .text-box {
        font-size: 15px;
        width: 1000px;
        height: 80px;
        border-color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, .09);
        padding-bottom: 20px;
    }

    img {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        /*border: 3px solid #fff;*/
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
        object-fit: cover;
    }
</style>
