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

                    <b-col class="first-col">
                        <b-row class="first-row">
                            <li class="name"><h5> {{name}} </h5></li>
                            <li>
                                <a>
                                    <font-awesome-icon :icon="['fas', 'user-plus']" />
                                </a>
                            </li>
                        </b-row>
                        <b-row class="desc"> <h8> {{description}} </h8></b-row>
                        <b-row class="url"><a><h8>  url.ca </h8></a></b-row>
                    </b-col>

                    <b-col class="sec-col">
                        <b-row>
                            <li class="abc">Avg. Rating: </li>
                            <li class="efg"> <font-awesome-icon :icon="['fas', 'star']"/></li>
                        </b-row>

                        <b-row>
                            <li class="abc">Year of Study: </li>
                            <li class="efg"> {{year}} </li>
                        </b-row>

                        <b-row>
                            <li class="abc">Major: </li>
                            <li class="efg">{{major}}</li>
                        </b-row>

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
            var id = this.$route.params.id;
            axios.get(process.env.VUE_APP_API_URL+'/connect/profile_info?id='+ id)
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
        padding-top: 200px;
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

    .first-col {
        padding-left: 300px;
    }

    li {
        list-style-type: none;
        text-decoration: none;
    }

    .first-row li a {
        padding-left: 20px;
        cursor: pointer;
    }

    .first-row li a:hover {
        color: lightslategrey;
    }

    .url:hover{
        color: lightslategrey;
        cursor: pointer;
    }

    .abc {
        color: #9999A5;
        font-weight: bold;
        padding-bottom: 5px;
    }

    .efg {
        padding-left: 20px;
    }

</style>