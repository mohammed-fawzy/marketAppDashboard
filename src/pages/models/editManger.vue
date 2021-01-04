<template>
     <div class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Edit manger</h5>
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
                                                                      <input v-model="manger.password" type="password" id="password-input" name="password-input" placeholder="Password" class="form-control">
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="col-12 col-md-6">
                                                            <div class="row form-group">
                                                                 <div class="col col-md-3"><label for="confirm-password-input" class=" form-control-label">Password</label></div>
                                                                 <div class="col-12 col-md-9">
                                                                      <input v-on:blur="validate" v-model="manger.password_confirmation" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control">
                                                                      <div class="alert alert-danger mt-2" role="alert" v-if="!validate()">
                                                                           Passwords don't match. Please enter both fields again.
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             <button class="btn btn-success w-50 d-block mx-auto mt-2" type="submit">Submit <span v-if="loading"> Loading...</span></button>
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
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     props:['mangerId'],
     data () {
          return {
          manger:{
               name:'',
               email:'',
               password:null,
               password_confirmation:null,
          },
          loading:false,
          dataAdedd:false,
          errorMeg:"",
          isUpdate:false
          }
     },
     mounted() {
           this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.mangerId) {
                    this.axios.get(`api/admin/admins/${this.mangerId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let manger = response.data.data
                                   this.manger.name = manger.name
                                   this.manger.email = manger.email
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          validate: function() {
               if (this.manger.password && this.manger.password_confirmation) {
                    return this.manger.password == this.manger.password_confirmation ?  true : false;
               }
               else{
                    return true;
               }
          },
          handleSubmit(){
               if (this.manger.name && this.manger.email) {
                    this.loading = true;
                    this.axios.put(`api/admin/admins/${this.mangerId}`,this.manger,
                    ).then((response) => {
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
                                   this.errorMeg = response.data.msg;
                                   this.loading = false;
                              }
                         }
                    })
               }
          },
          reset(){
               this.manger = {
                    name:'',
                    email:'',
                    phone:'',
                    password:null,
                    password_confirmation:null
               }
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
