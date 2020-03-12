<template>
        <div class="signIn">
            <body>
            <header>
                <div class="join" cent>
                    <br>
                    <img class ="join" src="../assets/join.png"/>
                </div>
            </header>

            <form class="form">
                <div id="button">
                    <router-link to= "/info" tag = "b-button">Sign In</router-link>
                </div>
            </form>
            </body>
        </div>
</template>

<script>
    export default {
        name: 'signIn'
    }

</script>

<style scoped>
    body{
        color: black;
        text-align: center;
        font-family: "Montserrat", Montserrat, serif;
    }
    .brand{
        font-weight: bolder;
        font-size: 60px;
    }
    .sub{
        font-weight: bold;
        font-size: 20px;
        padding-top: 10px;
    }
    .form{
        padding-top: 50px;
        padding-bottom: 40px;
    }
    #button{
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .btn{
        background-color: #2e2e2e;
    }
    .btn-primary{
        border-color: white;
        background-color: #2e2e2e;
    }
    .btn:hover{
        background-color: white;
        color: black;
        border-color: black;
    }
    img.join {
        height: 50%;
        width: 50%;
        display: block;
        margin: 0 auto;

    }
</style>
