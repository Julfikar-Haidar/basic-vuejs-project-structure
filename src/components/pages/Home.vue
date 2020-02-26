<template>
    <div>
        <Master v-bind:headerContent="headerContent">
            <template v-slot:content>

                <div class="post-preview" v-for="post in posts" v-bind:key="post.id">
                    <a href="#">
                        <h2 class="post-title">
                            <router-link :to="{ name: 'Sample', params:{id: post.id }}">{{post.title}}</router-link>
                        </h2>
                        <h3 class="post-subtitle">
                            {{post.body}}
                        </h3>
                    </a>
                    <p class="post-meta">Posted by
                        <a href="#">Start Bootstrap</a>
                        on September 24, 2019</p>
                </div>

                <hr>
                <!-- Pager -->
                <div class="clearfix">
                    <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
            </template>
        </Master>

    </div>
</template>

<script>
    import Master from '../layouts/Master'
    import axios from 'axios'



    export default {
        name: "Home",
        components: {
            Master,

        },
        data() {
            return {
                headerContent: {
                    backgroundImage: "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg",
                    main_title: "Clean Blog",
                    sub_title: " A Blog Theme by start Bootstrap"

                },
                posts:null
            }
        },
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => this.posts = response.data)


        }
    }
</script>

<style scoped>

</style>