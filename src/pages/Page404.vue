<template>
    <section class="auth-layout">
        <div class="main row">
            <div class="auth-content  col-md-6">
                <div class="page-404">
                    <div class="justify-content-center">

                            <div class="clearfix">
                                <div class="col-sm-4">
                                    <h1 class="float-left display-3 mr-4">404</h1>
                                </div>
                                <div class="col-sm-8">
                                <h5 class="pt-3">Oops! You're lost.</h5>
                                <p class="text-muted text-small">The page you are looking for was not found.</p>
                                </div>


                            </div>
                            <!-- <div class="input-prepend input-group">
                                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">
                                <span class="input-group-btn">
                                    <button class="btn btn-info" type="button">Search</button>
                                </span>
                            </div> -->

                    </div>
                </div>
            </div>
            <div class="auth-wallpaper col-md-6 hidden-md-down">
                <div class="oblique"></div>
                <router-link class="basix-home" :to="{path: '/'}"><img src="../images/logo.png" alt="Logo"></router-link>
            </div>
        </div>
    </section>
</template>


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
