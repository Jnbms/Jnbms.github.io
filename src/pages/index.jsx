import React, { Fragment } from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  // console.log('asd')
  // console.log(data.allMarkdownRemark.edges[0].node.id)

  return <Fragment>
    <div>{data.allMarkdownRemark.edges[0].node.id}</div>
    <h1>JNBMS</h1>
    <div>react native | flutter | android studio</div>
    <div>junebeomlee.dev@gmail.com</div>
    <br/>

    <h2>리액트 네이티브 활용 법!</h2>
    <div>리액트 네이티브를 활용하여 페이지 만들기 리덕스 사가를 사용하면 어떤 점이 좋은지 확인해보고 프로젝트에 적용해보는 시간</div>
    <div>2023-01-02</div>
    <div>#리액트 네이티브 #리덕스 사가</div>
    <br/>


    <h2>플러터 잘 작성하는 법</h2>
    <div>리액트 네이티브를 활용하여 페이지 만들기</div>
    <div>2023-01-03</div>
    <div>#플러터 #BLOC</div>
    {/* <h2>Hello</h2>
    <blockquote>인용구를 예쁘게 꾸며주셔야 합니다.</blockquote>
    이번 시간에는 <code>react</code>를 활용한 코드를 작성해보겠습니다.
    <pre><code>
      console.log('hello')
      console.log('hello')
    </code></pre> */}
  </Fragment>
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
}
`