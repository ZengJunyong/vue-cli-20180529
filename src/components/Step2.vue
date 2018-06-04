<template>
  <div>
    <div class="text-center top-bar"><span @click="back()" class="carousel-control-prev-icon"></span>Sign up with GaiGai
    </div>
    <div class="p-3" style="font-size: 14px;">
      GaiGai is an offline dating agency which is wholly owned by Paktor Group.
      <img src="static/Group.png" style="width: 70%;display: block;margin: 25px auto;">
      We need permission to obtain your personal details to contact you:
      <br><br>
      <input type="email" v-model="user.name"><br>
      <input type="email" v-model="user.email"><br>
      <input type="text" v-model="user.phone">
      <br><br>
      By granting permission, you agree to our
      <a target="_blank" href="http://www.gopaktor.com/#/term">Terms of Use</a> and
      <a target="_blank" href="http://www.gopaktor.com/#/privacy">Privacy Policy</a>.
    </div>
    <div class="cta" @click="grant()" style="background: #706ec8;">
      Grant Permission
    </div>
    <b-modal ref="grant" title="We got your back!" ok-title="Alright, sure!" @ok="ok" ok-only>
      {{user.name}}, how about you continue swiping while waiting for our Relationship Manager to contact you?
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: 'Vivien Tan',
          email: 'Email@gopaktor.com',
          phone: '+65876543'
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      grant() {
        this.$refs.grant.show()
      },
      ok() {
        document.location = 'http://overlay-close/'
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
