<template>
    <body class="about">
    <header>
        <div class="logo" cent>
            <br>
            <img class ="logo" src="../assets/logo.png"/>
        </div>
    </header>

    <section class="about-text">
        <b-container class="top">
            <h4>
                CONNECTeD was created for students, by students. We are Math and Computer Science Students who wanted to foster collaboration and creation on campus.
                This platform is a digital space for students to share personal
                pre-professional objectives, and find peers interested in collaborating.

                <br> <br> <br> <u>Frequently Asked Questions</u><br><br>
                <div class="h5">

                    Q: <i>I'm a University of Toronto student. Why should I use CONNECTeD?</i>
                    <br> <br>
                    A: Say you know how to use powerful tools like Python, Java, and R. Perhaps you want to combine those tools
                    with hobbies or side interests. If there's something you're itching to create, you can trust our platform to find collaborators and turn dream projects
                    into finished products.
                    <br> <br>

                    Q: <i>Okay cool, I'm interested! Can anyone sign up?</i>
                    <br> <br>
                    A: We want to protect our users. Right now, all registered users are vetted University of Toronto students. This way, you can be sure that
                    the people you're working with are verified students. You can make an account at our sign in page :)
                    <br> <br>

                    Q: <i>I made an account. Now how do I go about making project partners?</i>
                    <br> <br>
                    A: Simply assign profile tags to yourself for languages, frameworks, and technologies you're familiar with. Then, you can use the
                    search bar to view other users and their abilities, as well as current projects underway. To connect with people and projects,
                    simply navigate to their cards. Have fun!
                    <br> <br>


               </div>



            </h4>
        </b-container>
    </section>
    </body>
</template>

<script>
    export default {
        name: "About.vue"
    }
</script>

<style scoped>

    logo {
        height: 200px;
        width: 50%;
    }
    h4, h5 {
        color: white
    }
    body {background-color: black;}
    img.logo {
        display: block;
        margin: 0 auto;

    }
</style>