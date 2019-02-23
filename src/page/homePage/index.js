import React, { Component, Fragment } from 'react'
import PageWarp from 'toolComponents'
import Header from './components/header'
import Nav from './components/nav'
import Posts from './components/posts'
import LessonList from './components/lessonList'
import './index.less'

class Home extends Component {
    componentDidMount() {
        console.log('home Did==>')
    }
    render () {
        console.log('home render=>')
        return (
            <Fragment>
                <Header/>
                <Nav/>
                <Posts/>
                <LessonList history={this.props.history}/>
            </Fragment>
        )  
    }
}

export default Home