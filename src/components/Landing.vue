<script>
export default {
  data() {
    return {
      brand: {},
    };
  },
  methods: {
    forPass() {
      document.getElementById("for").style.left = "0";
      document.getElementById("log").style.left = "101%";
    },
    login() {
      document.getElementById("for").style.left = "-101%";
      document.getElementById("log").style.left = "0";
      document.getElementById("csa").style.top = "-101%";
      document.getElementById("img").style.left = "0";
      document.getElementById("sal").style.left = "-101%";
    },
    contactSales() {
      document.getElementById("csa").style.top = "0";
      document.getElementById("log").style.left = "101%";
      document.getElementById("img").style.left = "101%";
      document.getElementById("sal").style.left = "0";
      document.getElementById("for").style.left = "-101%";
    },
  },
  mounted() {
    this.getBrand();
    console.log(this.$route.params.brand);
  },
};
</script>

<template>
  <div class="landing">
    <div class="landingLeft" id="laf">
      <div class="imageBoxes" id="img">
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
      <div class="salesBox" id="sal">
        <img src="./icons/Logo Website 1.png" alt="Logo Horizontal" />
        <p>
          Discover end-to-end hiring experience platform with video interview
          and assessments.
        </p>
      </div>
    </div>
    <div class="landingRight" id="lar">
      <div class="loginContainer" id="log">
        <form action="" class="loginForm">
          <img src="./icons/Logo_Talocity.png" alt="" />
          <h2>Login</h2>
          <h3>Welcome back</h3>
          <div class="inputContainer">
            <label for="Email">Email Address </label>
            <input type="email" id="Email" />
          </div>
          <div class="inputContainer">
            <div class="labelContainer">
              <label for="Password" class="labelLeft">Password </label>
              <label for="Forgot Password" class="labelRight"
                ><a href="#" @click="forPass">Forgot password?</a></label
              >
            </div>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <a href="#" @click="contactSales">Contact Sales</a>
          </p>
        </form>
      </div>
      <div class="forgetContainer" id="for">
        <img class="goBack" src="./icons/back.png" alt="Back" @click="login" />

        <div class="forgetPassword">
          <h2>Forgot Password?</h2>

          <h3>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </h3>
          <div class="inputContainer">
            <label for="">Email Address </label>
            <input type="email" id="Email" />
          </div>
          <button type="submit">Send Reset Instructions</button>
          <p>
            Don't have an account?
            <a href="#" @click="contactSales">Contact Sales</a>
          </p>
        </div>
      </div>
      <div class="salesContainer" id="csa">
        <form action="" class="salesForm">
          <h2>Learn more about Talocity</h2>
          <div class="inputGroup">
            <div class="inputContainer">
              <label for="firstName">First Name </label>
              <input type="text" id="firstName" />
            </div>
            <div class="inputContainer">
              <label for="lastName">Last Name </label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div class="inputContainer">
            <label for="">Email Address </label>
            <input type="email" id="Email" />
          </div>
          <div class="inputContainer">
            <label for="compantName">Company Name </label>
            <input type="text" id="compantName" />
          </div>
          <div class="inputContainer">
            <label for="phoneNumber">Phone Number </label>
            <input type="number" id="phoneNumber" />
          </div>
          <div class="inputContainer">
            <label for="message">Message </label>
            <input type="text" id="message" />
          </div>
          <button type="submit">Contact Sales</button>
          <p>Already have an account? <a href="#" @click="login">Login</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Landing.scss";
</style>
