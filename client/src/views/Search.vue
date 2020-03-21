<template>
    <div class="search">
        <SearchTags class="search-tags"/>

        <section>
            <div class="search-cards" v-for="i in rowCount()" v-bind:key="i">
                <ul>
                    <li class="description" v-for="j in cols" v-bind:key="j">
                        <SearchCard  v-if="projectExists(i,j)"
                                      v-bind:project_name = getProject(i,j).project_name
                                      v-bind:project_description = getProject(i,j).desc
                                      v-bind:project_id = getProject(i,j).id
                                      v-bind:picture_link = getProject(i,j).picture      
                        />

                    </li>
                </ul>
            </div>
        </section>
    </div>

</template>

<script>
    import SearchTags from "../components/SearchTags.vue";
    import SearchCard from "../components/SearchCards.vue";
    import axios from 'axios';
    export default {
        name: "search",
        data() {
            return {
                project_list: null,
                cols: 3,
                options: ['Computer Science', 'Java', 'A.I.', 'Machine Learning', 'Python'],
                value: []
            }
        },
        components: {
            SearchTags,
            SearchCard
        },
        created() {
        SearchTags.$on('SearchTag', (value) => {
        this.value = value;
        });
        },
        mounted(){
            var tag_ids = [];
            console.log(this.value);
            for(var i=0;i<this.value.length;i++){
                axios.get('http://localhost:8081/connect/get-tag?tag='+this.value[i])
                    .then(response => (
                        console.log(response)
                        //tag_ids.push(response.data.id)
                    ));
            }
            axios.get('http://localhost:8081/connect/search?tag_ids='+ tag_ids)
                .then(response => (
                    this.project_list = response.data
            ));
        },
        methods:{
            rowCount() {
                const quotient = Math.floor(this.project_list.length / this.cols);
                const remainder = this.project_list.length % this.cols;
                return quotient + (remainder === 0 ? 0 : 1);
            },
            projectIndex(row, col){
                return (row - 1) * this.cols + (col -1)
            },
            getProject(row, col){
                return this.project_list[this.projectIndex(row,col)]
            },
            projectExists(row, col){
                return this.getProject(row,col) != null
            }
        }
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
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

</style>