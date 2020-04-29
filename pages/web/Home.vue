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
      <h1>{{ $t('about.title') }}</h1>
      <p>目前唯一<span class="special_p">已经</span>适用于公网的、可通过<span class="special_p">1024分片</span>实现<span
          class="special_p">64000TPS</span>的全分片系统</p>
      <el-button>Try me<i class="el-icon-right el-icon--right"></i></el-button>
    </div>

    <div class="questions">
      <transition name="el-zoom-in-bottom">
        <h3 v-show="showOne">普适链旨在解决当前区块链最核心问题</h3>
      </transition>
      <div class="divide_questions"></div>
      <div class="questions_row">
        <el-row :gutter="70" style="margin:0 auto">
          <el-col :span="8">
            <div class="questions_item">
              <h5>分片安全性</h5>
              <img src="~/assets/images/web/home/question_one.png" />
              <div class="questions_detail">
                <p>分片后算力只有全网的分片数分之一，恶意节点集中攻击单分片所产生的安全性问题</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="questions_item">
              <h5>带宽膨胀</h5>
              <img src="~/assets/images/web/home/question_two.png" />
              <div class="questions_detail">
                <p>即使只保证最终一致性，跨分片传输所需的带宽与分片数量成平方关系上升限制了分片的实际数量</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="questions_item">
              <h5>回滚雪崩</h5>
              <img src="~/assets/images/web/home/question_three.png" />
              <div class="questions_detail">
                <p>某个区块被回滚将导致其他所有分片都有可能需要回滚，然后导致更多回滚导致分片系统不稳定</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-button><i class="iconfont icon-pdf"></i>查看白皮书</el-button>
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
      <h3>解决方案</h3>
      <p>普适算法</p>
      <div class="divide_project"></div>
      <div class="project_row">
        <el-row :gutter="90">
          <el-col :span="12">
            <div class="project_item_one">
              <img src="~/assets/images/web/home/project_one.png" />
              <h5>安全性经过证明的分片共识</h5>
              <div class="project_detail_one">
                <p>通过六个方面研究和证明，得到能够满足安全性要求的分片共识算法</p>
                <el-button size="mini">查看详情<i class="el-icon-right el-icon--right"></i></el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="project_item_two">
              <img src="~/assets/images/web/home/project_two.png" />
              <h5>主动P2P存储实现数据按需读取</h5>
              <div class="project_detail_two">
                <p>基于P2P的组播和主动存储系统，使数据只在需要的分片内传输实现最小化</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="90">
          <el-col :span="12">
            <div class="project_item_three">
              <h5>三层架构解决带宽膨胀问题</h5>
              <div class="project_detail_three">
                <p>三层架构网络使跨分片通信所需带宽与数量关系从平方降低到线性关系</p>
              </div>
              <img src="~/assets/images/web/home/project_three.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="project_item_four">
              <h5>快速区块确定化解决回滚雪崩</h5>
              <div class="project_detail_four">
                <p>片内单区块快速最终确定化和最终确定化后跨分片处理解决“回滚雪崩”</p>
              </div>
              <img src="~/assets/images/web/home/project_four.png" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="results">
      <h3>研究成果</h3>
      <div class="divide_questions"></div>
      <div :class="[(showTwo ? 'results_back' : '')]">
        <div class="showBack"  v-if="showTwo"></div>
      </div>
      <div class="results_row">
        <el-row :gutter="50">
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">高</span>安全性</p>
              <img src="~/assets/images/web/home/result_one.png" />
              <div class="results_detail">
                <p>经过安全性论证的分片系统，攻击概率为10<sup>-8</sup>，折合攻击2500年成功一次.</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">低</span>宽带需求</p>
              <img src="~/assets/images/web/home/result_two.png" />
              <div class="results_detail">
                <p>跨分片带宽需求与分片数量呈线性关系，交易数据+跨分片数据：1K分片仅需3Mbps, 16384分片仅需5Mbps.</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="results_item">
              <p><span class="special_h3">高</span>TPS性能</p>
              <img src="~/assets/images/web/home/result_three.png" class="last_img"/>
              <div class="results_detail">
                <p>超高TPS性能, 1K分片达到64000,16384分片可达到1,000,000TPS.</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <router-link :to="{ name: '' }" class="route_link">查看开发者文档</router-link>
    </div>

    <div class="roadmap">
      <h3>开发路线图</h3>
      <div class="divide_project"></div>
      <div class="time_map">
        <iframe :src="htmlTimeLine" frameborder="0" scrolling=no height="324" class="iframTimeLine"></iframe>
      </div>
    </div>

    <div class="mainblog">
      <h3>博客摘选</h3>
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

<style lang="scss">
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

<style lang="scss" scoped>
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
    height: 150vh;
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
    padding: 33vh 0;
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
      min-height: 384px;
      max-height: 475px;
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
        width: 185px;
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
      ;
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
        height: 23vh;
        margin-top: -3vh;
      }
    }

    .project_item_one {
      width: 45vh;
      max-width: 430px;
      height: 45vh;
      max-height: 430px;
      float: right;
      border-top-left-radius: 100%;
      background-color: #fff;

      .project_detail_one {
        width: 280px;
        text-align: center;
        margin: 0 auto;
        button {
          float: right;
          margin-top: 15px;
        }
      }
    }

    .project_item_two {
      width: 41vh;
      max-width: 380px;
      height: 41vh;
      max-height: 380px;
      margin-top: 4vh;
      border-top-right-radius: 100%;
      background-color: #fff;
      padding-left: 20px;

      .project_detail_two {
        width: 270px;
        text-align: left;
        margin-left: 30px;
      }
    }

    .project_item_three {
      width: 40vh;
      max-width: 360px;
      height: 40vh;
      max-height: 360px;
      margin-top: 6vh;
      float: right;
      border-bottom-left-radius: 100%;
      background-color: #fff;
      padding-top: 3vh;
      padding-right: 40px;
      text-align: right;

      img {
        margin-top: 2vh;
      }

      .project_detail_three {
        width: 250px;
        float: right;
      }
    }

    .project_item_four {
      width: 38vh;
      max-width: 330px;
      height: 38vh;
      max-height: 330px;
      margin-top: 5vh;
      border-bottom-right-radius: 100%;
      background-color: #fff;
      padding-top: 3vh;
      padding-left: 31px;
      text-align: left;

      img {
        margin-top: 2vh;
      }

      .project_detail_four {
        width: 210px;
        text-align: center;
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
      background:#0F1337;
      animation: myfirst 5s;
      -webkit-animation: myfirst 5s; /* Safari and Chrome */
      animation-fill-mode: forwards;
    }
    @keyframes myfirst {
      0% {background:#0F1337; left: 0px; top: 50vh;}
      50% {background:#0F1337; left: 0px; top: 0px;}
      100% {background:#0F1337; left: 0px; width: 64%; top: 0px;}
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
      max-height: 480px;
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
        width: 195px;
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
      margin-top: 5vh;
    }
  }

  .mainblog {
    height: 100vh;
    min-height: 800px;
    min-width: 1263px;
    text-align: center;
    padding: 15vh 145px 0 145px;

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
        height: 60vh;
        padding-top: 5vh;

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
