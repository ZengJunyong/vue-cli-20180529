<template>
  <div>
    <div class="text-center top-bar"><span @click="back()">﹤</span>Sign up with GaiGai</div>
    <div class="p-3" style="font-size: 14px;">
      GaiGai is an offline dating agency which is wholly owned by Paktor Group.
      <img src="static/Group.png" style="width: 70%;display: block;margin: 25px auto;">
      We need permission to obtain your personal details to contact you:
      <br><br>
      <span style="visibility: hidden">✎</span> Vivien Tan <br>
      ✎ Email@gopaktor.com <br>

      <div class="fixed-bottom">
        <div class="p-3">By granting permission, you agree to our Terms of Use and Privacy Policy.</div>
        <div class="cta" @click="grant()" style="background: #706ec8;">
          Key In Phone Number
        </div>
        <b-modal ref="grant" title="We got your back!" ok-title="Alright, sure!" ok-only>
          [Name], how about you continue swiping while waiting for our Relationship Manager to contact you?

        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      grant(){
//        this.$refs.grant.show()
      }
    }
  }
</script>
