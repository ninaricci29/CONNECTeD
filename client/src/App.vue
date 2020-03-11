<template>
    <div id="app">
        <NavBar :nav-links="navLinks"/>

        <router-view/>

        <Footer/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import Footer from '@/components/Footer'
    export default {
        components: {
            NavBar,
            Footer
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
        font-family: "Montserrat", Montserrat, serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>

