import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isDataReached: false}

  componentDidMount() {
    this.getBlockItemData()
  }

  getBlockItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await response.json()
    console.log(jsonData)
    const updatedData = {
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      content: jsonData.content,
      id: jsonData.id,
      title: jsonData.title,
      topic: jsonData.topic,
      imageUrl: jsonData.image_url,
    }
    this.setState({blogData: updatedData, isDataReached: true})
  }

  render() {
    const {blogData, isDataReached} = this.state
    const {author, avatarUrl, content, id, title, topic, imageUrl} = blogData
    return (
      <div className="outerDiv">
        <div className="child1">
          <h1>{title}</h1>
        </div>
        <div className="child2">
          <div className="avatarContainer">
            <img className="avatar" src={avatarUrl} />
          </div>
          <p>{author}</p>
        </div>
        <div className="child3">
          <img alt={title} className="mainImage" src={imageUrl} />
        </div>
        <div className="child4">
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails