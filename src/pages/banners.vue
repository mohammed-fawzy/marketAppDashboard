<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Banners</strong>
                              </div>
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
                                                                      <input type="file" ref="file" id="file-input" name="file-input" class="form-control custom-file-input form-control-file" v-on:change="handleFileUpload" accept="image/*" required>
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

                         <div class="card" v-if="banners.items.length">
                              <div class="card-header">
                                   <strong>All banners</strong> 
                              </div>
                              <div class="card-body card-block">
                                   <table class="table table-striped first-td-padding border-table">
                                        <thead>
                                             <tr>
                                                  <td>Id</td>
                                                  <td>Name</td>
                                                  <td>url</td>
                                                  <td>image</td>
                                                  <td>edit</td>
                                                  <td>delete</td>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="banner in banners.items" :key="banner.id">
                                                  <td>{{banner.id}}</td>
                                                  <td>{{banner.name}}</td>
                                                  <td>{{banner.url}}</td>
                                                  <td><img :src="banner.image" class="banner-img"></td>
                                                  <td @click="showEditModal(banner.id)"><button type="button" class="btn btn-info">Edit</button></td>
                                                  <td @click="deleteItem(banner.id)"><button type="button" class="btn btn-danger">Delete</button></td>
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
               <EditModal @closeModalEvent="closeEditModal" :bannerId="bannerId" v-if="showModal" :key="showModal"/>
          </transition>
     </section>
</template>

<script>
import EditModal from './models/editBanners'
export default {
     components:{EditModal},
     data () {
     return {
          banners:{
               items:[]
          },
          banner:{
               name:'',
               url:'',
               image:''
          },
          loading:false,
          file:'',
          imageData: "",
          bannerId:null,
          errorMessage:'',
          dataAdedd:false,
          formData:null,
          showModal:false,
          pageNum:1,
          total_pages:null,
     }
  },
    mounted(){
     this.loadAllData()
   },
  methods: {
     loadAllData() {
          this.axios.get(`api/admin/banners?page=${this.pageNum}`,
          ).then((response) => {
               if(response.status == 200){
               if (response.data.status == true) {
                    this.banners = response.data.data
                    this.total_pages = response.data.data.paginate.total_pages
               } 
               }
          })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadAllData();
     },
     showEditModal(bannerId){
          this.showModal = true;
          this.bannerId = bannerId;
     },
     closeEditModal(isUpdate) {
          this.showModal = !this.showModal;
          if (isUpdate) {
               console.log('isUpdate', isUpdate)
               this.loadAllData();
          }
     },
    handleSubmit(){
         if (this.banner.name && this.banner.url && this.file) {
          this.loading = true;
          this.errorMessage = "";
          let formData = new FormData();
          formData.set('name', this.banner.name);
          formData.set('url', this.banner.url);
          formData.set('image', this.file);
          this.formData = formData;
          const config = {
               headers: {
               "Content-Type": "multipart/form-data"
               }
          };
    
     this.axios.post('api/admin/banners', this.formData, config,
      ).then((response) => {
           if(response.status == 200){
               if (response.data.status == true) {
                    let self = this;
                    this.loading = false;
                    this.dataAdedd = true;
                    setTimeout(
                    function() {
                         self.reset();
                         self.loadAllData();
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
     deleteItem(itemId){
          let r = confirm("Are you sure to delete this banner ?");
          if (r == true) {
               this.axios.delete(`api/admin/banners/${itemId}`,
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
     .banner-img{
          width: auto;
          height: 60px;
     }
</style>
