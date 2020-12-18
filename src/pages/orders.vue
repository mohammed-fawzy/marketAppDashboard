<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-xs-12 col-md-12">
                    <card header-text="Orders">
                         <div class="table-responsive">
                         <table class="table table-striped first-td-padding">
                         <thead>
                         <tr>
                              <td>Name</td>
                              <td>Email</td>
                              <td>City</td>
                              <td align="right">Score</td>
                              <td></td>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                              <td>Matthew McCormick</td>
                              <td>matthew30@mail.ol</td>
                              <td>Vancouver</td>
                              <td align="right">93</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Nancy Bo</td>
                              <td>nancy@boonweb.com</td>
                              <td>Washington</td>
                              <td align="right">280</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Frederiko Lopez</td>
                              <td>fr.lopez@webmail.sp</td>
                              <td>Barcelona</td>
                              <td align="right">16</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Stanley Hummer</td>
                              <td>mr_winner_2999@gmail.cb</td>
                              <td>Manchester</td>
                              <td align="right">57</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Lendley Wintz</td>
                              <td>9938198146@mailster.io</td>
                              <td>Wien</td>
                              <td align="right">113</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Barbara Noz</td>
                              <td>barbaranoz@mailster.io</td>
                              <td>Brussels</td>
                              <td align="right">68</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Matthew McCormick</td>
                              <td>matthew30@mail.ol</td>
                              <td>Vancouver</td>
                              <td align="right">93</td>
                              <td></td>
                         </tr>
                         <tr>
                              <td>Nancy Bo</td>
                              <td>nancy@boonweb.com</td>
                              <td>Washington</td>
                              <td align="right">280</td>
                              <td></td>
                         </tr>
                         </tbody>
                         </table>
                         </div>
                    </card>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {
     data () {
     return {
          client:{
               name:'',
               email:'',
               phone:'',
               password:null,
          },
          file:'',
          imageData: "",
          confirmPassword:null
     }
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
    handleFileUpload: function() {
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
</style>
