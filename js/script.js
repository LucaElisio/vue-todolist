// alert("ciao")

const {createApp} = Vue;

createApp({
    data(){
        return{

            newToDo: {
                text: "",
                done: false,
            },

            toDo: [
                {
                    text: "Mobile App Launch",
                    done: true,
                },
                {
                    text: "Interview John. H",
                    done: false,
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true,
                },
            ],

        }
    },
    methods: {

    }
}).mount("#app")