<template>

    <div>
        <!--    Navbar start  -->
        <Nav/>
       <Header v-bind:headerContent="headerContent"></Header>
        <!--        Main Content start-->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <slot name="content"></slot>
                    <slot name="about"></slot>
                    <slot name="contact"></slot>
                    <slot name="sample"></slot>

                </div>
            </div>
        </div>
        <!--    Footer start -->
        <Footer/>
    </div>
</template>

<script>
    import Nav from '../layouts/partials/Nav'
    import Footer from '../layouts/partials/Footer'
    import Header from '../layouts/partials/Header'

    export default {
        name: "Master",
        props: ["headerContent"],
        components: {
            Nav, Footer,Header
        }
    }
</script>

<style scoped>

</style>