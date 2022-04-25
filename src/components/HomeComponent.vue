<template>
  <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
    <h1>Hello, world</h1>
      <h3>{{ thread.title }}</h3>

      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId">
          <p>{{userById(postById(postId).userId).name}}</p>
          <p>{{postById(postId).text}}</p>
        </div>
          <div class="user-info">
            <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>
            <a href="#">
              <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="user-image"/>
              </a>
          </div>
          
        </div>
  </div>
</template>
<script>
import sourceData from "../data.json";

export default {
  name: "HomePage",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    postById(postID) {
      return this.posts.find((p) => p.id === postID);
    },
    userById(postId) {
      return this.users.find((p) => p.id === postId);
    },
  },
};
</script>
<style scoped>
</style>