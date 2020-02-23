<template>
    <div id="app">
        <NavBar :nav-links="navLinks"/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    export default {
        components: {
            NavBar
        },
        data: () => ({
            navLinks: [
                {
                    text: 'Home',
                    path: '/home',
                },
                {
                    text: 'Profile',
                    path: '/profile/1',
                },
                {
                    text: 'Search',
                    path: '/search',
                },
                {
                    text: 'Log In',
                    path: '/log-in',
                }
            ]
        })
    }
</script>

<style>
    #app {
        font-family: Montserrat;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>

