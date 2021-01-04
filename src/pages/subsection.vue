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
                                   <button class="btn btn-success w-50 d-block mx-auto mt-5" type="submit">Submit<span v-if="loading"> Loading...</span></button>
                                   </form>
                                   <basix-alert v-if="dataAdedd" type="success" :withCloseBtn="true" class="col-6 mx-auto mt-4">
                                        <span class="badge badge-pill badge-success">Success</span>
                                        Data Added Successfully
                                   </basix-alert>

                                   <basix-alert v-if="errorMeg" type="danger" :withCloseBtn="true" class="col-12 col-md-6 mx-auto mt-4 text-center">
                                        <span class="badge badge-pill badge-danger">{{errorMeg}}</span>
                                   </basix-alert>
                              </div>
                             
                         </div>

                         <div class="card" v-if="subSections.length">
                              <div class="card-header">
                                   <strong>All sub sections</strong> 
                              </div>
                              <div class="card-body card-block">
                                   <table class="table table-striped first-td-padding border-table">
                                        <thead>
                                             <tr>
                                                  <td>Id</td>
                                                  <td>Name</td>
                                                  <td>Main section</td>
                                                  <td>Edit</td>
                                                  <td>Delete</td>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="sub in subSections" :key="sub.id">
                                                  <td>{{sub.id}}</td>
                                                  <td>{{sub.name}}</td>
                                                  <td>{{sub.category.name}}</td>
                                                  <td @click="showEditModal(sub.id)"><button type="button" class="btn btn-info">Edit</button></td>
                                                  <td @click="deleteItem(sub.id)"><button type="button" class="btn btn-danger">Delete</button></td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
          <transition enter-active-class="animated fadeIn">
               <EditModal @closeModalEvent="closeEditModal" :subCategoryId="subCategoryId" v-if="showModal" :key="showModal"/>
          </transition>
     </section>
</template>

<script>
import EditModal from './models/editSubMainSec'
export default {
     components:{EditModal},
     data () {
     return {
          subSections:[],
          subSection:{
               name:'',
               category_id:null
          },
          loading:false,
          categories:[],
          dataAdedd:false,
          errorMeg:null,
          showModal:false,
          subCategoryId:null,
          isUpdate:false

     }
  },
  mounted(){
     this.getCategory();
     this.loadAllData();
  },
  methods: {
     loadAllData() {
          this.axios.get(`api/admin/sub-categories`,
          ).then((response) => {
               if(response.status == 200){
                    if (response.data.status == true) {
                         this.subSections = response.data.data
                    } 
               }
          })
     },
     showEditModal(subCategoryId){
          this.showModal = true;
          this.subCategoryId = subCategoryId;
     },
     closeEditModal(isUpdate) {
          this.showModal = !this.showModal;
          if (isUpdate) {
               this.loadAllData();
          }
     },
   handleSubmit(){
     if (this.subSection.name && this.subSection.category_id) {
          this.loading = true;
          this.errorMeg = null;
      this.axios.post('api/admin/sub-categories',this.subSection).then((response) => {
           if(response.status == 200){
               if (response.data.status == true) {
                    this.loading = false;
                    this.dataAdedd = true;
                    let self = this;
                    setTimeout(
                    function() {
                         self.reset();
                         self.loadAllData();
                    }, 2000);
               } 
               else{
                    this.errorMeg = response.data.msg
                    this.loading = false;
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
     deleteItem(itemId){
          let r = confirm("Are you sure to delete this sub category ?");
          if (r == true) {
               this.axios.delete(`api/admin/sub-categories/${itemId}`,
               ).then((response) => {
                    if(response.status == 200){
                         if (response.data.status == true) {
                              this.loadAllData();
                         } 
                    }
               })
          } 
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
