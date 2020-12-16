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
                                                  <input v-on:blur="validate" v-model="confirmPassword" type="password" id="confirm-password-input" name="confirm-password-input" placeholder="Confirm Password" class="form-control" required>
                                                  <div class="alert alert-danger mt-2" role="alert" v-if="!validate()">
                                                       Passwords don't match. Please enter both fields again.
                                                  </div>
                                             </div>
                                        </div>
                                   <input class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" value="Submit" @click="handleSubmit">
                                   </form>
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
          },
          confirmPassword:null
     }
  },
  methods: {
    handleSubmit(){
      this.axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
          console.log(response)
     })
    },
    validate: function() {
         if (this.manger.password && this.confirmPassword) {
              return this.manger.password == this.confirmPassword ?  true : false;
         }
         else{
              return true;
         }
    }
  },
}
</script>
