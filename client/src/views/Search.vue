<template>
    <div class="search">
        <SearchTags class="search-tags"/>

        <section class="container">
            <div class="search-cards">
                <ul>
                    <li>
                        <SearchCard class="card"/>
                    </li>

                    <li>
                        <SearchCard class="card"/>
                    </li>

                    <li>
                        <SearchCard class="card"/>
                    </li>
                </ul>
            </div>
        </section>
    </div>

</template>

<script>
    import SearchTags from "../Unused/SearchTags1.vue";
    import SearchCard from "../Unused/SearchCards1.vue";
    export default {
        name: "search",
        components: {
            SearchTags,
            SearchCard
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    h4 {
        transform: translate(-40%, 10%);
        font-weight: bold;
    }

    .container{
        padding: 20px 40px 0 40px;
    }

    li {
        list-style-type: none;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
        grid-gap: 20px;
        margin: 0px;
        padding: 0px;
    }

    .search-cards {
        padding: 1rem 0 1rem 0;
    }

    .card {
        border-color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, .09);
    }

    .card:hover {
        border-color: white;
        box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
    }
</style>