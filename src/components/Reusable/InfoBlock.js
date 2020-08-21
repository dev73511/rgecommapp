import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-0 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis perferendis blanditiis dolores magni dignissimos
              vitae quis dolor accusamus minima accusantium suscipit et cum
              corrupti ad quae, mollitia eos nihil amet corporis sequi eligendi
              deleniti? Id accusamus, dignissimos explicabo omnis sit quia
              necessitatibus velit neque veniam dolorem harum ab. Similique
              minima tempora eius inventore deleniti perspiciatis numquam qui
              quibusdam? Ea, voluptate?
            </p>
            <Link to="/about">
              <button className="btn btn-warning bt-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
