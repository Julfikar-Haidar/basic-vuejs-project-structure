<template>
     <!-- Page Header -->
        <header class="masthead" v-bind:style="{backgroundImage: 'url('+ headerContent.backgroundImage +')'}">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>{{headerContent.main_title}}</h1>
                            <span class="subheading">{{headerContent.sub_title}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
    export default {
        name: "Header",
        props: ["headerContent"],
    }
</script>

<style scoped>

</style>