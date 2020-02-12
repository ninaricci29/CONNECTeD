<template>
    <div>
        <div>
            <h1>CONNECTeD</h1>
            <h6>Complete the form.</h6>
        </div>
        <form class="form" method="submit">
            <div class="form-group">
                <label>First Name</label>

                <input type="First Name" class="form-control active" placeholder="John" v-model="firstname" >
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="Last Name" class="form-control active" placeholder="Smith" v-model= "lastname">
            </div>
            <div class="form-group">
                <label>Year of Study</label>
                <input type="year-of-study" class="form-control active" placeholder="1" v-model= "yos">
            </div>
            <div class="form-group">
                <label>Major</label>
                <select class="form-control form-control-md" v-model="major">
                    <option>select your major</option>
                    <option>Computer Science</option>
                    <option>Math & Statistics</option>
                    <option>Biology</option>
                    <option>Drama</option>
                </select>
            </div>
            <div class="form-group">
                <label>Bio</label>

                <input type="bio" class="form-control active" placeholder="Got a project? Let's collaborate!" v-model="bio">
                <small id="bio-type" class="form-text text-muted">Describe your self!</small>
            </div>

            <div id="button">
                <button type="log-in-via-utorid" class="btn btn-primary" @click="submit">SUBMIT</button>
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
        firstname: '',
        lastname : '', 
        bio: '',
        yos:'',
        major:''
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
</style>
