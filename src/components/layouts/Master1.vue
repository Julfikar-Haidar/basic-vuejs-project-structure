<template>

    <div>
        <!--    Navbar start  -->
        <Nav/>
        <!-- Page Header -->
        <header class="masthead"
                style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--        Main Content start-->
        <article class="abc">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">

                        <slot name="sample"></slot>

                    </div>
                </div>
            </div>
        </article>
        <!--    Footer start -->
        <Footer/>
    </div>
</template>

<script>
    import Nav from '../layouts/partials/Nav'
    import Footer from '../layouts/partials/Footer'

    export default {
        name: "Master",
        components: {
            Nav, Footer
        }
    }
</script>

<style scoped>
.abc{
    background-color: red;
}
</style>