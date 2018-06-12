<template>
  <div>
    <div v-show="!code">
      <div class="text-center top-bar"><span class="carousel-control-prev-icon"></span>Enter Phone Number</div>
      <div class="p-3 text-center" style="font-size: 12px;">
        To enable us to reach you faster, <br>
        we need to verify your phone number: <br><br>
        <input type="text" class="phone_country_code" v-model.trim="phone.countryCode">
        <input type="text" class="phone" v-model.trim="phone.number">
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
        <input type="text" class="phone text-center" v-model.trim="code2">
        <br>
        <span class="btn btn-sm">Resend ({{sec}}s)</span>
      </div>
      <div class="cta" @click="grant()" style="background: #706ec8;">
        Grant Permission
      </div>
      <b-modal ref="grant" title="We got your back!" ok-title="Alright, sure!" @ok="ok" ok-only>
        {user.name}, how about you continue swiping while waiting for our Relationship Manager to contact you?
      </b-modal>
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
        code: '', // the real code
        code2: '', // the code of textbox
        sec: 0
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      sendCode() {
        // need to check mobile is right?
        let pattern = /^^[689]\d{7}$$/
        console.log(pattern.test(this.phone.number))

        this.sending = 1
        setTimeout(() => {
          this.sending = 0
          this.code = '1234'
          this.sec = 60
          let tick = setInterval(() => {
              if (this.sec-- == 0) {
                clearInterval(tick)
                this.code = ''
              }
            }, 1000
          )
        }, 2000)
      },
      grant() {
        if (this.code == this.code2) {
          this.$refs.grant.show()
        } else {
          alert('Sorry, wrong code.')
        }
      },
      ok() {
        document.location = 'http://overlay-close/'
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
