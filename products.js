import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io';
const myToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
axios.defaults.headers.common['Authorization'] = myToken;
const myPath = 'ttmtest';


createApp({
    data(){
        return{
            products:[],
            tempProduct: {}
        }
    },
    methods:{
        checkLogin(){
            axios.post(`${url}/v2/api/user/check`)
            .then((res) => {
                this.getProducts();
            })
            .catch((err) => {
                location.href = './index.html';
                console.log(err);
                alert(err.response.data.message);
            })
        },
        
        getProducts(){
            axios.get(`${url}/api/${myPath}/admin/products/`)
            .then((res) => {
                console.log(res.data.products)
                this.products = res.data.products;
                console.log(this.products)
            })
            .catch((err) => {
                location.href = './index.html';
            })
        }
    },
    mounted(){
        this.checkLogin();
    }
}).mount('#app');