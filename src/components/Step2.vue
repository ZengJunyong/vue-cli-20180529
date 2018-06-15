<template>
  <div>
    <div class="text-center top-bar"><span @click="back()" class="carousel-control-prev-icon"></span>Sign up with GaiGai
    </div>
    <div class="p-3" style="font-size: 14px;padding-top: 0px !important;">
      GaiGai is an offline dating agency which is wholly owned by Paktor Group.
      <img src="static/Group.png" style="width: 70%;display: block;margin: 25px auto;">
      We need permission to obtain your personal details to contact you:
      <br><br>
      <input type="email" v-model.trim="g.name"><br>
      <input type="email" v-model.trim="g.email"><br>
      <template v-if="g.phone">
        <input type="text" v-model="'+' + g.country + ' ' + g.phone" :disabled="true"><br>
      </template>
      <br>
      <span v-if="!g.phone">To enable us to reach you faster, kindly provide us with your phone number. <br></span>
      By granting permission, you agree to our
      <a target="_blank" href="http://www.gopaktor.com/#/term">Terms of Use</a> and
      <a target="_blank" href="http://www.gopaktor.com/#/privacy">Privacy Policy</a>.
    </div>
    <div class="cta" @click="grant()" v-if="g.phone" style="background: #706ec8;">
      Grant Permission
    </div>
    <div class="cta" @click="keyInNumber()" v-if="!g.phone" style="background: #706ec8;">
      Key In Phone Number
    </div>
    <b-modal ref="grant" title="We got your back!" ok-title="Alright, sure!" @ok="ok"
             ok-only hide-header-close no-close-on-esc no-close-on-backdrop>
      {{g.name}}, how about you continue swiping while waiting for our Relationship Manager to contact you?
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        g: $g
      }
    },
    methods: {
      back() {
        this.$router.push({name: 'Step1'})
      },
      grant() {
        let {name, email, country, phone, imageConsultancy, dateCoaching} = $g
        // send the data to server
        console.log({name, email, country, phone, imageConsultancy, dateCoaching})
        this.$refs.grant.show()
      },
      ok() {
        document.location = 'http://overlay-close/'
      },
      keyInNumber() {
        this.$router.push({name: 'Phone'})
      }
    }
  }
</script>

<style scoped>
  input {
    margin-bottom: 5px;
    padding: 0px 12px;
    width: 180px;
  }
</style>
