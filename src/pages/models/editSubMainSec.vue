<template>
     <div  class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Edit SubMain Section</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeEditModal">
                                   <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                   <div class="card">
                                        <div class="card-body card-block">
                                             <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                                   <div class="row">
                                                       <div class="col-6">
                                                            <div class="row form-group">
                                                                 <div class="col col-md-5"><label for="select" class=" form-control-label">Main Sections</label></div>
                                                                 <div class="col-7">
                                                                      <select name="select" id="select" class="form-control" v-model="subSection.category_id">
                                                                           <option value="0">Please select main section</option>
                                                                           <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{cat.name}}</option>
                                                                      </select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="col-6">
                                                            <div class="row form-group">
                                                                 <div class="col col-md-6"><label for="text-input" class=" form-control-label">Subsection Name</label></div>
                                                                 <div class="col-6">
                                                                      <input v-model="subSection.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                                 </div>
                                                            </div>
                                                       </div>
                                             </div>
                                             <button class="btn btn-success w-50 d-block mx-auto" type="submit" @click="handleSubmit">Submit <span v-if="loading"> Loading...</span></button>
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
     props:['subCategoryId'],
     data () {
          return {
               subSection:{
                    name:'',
                    category_id:null
               },
               loading:false,
               categories:[],
               errorMessage:'',
               dataAdedd:false,
               isUpdate:false
          }
     },
     mounted() {
          this.getCategory();
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.subCategoryId) {
                    this.axios.get(`api/admin/sub-categories/${this.subCategoryId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let client = response.data.data
                                   this.subSection.name = client.name
                                   this.subSection.category_id = client.id
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit(){
               if (this.subSection.name) {
                    this.loading = true;
                    this.errorMeg = null;
                    this.axios.put(`api/admin/sub-categories/${this.subCategoryId}`,this.subSection).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   this.loading = false;
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
                                   this.loading = false;
                                   this.errorMeg = response.data.msg 
                              }
                         }
                    })
               }
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
