<template>
        <div class="signIn">
            <div class="container">
                <hgroup>
                    <h1 class="featured-text">Frontend</h1>
                    <h2>Community</h2>
                </hgroup>
            </div>
            <form class="form">
                <div id="button">
                    <router-link to= "/register" tag = "b-button">Sign In</router-link>
                </div>
            </form>
        </div>
</template>

<script>
    export default {
        name: 'signIn'
    }
    /*
 * Very quick, very rough recreation of the JamHot 'Uncover Edinburgh' effect
 * https://www.thisisjamhot.com/work/uncover-edinburgh
 */

    // let wrappers, tl;
    //
    // let config = {
    //     isDebug: false,
    //     speed: 10,
    //     credits: () => {
    //         window.open(
    //             "https://www.thisisjamhot.com/work/uncover-edinburgh",
    //             "_blank"
    //         );
    //     }
    // };
    //
    // const gui = new dat.GUI();
    // const speedControl = gui.add(config, "speed", 0.1, 15);
    // const debugControl = gui.add(config, "isDebug");
    // gui.add(config, "credits");
    // speedControl.onChange(function(value) {
    //     anim(wrappers);
    // });
    //
    // debugControl.onChange(function(value) {
    //     document.body.classList.toggle("debug");
    // });
    //
    // function init() {
    //     const split = Splitting({
    //         target: ".featured-text",
    //         by: "chars"
    //     });
    //
    //     split.forEach(splitInstance => {
    //         wrappers = duplicateChars(splitInstance.chars);
    //         anim(wrappers);
    //     });
    // }
    //
    // function randRange(min, max) {
    //     return Math.round(Math.random() * (max - min) + min);
    // }
    //
    // function duplicateChars(chars) {
    //     let wrappers = [];
    //     chars.forEach(el => {
    //         const wrapper = document.createElement("span");
    //         wrapper.setAttribute("class", "char-wrapper");
    //         el.parentNode.insertBefore(wrapper, el);
    //         wrapper.appendChild(el);
    //
    //         let clone = el.cloneNode(true);
    //         clone.setAttribute("class", "char char--clone");
    //         wrapper.appendChild(clone);
    //         wrappers.push(wrapper);
    //     });
    //
    //     return wrappers;
    // }
    //
    // function anim(letters) {
    //     if (tl) {
    //         tl.kill();
    //     }
    //     tl = new TimelineMax({
    //         paused: true,
    //         onComplete: anim,
    //         onCompleteParams: [letters]
    //     });
    //
    //     letters.forEach((letter, index) => {
    //         const gotoY = `-${randRange(0, 5) * 2}0vw`;
    //         const speed = config.speed + Math.random();
    //         tl.to(
    //             letter,
    //             speed,
    //             {
    //                 y: gotoY,
    //                 ease: "power1.inOut",
    //                 onComplete: () => {
    //                     TweenMax.to(letter, 0, { y: "0" });
    //                 }
    //             },
    //             0
    //         );
    //     });
    //
    //     tl.play();
    // }
    //
    // init();


</script>

<style scoped>
    /*FROM CODEPEN: LawrieCape*/
    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

    html,
    body {
        margin: 0;
        padding: 0;
        background-color: #ff5100;
        overflow: hidden;
    }

    .debug {
        background-color: hotpink !important;
    }
    .debug h1 {
        border: 1px solid black;
        overflow: visible;
    }
    .debug h2 {
        color: red;
        z-index: 2;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100vw;
        min-height: 100vh;
    }

    h1,
    h2 {
        text-transform: uppercase;
        font-family: "Anton", sans-serif;
        text-align: center;
        margin: 0;
        position: relative;
        overflow: hidden;
    }

    h1 {
        font-size: 20vw;
        letter-spacing: 1vw;
        margin: 0;
        line-height: 3.1;
        height: 20vw;
    }

    h2 {
        font-size: 10vw;
        letter-spacing: 4.35vw;
        padding-left: 2.8vw;
    }

    .char-wrapper {
        position: relative;
        display: inline-block;
    }

    .char {
        display: inline-block;
        position: relative;
        height: 20vw;
    }

    .char--clone {
        position: absolute;
        top: 60vw;
        left: 0;
    }

    .char:before,
    .char:after {
        content: attr(data-char);
        position: absolute;
        left: 0;
        height: 20vw;
    }

    .char:before {
        top: -100%;
    }

    .char:after {
        bottom: -100%;
    }

    .dg.a.main {
        margin-right: 0;
    }
    /*FROM CODEPEN*/
    body{
        color: black;
        text-align: center;
    }
    .brand{
        font-weight: bolder;
        font-size: 60px;
    }
    .sub{
        font-weight: bold;
        font-size: 20px;
        padding-top: 10px;
    }
    .form{
        padding-top: 50px;
        padding-bottom: 40px;
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
