<template>
<div class="auth-layout">
  <div class="main row">
    <div class="auth-content login col-md-6">

      <card header-text="Welcome !">
        <div class="card-body card-block">
          <form @submit.prevent="handleSubmit()">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                <input type="email" id="email" name="email" placeholder="Email" class="form-control" required>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                <input type="password" id="password" name="password" placeholder="Password" class="form-control" required>
              </div>
            </div>
            <div class="form-actions form-group">
                <button type="submit" class="btn btn-success btn-md">Log In</button>
                <!-- <button type="submit" class="btn btn-primary btn-md float-right">
                  <router-link class='link text-light float-right' :to="{name: 'Register'}">Create Account</router-link>
                </button> -->
            </div>
          </form>
        </div>
      </card>

    </div>
    <div class="auth-wallpaper col-md-6 hidden-md-down">
      <div class="oblique"></div>
      <router-link class="basix-home" :to="{path: '/'}"><img src="../../images/logo.png" alt="Logo"></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleSubmit(){
      console.log('login')
      this.$router.push({name: "dashboard"});
    }
  },
}
</script>

<style lang="scss" scoped>
  .card-title{
    padding-left: 20px;
  }
    .auth-layout {
    height: 100vH;
    margin: 0;

    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: #333;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .basix-home {
          z-index: 2;
          font-size: 2.625rem;
          color: #1ec260;
        }
        .oblique {
          position: absolute;
          background-color: #282828;
          left: calc(50% - 23%/2);
          transform: rotate(150deg);
          width: 27%;
          height: 115%;
        }
      }
    }

  }
</style>