<template>
        <div class="signIn">
            <body>
            <div>
                <h1 class="brand">CONNECTeD</h1>
                <h6 class="sub"> JOIN US TODAY </h6>
            </div>
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
</style>
