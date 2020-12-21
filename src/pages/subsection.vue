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
                                                            <select name="select" id="select" class="form-control" v-model="subSection.category_id">
                                                                 <option value="0">Please select main section</option>
                                                                 <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{cat.name}}</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="col-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-5"><label for="text-input" class=" form-control-label">Subsection Name</label></div>
                                                       <div class="col-7">
                                                            <input v-model="subSection.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   <input class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" value="Submit" @click="handleSubmit">
                                   </form>
                                   <basix-alert v-if="dataAdedd" type="success" :withCloseBtn="true" class="col-6 mx-auto mt-4">
                                        <span class="badge badge-pill badge-success">Success</span>
                                        Data Added Successfully
                                   </basix-alert>

                                   <span>{{errorMeg}}</span>
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
          subSection:{
               name:'',
               category_id:null
          },
          categories:[],
          dataAdedd:false,
          errorMeg:null,
     }
  },
  mounted(){
     this.getCategory();
  },
  methods: {
   handleSubmit(){
      this.axios.post('api/admin/sub-categories',this.subSection).then((response) => {
           if(response.status == 200){
               if (response.data.status == true) {
                    this.dataAdedd = true;
                    let self = this;
                    setTimeout(
                    function() {
                         self.reset();
                    }, 2000);
               } 
               else{
                    response.data.msg = this.errorMeg
               }
           }
          console.log(response)
      
     })
    },
    getCategory(){
          this.axios.get('api/admin/categories').then((response) => {
               if(response.status == 200){
                    if (response.data.status == true) {
                         this.categories = response.data.data
                    } 
               }
          })
    },
    reset(){
     this.subSection = {
          name:'',
     }
     this.dataAdedd = false
     this.errorMeg = null
  },
  },
}
</script>
<style>
     label{
          /* line-height: 2; */
     }
</style>
