<template>
    <div>
        <MasterSamplePost v-bind:headerContent="posts">
            <template v-slot:sample>

                <p>
                    {{posts.body}}
                </p>


            </template>
        </MasterSamplePost>
    </div>
</template>

<script>
    import MasterSamplePost from '../layouts/MasterSamplePost'
    import axios from 'axios'

    export default {
        name: "Sample",
        components: {
            MasterSamplePost
        },
        data() {
            return {
                // headerContent: {
                //     backgroundImage: "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg",
                //     main_title: "Man must explore, and this is exploration at its greatest",
                //     sub_title: " A Blog Theme by start Bootstrap",
                //     post: "on August 24, 2019"
                // },
                posts: {},


            }
        },
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
                .then(response => {
                    this.posts.main_title = response.data.title;
                    this.posts.body = response.data.body;
                    this.posts.backgroundImage = "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg";
                    this.posts.sub_title = "Julfikar";
                    this.posts.dateTime = "21 Feb 2020";
                    console.log(this.posts)
                })


        },
    }
</script>

<style scoped>

</style>

