<template>
     <div  class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Edit Main Section</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeEditModal">
                                   <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                   <div class="card">
                                        <div class="card-body card-block">
                                             <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                                       <div class="col-12 col-md-5">
                                                            <input v-model="mainSection.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
                                             <input class="btn btn-success w-50 d-block mx-auto mt-2" type="submit" value="Submit" @click="handleSubmit">
                                             </form>
                                             <basix-alert v-if="dataAdedd" type="success" :withCloseBtn="true" class="col-6 mx-auto mt-4">
                                                  <span class="badge badge-pill badge-success">Success</span>
                                                  Data Added Successfully
                                             </basix-alert>

                                             <basix-alert v-if="errorMessage" type="danger" :withCloseBtn="true" class="col-12 col-md-6 mx-auto mt-4 text-center">
                                                  <span class="badge badge-pill badge-danger">{{errorMessage}}</span>
                                             </basix-alert>
                                        </div>
                              
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     props:['categoryId'],
     data () {
          return {
                mainSection:{
                    name:'',
               },
               errorMessage:'',
               dataAdedd:false,
               isUpdate:false
          }
     },
     mounted() {
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.categoryId) {
                    this.axios.get(`api/admin/categories/${this.categoryId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let client = response.data.data
                                   this.mainSection.name = client.name
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit(){
               if (this.mainSection.name) {
                    this.errorMeg = null;
               this.axios.put(`api/admin/categories/${this.categoryId}`,this.mainSection).then((response) => {
                    if(response.status == 200){
                         if (response.data.status == true) {
                              this.dataAdedd = true;
                              this.isUpdate = true;
                              let self = this;
                              setTimeout(
                              function() {
                                   self.reset();
                                   self.closeEditModal();
                              }, 2000);
                         } 
                         else{
                              this.errorMeg = response.data.msg 
                         }
                    }
               
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
     },
}

</script>

<style>
     .modal-mask {
     position: fixed;
     z-index: 9998;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: table;
     transition: opacity .3s ease;
     }

     .modal-wrapper {
     display: table-cell;
     vertical-align: middle;
     }

</style>
