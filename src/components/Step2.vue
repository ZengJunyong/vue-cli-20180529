<template>
  <div>
    <div class="text-center top-bar"><span @click="back()" class="carousel-control-prev-icon"></span>Sign up with GaiGai
    </div>
    <div class="p-3" style="font-size: 14px;padding-top: 0px !important;">
      GaiGai is an offline dating agency which is wholly owned by Paktor Group.
      <img src="static/Group.png" style="width: 70%;display: block;margin: 25px auto;">
      We need permission to obtain your personal details to contact you:
      <br><br>
      <input type="email" v-model.trim="user.name"><br>
      <input type="email" v-model.trim="user.email"><br>
      <template v-if="user.phone">
        <input type="text" v-model.trim="user.phone" :disabled="true"><br>
      </template>
      <br>
      <span v-if="!user.phone">To enable us to reach you faster, kindly provide us with your phone number. <br></span>
      By granting permission, you agree to our
      <a target="_blank" href="http://www.gopaktor.com/#/term">Terms of Use</a> and
      <a target="_blank" href="http://www.gopaktor.com/#/privacy">Privacy Policy</a>.
    </div>
    <div class="cta" @click="grant()" v-if="user.phone" style="background: #706ec8;">
      Grant Permission
    </div>
    <div class="cta" @click="keyInNumber()" v-if="!user.phone" style="background: #706ec8;">
      Key In Phone Number
    </div>
    <b-modal ref="grant" title="We got your back!" ok-title="Alright, sure!" @ok="ok" ok-only>
      {{user.name}}, how about you continue swiping while waiting for our Relationship Manager to contact you?
    </b-modal>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data() {
      let {name, email, phone} = this.$route.query
      if (phone)
        phone = '+' + phone
      return {
        user: {name, email, phone}
      }
    },
    methods: {
      back() {
        this.$router.push({name: 'Step1', query: this.$route.query})
      },
      grant() {
        let {keywords} = this.$route.query
        let {name, email, phone} = this.user
        // send the data to server
        console.log({name, email, phone, keywords})
        this.$refs.grant.show()
      },
      ok() {
        document.location = 'http://overlay-close/'
      },
      keyInNumber() {
        let {keywords} = this.$route.query
        this.$router.push({name: 'Phone', query: Vue.util.extend({keywords}, this.user)})
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
