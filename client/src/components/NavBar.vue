<template>
    <nav id="NavBar">
        <div>
            <input type="checkbox" id="nav" class="hidden">
            <label for="nav" class="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div class="logo ">
                <a>CONNECTED</a>
            </div>
            <div class="nav-wrapper">
                <ul>
                    <li v-for="(link, index) in navLinks" :key="index">
                    <router-link :to="link.path">
                        {{ link.text }}
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ['navLinks']
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 15vh;
        font-family: Montserrat;
        font-weight: 400;
        background-position: center;
        background-size: cover;
    }

    nav {
        padding: 20px;
        /*-webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.09);*/
    }

    .logo {
        float: left;
        margin-left: 16px;

    }

    .logo a {
        color: #000;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0px;
        text-decoration: none;
    }

    nav ul {
        float: right;
        margin: -25px;
        margin-right: 25px;
    }

    nav ul li {
        display: inline-block;
        float: left;
    }

    nav ul li:not(:first-child) {
        margin-left: 48px;
    }

    nav ul li:last-child {
        margin-right: 24px;
    }

    nav ul li a {
        display: inline-block;
        outline: none;
        color: #000;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 1.2px;
        font-weight: 600;
    }

    nav ul li a:hover{
        outline: none;
        color: lightslategrey;
        text-decoration: none;
        font-weight: 600;
    }

    @media screen and (max-width: 864px) {
        .logo {
            position: fixed;
            left: 10px;
            top: 15px;
            display: block;
            cursor: pointer;
            z-index: 9999;
            border-radius: 50%;
        }
        .logo a {
            font-size: 24px;
        }
        nav{
            padding: 30px;
            -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        }
        .nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
        }

        .nav-wrapper ul {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
        }

        .nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: 10px;
        }

        .nav-wrapper ul li:nth-child(1) a {
            transition-delay: 0.2s;
        }

        .nav-wrapper ul li:nth-child(2) a {
            transition-delay: 0.3s;
        }

        .nav-wrapper ul li:nth-child(3) a {
            transition-delay: 0.4s;
        }

        .nav-wrapper ul li:nth-child(4) a {
            transition-delay: 0.5s;
        }

        .nav-wrapper ul li:not(:first-child) {
            margin-left: 0;
        }

        .nav-wrapper ul li a {
            padding: 10px 24px;
            opacity: 0;
            color: #000;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.2px;
            transform: translateX(-20px);
            transition: all 0.2s ease;
        }

        .nav-btn {
            position: fixed;
            right: 10px;
            top: 10px;
            display: block;
            width: 48px;
            height: 48px;
            cursor: pointer;
            z-index: 9999;
            border-radius: 50%;
        }

        .nav-btn i {
            display: block;
            width: 20px;
            height: 2px;
            background: #000;
            border-radius: 2px;
            margin-left: 14px;
        }

        .nav-btn i:nth-child(1) {
            margin-top: 16px;
        }

        .nav-btn i:nth-child(2) {
            margin-top: 4px;
            opacity: 1;
        }

        .nav-btn i:nth-child(3) {
            margin-top: 4px;
        }
    }

    #nav:checked + .nav-btn {
        transform: rotate(45deg);
    }

    #nav:checked + .nav-btn i {
        background: #000;
        transition: transform 0.2s ease;
    }

    #nav:checked + .nav-btn i:nth-child(1) {
        transform: translateY(6px) rotate(180deg);
    }

    #nav:checked + .nav-btn i:nth-child(2) {
        opacity: 0;
    }

    #nav:checked + .nav-btn i:nth-child(3) {
        transform: translateY(-6px) rotate(90deg);
    }

    #nav:checked ~ .nav-wrapper {
        z-index: 9990;
        opacity: 1;
    }

    #nav:checked ~ .nav-wrapper ul li a {
        opacity: 1;
        transform: translateX(0);
    }

    .hidden {
        display: none;
    }


</style>
