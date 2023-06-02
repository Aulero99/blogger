export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.creatorImg = data.creator.picture
    this.creatorName = data.creator.name
    this.body = data.body || ''
    this.date = new Date(data.createdAt).toLocaleDateString('en-US')
    this.imgUrl = data.imgUrl
    this.published = data.published
    this.title = data.title
    this.updatedAt = data.updatedAt
  }

  get ComputeContent() {
    const computedContent = this.body
    if (computedContent.length < 180) {
      return computedContent
    } else {
      let edit = ''
      for (let i = 0; i < 180; i++) {
        edit += computedContent[i]
      }
      const editedContent = edit + '...'
      return editedContent
    }
  }
}
