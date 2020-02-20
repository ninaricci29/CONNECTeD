<template>
    <div class="profile">
        <ProfileHeader/>
        <Projects class="profile-projects"/>
    </div>

</template>

<script>
    import ProfileHeader from "@/components/ProfileHeader.vue";
    import Projects from "../components/Projects";
    // import axios from "axios";
    export default {
        name: "profile",
        components: {
            ProfileHeader,
            Projects
        // },
        // data() {
        //     return {
        //         name,
        //         description: null,
        //         year: null,
        //         major: null,
        //         rating: null
        //     }
        // },
        // mounted() {
        //     axios.get('http://localhost:8081/profile?id=2')
        //         .then(response => (
        //             this.name = response.data.first_name + ' ' + response.data.last_name,
        //             this.description = response.data.bio,
        //             this.year = response.data.year,
        //             this.major = response.data.major
        //         ));
        //
        }
    }
</script>

<style>
    .profile-projects {
        padding-top: 80px;
    }

</style>