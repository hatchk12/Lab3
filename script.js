/*global Vue*/

let app= new Vue({
    el: "#app",
    data:{
        url:'https://random.dog/8b48bc81-16fd-4d1d-b593-1d671107ca5a.jpg',
        fav:'https://random.dog/8b48bc81-16fd-4d1d-b593-1d671107ca5a.jpg',
        size:0,
        loading:false,
    },
    methods:{
        async jokes(){
            try{
                this.loading=true;
                const response = await axios.get("https://random.dog/woof.json")
                this.url=response.data.url;
                if(this.url.includes('.mp4')|| this.url.includes('.webm')){
                    this.jokes()
                }
                console.log(this.url);
                this.loading=false;
            }
            catch(error){
                console.log(error);
            }
        },
        favorite(){
            this.fav = this.url;
        }
    }
});