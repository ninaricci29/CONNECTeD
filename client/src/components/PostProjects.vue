<template>
    <div>
        <div>
            <h6>Post a new project!</h6>
        </div>
        <form class="form" method="submit">
            <div class="form-group">
                <label>Project Name</label>
                <span class="star">*</span>

                <input type="Project-Name" class="form-control active">

            </div>
            <div class="form-group">
                <label>Description</label>
                <span class="star">*</span>

                <textarea type="Description" class="form-control active description" placeholder="This project is.."
                          rows="4" cols="50" name="comment"/>
                <small id="bio-type" class="form-text text-muted">Describe your project!</small>
            </div>

            <div>
                <b-form-group label="select your tags:">
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
                                    <option disabled value="">Choose a tag...</option>
                                </template>
                            </b-form-select>
                        </template>
                    </b-form-tags>
                </b-form-group>
            </div>

            <div id="button">
                <button type="log-in-via-utorid" class="btn btn-primary" @click="submit">PUBLISH</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"submit",
        data() {
            return {
                options: ['Computer Science', 'Java', 'A.I.', 'Machine Learning'],
                value: []
            }
        },
        computed: {
            availableOptions() {
                return this.options.filter(opt => this.value.indexOf(opt) === -1)
            }
        },
        methods:{
            submit(){
                axios.post('http://localhost:8081/profile',{
                    first_name: this.firstname,
                    last_name:this.lastname,
                    bio:this.bio,
                    yos: this.yos,
                    major: this.major
                })
                    .then(response => {
                        this.firstname= response.data.first_name,
                            this.lastname= response.data.last_name,
                            this.bio= response.data.bio
                        this.yos= response.data.yos
                        this.major= response.data.major
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            }
        }}
</script>

<style scoped>
    body {
        padding-top: 40px;
        background-color: white;
        color: black;
        text-align: center;
    }
    body h1{
        font-weight: bolder;
        font-size: 60px;
        text-align: center;
    }
    body h6{
        font-weight: bold;
        font-size: 20px;
        padding-top: 10px;
    }
    .form{
        display: inline-block;
    }
    .form-group{
        text-align: left;
    }
    .form-control{
        width: 500px;
        border-color: black;
    }
    .active{
        color: black;
    }
    #bio-type{
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

    .description {


    }

</style>