<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Main Sections</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                             <div class="col-12 col-md-5">
                                                  <input v-model="name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                             </div>
                                        </div>
                                   <input class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" value="Submit" @click="handleSubmit">
                                   </form>
                              </div>
                             
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {
     data () {
     return {
          name:'',
     }
  },
  methods: {
    handleSubmit(){
      this.axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
          console.log(response)
     })
    },
  },
}
</script>
