<template>
    <body>
        <div>
            <h1 class="brand">CONNECTeD</h1>
            <h6 class="sub"> JOIN CONNECTeD TODAY </h6>
        </div>
        <form class="form">
            <div id="button">
                <button type="log-in" class="btn btn-primary">Sign In with UofT</button>
            </div>
        </form>
    </body>
</template>

<style scoped>
    body{
        padding-top: 40px;
        background-color: #2e2e2e ;
        font-family: Montserrat,serif;
        color: white;
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
    }
</style>
