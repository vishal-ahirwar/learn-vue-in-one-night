<template>
  <div>
    <h1>Hello, from home component</h1>
    <hr />
    <div v-for="thread in threads" :key="thread.id">
      <h3>{{ thread.title }}</h3>
      <div v-for="postID in thread.posts" :key="postID">
        <p>{{ usersById(postID).userId.name }}</p>
        <p>{{ postById(postID).text }}</p>
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
    usersById(postID) {
      return this.users.find((p) => p.id === postID);
    },
  },
};
</script>
<style scoped>
</style>