<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Add manager</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                       
                                        <div class="row">
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="manger.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="email-input" class=" form-control-label">Email</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="manger.email" type="email" id="email-input" name="email-input" placeholder="Enter Email" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                         <div class="row">
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="password-input" class=" form-control-label">Password</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="manger.password" type="password" id="password-input" name="password-input" placeholder="Password" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="confirm-password-input" class=" form-control-label">Password</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-on:blur="validate" v-model="manger.password_confirmation" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control" required>
                                                            <div class="alert alert-danger mt-2" role="alert" v-if="!validate()">
                                                                 Passwords don't match. Please enter both fields again.
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   <button class="btn btn-success w-50 d-block mx-auto mt-2" type="submit" @click="handleSubmit">Add manager <span v-if="loading"> Loading...</span></button>
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

                         <div class="card" v-if="admins.items.length">
                              <div class="card-header">
                                   <strong>All managers</strong> 
                              </div>
                              <div class="card-body card-block">
                                   <table class="table table-striped first-td-padding border-table">
                                        <thead>
                                             <tr>
                                                  <td>Id</td>
                                                  <td>Name</td>
                                                  <td>Email</td>
                                                  <td>Edit</td>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="admin in admins.items" :key="admin.id">
                                                  <td>{{admin.id}}</td>
                                                  <td>{{admin.name}}</td>
                                                  <td>{{admin.email}}</td>
                                                  <td @click="showEditModal(admin.id)"><button type="button" class="btn btn-info">Edit</button></td>
                                             </tr>
                                        </tbody>
                                   </table>
                                     <nav class="mt-4" v-if="total_pages > 1" ref="reference">
                                        <paginate
                                             :page-count="total_pages"
                                             :margin-pages="2"
                                             :click-handler="handlePgnation"
                                             :prev-text="'Prev'"
                                             :next-text="'Next'"
                                             :container-class="'pagination justify-content-center'"
                                             active-class="active"
                                             :page-class="'page-item'"
                                             :page-link-class="'page-link'"
                                             :prev-class="'page-item'"
                                             :prev-link-class="'page-link'"
                                             :next-link-class="'page-link'"
                                             :next-class="'page-item'"
                                             >
                                        </paginate>
                                   </nav>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <transition enter-active-class="animated fadeIn">
               <EditModal @closeModalEvent="closeEditModal" :mangerId="mangerId" v-if="showModal" :key="showModal"/>
          </transition>
     </section>
</template>

<script>
import EditModal from './models/editManger'
export default {
     components:{EditModal},
     data () {
     return {
          admins:{
               items:[]
          },
          loading:false,
          total_pages:null,
          manger:{
               name:'',
               email:'',
               password:null,
               password_confirmation:null,
          },
          showModal:false,
          mangerId:null,
          dataAdedd:false,
          errorMeg:"",
          pageNum:1,
     }
  },
  mounted(){
     this.loadAllData()
   },
  methods: {
     loadAllData() {
     this.axios.get(`api/admin/admins?page=${this.pageNum}`,
          ).then((response) => {
               if(response.status == 200){
               if (response.data.status == true) {
                    this.admins = response.data.data
                    this.total_pages = response.data.data.paginate.total_pages
               } 
               }
          })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadMessages();
     },
     showEditModal(mangerId){
          this.showModal = true;
          this.mangerId = mangerId;
     },
     closeEditModal(isUpdate) {
          this.showModal = !this.showModal;
          if (isUpdate) {
               this.loadAllData();
          }
     },
    handleSubmit(){
         if (this.manger.name && this.manger.email && this.manger.password && this.manger.password_confirmation) {
              this.loading = true;
              this.errorMeg ='';
              console.log('post')
              this.axios.post('api/admin/admins',this.manger,
              ).then((response) => {
                  if(response.status == 200){
                    if (response.data.status == true) {
                         this.loading = false;
                         this.dataAdedd = true;
                         let self = this;
                         setTimeout(
                         function() {
                              self.reset();
                              self.loadAllData()
                         }, 2000);
                    }
                    else{
                        this.errorMeg = response.data.msg;
                         this.loading = false;
                    }
                  }
             })
         }
    },
    validate: function() {
         if (this.manger.password && this.manger.password_confirmation) {
              return this.manger.password == this.manger.password_confirmation ?  true : false;
         }
         else{
              return true;
         }
    },
    reset(){
          this.manger = {
               name:'',
               email:'',
               password:null,
               password_confirmation:null
          }
          this.dataAdedd = false;
    }
  },
}
</script>
<style>
     .border-table{
          border: 1px solid #dee2e6;
     }
</style>
