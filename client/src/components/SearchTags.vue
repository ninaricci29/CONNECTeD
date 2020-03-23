<template>
    <header>
        <div>
            <h6>Search:</h6>
        </div>
        <div class="form" method="SearchTag">
            <div>
                <b-form-group>
                    <b-form-tags v-model="value" size="sm" add-on-change no-outer-focus class="mb-2 outer">
                        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                            <ul v-if="tags.length > 0" class="list-inline">
                                <li v-for="tag in tags" :key="tag" class="abc">
                                    <b-form-tag
                                            @remove="removeTag(tag)"
                                            :title="tag"
                                            :disabled="disabled"
                                            variant="info">{{ tag }}</b-form-tag>
                                </li>
                            </ul>
                            <b-form-select
                                    class="form-control abc"
                                    v-bind="inputAttrs"
                                    v-on="inputHandlers"
                                    :disabled="disabled || availableOptions.length === 0"
                                    :options="availableOptions">
                                <template v-slot:first>
                                    <option disabled value="">search for a tag..</option>
                                </template>
                            </b-form-select>
                        </template>
                    </b-form-tags>
                </b-form-group>
            </div>

            <div id="button">
                <button class="btn btn-primary" @click="SearchTag"><font-awesome-icon :icon="['fa', 'search']" /></button>
            </div>
        </div>
    </header>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"addProject",
        data() {
            return {
                name: '',
                description: '',
                options: [],
                value: [],
                error: ''
            }
        },
        computed: {
            availableOptions() {
                return this.options.filter(opt => this.value.indexOf(opt) === -1)
            }
        },
        methods:{
            SearchTag(){
                this.$emit('searchTags', this.value);
            }
        },
        mounted() {
            axios.get("/connect/tags").then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    this.options.push(response.data[i].tag_name)
                }
            });
        }
</script>

<style scoped>
    body {
        padding-top: 40px;
        background-color: white;
        color: black;
        text-align: center;
    }
    body h6{
        font-weight: bold;
        font-size: 20px;
        padding-top: 10px;
    }
    header {
        padding-top: 40px;
        -webkit-box-shadow: 0 9px 10px 0 rgba(0, 0, 0, 0.09);
    }
    .form{
        display: inline-block;
    }
    .form-control{
        width: 500px;
        border-color: black;
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
    .star{
        color: red;
    }
    .abc {
        display: inline;
    }
    .abc:not(:first-child){
        padding-left: 10px;
    }
    .outer {
        border-color: white;
        padding: 0;
    }
    .outer span {
        background-color: lightslategrey;
        border-color: black;
        color: white;
    }
</style>