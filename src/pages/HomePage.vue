<template>
  <section class="row">
    <div class="col-12 py-2 px-md-5 px-2" v-for="p in posts" :key="p.id">
      <Post :post="p" />
    </div>
  </section>
</template>

<script>
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService.js';
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState';

export default {
  setup() {

    async function getPostsFromApi() {
      try {
        await postsService.getPostsFromApi()
      } catch (error) {
        Pop.error(error, '[Getting Posts]')
      }
    }

    onMounted(() => {
      getPostsFromApi()
    })

    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
