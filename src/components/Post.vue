<template>
  <div class="card d-flex flex-row justify-content-between post-card elevation-3">
    <div class="d-flex flex-column post-body">
      <h4>
        {{ post.title }}
      </h4>
      <p>
        {{ post.ComputeContent }}
      </p>
    </div>
    <div class="post-img">
      <img class="img-fluid" :src="post.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
import { Post } from '../models/Post'

export default {
  props: {
    post: { type: Post, required: true }
  },
  setup(props) {
    return {
      x: props.post

    }
  }
}
</script>

<style scoped>
.post-card {
  overflow: hidden;
  padding: 0.5rem;
}

.post-img {
  width: 30%;
  aspect-ratio: 1/1;
}

.post-img img {
  object-fit: cover;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
}

.post-body {
  max-width: 70%;
}
</style>