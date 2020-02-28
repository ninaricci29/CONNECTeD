<template>
    <div class="projects">
        <h4> PROJECTS </h4>

        <section class="container">
            <b-button class="btn-sm">
                <b-link class="project-button" href="/post-projects">NEW PROJECT</b-link>

            </b-button>

            <div class="project-cards">
                <ul>
                    <li class="description">
                        <ProjectCards/>
                    </li>

                    <li>
                        <ProjectCards/>
                    </li>

                    <li>
                        <ProjectCards/>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProjectCards from "@/components/ProjectCards.vue";
    export default {
        name: "projects",
        components: {
            ProjectCards
        }
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    h4 {
        transform: translate(-40%, 10%);
        font-weight: bold;
    }

    .container{
        padding: 20px 40px 0 40px;
    }

    .text-box {
        font-size: 14px;
        height: 80px;
        border-color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, .09);
        padding-bottom: 20px;
    }

    li {
        list-style-type: none;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 20px;
        margin: 0px;
        padding: 0px;
    }

    .project-cards {
        padding: 1rem 0 1rem 0;
    }

    .project-button {
        color: white;
        text-decoration: none;
    }
</style>
