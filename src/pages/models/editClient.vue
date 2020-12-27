<template>
     <div  class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Edit Client</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeEditModal">
                                   <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                   <div class="card">
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
                                                                      <input v-model="client.password" type="password" id="password-input" name="password-input" placeholder="Password" class="form-control">
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="col-12 col-md-6">
                                                            <div class="row form-group">
                                                                 <div class="col col-md-3"><label for="confirm-password-input" class=" form-control-label">Password</label></div>
                                                                 <div class="col-12 col-md-9">
                                                                      <input v-on:blur="validate" v-model="confirmPassword" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control">
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
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     props:['clientId'],
     data () {
          return {
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
               isUpdate:false
          }
     },
     mounted() {
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.clientId) {
                    this.axios.get(`api/admin/users/${this.clientId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let client = response.data.data
                                   this.client.name = client.name
                                   this.client.email = client.email
                                   this.client.phone = client.phone
                                   this.imageData = client.image
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit(){
               if (this.client.name && this.client.email) {
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
               this.axios.put(`api/admin/users/${this.clientId}`, this.formData, config,
               ).then((response) => {
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
