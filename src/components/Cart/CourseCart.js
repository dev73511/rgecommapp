import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myCourses: props.courses.edges,
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
                      data-item-url="https://learncodeonlie.in"
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
