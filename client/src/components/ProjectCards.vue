<template>
    <div class="project-cards">
        <img src="../assets/saul-flores-wBLis5RllUE-unsplash.jpg"/>
        <div class="container">
            <div class="project-name"> {{project_name}} </div>
            <p class="project-description"> {{project_description}} </p>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ProjectCards",
        data() {
            return {
                project_name: null,
                project_description: null,
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            axios.get('http://localhost:8081/project?id='+this.id)
                .then(response => (
                    this.project_name = response.data.project_name,
                        this.project_description = response.data.desc
                ));
        }
    }
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