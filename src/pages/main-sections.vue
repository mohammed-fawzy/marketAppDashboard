<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Add main sections</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                             <div class="col-12 col-md-5">
                                                  <input v-model="mainSection.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                             </div>
                                        </div>
                                   <input class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" value="Add" @click="handleSubmit">
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

                         <div class="card" v-if="categories.length">
                              <div class="card-header">
                                   <strong>All Main Sections</strong> 
                              </div>
                              <div class="card-body card-block">
                                   <table class="table table-striped first-td-padding border-table">
                                        <thead>
                                             <tr>
                                                  <td>Id</td>
                                                  <td>Name</td>
                                                  <td>Sub categories</td>
                                                  <td>Edit</td>
                                                  <td>Delete</td>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="cat in categories" :key="cat.id">
                                                  <td>{{cat.id}}</td>
                                                  <td>{{cat.name}}</td>
                                                  <td>
                                                       <select name="select" id="select" class="form-control" v-if="cat.sub_categories.length">
                                                            <option v-for="cat in cat.sub_categories" :value="cat.id" :key="cat.id"
                                                            >{{cat.name}}</option>
                                                       </select>
                                                       <span v-else> No sub categories</span>
                                                  </td>

                                                  <td @click="showEditModal(cat.id)"><button type="button" class="btn btn-info">Edit</button></td>
                                                  <td @click="deleteItem(cat.id)"><button type="button" class="btn btn-danger">Delete</button></td>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
          <EditModal @closeModalEvent="closeEditModal" :categoryId="categoryId" v-if="showModal" :key="showModal"/>
     </section>
</template>

<script>
import EditModal from './models/editMainSec'
export default {
     components:{EditModal},
     data () {
     return {
          categories: [],
          mainSection:{
               name:'',
          },
          showModal:false,
          categoryId:null,
          dataAdedd:false,
          errorMeg:null,
     }
  },
     mounted(){
     this.loadAllData()
   },
  methods: {
     loadAllData() {
          this.axios.get(`api/admin/categories`,
          ).then((response) => {
               if(response.status == 200){
                    if (response.data.status == true) {
                         this.categories = response.data.data
                         // this.total_pages = response.data.data.paginate.total_pages
                    } 
               }
          })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadAllData();
     },
    handleSubmit(){
     if (this.mainSection.name) {
          this.errorMeg = null;
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
                         this.errorMeg = response.data.msg 
                    }
               }
               console.log(response)
          
          })
     }
    },
     showEditModal(clientId){
          this.showModal = true;
          this.categoryId = clientId;
     },
     closeEditModal(isUpdate) {
          this.showModal = !this.showModal;
          if (isUpdate) {
               console.log('isUpdate', isUpdate)
               this.loadAllData();
          }
     },
     deleteItem(itemId){
          let r = confirm("Are you sure to delete this category ?");
          if (r == true) {
               this.axios.delete(`api/admin/categories/${itemId}`,
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
     this.mainSection = {
          name:'',
     }
     this.dataAdedd = false
     this.errorMeg = null
  },
}
}
</script>
<style>
     .border-table{
          border: 1px solid #dee2e6;
     }
</style>

