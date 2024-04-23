import React from "react";
import "../cssFiles/styles.css"; // Make sure the path is correct

class ProductTile extends React.Component {
  handleUpdate = () => {
    // Call the handleUpdate function passed from the parent component
    this.props.onUpdate(this.props.product._id);
  };

  handleDelete = () => {
    // Call the handleDelete function passed from the parent component
    this.props.onDelete(this.props.product._id);
  };

  render() {
    const { product } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={product.imageUrl} alt="Product" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title product-title">{product.productName}</p>

          <div className="price">
            {product.price}
            <br />
          </div>
          <button className="button is-primary" onClick={this.handleUpdate}>
            Update
          </button>
          <button className="button is-danger" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ProductTile;
