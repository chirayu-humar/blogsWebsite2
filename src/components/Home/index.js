import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

class Home extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.makeTheRequest()
  }

  makeTheRequest = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const jsonData = await response.json()
    const updatedDataList = jsonData.map(eachItem => {
      const updatedData = {
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }
      return updatedData
    })
    this.setState({blogsList: updatedDataList})
  }

  render() {
    const {blogsList} = this.state
    const isLoading = blogsList.length === 0
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading && (
          <div data-testid="loader">
            <Loader />
          </div>
        )}
        <BlogList blogsList={blogsList} />
      </div>
    )
  }
}

export default Home