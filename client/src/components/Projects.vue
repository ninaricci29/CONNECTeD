<template>
    <div class="projects">
        <h4> PROJECTS <font-awesome-icon :icon="['fa', 'lightbulb']" /></h4>

        <section class="container">
            <b-button class="btn-sm">
                <b-link class="project-button" href="/post-projects">NEW PROJECT</b-link>
            </b-button>

            <div class="project-cards">
                <ul>
                    <li class="description">
                        <ProjectCards/>
                    </li>
                </ul>
<!--                <ul>-->
<!--                    <li class="description">-->
<!--                        <ProjectCards/>-->
<!--                    </li>-->
<!--                </ul>-->
            </div>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProjectCards from "../components/testing.vue";
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

    li {
        list-style-type: none;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 5px;
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
