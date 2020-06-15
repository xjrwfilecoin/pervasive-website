<template>
  <div>
    <div class="home_back"></div>
    <div class="home_back_one"></div>
    <div class="home_back_two"></div>
    <div class="home_back_three"></div>
    <div class="home_back_four"></div>
    <iframe :src="htmlFirst" frameborder="0" scrolling=no height="324" class="iframFirst"></iframe>

    <div class="headerbar">
      <HeaderBar v-bind:active="activeName" @to-others="handleClick"></HeaderBar>
    </div>

    <div class="first_show">
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.intro_one') }}<span class="special_p">{{ $t('home.special_one') }}</span>{{ $t('home.intro_one_') }}</p>
      <p><span class="special_p">{{ $t('home.special_two') }}</span>{{ $t('home.intro_two') }}</p>
      <p><span class="special_p">{{ $t('home.special_three') }}</span>{{ $t('home.intro_three') }}</p>
      <el-button>{{ $t('home.try_button') }}<i class="el-icon-right el-icon--right"></i></el-button>
      <p class="little_p">{{ $t('home.intro_little') }}</p>
    </div>

    <div class="questions">
      <transition name="el-zoom-in-bottom">
        <h3 v-show="showOne">{{ $t('home.question_title') }}</h3>
      </transition>
      <div class="divide_questions"></div>
      <div class="questions_row">
        <el-row :gutter="70" style="margin:0 auto">
          <el-col :span="8">
            <div class="questions_item">
              <h5>{{ $t('home.question_one') }}</h5>
              <img src="~/assets/images/web/home/question_one.png" />
              <div class="questions_detail">
                <p>{{ $t('home.question_detail_one') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="questions_item">
              <h5>{{ $t('home.question_two') }}</h5>
              <img src="~/assets/images/web/home/question_two.png" />
              <div class="questions_detail">
                <p>{{ $t('home.question_detail_two') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="questions_item">
              <h5>{{ $t('home.question_three') }}</h5>
              <img src="~/assets/images/web/home/question_three.png" />
              <div class="questions_detail">
                <p>{{ $t('home.question_detail_three') }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-button><i class="iconfont icon-pdf"></i>{{ $t('home.pdf_button') }}</el-button>
    </div>

    <div class="video">
      <div class="video_back">
        <div class="video_video">
          <video id="myVideo" class="video-js">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
          </video>
        </div>
        <div class="video_detial"></div>
      </div>
    </div>

    <div class="project">
      <h3>{{ $t('home.project_title') }}</h3>
      <p>{{ $t('home.project_intro') }}</p>
      <div class="divide_project"></div>
      <div class="project_row">
        <el-row :gutter="90">
          <el-col :span="12">
            <div class="project_item_one">
              <img src="~/assets/images/web/home/project_one.png" />
              <h5>{{ $t('home.project_one') }}</h5>
              <div class="project_detail_one">
                <p>{{ $t('home.project_detail_one') }}</p>
                <!-- <el-button size="mini">{{ $t('home.pro_button') }}<i class="el-icon-right el-icon--right"></i></el-button> -->
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="project_item_two">
              <img src="~/assets/images/web/home/project_two.png" />
              <h5>{{ $t('home.project_two') }}</h5>
              <div class="project_detail_two">
                <p>{{ $t('home.project_detail_two') }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="90">
          <el-col :span="12">
            <div class="project_item_three">
              <h5>{{ $t('home.project_three') }}</h5>
              <div class="project_detail_three">
                <p>{{ $t('home.project_detail_three') }}</p>
              </div>
              <img src="~/assets/images/web/home/project_three.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="project_item_four">
              <h5>{{ $t('home.project_four') }}</h5>
              <div class="project_detail_four">
                <p>{{ $t('home.project_detail_four') }}</p>
              </div>
              <img src="~/assets/images/web/home/project_four.png" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="results">
      <h3>{{ $t('home.result_title') }}</h3>
      <div class="divide_questions"></div>
      <div :class="[(showTwo ? 'results_back' : '')]">
        <div class="showBack" v-if="showTwo"></div>
      </div>
      <div class="results_row">
        <el-row :gutter="50">
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">{{ $t('home.result_high') }}</span>{{ $t('home.result_one') }}</p>
              <img src="~/assets/images/web/home/result_one.png" />
              <div class="results_detail">
                <p>{{ $t('home.result_detail_one') }}<sup>-8</sup>{{ $t('home.result_detail_one_') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">{{ $t('home.result_low') }}</span>{{ $t('home.result_two') }}</p>
              <img src="~/assets/images/web/home/result_two.png" />
              <div class="results_detail">
                <p>{{ $t('home.result_detail_two') }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">{{ $t('home.result_high') }}</span>{{ $t('home.result_three') }}</p>
              <img src="~/assets/images/web/home/result_three.png" class="last_img" />
              <div class="results_detail">
                <p>{{ $t('home.result_detail_three') }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <router-link :to="{ name: '' }" class="route_link">{{ $t('home.result_docs') }}</router-link>
    </div>

    <div class="roadmap">
      <h3>{{ $t('home.roadmap_title') }}</h3>
      <div class="divide_project"></div>
      <div class="time_map">
        <iframe :src="htmlTimeLine" frameborder="0" scrolling=no height="324" class="iframTimeLine"></iframe>
      </div>
    </div>

    <div class="mainblog">
      <h3>{{ $t('home.mainblog_title') }}</h3>
      <div class="divide_questions"></div>
      <div class="mainblog_row">
        <el-row :gutter="50">
          <el-col :span="6">
            <div class="mainblog_item">
              <div class="item_round">
              </div>
              <p>官方说明</p>
              <h3>普适共识论文</h3>
              <el-button type="primary">readmore<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mainblog_item">
              <div class="item_round">
              </div>
              <p>官方说明</p>
              <h3>普适共识论文</h3>
              <el-button type="primary">readmore<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mainblog_item">
              <div class="item_round">
              </div>
              <p>官方说明</p>
              <h3>普适共识论文</h3>
              <el-button type="primary">readmore<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="mainblog_item">
              <div class="item_round">
              </div>
              <p>官方说明</p>
              <h3>普适共识论文</h3>
              <el-button type="primary">readmore<i class="el-icon-right el-icon--right"></i></el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-backtop :bottom="100">
      <div class="back_top">
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../../components/web/Tabbar'
  import Footer from '../../components/web/Footer'

  export default {
    components: {
      HeaderBar,
      Footer
    },
    data() {
      return {
        activeName: 'home',
        htmlFirst: '/Article/index.html',
        htmlTimeLine: '/timeLine/index.html',
        showOne: false,
        showTwo: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true)
      // this.initVideo();
    },
    methods: {
      handleScroll() {
        var top = (document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset)
        if (top > 265 && top < 3235) {
          this.showOne = true
        } else if (top >= 3235) {
          this.showTwo = true
        }
      },
      handleClick(data) {
        this.$router.push({
          path: '/web/' + data
        })
      },
      initVideo() {
        let myPlayer = this.$video(myVideo, {
          controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          autoplay: "false",
          preload: "auto", // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        });
      }
    }
  }

</script>

<style lang="less">
  .first_show {
    .el-button {
      color: #fff;
      background-color: #4857F0;
      border-color: #4857F0;
      font-size: 20px;
      font-weight: 550;

      .el-icon-right {
        font-size: 22px;
      }
    }
  }

  .questions {
    .el-button {
      color: #4857F0;
      background-color: transparent;
      border-color: #4857F0;
      font-size: 16px;
      font-weight: 550;

      .iconfont {
        font-size: 22px;
        margin-right: 5px;
      }
    }
  }

  .project_detail_one {
    .el-button {
      color: #4857F0;
      border: 1px solid #4857F0;
    }
  }

  .mainblog_item {
    .el-button {
      color: #373B5A;
      background-color: transparent;
      border: none;
      font-size: 16px;
      font-weight: 550;
    }
  }

</style>

<style lang="less" scoped>
  .home_back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 290vh;
    background: url('/images/grey_back.png') no-repeat;
    background-size: cover;
    z-index: -3;
  }

  .home_back_one {
    position: absolute;
    top: 220vh;
    left: 0;
    right: 0;
    height: 250vh;
    background: url('/images/color_back.png') no-repeat;
    background-size: cover;
    z-index: -2;
  }

  .home_back_two {
    position: absolute;
    top: 380vh;
    left: 0;
    right: 0;
    height: 170vh;
    background: url('/images/grey_back.png') no-repeat;
    background-size: cover;
    z-index: -3;
  }

  .home_back_three {
    position: absolute;
    top: 515vh;
    left: 0;
    right: 0;
    height: 150vh;
    background: url('/images/color_back.png') no-repeat center;
    background-size: 100% 100%;
    z-index: -2;
  }

  .home_back_four {
    position: absolute;
    top: 595vh;
    left: 0;
    right: 0;
    height: 1450px;
    background: url('/images/grey_back.png') no-repeat;
    background-size: cover;
    z-index: -3;
  }

  .iframFirst {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 800px;
    z-index: -1;
  }

  .iframTimeLine {
    width: 100%;
    height: 100%;
    min-height: 520px;
    z-index: 5;
  }

  .headerbar {
    position: fixed;
    min-width: 1263px;
    height: 81px;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 10;
  }

  .connect_home {
    position: relative;
    background-color: #181830;
    margin-top: 270px;
    min-width: 1263px;
  }

  .footer {
    position: relative;
    background-color: #000000;
    height: 350px;
    min-width: 1263px;
  }

  .back_top {
    height: 100%;
    width: 100%;
    background-color: transparent;
    text-align: center;
    box-shadow: 0 0 16px rgba(0, 0, 0, .12);
    border-radius: 50%;
    padding: 6px;

    i {
      color: #42BAFF;
      font-size: 26px;
    }
  }

  .first_show {
    z-index: 5;
    min-width: 1263px;
    height: 100vh;
    min-height: 800px;
    padding: 28vh 0;
    text-align: center;

    h1 {
      color: #fff;
      font-size: 54px;
      letter-spacing: 5px;
      margin-bottom: 9vh;
    }

    p {
      color: #fff;
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }

    .special_p {
      color: #4857F0;
      font-size: 44px;
      font-weight: 550;
    }

    button {
      width: 200px;
      height: 65px;
      margin-top: 6vh;
    }
    .little_p {
      font-size: 13px;
      font-weight: normal;
      margin-top: 8px;
      color: #4857F0;
    }
  }

  .questions {
    z-index: 5;
    min-width: 1263px;
    height: 100vh;
    min-height: 800px;
    text-align: center;
    padding: 15vh 145px 0 145px;

    h3 {
      color: #0F1337;
      font-size: 28px;
      letter-spacing: 1px;
    }

    .questions_row {
      width: 100%;
      max-width: 1350px;
      padding-top: 5vh;
      margin: 5vh auto;
    }

    .questions_item {
      width: 100%;
      max-width: 345px;
      height: 48vh;
      min-height: 410px;
      max-height: 570px;
      margin: 0 auto;
      border-radius: 8px;
      padding: 5vh 0 0 0;
      h5 {
        color: #000;
        font-size: 20px;
      }

      img {
        width: 22vh;
        height: 22vh;
        margin: 1vh auto;
      }

      .questions_detail {
        width: 195px;
        margin: 1vh auto;
        text-align: left;

        p {
          font-size: 14px;
          font-weight: 550;
          color: #7A8BB6;
          letter-spacing: 1px;
          line-height: 22px;
        }
      }
    }

    .questions_item:hover {
      background-color: #4857F0;

      h5 {
        color: #fff;
      }

      .questions_detail {
        p {
          color: #E0E0E0;
        }
      }
    }

    button {
      width: 230px;
      height: 60px;
    }
  }

  .video {
    height: 100vh;
    min-height: 800px;
    min-width: 1263px;
    padding: 20vh 145px 8vh 145px;

    .video_back {
      background-color: #fff;
      margin: 0 auto;
      width: 100%;
      max-width: 1350px;
      height: 100%;
      border: 1px solid #fff;
      -moz-box-shadow: -2px 2px 10px #909090;
      -webkit-box-shadow: -2px 2px 10px #909090;
      box-shadow: -2px 2px 10px #909090;
    }

    .video_video {
      width: 100%;
      height: 100%;
      margin-top: -105px;
      padding: 0 40px;

      .video-js {
        width: 100%;
        height: 100%;
      }
    }

    .video_detial {
      width: 100%;
      height: 65px;
      background-color: #E6E9F1;
      margin-top: 40px;
    }
  }

  .project {
    height: 140vh;
    min-height: 1120px;
    min-width: 1263px;
    text-align: center;
    padding: 15vh 145px 0 145px;

    h3 {
      color: #fff;
      font-size: 28px;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    p {
      color: #fff;
      font-size: 14px;
      font-weight: 550;
      letter-spacing: 1px;
    }

    .project_row {
      width: 100%;
      max-width: 1350px;
      padding-top: 5vh;
      margin: 5vh auto;

      h5 {
        color: #000;
        font-size: 20px;
        letter-spacing: 1px;
        margin-top: 2vh;
        margin-bottom: 2vh;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        color: #000;
        letter-spacing: 1px;
        line-height: 30px;
      }

      img {
        width: auto;
        height: 22vh;
        max-height: 250px;
        margin-top: -5vh;
      }
    }

    .project_item_one {
      width: 45vh;
      max-width: 430px;
      height: 45vh;
      max-height: 430px;
      border-top-left-radius: 100%;
      background-color: #fff;
      float: right;
      padding-right: 35px;
      h5 {
        text-align: right;
      }

      .project_detail_one {
        float: right;
        text-align: right;
        max-width: 325px;

        button {
          float: right;
          margin-top: 15px;
        }
      }
    }

    .project_item_two {
      width: 43vh;
      max-width: 380px;
      height: 43vh;
      max-height: 380px;
      margin-top: 3vh;
      border-top-right-radius: 100%;
      background-color: #fff;
      padding-left: 35px;
      h5 {
        text-align: left;
      }

      .project_detail_two {
        text-align: left;
        max-width: 270px;
      }
    }

    .project_item_three {
      width: 41vh;
      max-width: 360px;
      height: 41vh;
      max-height: 360px;
      margin-top: 6vh;
      border-bottom-left-radius: 100%;
      background-color: #fff;
      float: right;
      padding-top: 35px;
      padding-right: 35px;
      h5 {
        text-align: right;
      }

      img {
        margin-top: 2vh;
      }

      .project_detail_three {
        float: right;
        text-align: right;
        max-width: 250px;
      }
    }

    .project_item_four {
      width: 39vh;
      max-width: 340px;
      height: 39vh;
      max-height: 340px;
      margin-top: 5vh;
      border-bottom-right-radius: 100%;
      background-color: #fff;
      padding-top: 35px;
      padding-left: 35px;
      h5 {
        text-align: left;
      }

      img {
        margin-top: 2vh;
      }

      .project_detail_four {
        text-align: left;
        max-width: 270px;
      }
    }
  }

  .results {
    height: 100vh;
    min-height: 800px;
    min-width: 1263px;
    text-align: center;
    padding: 15vh 145px 0 145px;
    z-index: 1;

    h3 {
      color: #0F1337;
      font-size: 28px;
      letter-spacing: 1px;
    }

    .results_back {
      position: absolute;
      left: 5%;
      right: 5%;
      width: 90%;
      height: 66vh;
      margin-top: 8vh;
      z-index: -1;
    }

    .showBack {
      width: 100%;
      height: 100%;
      position: relative;
      margin: 0 auto;
      background: #0F1337;
      animation: myfirst 5s;
      -webkit-animation: myfirst 5s;
      /* Safari and Chrome */
      animation-fill-mode: forwards;
    }

    @keyframes myfirst {
      0% {
        background: #0F1337;
        left: 0px;
        top: 50vh;
      }

      50% {
        background: #0F1337;
        left: 0px;
        top: 0px;
      }

      100% {
        background: #0F1337;
        left: 0px;
        width: 64%;
        top: 0px;
      }
    }

    .results_row {
      width: 100%;
      height: 65vh;
      max-width: 1150px;
      margin: 0 auto;
      padding-top: 13vh;
    }

    .results_item {
      width: 100%;
      max-width: 330px;
      height: 48vh;
      min-height: 384px;
      max-height: 560px;
      margin: 0 auto;
      padding: 5vh 0 0 0;
      background-color: #fff;

      .special_h3 {
        color: #6672F0;
        font-size: 26px;
      }

      p {
        color: #000;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 1px;
      }

      img {
        width: 18vh;
        height: 18vh;
        margin: 3vh auto;
      }

      .last_img {
        width: 24vh;
        height: 24vh;
        margin: 0 auto;
      }

      .results_detail {
        width: 245px;
        margin: 1vh auto;

        p {
          font-size: 14px;
          font-weight: 550;
          color: #7A8BB6;
          letter-spacing: 1px;
          line-height: 22px;
          text-align: left;
        }
      }
    }

    .route_link {
      color: #fff;
      font-weight: 550;
      letter-spacing: 1px;
    }

  }

  .roadmap {
    height: 100vh;
    min-height: 800px;
    min-width: 1263px;
    text-align: center;
    padding: 15vh 75px 0 75px;

    h3 {
      color: #fff;
      font-size: 28px;
      letter-spacing: 1px;
    }

    .time_map {
      width: 100%;
      height: 75vh;
      min-height: 520px;
      margin-top: 6vh;
    }
  }

  .mainblog {
    // height: 100vh;
    height: 850px;
    min-width: 1263px;
    text-align: center;
    padding: 150px 145px 0 145px;

    h3 {
      color: #0F1337;
      font-size: 28px;
      letter-spacing: 1px;
    }

    .mainblog_row {
      width: 100%;
      max-width: 1350px;
      margin: 5vh auto;

      .mainblog_item {
        width: 100%;
        // height: 60vh;
        height: 480px;
        padding-top: 45px;

        p {
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 550;
          color: #373B5A;
        }

        h3 {
          margin-bottom: 45px;
          font-size: 24px;
          letter-spacing: 1px;
          color: #373B5A;
        }
      }

      .item_round {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 3vh auto;
        background-color: #fff;
      }
    }
  }

  .divide_questions {
    width: 85px;
    height: 5px;
    margin: 15px auto;
    background-image: linear-gradient(to right, #3C3F5D, #015EEA, #00C0FA);
  }

  .divide_project {
    width: 85px;
    height: 5px;
    margin: 15px auto;
    background-image: linear-gradient(to right, #12D6DF, #F70FFF);
  }

</style>
