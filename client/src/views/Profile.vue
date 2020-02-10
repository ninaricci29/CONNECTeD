<template>
    <div>
        <div class="coverPhoto">
            <div class="profile">
            </div>
        </div>
        <div class="profileText">
            <h2> Your Name </h2>
        </div>

        <img src="../assets/profile.jpg"/>

        <div class="AboutMeCredentials">
            <div class="AboutMe">
                <h3> Got a project? Let's collaborate! </h3>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor </h4>
            </div>
            <div class="Creds">
                <h3> Year of Study: First Year </h3>
                <h3> Major: Computer Science </h3>
                <h3> Avg Rating: 5.00 </h3>
            </div>
        </div>

        <div class = "Projects">
            <div class ="ProjectsTitle">
                <h5> P R O J E C T S </h5>
            </div>
            <div class="WebApplication">
                <h3> WEB APPLICATION </h3>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." </h4>
            </div>
            <div class="PhotographyCollab">
                <h3> PHOTOGRAPHY COLLAB </h3>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." </h4>
            </div>
            <div class="ResearchAssistant">
                <h3> ROBOTICS PROJECT </h3>
                <h4> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." </h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
    body {
        padding: 20px;
        margin: 0;
        /*scroll-behavior: smooth;*/
        background-color: grey;
        background-size: 1500px;
    }

    .profileText {
        font-family: "Candara";
        position: relative;
        top: 440px;
        left: 20px;
    }

    .Creds {
        background-color: slategrey;
        padding: 20px;
    }

    .Creds h3 {
        font-size: large;
        font-weight: bold;
    }

    .AboutMeCredentials {
        columns: 2;
        margin-left: 60px;
        margin-right: 60px;
        column-gap: 500px;
        font-family: "Candara Light" ;
        text-align: justify;
        line-height: 50px;
        column-width: 100px;
        column-height: 100px;
    }

    .AboutMe {
        background-color: white;
        padding: 20px;

    }

    .AboutMe h3 {
        font-size: larger;
        font-weight: bolder;
        font-family: Candara;
    }

    .AboutMe h4 {
        font-size: large;
        font-weight:bold;
    }

    .profile{
        margin-top: 15px;
        font-family: "Calisto MT";
        height: 20px;
        width: 400px;
        align-items: center;
        justify-content: center;
        line-height: 50px;
    }

    img{
        top: 150px;
        position: relative;
        left: 20px;
        bottom: 150px;
        margin-bottom: 20px;
        height: 220px;
        width: 280px;
        border-radius: 50%;
    }

    .navigation {
        position: relative;
        size: 200px;
    }

    .ProjectsTitle h5 {
        font-size: 300%;
        font-family: "Candara Light";
        font-weight: bolder;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 15px;
    }

    .Projects {
        margin-top: 100px;
        background-color: darkgray;
        padding: 15px;
        font-family: "Candara Light";
        margin-left: 40px;
        margin-right: 50px;
        font-size: medium;
        line-height: 20%;
    }

    .Projects h3 {
        margin-top: 40px;
        font-size: x-large;
        font-weight: bolder;
    }

    .Projects h4 {
        font-size: large;
        font-weight: bold;
        margin-left: 40px;
        margin-right: 40px;
    }
</style>