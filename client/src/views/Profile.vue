<template>
    <div class="profile">
        <ProfileHeader/>
        <Projects class="profile-projects"/>
    </div>
</template>

<script>
    import ProfileHeader from "../components/ProfileHeader.vue";
    import Projects from "../components/Projects";
    export default {
        name: "profile",
        components: {
            ProfileHeader,
            Projects
        }
    }
</script>

<style scoped>
    .profile-projects {
        padding-top: 80px;
    }
</style>