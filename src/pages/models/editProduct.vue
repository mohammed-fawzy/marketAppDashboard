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
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="text-input" class=" form-control-label">Product name</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <input v-model="product.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                                       </div>
                                                  </div>
                                                  <div class="row form-group">
                                                       <div class="col-6">
                                                            <div class="row">
                                                                 <div class="col col-md-6"><label for="price-input" class=" form-control-label">Product price</label></div>
                                                                 <div class="col-12 col-md-6">
                                                                      <input v-model="product.price" type="text" id="price-input" name="price-input" placeholder="Enter price" class="form-control" required>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="col-6">
                                                            <div class="row">
                                                                 <div class="col col-md-3"><label for="price-input" class=" form-control-label">Discount</label></div>
                                                                 <div class="col-12 col-md-9">
                                                                      <input v-model="product.discount" type="text" id="price-input" name="price-input" placeholder="Enter discount" class="form-control" required>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="description-input" class=" form-control-label">Product description</label></div>
                                                       <!-- <div class="col-12 col-md-9"><textarea v-model="product.description" name="description-input" id="description-input" rows="9" placeholder="Description..." class="form-control"></textarea></div> -->
                                                       <div class="col-12 col-md-9">
                                                            <ckeditor :editor="editor" v-model="product.info" :config="editorConfig"></ckeditor>
                                                       </div>

                                                  </div>
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label class=" form-control-label">Select Sub section</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <div class="row">
                                                                 <div class="col-12 col-md-6">
                                                                      <select name="select" id="select" class="form-control" v-model="category_id" @change="selectMainSection">
                                                                           <option value="0">Please select main section</option>
                                                                           <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{cat.name}}</option>
                                                                      </select>
                                                                 </div>
                                                                 <div class="col-12 col-md-6">
                                                                      <select name="select" id="select" class="form-control" v-model="product.sub_category_id"
                                                                           :disabled="!subCategories.sub_categories.length">
                                                                           <option v-for="cat in subCategories.sub_categories" :value="cat.id" :key="cat.id">{{cat.name}}</option>
                                                                      </select>
                                                                 </div>

                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label class=" form-control-label">Temperature tracking available ?</label></div>
                                                       <div class="col col-md-9">
                                                            <div class="form-check">
                                                                 <div class="checkbox">
                                                                      <label for="checkbox1" class="form-check-label ">
                                                                      <input v-model="temperature" type="checkbox" id="checkbox1" name="checkbox1" value="option1" class="form-check-input">Yes
                                                                      </label>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="row form-group" v-if="temperature">
                                                       <div class="col col-md-3"><label for="text-input" class=" form-control-label">Temperature</label></div>
                                                       <div class="col-12 col-md-6">
                                                            <div class="row">
                                                                 <div class="col-6">
                                                                      <input v-model="product.min" type="text" id="text-input" name="text-input" placeholder="Temperature Min" class="form-control" required>
                                                                 </div>
                                                                 <div class="col-6">
                                                                      <input v-model="product.max" type="text" id="text-input" name="text-input" placeholder="Temperature Max" class="form-control" required>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="file-input" class=" form-control-label">Product Photo</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <div class="row">
                                                                 <div class="col-6">
                                                                      <input type="file" ref="file" id="file-input" name="file-input" class="form-control custom-file-input form-control-file" v-on:change="handlePoductImgUpload()" accept="image/*">
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
                                                  <div class="row form-group">
                                                       <div class="col col-md-3"><label for="file-input" class=" form-control-label">Product Gallery</label></div>
                                                       <div class="col-12 col-md-9">
                                                            <VueUploadMultipleImage2
                                                                 markIsPrimaryText=""
                                                                 primaryText=""
                                                                 popupText=""
                                                                 dragText="Drag to here"
                                                                 browseText="Choose photo"
                                                                 @upload-success="uploadImageSuccess"
                                                                 @before-remove="beforeRemove"
                                                                 :data-images="product.images"
                                                            ></VueUploadMultipleImage2>
                                                       </div>
                                                  </div>
                                                  <button class="btn btn-success w-50 d-block mx-auto mt-5" type="submit" @click="handleSubmit">Submit <span v-if="loading"> Loading...</span></button>
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
import VueUploadMultipleImage2 from 'vue-upload-multiple-image';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
      components: {
          VueUploadMultipleImage2, ckeditor: CKEditor.component
     },
     props:['productId'],
     data () {
          return {
               products:{
                    items:[]
               },
               pageNum:1,
               total_pages:null,
               product:{
                    name:'',
                    price:'',
                    info:'',
                    sub_category_id:null,
                    temperature:null,
                    images:[],
                    discount:'',
                    min:null,
                    max:null
               },
               loading:false,
               categories:[],
               category_id:null,
               subCategories:{
                    sub_categories:[]
               },
               temperature:false,
               imagesFile:[],
               file:'',
               imageData: "",
               errorMessage:'',
               dataAdedd:false,
               isUpdate:false,
               editor: ClassicEditor,
               editorData: '<p>Content of the editor.</p>',
               editorConfig: {
               
               }
          }
     },
     mounted() {
          this.loadAllData();
          this.getCategory();
     },
     methods:{
          loadAllData() {
               if (this.productId) {
                    this.axios.get(`api/admin/products/${this.productId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   let product = response.data.data
                                        this.product.name = product.name
                                        this.product.price = product.price
                                        this.product.info = product.info
                                        this.category_id = product.sub_category.category_id
                                        if (this.category_id) this.selectMainSection();
                                        this.product.sub_category_id = product.sub_category.id
                                        this.imageData = product.image

                                        let self = this;
                                         product.images.forEach(element => {
                                             self.product.images.push({
                                                  path: element,
                                                  default: 1,
                                                  highlight: 1,
                                             })
                                         });
                                        // this.product.images[0].path = product.images 
                                        // this.imagesFile[0] = product.images 
                                        this.product.discount = product.discount
                                        if (product.sensor){
                                             this.temperature = true;
                                             this.product.min = product.sensor.min
                                             this.product.max = product.sensor.max
                                        }
               
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent", this.isUpdate);
          },
          handleSubmit(){
               if (this.product.name && this.product.price && this.product.discount && this.product.info) {
                    this.loading = true;
                    this.errorMessage = '';
                    let formData = new FormData();
                    formData.set('name', this.product.name);
                    formData.set('price', this.product.price);
                    formData.set('discount', this.product.discount);
                    if (this.temperature) {
                         formData.set('min', this.product.min);
                         formData.set('max', this.product.max);
                    }
                    formData.set('info', this.product.info);
                    if (this.product.sub_category_id) formData.set('sub_category_id', this.product.sub_category_id);
                    if (this.imageData && this.file) {
                         formData.set('image', this.file);
                    }
                    if (this.imagesFile.length) {
                         for (var i = 0; i < this.imagesFile.length; i++) {
                              formData.append('images[]', this.imagesFile [i]);
                         }
                    }
                    
                  
                    formData.append('_method', 'PUT')
                    this.formData = formData;
                    const config = {
                         headers: {
                         "Content-Type": "multipart/form-data"
                         }
                    };
               this.axios.post(`api/admin/products/${this.productId}`, this.formData, config
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
                              this.errorMessage = response.data.msg ;
                              this.loading = false;
                         }
                    }
               })
               }

          },
          handlePoductImgUpload: function() {
               this.file = this.$refs.file.files[0];
                    // Ensure that you have a file before attempting to read it
                    if (this.$refs.file && this.$refs.file.files[0]) {
                         // create a new FileReader to read this image and convert to base64 format
                         var reader = new FileReader();
                         // Define a callback function to run, when FileReader finishes its job
                         reader.onload = (e) => {
                         // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                         // Read image as base64 and set to imageData
                         this.imageData = e.target.result;
                         }
                         // Start the reader job - read file as a data url (base64 format)
                         reader.readAsDataURL(this.$refs.file.files[0]);
                    }
               },
          uploadImageSuccess(formData, index, fileList) {
               console.log('formData', formData)
               console.log('formData', formData.values())
               console.log('index', index)
               console.log('fileList', fileList)
               // Display the values
               for (var value of formData.values()) {
                    this.imagesFile.push(value)
               }
          },
          beforeRemove (index, done, fileList) {
               console.log('index', index, fileList)
               var r = confirm("remove image")
               if (r == true) {
               done()
               } else {
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
          selectMainSection(){
               this.axios.get(`api/admin/categories/${this.category_id}`).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   this.subCategories = response.data.data
                              } 
                         }
                    })
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
               this.product = {
                    name:'',
                    price:'',
                    info:'',
                    sub_category_id:null,
                    temperature:null,
                    images:[],
                    discount:'',
                    min:null,
                    max:null
               }
               this.category_id = null;
               this.temperature = false
               this.imagesFile = []
               this.file = ''
               this.imageData = ""
               this.errorMessage = ''
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

     .modal {
          overflow-x: hidden;
          overflow-y: auto;
     }
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
     .image-bottom-left .image-primary + span {
          display: none
     }
     .ck-file-dialog-button{
          display: none;
     }
</style>
