import React from "react"

export default function OurServiceSection() {
  return (
    <div className="container my-4">
      <div class="card-deck">
        <div class="card bg-light">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Image goes here"
          />
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Web Development in an affordable price.</p>
            <p class="card-text">
              <small class="text-muted">Pricing</small>
            </p>
          </div>
        </div>
        <div class="card bg-light">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">SEO</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              sapiente.
            </p>
            <p class="card-text">
              <small class="text-muted">Pricing</small>
            </p>
          </div>
        </div>
        <div class="card bg-light">
          <img
            class="card-img-top"
            src="https://images.pexels.com/photos/365194/pexels-photo-365194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">IOS & Andriod App Development</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              sapiente.
            </p>
            <p class="card-text">
              <small class="text-muted">Pricing</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
