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

            // Elimino gli spazi vuoti tramite trim, questa cosa si può fare direttamente nel v-model nell'html
            // this.newToDo.text = this.newToDo.text.trim();

            if(this.newToDo.text === "") {
                this.error = true
            } else {
                this.toDo.push({...this.newToDo}),
                this.newToDo.text = ""
                this.error = false
            }
        },
        
        toggleDone: function(clickedIndex){
            this.toDo[clickedIndex].isDone = !this.toDo[clickedIndex].isDone
        }
    }
}).mount("#app")