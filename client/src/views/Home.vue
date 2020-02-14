<!--This home page uses the component HelloWorld.vue-->
<!--This is an example where a component is used.-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    export default {
        name: "home",
        components: {
            HelloWorld
        }
    };
</script>