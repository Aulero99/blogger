<template>
  <div class="card d-flex flex-row justify-content-between post-card elevation-3">
    <div class="d-flex flex-column post-body">
      <h4>
        {{ post.title }}
      </h4>
      <p>
        {{ post.ComputeContent }}
      </p>
      <div class="d-flex flex-row creator">
        <img class="img-fluid creator-img" :src="post.creatorImg" alt="">
        <p>
          Posted on: {{ post.date }}
        </p>
      </div>
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
  setup() {
    return {
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}

.post-img img {
  object-fit: cover;
  border-radius: 0.25rem;
  width: 100%;
  max-height: 10rem;
  aspect-ratio: 1/1;
}

.post-body {
  max-width: 70%;
}

p{
  all: unset;
}

.creator{
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.creator-img{
  object-fit: cover;
  border-radius: 50%;
  height: 100%;
  max-height: 3rem;
  aspect-ratio: 1/1;
  margin-right: 0.5rem;
}
</style>
