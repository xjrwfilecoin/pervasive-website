<template>
  <div> 
    <div class="header_box">
      <el-header style="height: 81px">
        <el-row>
          <el-col :span="4">
            <div class="logoDiv">
              <img src="~/assets/images/LOGO-webBCG.png" class="logo_div"/>
              <img src="~/assets/images/logo-name.png" class="description"/>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="web_tab">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="首 页" name="home"></el-tab-pane>             
                <el-tab-pane label="开发者" name="developer"></el-tab-pane>
                <el-tab-pane label="Blog" name="blog"></el-tab-pane>
                <el-tab-pane label="生 态" name="ecological"></el-tab-pane>
                <el-tab-pane label="测 试" name="test"></el-tab-pane>
              </el-tabs> 
            </div>
          </el-col> 
          <el-col :span="4">
            <div class="web_dropdown">
              <div class="drop_icon">
                <i class="iconfont icon-github  gitbug_icon" />
              </div>
              <el-dropdown @command="handleCommand" class="choose_drop">
                <span class="el-dropdown-link" v-if="$i18n.locale === 'zh'">
                  {{ $t('links.chinese') }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <span class="el-dropdown-link" v-else>
                  {{ $t('links.english') }}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <!-- <NuxtLink v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact> -->
                    <el-dropdown-item command="en" v-if="$i18n.locale === 'zh'">
                      {{ $t('links.english') }}
                    </el-dropdown-item>
                  <!-- </NuxtLink>
                  <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact> -->
                    <el-dropdown-item command="zh" v-else>
                      {{ $t('links.chinese') }}
                    </el-dropdown-item>
                  <!-- </NuxtLink> -->
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>     
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  export default {
    name: 'HeaderBar',
    props: {
      active: String,
    },
    data() {
      return {
        activeName: '',
        language: '中 文'
      };
    },
    created() {
      this.activeName = this.active
    }, 
    methods: {
      handleClick(tab) {
        this.$emit('to-others', this.activeName)
      },
      handleCommand(command) {
        this.$store.commit('SET_LANG', command)
        Cookies.set('lang', command)

        if (command == 'zh') {
          this.language = '中 文'
          this.$router.push(this.$route.fullPath.replace(/^\/[^\/]+/, ''))
        } else if (command == 'en') {
          this.language = '英 文'
          this.$router.push('/en' + this.$route.fullPath )
        }
      }
    }
  }
</script>

<style lang="scss">
  .web_tab {
    .el-tabs__header {
      line-height: 81px;
      width: 474px;
    }
    .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
    .el-tabs__item {
      padding: 0 35px;
      color: #fff;
      height: 33px;
      font-size: 16px;
    }
  }
  .web_dropdown {
    .el-dropdown {
      color: #4857F0;
      font-weight: 600;
    }
  }
</style>

<style lang="scss" scoped>
  .header_box {  
    min-width: 1240px;
    padding: 0 20px 0 20px;
  }
  .el-header {
    line-height: 60px;
  }    
  .logoDiv {
    width: 300px;
    margin-left: 9px;
    .logo_div {
      float: left;
      width: 54px; 
      height: 53px;
      margin-top: 15px;
    } 
    .description {
      float: right;
      width: 144px;
      height: 45px;
      margin-top: 19px;
      margin-right: 86px;
    }  
  }
  .web_tab {
    width: 474px; 
    margin: 0 auto;
  }
  .web_dropdown {
    margin-top: 10px;
    float: right;
    width: 125px;
    .drop_icon {
      float: left;
      .gitbug_icon {
        font-size: 60px;
        color: #4857F0;
      }
    }
    .choose_drop {
      float: right;
    }
  }
</style>