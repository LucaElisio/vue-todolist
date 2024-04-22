// alert("ciao")

const {createApp} = Vue;

createApp({
    data(){
        return{

            error: false,

            newToDo: {
                text: "",
                isDone: false,
                status: "undone",
            },

            toDo: [
                {
                    text: "Mobile App Launch",
                    isDone: true,
                    status: "done"

                },
                {
                    text: "Interview John. H",
                    isDone: false,
                    status: "undone"

                },
                {
                    text: "Summit update to mobile storefronts",
                    isDone: true,
                    status: "done"

                },
            ],

        }
    },
    methods: {
        addToDo: function(){
            if(this.newToDo.text === "") {
                this.error = true
            } else {
                this.toDo.push({...this.newToDo}),
                this.newToDo.text = ""
                this.error = false
            }

        }
    }
}).mount("#app")