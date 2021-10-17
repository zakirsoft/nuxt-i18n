<template>
    <div>
        <section id="container" class="section">
            <div id="main-block">
                <div id="main-img" class="main-img">
                    <figure>
                        <img
                            src="./../assets/images/cityscooter_girl_banner2.png"
                        />
                        <div id="inner-block" ref="scrollBox"></div>
                    </figure>
                    <div id="figcaption" class="figcaption">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                    </div>
                </div>
                <div id="inner-text">
                    <div class="container">
                        <div class="row">
                            <div id="head-line" class="col-md-6">
                                <p class="overlay">
                                    Eine pasende farbe fur Jeden
                                </p>
                            </div>
                            <div class="col-md-6">
                                <div class="image-wrapper">
                                    <figure class="overlay">
                                        <img
                                            src="./../assets/images/Black.png"
                                        />
                                    </figure>
                                </div>
                                <div class="image-wrapper">
                                    <figure class="overlay">
                                        <img
                                            src="./../assets/images/white.png"
                                        />
                                    </figure>
                                </div>
                                <div class="image-wrapper">
                                    <figure class="overlay">
                                        <img
                                            src="./../assets/images/Blue.png"
                                        />
                                    </figure>
                                </div>
                                <div id="last-img" class="image-wrapper">
                                    <figure class="overlay">
                                        <img src="./../assets/images/Red.png" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="up-next" class="section">
            <img src="./../assets/images/cityscooter_girl_banner1.png" />
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        let targetScroll = document.querySelector('#inner-text')
        let setTranslate = document.querySelector('#figcaption')
        targetScroll = targetScroll.clientHeight
        setTranslate = setTranslate.clientWidth

        const containerScene = this.$scrollmagic
            .scene({
                triggerElement: '#container', // set trigger on fixed element
                duration: 6000, // set scroll value you want
                triggerHook: 0,
            })
            .setPin('#main-block')

        const scene2 = this.$scrollmagic
            .scene({
                triggerElement: '#container',
                triggerHook: 0,
                duration: '50%',
            })
            .setTween('#inner-block', {
                css: {
                    opacity: 1,
                    position: 'absolute',
                },
            })
        // .addIndicators({ name: 'window pause' })

        const scene3 = this.$scrollmagic
            .scene({
                triggerElement: '#container',
                triggerHook: 0,
                duration: '40%',
            })
            .setTween('#inner-block', {
                delay: 0.5,
                css: {
                    right: 0,
                    top: 0,
                    width: '100%',
                    height: '100vh',
                    borderRadius: '26px 26px 0 0',
                    border: '10px solid #fff',
                    transform: `translateX(${setTranslate - 10}px)`,
                },
            })
        // .addIndicators({ name: 'Scale bg from window' })

        const scene4 = this.$scrollmagic
            .scene({
                triggerElement: '#container',
                triggerHook: 0,
                duration: '100%',
            })
            .setTween('#inner-text', {
                delay: 0.7,
                css: {
                    top: `-${targetScroll - 720}px`,
                },
            })
        // .addIndicators({ name: 'scroll text with static bg' })
        const scene5 = this.$scrollmagic
            .scene({
                triggerElement: '#head-line',
                triggerHook: 0.5,
                duration: 0,
            })
            .setTween('#head-line .overlay', {
                css: {
                    position: 'fixed',
                    top: '40%',
                },
            })
        // .addIndicators({ name: 'scroll text with static bg' })
        const scene6 = this.$scrollmagic
            .scene({
                triggerElement: '#last-img',
                triggerHook: 0,
                duration: 400,
            })
            .setTween('#head-line .overlay', {
                // delay:0.,
                css: {
                    // position:'unset',
                    top: '-200px',
                },
            })
        // .addIndicators({ name: 'scroll text with static bg' })

        // const scene7 = this.$scrollmagic.scene({
        //           triggerElement: '#up-next',
        //           triggerHook: 0.5,
        //           duration: 10
        //         })
        //           .setTween('#head-line .overlay', {
        //             css: {
        //               // position:'unset',
        //               opacity:'0'
        //             }
        //           })
        //           // .addIndicators({ name: 'scroll text with static bg' })

        this.$scrollmagic.addScene([
            containerScene,
            scene2,
            scene3,
            scene4,
            scene5,
            scene6,
        ])
    },
}
</script>

<style lang="scss">
body {
    overflow-x: hidden;
}
#container {
    outline: 1px dashed orange;
}

.section {
    min-height: 100vh;
    > img {
        width: 100%;
    }
}

#main-block {
    position: relative;
    .main-img {
        width: 90vw;
        height: 100vh;
        display: flex;
        figure {
            position: relative;
            margin: 0;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .figcaption {
            width: 40%;
            display: flex;
            align-items: center;
            padding: 25px;
            background: #fcfcfc;
        }
    }
}

#inner-block {
    position: absolute;
    height: 30%;
    width: 31%;
    top: 33%;
    right: 4.7%;
    border-radius: 16px;
    border-color: #ffffff;
    opacity: 0;
    background: url('~assets/images/bg-sc.png') no-repeat top left;
    background-size: cover;
}

#head-line {
    .overlay {
        top: 40%;
        width: 280px;
    }
}

#inner-text {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    color: #ffffff;
    z-index: 2;
    .row {
        width: 100%;
        overflow: hidden;
        margin: 0 0 180px;
        &:last-child {
            margin: 0;
        }
    }
}

.image-wrapper {
    height: 100vh;
}

.overlay {
    background-color: #ffffff9e;
    border-radius: 16px;
    padding: 25px;
    color: #000000;
    img {
        width: 100%;
    }
}
</style>
