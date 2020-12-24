<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Managers</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="text-input" class=" form-control-label">Name</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="manger.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                             </div>
                                        </div>
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="email-input" class=" form-control-label">Email</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="manger.email" type="email" id="email-input" name="email-input" placeholder="Enter Email" class="form-control" required>
                                             </div>
                                        </div>
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="phone-input" class=" form-control-label">Phone</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="manger.phone" type="tel" id="phone-input" name="phone-input" placeholder="Phone" class="form-control" required>
                                             </div>
                                        </div>
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="password-input" class=" form-control-label">Password</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="manger.password" type="password" id="password-input" name="password-input" placeholder="Password" class="form-control" required>
                                             </div>
                                        </div>
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="confirm-password-input" class=" form-control-label">Password</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-on:blur="validate" v-model="manger.password_confirmation" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control" required>
                                                  <div class="alert alert-danger mt-2" role="alert" v-if="!validate()">
                                                       Passwords don't match. Please enter both fields again.
                                                  </div>
                                             </div>
                                        </div>
                                   <input class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" value="Submit" @click="handleSubmit">
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
     </section>
</template>

<script>
export default {
     data () {
     return {
          manger:{
               name:'',
               email:'',
               phone:'',
               password:null,
               password_confirmation:null
          },
          dataAdedd:false,
          errorMeg:""
     }
  },
  methods: {
    handleSubmit(){
         if (this.manger.name && this.manger.email && this.manger.phone && this.manger.password && this.manger.password_confirmation) {
              console.log('post')
              this.axios.post('api/admin/admins',this.manger,
              ).then((response) => {
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
                         this.errorMeg = response.data.msg;
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
               phone:'',
               password:null,
               password_confirmation:null
          }
          this.dataAdedd = false;
    }
  },
}
</script>
