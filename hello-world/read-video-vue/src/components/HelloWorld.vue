<template>
  <div class='App'>
    <div class='title'>
      <h2 class='title-text'>Hello World for VUE2</h2>
      <img class='title-logo' src="../assets/logo.svg" alt="logo" />
    </div>
    <div class='top-btns'>
      <button @click="mode = 'video'" :style="{ backgroundColor: mode === 'video' ? 'rgb(255, 174, 55)' : '#FFFFFF' }">VideoRecognizer</button>
      <button @click="mode = 'image'" :style="{ backgroundColor: mode === 'image' ? 'rgb(255, 174, 55)' : '#FFFFFF' }">ImageRecognizer</button>
    </div>
    <VideoRecognizer v-if="mode === 'video'"/> 
    <ImageRecognizer v-else/>
  </div>
</template>

<script>
import VideoRecognizer from "./VideoRecognizer.vue";
import ImageRecognizer from "./ImageRecognizer.vue"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      mode: "video",
    };
  },
  components: {
    VideoRecognizer, ImageRecognizer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.title .title-logo {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.top-btns {
  width: 30%;
  margin: 20px auto;
}

.top-btns button {
  display: inline-block;
  border: 1px solid black;
  padding: 5px 15px;
  background-color: transparent;
  cursor: pointer;
}

.top-btns button:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: transparent;
}
.top-btns button:nth-child(2) {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: transparent;
}

@media screen and (max-width: 500px) {
  .top-btns {
    width: 70%;
  }
}
</style>
