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
                        <b-row> <h8> url.ca </h8></b-row>
                    </b-col>

                    <b-col class="profile-about">
                        <b-row> <h6> Avg. Rating: {{rating}}</h6></b-row>
                        <b-row> <h8> Year of Study: {{year}}</h8></b-row>
                        <b-row> <h8> Major: {{major}}</h8></b-row>
                    </b-col>
                </b-row>
            </b-container>

            <b-col class="profile-connections">
                <b-row>
                    <b-col>
                        <b-col> <h7> 567 </h7></b-col>
                        <b-col> <h8> Connections </h8></b-col>
                    </b-col>
                    <b-col>
                        <b-col> <h7> 5 </h7></b-col>
                        <b-col> <h8> Projects </h8></b-col>
                    </b-col>
                </b-row>
            </b-col>

        </section>
    </body>
</template>

<script>
    export default {
        name: "ProfileHeader",
        props: {
            name: String,
            description: String,
            rating: String,
            year: String,
            major: String
        }
    };
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

    .profile-connections {
        padding-left: 500px
    }


</style>