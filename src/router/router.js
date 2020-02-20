/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*Custom Components Importing*/
import Home from '../components/pages/Home'



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


const routes = [

    {path: '/', component: Home, name: 'Home'}

];

export const router = new VueRouter({
    // mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});
