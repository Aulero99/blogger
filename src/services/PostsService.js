import { AppState } from '../AppState.js'
import { Post } from '../models/Post.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class PostsService {
  async getPostsFromApi() {
    const res = await api.get('/api/blogs')
    AppState.posts = res.data.map(p => new Post(p))
    logger.log(AppState.posts)
  }
}

export const postsService = new PostsService()
