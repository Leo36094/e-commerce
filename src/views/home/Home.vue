<style lang="stylus">
.home {
  width: 100%;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;

  h2 {
    text-align: center;
    margin: 12px 0;
    font-size: 18px;
  }

  .banner {
    width: 100%;
    height: 100%;
    padding: 0;

    &-container {
      background: url('../../assets/img/Banner.jpg') no-repeat center center;
      background-size: cover;
      color: #fff;
      position: relative;
      overflow: hidden;

      .down-scroll {
        position: absolute;
        bottom: 2%;
        left: 50%;
        animation: up-down 1s infinite;
      }
    }
  }

  &-brand {
    width: 100%;
    height: 100%;
    margin: 20px 0;

    &-container {
      max-width: 960px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    &-icon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      &__info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 30%;
        height: 100%;
      }

      &__container {
        width: 20%;

        img {
          width: 100%;
        }
      }
    }

    @media only screen and (max-width: 600px) {
      .home-brand {
        &-container {
          flex-direction: column;
        }

        &-icon {
          flex-wrap: wrap;

          &__info {
            width: 50%;
            margin: 10px;
            text-align: center;

            span {
              padding: 10px;
            }
          }
        }

        &-service {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin: 0;
          text-align: center;
        }
      }
    }

    &-service {
      width: 40%;
      display: inline-block;
      margin: 0 20px;

      &__title {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0;
        padding: 6px 15px;
        background-color: cadetblue;
        color: white;
      }

      &__intro {
        margin: 0 auto;
        padding: 10px 30px;
        font-size: 15px;
        line-height: 1.5;
      }
    }
  }
}
</style>
<template>
  <div class="home">
    <header class="banner">
      <div class="banner-container" :style="{height:innerHeight}">
        <MainPageHeader :textContent="headerTextContent" />
        <i class="fas fa-2x fa-chevron-circle-down down-scroll"></i>
      </div>
    </header>
    <div class="home-brand">
      <h2>We Also Provide Glasses</h2>
      <div class="home-brand-container">
        <div class="home-brand-icon">
          <div class="home-brand-icon__info">
            <div class="home-brand-icon__container">
              <img src="@/assets/img/paper-icon.png" />
            </div>
            <span>Comprehensive Exams</span>
          </div>
          <div class="home-brand-icon__info">
            <div class="home-brand-icon__container">
              <img src="@/assets/img/ruler-icon.png" />
            </div>
            <span>Custom Fittings</span>
          </div>
          <div class="home-brand-icon__info">
            <div class="home-brand-icon__container">
              <img src="@/assets/img/truck-icon.png" />
            </div>
            <span>Fast Delivery</span>
          </div>
        </div>
        <div class="home-brand-service">
          <h4 class="home-brand-service__title">PHILOSOPHY</h4>
          <p
            class="home-brand-service__intro"
          >Over 75% of our brains are dedicated to one sense: vision. We believe everyone deserves to see the world, not matter what. That’s why we offer eye exams, custom fittings, and quick delivery at a low cost. It’s your vision that makes ours.</p>
        </div>

        <div class="home-brand-service">
          <h4 class="home-brand-service__title">APPOINTMENTS</h4>
          <p
            class="home-brand-service__intro"
          >Schedule an appointment by calling us at (312) 654-0987. We’re open Tuesday - Saturday, 9AM - 6PM.</p>
        </div>
      </div>
    </div>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>
<script>
import MainPageHeader from "@/components/MainPageHeader";
import Footer from "@/components/reuse/Footer";
export default {
  components: { MainPageHeader, Footer },
  props: {},
  data() {
    return {
      innerHeight: "",
      headerTextContent: {
        title: "You can always find a watch fit you the most",
        description: "We provide not only products but also service"
      }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.getFullBanner();
    this.onResize();
    // this.allocateItem([
    //   "A apibox",
    //   "A apibox",
    //   "D apibox1",
    //   "A apibox",
    //   "A sitebox"
    // ]);
  },
  destroyed() {},
  methods: {
    getFullBanner() {
      this.innerHeight = window.innerHeight + "px";
    },
    onResize() {
      this.$nextTick(() => {
        window.addEventListener("resize", () => {
          this.getFullBanner();
        });
      });
    }
    // allocateItem(arr) {
    //   let accumlatedTitle = [];
    //   let accumlatedItem = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     let firstWord = [...arr[i][0]].join("");
    //     let itemName = [...arr[i].slice(2)].join("");
    //     accumlatedTitle.push(firstWord);
    //     accumlatedItem.push(itemName);
    //   }
    //   let result = [];
    //   accumlatedTitle.forEach((item, i) => {
    //     if (accumlatedTitle[i] === "A") {
    //       result = accumlatedItem.reduce((acc, curr) => {
    //         if (acc === curr) {
    //           return [acc, curr];
    //         }
    //       });
    //     }
    //   });
    // }
  }
};
</script>

