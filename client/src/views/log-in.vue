<template>
    <section class="Log-In">
        <div>
            <h1 class="brand">CONNECTeD</h1>
            <h5 class="sub"> WELCOME BACK </h5>
        </div>
        <form class="form">
            <div class="form-group">
                <!--            <label for="exampleInputEmail1">Username</label>-->
                <input type="Username" class="form-control active" placeholder="Username">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <!--            <label for="exampleInputPassword1">Password</label>-->
                <input type="password" class="form-control active" placeholder="Password">
            </div>
            <div id="button">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
    .Log-In{
        padding-top: 40px;
        background-color: #2e2e2e ;
        font-family: Montserrat,serif;
        color: white;
    }
    .brand{
        font-weight: bolder;
        font-size: 60px;
    }
    .sub{
        font-weight: bold;
        font-size: 25px;
        padding-top: 10px;
    }
    .form{
        padding-top: 50px;
        padding-bottom: 40px;
    }
    .form-group{
        /*text-align: center;*/
        padding-left: 400px;
    }
    .form-control{
        width: 500px;
        border-color: white;
        background-color: #2e2e2e;
    }
    .active{
        color: white;
    }
    #emailHelp{
        width: 500px;
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
        background-color: white; /* Green */
        color: black;
    }
    #icon-list{
        background-color: black;
    }

</style>
