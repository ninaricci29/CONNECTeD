<template>
    <header>
        <div class="container">
            <h4> Based on your interests... </h4>
            <b-row class="tags">
                <li><a> AI </a></li>
                <li><a> PHOTOGRAPHY </a></li>
                <li><a> STOCKS </a></li>
                <li><a> COMPUTER </a></li>
            </b-row>
            <h5> We think you will click with:</h5>
        </div>

    </header>

</template>

<script>
    export default {
        name: "SearchTags"
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    header {
        padding-top: 40px;
        -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.09);
        text-align: left;
    }

    .container {
        padding-left: 40px;
        padding-bottom: 20px;
    }

    .tags li {
        padding-top: 20px;
        list-style-type: none;
        text-decoration: none;
        text-transform: uppercase;
        padding-left: 40px;
    }

    .tags li a {
        padding: 0 25px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 300;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.09);
    }

    .tags li a:hover {
        font-size: 16px;
        font-weight: bold;
    }

    h4 {

        font-weight: bold;
    }
    h5 {
        font-weight: lighter;
        padding-top: 40px;
    }


</style>