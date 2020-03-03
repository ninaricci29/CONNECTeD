<template>
    <div class="project-cards">
        <img src="../assets/saul-flores-wBLis5RllUE-unsplash.jpg"/>
        <div class="container">
            <div class="project-name"> Project Name </div>
            <p class="project-description"> This is my project description. Hi Nina is da best, da oNly best. </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProjectCards"
    };
</script>

<style>
    img {
        width: 100px;
        height: 100px;
        position: absolute;
        box-shadow: 0 0 20px rgba(0, 0, 0, .09);
        object-fit: cover;
        border-radius: 5px;
    }

    .container {
        text-align: left;
        padding: 0 0 0 130px;
    }

    .project-name{
        color: grey;
        font-size: 20px;
    }

    .project-description {
        font-size: 14px;
        border-color: white;
        padding: 14px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .09);
    }
</style>