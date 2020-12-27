<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Clients</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row">
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="client.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                              <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="email-input" class=" form-control-label">Email</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="client.email" type="email" id="email-input" name="email-input" placeholder="Enter Email" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                         <div class="row">
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="password-input" class=" form-control-label">Password</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="client.password" type="password" id="password-input" name="password-input" placeholder="Password" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                              <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="confirm-password-input" class=" form-control-label">Password</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-on:blur="validate" v-model="confirmPassword" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control" required>
                                                            <div class="alert alert-danger mt-2" role="alert" v-if="!validate()">
                                                                 Passwords don't match. Please enter both fields again.
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                         <div class="row">
                                             <div class="col-12 col-md-6">
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="phone-input" class=" form-control-label">Phone</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="client.phone" type="tel" id="phone-input" name="phone-input" placeholder="Phone" class="form-control" required>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="row">
                                             <div class="col-12 col-md-9">
                                                  <div class="row form-group">
                                                       <div class="col col-md-2"><label for="file-input" class=" form-control-label">Photo</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <div class="row">
                                                                 <div class="col-6">
                                                                      <input type="file" ref="file" id="file-input" name="file-input" class="form-control custom-file-input form-control-file" v-on:change="handleFileUpload" accept="image/*">
                                                                      <label class="custom-file-label" for="customFile">Choose photo</label>
                                                                 </div>
                                                                 <div class="col-6">
                                                                      <div class="image-preview" v-if="imageData.length > 0">
                                                                           <img class="preview" :src="imageData">
                                                                      </div>
                                                                 </div>
                                                            </div>
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

                                   <basix-alert v-if="errorMessage" type="danger" :withCloseBtn="true" class="col-12 col-md-6 mx-auto mt-4 text-center">
                                        <span class="badge badge-pill badge-danger">{{errorMessage}}</span>
                                   </basix-alert>
                              </div>
                             
                         </div>

                         <div class="card">
                              <div class="card-header">
                                   <strong>All clients</strong> 
                              </div>
                              <div class="card-body card-block">
                                   <table class="table table-striped first-td-padding border-table">
                                        <thead>
                                             <tr>
                                                  <td>Id</td>
                                                  <td>Name</td>
                                                  <td>Email</td>
                                                  <td>Phone</td>
                                                  <td>Edit</td>
                                                  <td>Delete</td>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="client in clients.items" :key="client.id">
                                                  <td>{{client.id}}</td>
                                                  <td>{{client.name}}</td>
                                                  <td>{{client.email}}</td>
                                                  <td>{{client.phone}}</td>
                                                  <td @click="showEditModal(client.id)"><button type="button" class="btn btn-info">Edit</button></td>
                                                  <td @click="deleteItem(client.id)"><button type="button" class="btn btn-danger">Delete</button></td>
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
          <EditModal @closeModalEvent="closeEditModal" :clientId="clientId" v-if="showModal" :key="showModal"/>
     </section>
</template>

<script>
import EditModal from './models/editClient'
export default {
     components:{EditModal},
     data () {
     return {
          clients:{},
          client:{
               name:'',
               email:'',
               phone:'',
               password:null,
               image:''
          },
          file:'',
          imageData: "",
          confirmPassword:null,
          errorMessage:'',
          dataAdedd:false,
          formData:null,
          showModal:false,
          clientId:null,
          pageNum:1,
          total_pages:null,
     }
  },
    mounted(){
     this.loadAllData()
   },
  methods: {
     loadAllData() {
          this.axios.get(`api/admin/users?page=${this.pageNum}`,
          ).then((response) => {
               if(response.status == 200){
               if (response.data.status == true) {
                    this.clients = response.data.data
                    this.total_pages = response.data.data.paginate.total_pages
               } 
               }
          })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadAllData();
     },
     showEditModal(clientId){
          this.showModal = true;
          this.clientId = clientId;
     },
     closeEditModal(isUpdate) {
          this.showModal = !this.showModal;
          if (isUpdate) {
               console.log('isUpdate', isUpdate)
               this.loadAllData();
          }
     },
    handleSubmit(){
         if (this.client.name && this.client.email && this.client.password && this.file) {
          let formData = new FormData();
          formData.set('name', this.client.name);
          formData.set('email', this.client.email);
          formData.set('password', this.client.password);
          formData.set('phone', this.client.phone);
          formData.set('image', this.file);
          this.formData = formData;
          const config = {
               headers: {
               "Content-Type": "multipart/form-data"
               }
          };
    
     this.axios.post('api/admin/users', this.formData, config,
      ).then((response) => {
           if(response.status == 200){
               if (response.data.status == true) {
                    this.dataAdedd = true;
                    let self = this;
                    setTimeout(
                    function() {
                         self.reset();
                         this.loadAllData();
                    }, 2000);
               } 
               else{
                    this.errorMessage = response.data.msg 
               }
          }
          console.log(response.data)
     })
     }
    },
    handleFileUpload: function() {
         let self = this;
         this.file = this.$refs.file.files[0];
          // Ensure that you have a file before attempting to read it
          if (this.$refs.file && this.$refs.file.files[0]) {
               
               // create a new FileReader to read this image and convert to base64 format
               var reader = new FileReader();
               // Define a callback function to run, when FileReader finishes its job
               reader.onload = (e) => {
               // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
               // Read image as base64 and set to imageData
               self.imageData = e.target.result;
               }
               // Start the reader job - read file as a data url (base64 format)
               reader.readAsDataURL(self.$refs.file.files[0]);
          }
     },
     deleteItem(itemId){
          let r = confirm("Are you sure to delete this user ?");
          if (r == true) {
               this.axios.delete(`api/admin/users/${itemId}`,
               ).then((response) => {
                    if(response.status == 200){
                         if (response.data.status == true) {
                              this.loadAllData();
                         } 
                    }
               })
          } 
     },
    validate: function() {
         if (this.client.password && this.confirmPassword) {
              return this.client.password == this.confirmPassword ?  true : false;
         }
         else{
              return true;
         }
    },
    reset(){
          this.client = {
               name:'',
               email:'',
               phone:'',
               password:null,
               image:''
          }
          this.file =''
          this.imageData = ""
          this.confirmPassword = null
          this.errorMessage = false
          this.dataAdedd = false;
    }
  },
}
</script>

<style lang="scss">
     img.preview {
          background-color: white;
          border: 1px solid #DDD;
          height: 200px;
          width: auto;
          border-radius: 5px;
     }
     .custom-file-label{
          left: 14px;
     }
</style>
