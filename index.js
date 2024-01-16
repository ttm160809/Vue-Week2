import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io';


createApp({
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            console.log(this.user);
            axios.post(`${url}/v2/admin/signin`, this.user)
            .then((res) => {
                const { token, expired } = res.data;
                document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
                location.href = './products.html';
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            })

        }
        
    }
}).mount('#app');