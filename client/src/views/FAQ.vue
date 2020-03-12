<template>
    <body>
    <header>
        <div class="logo" cent>
            <br>
            <img class ="logo" src="../assets/hello.png"/>
        </div>

    </header>

        <div><br><br>
            <h5><i>We're so glad you're here! We hope this guide helps you get started.</i></h5><br><br>


            <h3><u> Frequently Asked Questions</u><br><br></h3>

            <p style="color:seagreen"> Q: I'm a University of Toronto student. Why should I use CONNECTeD?</p>
            A: Here, you can turn dream projects into finished products. If there's something (anything!) you want to create, you can trust our platform to find great collaborators.
            <br> <br>

            <p style="color:seagreen"> Q: Okay cool, I'm interested! Can anyone sign up? </p>
            A: Right now, all registered users are University of Toronto students. This way, you can be sure that
            all potential partners are vetted and verified.
            <br> <br>

            <p style="color:seagreen"> Q: Cool. I made an account. Now how do I go about meeting collaborators?</p>
            A: Assign yourself profile tags for languages, frameworks, and technologies you're familiar with. Then, use the
            search bar to view other users and underway projects. To connect with people and projects,
            simply navigate to their cards. Have fun :)
            <br> <br>
         </div>

    </body>




</template>

<script>
    export default {
        name: "FAQ.vue"
    }
</script>

<style scoped>
    h5 {
        text-align: center;
    }

    body {
        margin-left: 100px;
        margin-right: 100px;
        font-family: "Montserrat", Montserrat, serif;
        font-size: 20px;
    }
    img.logo {
        height: 45%;
        width: 45%;
        display: block;
        margin: 0 auto;
    }

</style>