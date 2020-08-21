import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      myCourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    let keepItsafe = [...this.state.courses]
    if (category === "all") {
      this.setState(() => {
        return { myCourses: keepItsafe }
      })
    } else {
      let holdme = keepItsafe.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { myCourses: holdme }
      })
    }
  }

  render() {
    {
      console.log(this.state.myCourses)
    }
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3 text-capitalize"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.myCourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex mx-auto p-1"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success ml-3">$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://programmingwithdev.netlify.app/"
                      data-item-description=""
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
