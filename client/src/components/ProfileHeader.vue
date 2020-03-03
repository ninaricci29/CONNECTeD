<template>
    <body class="profile">
        <header>
            <div class="profile-picture">
                <img src="../assets/DSC02912.jpg"/>
            </div>
        </header>

        <section class="profile-info">
            <b-container class="container">
                <b-row class="profile-components">
                    <b-col class="profile-bio">
                        <b-row> <h6> {{name}} </h6></b-row>
                        <b-row> <h8> {{description}} </h8></b-row>
                        <b-row> <h8>  url.ca </h8></b-row>
                    </b-col>

                    <b-col class="profile-about">
                        <b-row> <h6> Rating: {{rating}}</h6></b-row>
                        <b-row> <h8> Year of Study: {{year}}</h8></b-row>
                        <b-row> <h8> Major: {{major}}</h8></b-row>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </body>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                name,
                description: null,
                year: null,
                major: null,
                rating: null
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            axios.get('http://localhost:8081/profile?id='+this.id)
                .then(response => (
                    this.name = response.data.first_name + ' ' + response.data.last_name,
                        this.description = response.data.bio,
                        this.year = response.data.year,
                        this.major = response.data.major
                ));
        }
    }

</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    header {
        padding-top: 140px;
        -webkit-box-shadow: 0 9px 10px 0 rgba(0, 0, 0, 0.09);
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 1000px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -70%);
        border: 3px solid #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
        object-fit: cover;
    }
    .profile-info {
        padding-top: 20px;
        transform: translate(0%, 50%);
    }

    .profile-bio {
        padding-left: 300px;
    }
</style>