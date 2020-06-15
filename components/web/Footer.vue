<template>
  <div> 
    <div class="footer_box">
      <div class="logoDiv">
        <img src="~/assets/images/LOGO-webBCG.png" class="logo_div"/>
        <!-- <img src="~/assets/images/logo-name.png" class="description"/> -->
        <h1 class="description">{{  $t('tabbar.fund') }}</h1>
      </div>
      <div class="footer_row">
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="button_item">
              <el-button>{{ $t('footer.about') }}</el-button>
              <el-button style="float:right;width:113px;text-align:left">{{ $t('footer.blog') }}</el-button>
            </div>
            <div class="button_item">
              <el-button>{{ $t('footer.faq') }}</el-button>
              <el-button style="float:right;width:113px;text-align:left">{{ $t('footer.connect') }}</el-button>
            </div>
            <div class="button_item">
              <el-button>{{ $t('footer.developer') }}</el-button>
            </div>
            <div class="button_item">
              <el-button>{{ $t('footer.join') }}</el-button>
            </div>
          </el-col>
          <el-col :span="8" :offset="2">
            <div class="connect">
              <p>{{ $t('footer.update') }}</p>
              <el-input :placeholder="$t('footer.email')" size="mini"></el-input>
              <el-button>{{ $t('footer.submit') }}</el-button>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="focus">
              <p>{{ $t('footer.focus') }}</p>
              <i class="iconfont icon-github"/>
              <i class="iconfont icon-facebook"/>
              <i class="iconfont icon-twitter"/>
              <i class="iconfont icon-weixin"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      active: String,
    },
    data() {
      return {};
    },
    created() {
      this.activeName = this.active
    }, 
    methods: {
    }
  }
</script>

<style lang="scss">
  .button_item {
    .el-button {
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: 550;
      color: #fff;
    }
  }
  .connect {
    .el-button {
      border: none;
      font-size: 14px;
      padding: 0;
    }
  }
</style>

<style lang="scss" scoped>
  .footer_box {  
    min-width: 1000px;
    padding: 0 140px 0 140px;
    height: 350px;
  }
  .logoDiv {
    width: 306px;   
    height: 90px;
    .logo_div {
      float: left;
      width: 54px; 
      height: 53px;   
      margin-top: 33px;  
    } 
    .description {
      float: right;
      color: #fff;
      font-size: 24px;
      width: 150px;
      height: 45px;
      margin-top: 40px;
      margin-right: 86px;
    }  
  }
  .footer_row {
    padding: 20px 0 0 150px;
    max-width: 1300px;
    margin: 0 auto;
    .button_item {
      margin-top: 10px;
      max-width: 350px;
    }
    .connect {
      margin-top: 15px;
      max-width: 270px;
      p {
        color: #fff;
        margin-bottom: 30px;
      }
      button {
        width: 90px;
        height: 28px;
        margin-top: 20px;
        float: right;
      }
    }
    .focus {
      margin-top: 15px;
      max-width: 150px;
      float: right;
      p {
        color: #fff;
        font-size: 14px;
        margin-bottom: 26px;
      }
      i {
        font-size: 40px;
        color: #fff;
      }
    }
  }
</style>
