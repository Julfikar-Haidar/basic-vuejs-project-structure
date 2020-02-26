<template>

    <div>
        <!--    Navbar start  -->
       <Nav/>
       <HeaderSample v-bind:headerContent="headerContent"></HeaderSample>
        <!--        Main Content start-->
        <article>
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
    import HeaderSample from './partials/HeaderSample'

    export default {
        name: "MasterSamplePost",
        props: ["headerContent"],
        components: {
            Nav, Footer,HeaderSample
        }
    }
</script>

<style scoped>

</style>