<script>
import axios from "axios";
export default {
  data() {
    return {
      brand: {},
    };
  },
  mounted() {
    this.getBrand();
    console.log(this.$route.params.brand);
  },
  methods: {
    getBrand() {
      axios
        .get("https://run.mocky.io/v3/c4edb3a6-3f3c-413f-bc52-4b44a38b553a")
        .then((res) => {
          this.brand = res.data.filter(
            (data) => data.brand === this.$route.params.brand
          );
          console.log(this.brand);
          this.brand = this.brand[0];
          console.log(this.brand);

          // this.brand = res.data;
          // console.log(this.brand);
        });
    },
  },
  computed: {
    btnStyles() {
      return {
        "background-color": this.brand.colorBackground,
        color: this.brand.colorText,
      };
    },
  },
};
</script>

<template>
  <div class="landing">
    <div class="landingLeft">
      <div class="col3">
        <div class="box1"><img src="./icons/1.png" alt="" /></div>
        <div class="box1">
          <div class="boxColor" style="background-color: #e7fafe"></div>
        </div>
        <div class="box1"><img src="./icons/2.png" alt="" /></div>
      </div>
      <div class="col3">
        <div class="box1">
          <div class="boxColor" style="background-color: #f3f2ff"></div>
        </div>
        <div class="box1"><img src="./icons/3.png" alt="" /></div>
        <div class="box1">
          <div class="col2">
            <div class="row2">
              <div class="boxColor" style="background-color: #e2e3fe"></div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="col2">
            <div class="row2"></div>
            <div class="row2"><img src="./icons/4.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="col3">
        <div class="box1">
          <div class="col2">
            <div class="row2"></div>
            <div class="row2"><img src="./icons/5.png" alt="" /></div>
          </div>
          <div class="col2">
            <div class="row2"></div>
            <div class="row2"></div>
          </div>
        </div>
        <div class="box1">
          <div class="col2">
            <div class="row2"></div>
            <div class="row2">
              <div class="boxColor" style="background-color: #dffcfe"></div>
            </div>
          </div>
          <div class="col2">
            <div class="row2">
              <div class="boxColor" style="background-color: #e2e3fe"></div>
            </div>
            <div class="row2"></div>
          </div>
        </div>
        <div class="box1">
          <div class="col2">
            <div class="row2"><img src="./icons/6.png" alt="" /></div>
            <div class="row2"></div>
          </div>
          <div class="col2">
            <div class="row2"></div>
            <div class="row2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="landingRight">
      <div class="loginContainer">
        <form action="" class="loginForm">
          <img :src="brand.logo" alt="" />
          <h2>Login</h2>
          <h3>
            <span>{{ brand.brand }}</span> Welcome back
          </h3>
          <div class="inputContainer">
            <label for="Email">Email Address </label>
            <input type="email" id="Email" />
          </div>
          <div class="inputContainer">
            <div class="labelContainer">
              <label for="Password" class="labelLeft">Password </label>
              <label for="Forgot Password" class="labelRight"
                ><a href="#">Forgot password?</a></label
              >
            </div>

            <input type="password" id="password" />
          </div>
          <button :style="btnStyles" type="submit">Login</button>
          <p>Don't have an account? <a href="#">Contact Sales</a></p>
        </form>
      </div>
      <div class="forgetPassword"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Landing.scss";
</style>
