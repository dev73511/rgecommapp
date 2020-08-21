import React from 'react'

export default function TeamPhotoSection() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 ">
            <div class="card-group my-3">
              <div class="card">
                <div className="imgContainer">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body bg-light">
                  <h5 class="card-title ">Samartha</h5>
                  <p class="card-text ">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card mx-lg-2 mx-md-2 ">
                <div className="imgContainer">
                  <img
                    class="card-img-top w-100"
                    src="https://images.pexels.com/photos/25756/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body bg-light">
                  <h5 class="card-title ">Sara</h5>
                  <p class="card-text ">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text ">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <div className="imgContainer">
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body bg-light">
                  <h5 class="card-title ">Johny</h5>
                  <p class="card-text ">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p class="card-text ">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
