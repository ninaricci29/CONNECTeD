<template>
    <div class="container">
        <div class="card">
            <img class="card-img" src="../assets/1.jpg"/>
            <div class="card-body">
                <div class="card-footer">
                    <p class="category text-muted">TRAVEL</p>
                    <h4 class="title">Mong Kok, Hong Kong</h4>
                    <p class="byline">by Dan Smith</p>
                    <p class="desc text-muted-2">
                        Mong Kok is a buzzing maze of narrow streets, known for shopping.
                        Home to Ladies’ Market, Flower Market, and Fa Yuen Street.
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <img class="card-img" src="../assets/10.jpg" alt="Travel Photography" />
            <div class="card-body">
                <div class="card-footer">
                    <p class="category text-muted">UI/UX</p>
                    <h4 class="title">Designing a Travel App</h4>
                    <p class="byline">by Chris Lake</p>
                    <p class="desc text-muted-2">
                        Travelling can be a pain. My team at AirTravels implemented
                        user-centric design to build a travel experience with ease and
                        usability in mind.
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <img class="card-img" src="../assets/1.jpg"/>
            <div class="card-body">
                <div class="card-footer">
                    <p class="category text-muted">TRAVEL</p>
                    <h4 class="title">Mong Kok, Hong Kong</h4>
                    <p class="byline">by Dan Smith</p>
                    <p class="desc text-muted-2">
                        Mong Kok is a buzzing maze of narrow streets, known for shopping.
                        Home to Ladies’ Market, Flower Market, and Fa Yuen Street.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCards",

    };
</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
        font-family: "Montserrat", sans-serif;
    }

    .text-muted {
        opacity: 0.4;
    }

    .text-muted-2 {
        opacity: 0.85;
    }

    .card {
        position: relative;
        width: 18rem;
        display: inline-block;
    }

    .card .card-img {
        filter: grayscale(100%);
        width: 100%;
        border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    }

    .card:hover .card-img {
        filter: grayscale(0);
    }

    .card:hover .card-body{
        height: 13rem;
        transition: height 0.4s ease;
        overflow: hidden;
        filter: grayscale(0);

    }

    .card:hover .desc {
        display: inline;
    }

    .card-body {
        background-color: white;
        height: 6rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        border-radius: 0rem 0rem 0.5rem 0.5rem;
        transition: height 0.2s ease;
        padding: 0 0 0 0;
    }

    .card .card-footer {
        text-align: left;
        background: none;
    }

    .card .category {
        letter-spacing: 2px;
        font-size: 0.7rem;
        margin: 0 0 0 0;
    }

    .card .desc {
        display: none;
        font-size: 0.70rem;
    }

    .card .title {
        font-size: 1.1rem;
    }
    .card .byline {
        font-size: 0.8rem;
        padding: 0 0 0 0;
        color: #6d6d6d;
    }
</style>
