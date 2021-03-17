import React from "react";

export default function Menu(props) {

  
  return (
    <div className="container menu">
      <div className="row">
        <div className="col-sm-3">
          <div className="card" style={{ width: "18rem", height:"100%"}}>
            <div className="card-header">
              <strong>Brands</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">IPhone ({Object.keys(props.product.IPhone).length})</li>
              <li className="list-group-item">Samsung ({Object.keys(props.product.Samsung).length})</li>
              <li className="list-group-item">OPPO ({Object.keys(props.product.OPPO).length})</li>
              <li className="list-group-item">Xiaomi ({Object.keys(props.product.Xiaomi).length})</li>
              <li className="list-group-item">Nokia</li>
              <li className="list-group-item">Huawei</li>
              <li className="list-group-item">General Mobile</li>
              <li className="list-group-item">LG</li>
              <li className="list-group-item">Asus</li>
              <li className="list-group-item">Casper</li>
              <li className="list-group-item">Vestel</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/oppo/thumb/TeoriV2-104342-10_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.OPPO.OPPOZ2.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.OPPO.OPPOZ2.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/110661_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.IPhone.IPhone12Pro.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.IPhone.IPhone12Pro.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/TeoriV2-106085-12_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.Samsung.SamsungS20.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.Samsung.SamsungS20.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.IPhone.IPhone11.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.IPhone.IPhone11.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/TeoriV2-103894-15_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.IPhone.IPhone11Pro.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.IPhone.IPhone11Pro.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/TeoriV2-104547-2_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.Xiaomi.Xiaomi.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.Xiaomi.Xiaomi.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card products" style={{ width: "18rem" }}>
            <img
              src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/oppo/thumb/109460-6_large.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.OPPO.OPPO4.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="cart-text">
                <strong>{props.product.OPPO.OPPO4.price}</strong>
              </p>
              <a href="/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
