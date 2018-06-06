<template>
  <div>
    <div v-show="!code">
      <div class="text-center top-bar"><span class="carousel-control-prev-icon"></span>Enter Phone Number</div>
      <div class="p-3 text-center" style="font-size: 12px;">
        To enable us to reach you faster, <br>
        we need to verify your phone number: <br><br>
        <input type="text" class="phone_country_code" v-model="phone.countryCode">
        <input type="text" class="phone" v-model="phone.number">
        <div class="pt-1" style="color: #706ec8;" :class="{invisible:!sending}">Sending...</div>
      </div>
      <div class="cta" @click="sendCode()" style="background: #706ec8;">
        Send Code
      </div>
    </div>
    <div v-show="code">
      <div class="text-center top-bar"><span class="carousel-control-prev-icon"></span>Verify Phone Number</div>
      <div class="p-3 text-center" style="font-size: 12px;">
        Please enter the verification code <br>
        that has been sent to your phone number:<br><br>
        <input type="text" class="phone text-center" v-model="code">
        <br>
        <span>Resend(50s)</span>
      </div>
      <div class="cta" @click="verify()" style="background: #706ec8;">
        Grant Permission
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: {
          countryCode: '+65',
          number: ''
        },
        sending: 0,
        code: '2'
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      sendCode() {
        this.sending = 1
        setTimeout(() => {
          this.sending = 0
          this.code = '1234'
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  input {
    height: 45px;
    font-size: 25px;
  }

  .phone_country_code {
    width: 50px;
  }

  .phone {
    width: 150px;
  }
</style>
