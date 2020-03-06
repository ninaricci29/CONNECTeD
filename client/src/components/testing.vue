<template>
    <div class="container">
        <div class="card">
            <h2>North</h2>
            <font-awesome-icon :icon="['fa', 'arrow-right']" class="arrow" @click="modalShow = !modalShow"/>
            <b-modal v-model="modalShow" modal-class="true" hide-footer="true" centered="true" hide-header="true" content-class="true">
                <div>
                    <h2>North</h2>
                    <p>This is my project description. Ratatata the ghetto. AHhhh. This is my project description. Ratatata the ghetto. AHhhh.
                        This is my project description. Ratatata the ghetto. AHhhh. This is my project description. Ratatata the ghetto. AHhhh.</p>

                    <div class="social">
                        <font-awesome-icon :icon="['fab', 'github']" class="social-icon"/>
                    </div>


                </div>

            </b-modal>


            <p>a lonely trip.</p>
            <div class="pic">
                <img src="../assets/photo-1525543907410-b2562b6796d6.jpeg" />
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <button>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCards",
        data() {

            return {
                modalShow: false
            }
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    .arrow {
        opacity: 0;
        font-size: 18px;
        color: #fff;
        will-change: transform;
        -webkit-transform: scale(0.1);
        transform: scale(0.1);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    h2 {
        pointer-events: none;
    }
    body {
        background-color: #E6E5E1;
        width: 100vw;
        height: 100vh;
    }
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .container .card {
        position: relative;
        width: 500px;
        height: 200px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 4px;
    }
    .container .card:before {
        content: "";
        z-index: 99;
        position: absolute;
        top: -10px;
        left: 32px;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background-color: #E6E5E1;
    }
    .container .card:after {
        content: "";
        z-index: 99;
        position: absolute;
        bottom: -10px;
        left: 32px;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        background-color: #E6E5E1;
    }
    .container .card ul {
        z-index: 99;
        position: absolute;
        left: 39px;
        top: 5px;
        list-style-type: none;
    }
    .container .card ul li {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        margin: 6px 0;
        background-color: #E6E5E1;
    }
    .container .card h2 {
        z-index: 99;
        font-family: "Poppins", sans-serif;
        position: absolute;
        bottom: 0;
        right: 130px;
        font-size: 60px;
        font-weight: 700;
        color: #fff;
    }
    .container .card .arrow {
        z-index: 100;
        position: absolute;
        right: 75px;
        bottom: 25px;
        font-size: 40px;
        cursor: pointer;
    }
    .container .card p {
        z-index: 99;
        position: absolute;
        top: 20px;
        right: 70px;
        color: #333;
        opacity: 0.7;
        font-size: 12px;
        letter-spacing: 1px;
        writing-mode: vertical-lr;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    .container .card .pic {
        transform: translate(-50px, 0);
    }
    .container .card .pic img{
        z-index: 100;
        width: 400px;
        height: 200px;
        background-size: 100% 100%;
        filter: grayscale(100%);
    }
    .social {
        position: absolute;
        left: 60px;
        top: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 180px;
        height: 64px;
        border-radius: 80px;
    }
    .social .social-icon {
        z-index: 100;
        position: absolute;
        bottom: 20px;
        font-size: 20px;
        cursor: pointer;
    }
    .container .card:hover .arrow {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    .container .card button {
        position: absolute;
        right: 14px;
        bottom: 14px;
        width: 30px;
        height: 30px;
        background-color: #DA4D1D;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease;
        mix-blend-mode: hard-light;
    }
    .container .card button .arrow {
        font-size: 3rem;
    }
    .container .card:hover button {
        transform: scale(16.5);
    }
    .container .card:hover p {
        color: #fff;
    }
    .container .card:hover .pic img{
        filter: grayscale(0);
    }

</style>
