<template>
    <div>
        <b-link class="angle abc efg" href="/log-in">GET STARTED</b-link>
    </div>
</template>

<script>
    export default {
        name: "Home1"
    }
</script>

<style scoped>

    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        padding: 50px 0;
        min-height: 100vh;
        margin: 0;
        /*background: radial-gradient(ellipse farthest-corner at center bottom, #6beace, #2e9aa4);*/


    }
    @media (max-width: 400px) {
        body {
            font-size: 50px;
        }
    }
    .abc {
        font-size: 40px;
        cursor: pointer;
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 0.02em;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-repeat: no-repeat;
        transition: background-size 0.9s cubic-bezier(0.67, 0.01, 0.15, 0.98);

    }
    .efg {
        flex-direction: column;
        letter-spacing: 0.03em;
        padding: 50px 0 50px 0;
        margin: 0;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

    }
    .angle {
        background-image: linear-gradient(135deg, black 0%, black 50%, transparent 50.1%);
        background-size: 0% 100%;
    }
    .angle:hover {
        background-size: 100% 300%;
    }

</style>