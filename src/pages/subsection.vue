<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Subsection</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row">
                                             <div class="col-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-4"><label for="select" class=" form-control-label">Main Sections</label></div>
                                                       <div class="col-8">
                                                            <select name="select" id="select" class="form-control">
                                                                 <option value="0">Please select main section</option>
                                                                 <option value="1">Option #1</option>
                                                                 <option value="2">Option #2</option>
                                                                 <option value="3">Option #3</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="col-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-5"><label for="text-input" class=" form-control-label">Subsection Name</label></div>
                                                       <div class="col-7">
                                                            <input v-model="name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
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
<style>
     label{
          /* line-height: 2; */
     }
</style>
