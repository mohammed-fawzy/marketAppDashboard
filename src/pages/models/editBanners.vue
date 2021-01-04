<template>
     <div  class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Edit Banner</h5>
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
                                                                      <input v-model="banner.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="col-12 col-md-6">
                                                            <div class="row form-group">
                                                                 <div class="col col-md-2"><label for="email-input" class=" form-control-label">Url</label></div>
                                                                 <div class="col-12 col-md-9">
                                                                      <input v-model="banner.url" type="text" id="email-input" name="email-input" placeholder="Enter Url" class="form-control" required>
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
                                             <button class="btn btn-success w-50 d-block mx-auto mt-5" type="submit"> Add Banner<span v-if="loading"> Loading...</span></button>
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
     props:['bannerId'],
     data () {
          return {
               banner:{
                    name:'',
                    url:'',
                    image:''
               },
               loading:false,
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
               if (this.bannerId) {
                    this.axios.get(`api/admin/banners/${this.bannerId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let banner = response.data.data
                                   this.banner.name = banner.name
                                   this.banner.url = banner.url
                                   this.imageData = banner.image
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit(){
               if (this.banner.name && this.banner.url) {
                    this.loading = true;
                    let formData = new FormData();
                    formData.set('name', this.banner.name);
                    formData.set('url', this.banner.url);
                    if (this.imageData && this.file) {
                         formData.set('image', this.file);
                    }
                    formData.append('_method', 'PUT')
                    this.formData = formData;
                    const config = {
                         headers: {
                         "Content-Type": "multipart/form-data"
                         }
                    };
               this.axios.post(`api/admin/banners/${this.bannerId}`, this.formData, config,
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
                              this.errorMessage = response.data.msg 
                              this.loading = false;
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
          reset(){
               this.banner = {
                    name:'',
                    url:'',
                    image:''
               }
               this.file =''
               this.imageData = ""
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
