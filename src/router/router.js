/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*Custom Components Importing*/
import Home from '../components/pages/Home'
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Sample from "../components/pages/Sample";



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


const routes = [

    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'},
    {path: '/contact', component: Contact, name: 'Contact'},
    {path: '/sample', component: Sample, name: 'Sample'},

];

export const router = new VueRouter({
    mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});
