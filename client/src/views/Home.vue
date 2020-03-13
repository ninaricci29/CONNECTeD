<template>
    <body>
        <header>
            <div class="logo" cent>
            <br>
            <img class ="logo" src="../assets/home.png"/>
            </div>
        </header>
        <section class="about-text">
            <b-container class="top">
                <h3>
                    <br>
                    <span style="color:darkslateblue">CONNECTeD </span> was <span style="color:lightskyblue"> created for students, by students. </span> We are <span style ="color: lightseagreen"> Math and Computer Science Students </span> who wanted to foster <span style ="color: lightpink">collaboration </span> and <span style ="color: mediumpurple">creation</span> on campus.
                    This platform is a <span style="color:gold">digital safe space </span>for students to share personal
                    pre-professional objectives, and find peers interested in collaborating.
                    <br> <br>

                </h3>
            </b-container>
        </section>
        <div >
            <Home1 class="abc"/>
        </div>
    </body>

</template>

<script>
    import Home1 from "../components/Home1.vue";
    export default {
        name: "Home.vue",
        components: {Home1},
    }
</script>

<style scoped>

    img.logo {
        height: 65%;
        width: 65%;
        display: block;
        margin: 0 auto;

    }
    body {
        background-color: white;
    }

</style>