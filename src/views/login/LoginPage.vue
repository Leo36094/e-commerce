<style lang="stylus">
@import '../../assets/style/_base.styl';

.login-page {
  &__wrapper {
    width: 100%;
    height: 100%;
  }

  &__container {
    display: flex;
    height: 100vh;
    background: url('../../assets/img/login.jpg') no-repeat center center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .login {
      display: flex;
      align-items: center;
      width: 100%;

      &-error {
        color: $input-error-color;
        padding: 10px 0;
        text-align: center;
      }

      &__form {
        margin: 0 auto;
        background: #ecf0f1;
        width: 350px;
        border-radius: 5px;
        box-shadow: 3px 3px 10px #333;
        padding: 20px;

        &__item {
          margin-bottom: 20px;
        }

        &__button {
          width: 100%;
          text-align: center;
          margin: 0 auto;

          button {
            padding: 15px 25px;
            font-size: 18px;
            border-radius: 4px;

            &:focus, &:active {
              outline: none;
              border-color: $primary-color;
            }

            &:hover {
              border-color: #66cfd2;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="login-page__wrapper">
    <div class="login-page__container bannerHeight">
      <div class="login">
        <form class="login__form form_row" @submit.prevent="signIn">
          <h1 class="login-error" v-if="errorMessage">{{ errorMessage }}</h1>
          <div class="login__form__item form__column full">
            <Label labelName="帳號" />
          </div>
          <div class="login__form__item form__column full">
            <Input
              v-model="login.username"
              type="text"
              placeholder="請輸入帳號"
            />
          </div>

          <div class="login__form__item form__column full">
            <Label labelName="密碼" />
          </div>
          <div class="login__form__item form__column full">
            <Input
              v-model="login.password"
              type="password"
              placeholder="請輸入密碼"
            />
          </div>

          <div class="login__form__button">
            <button @submit.prevent="signIn" :disabled="isLoading">
              {{ !isLoading ? '登入' : '登入...' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Label from '@/components/reuse/Label.vue';
import Input from '@/components/reuse/Input.vue';
export default {
  components: {
    Label,
    Input,
  },
  props: {},
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
      innerHeight: '',
      isLoading: false,
      errorMessage: '',
    };
  },
  watch: {
    login: {
      deep: true,
      handler(val) {
        if (val) this.errorMessage = '';
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.getFullBanner();
    this.onResize();
  },
  destroyed() {},
  methods: {
    signIn() {
      // const api = 'https://vue-course-api.hexschool.io/admin/signin';
      this.isLoading = true;
      this.$http.post('admin/signin', this.login).then((res) => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
          this.$http.defaults.headers.common['Authorization'] = res.data.token; // for all requests

          this.isLoading = false;
          this.$router.push('/admin');
        } else {
          this.isLoading = false;
          this.errorMessage = 'Invalid Username or Password';
        }
      });
    },
    getFullBanner() {
      this.innerHeight = window.innerHeight + 'px';
      let bannerSection = document.querySelector('.bannerHeight');
      bannerSection.style.height = this.innerHeight;
    },
    onResize() {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.getFullBanner();
        });
      });
    },
  },
};
</script>
