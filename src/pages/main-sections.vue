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
                                                  <input v-model="mainSection.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
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
          mainSection:{
               name:'',
          },
          dataAdedd:false,
          errorMeg:null,
     }
  },
  methods: {
    handleSubmit(){
     if (this.mainSection.name) {
      this.axios.post('api/admin/categories',this.mainSection).then((response) => {
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
     }
    },
    reset(){
     this.mainSection = {
          name:'',
     }
     this.dataAdedd = false
     this.errorMeg = null
  },
}
}
</script>
