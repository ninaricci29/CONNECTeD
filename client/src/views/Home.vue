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
                <div class="intro">
                    <br>
                    <span style="color:darkslateblue">CONNECTeD </span> was <span style="color:lightskyblue"> created for students, by students. </span> We are <span style ="color: lightseagreen"> Math and Computer Science Students </span> who wanted to foster <span style ="color: lightpink">collaboration </span> and <span style ="color: mediumpurple">creation</span> on campus.
                    This platform is a <span style="color:gold">digital safe space </span>for students at the <span style="color:darkblue">University of Toronto </span>to share personal
                    pre-professional objectives and find project partners.
                    <br> <br>
                </div>
            </b-container>
        </section>
    </body>

</template>

<script>
    export default {
        name: "Home.vue"
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
        font-family: "Montserrat", Montserrat, serif;
        font-size: 28px;
    }

</style>