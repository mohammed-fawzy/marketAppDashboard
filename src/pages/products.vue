<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-10 mx-auto">
                         <div class="card">
                              <div class="card-header">
                                   <strong>Products</strong>
                              </div>
                              <div class="card-body card-block">
                                   <form class="form-horizontal" v-on:submit.prevent="handleSubmit">
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="text-input" class=" form-control-label">Product name</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="product.name" type="text" id="text-input" name="text-input" placeholder="Name" class="form-control" required>
                                             </div>
                                        </div>
                                        <div class="row form-group">
                                             <div class="col col-md-3"><label for="price-input" class=" form-control-label">Product price</label></div>
                                             <div class="col-12 col-md-9">
                                                  <input v-model="product.price" type="text" id="price-input" name="price-input" placeholder="Enter price" class="form-control" required>
                                             </div>
                                        </div>
                                         <div class="row form-group">
                                             <div class="col col-md-3"><label for="description-input" class=" form-control-label">Product description</label></div>
                                             <div class="col-12 col-md-9"><textarea v-model="product.description" name="description-input" id="description-input" rows="9" placeholder="Description..." class="form-control"></textarea></div>
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
                                                            <select name="select" id="select" class="form-control" v-model="product.subCategoriesId"
                                                            :disabled="!subCategories.sub_categories">
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
                                                            <input v-model="product.temperatureMin" type="text" id="text-input" name="text-input" placeholder="Temperature Min" class="form-control" required>
                                                       </div>
                                                       <div class="col-6">
                                                            <input v-model="product.temperatureMax" type="text" id="text-input" name="text-input" placeholder="Temperature Max" class="form-control" required>
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
                                                  <vue-upload-multiple-image
                                                       markIsPrimaryText=""
                                                       primaryText=""
                                                       popupText=""
                                                       dragText="Drag to here"
                                                       browseText="Choose photo"
                                                       @upload-success="uploadImageSuccess"
                                                       @before-remove="beforeRemove"
                                                       :data-images="images"
                                                       
                                                  ></vue-upload-multiple-image>
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
import VueUploadMultipleImage from 'vue-upload-multiple-image';
export default {
     components: {
          VueUploadMultipleImage,
     },
     data () {
     return {
          product:{
               name:'',
               price:'',
               temperature:null,
               subCategoriesId:null
          },
          categories:[],
          category_id:null,
          subCategories:[],
          temperature:false,
          images:[],
          file:'',
          imageData: "",
     }
  },
     mounted(){
     this.getCategory();
  },
  methods: {
    handleSubmit(){
     let formData = new FormData();
     //  Add the form data we need to submit
     formData.append('image', this.file, this.file.name);
     let rawData = JSON.stringify(this.client);
     formData.append('client', rawData)
     this.axios.post('https://jsonplaceholder.typicode.com/todos/1',
          formData,
          {headers: {'Content-Type': 'multipart/form-data'}}
      ).then((response) => {
          console.log(response)
     })
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
          console.log('data', formData, index, fileList)
          // Upload image api
          // axios.post('http://your-url-upload', formData).then(response => {
          //   console.log(response)
          // })
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
     .image-bottom-left .image-primary + span {
          display: none
     }
</style>
