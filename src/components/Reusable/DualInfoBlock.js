import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading, imgSrc }) {
  return (
    <section className="my-0 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              quisquam mollitia quae provident, iste fuga dolor consectetur
              adipisci asperiores suscipit recusandae? Itaque adipisci dicta
              tenetur non, unde nihil quas corrupti aliquam? Aut officia,
              voluptates et, dolorum voluptas laboriosam neque quos vel eum,
              doloribus dignissimos repudiandae veritatis illum molestias omnis
              eius?
            </p>
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              quisquam mollitia quae provident, iste fuga dolor consectetur
              adipisci asperiores suscipit recusandae? Itaque adipisci dicta
              tenetur non, unde nihil quas corrupti aliquam? Aut officia,
              voluptates et, dolorum voluptas laboriosam neque quos vel eum,
              doloribus dignissimos repudiandae veritatis illum molestias omnis
              eius?
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                className="card-img-top"
                src={imgSrc}
                alt="Image goes here.."
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, facere?
                </p>
                <Link to="/" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
