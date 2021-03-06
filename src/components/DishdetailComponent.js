import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
        const comment = comments.map((comment) => 
            <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>--{comment.author}, {comment.date}</li>
            </div>
        );
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className = "list-unstyled">{comment}</ul>
                </div>
            );
        }

    render() {

        if (this.props.selectedDish != null)
        return(
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.selectedDish.comments)}
                  </div>
           </div>
        );
         else
            return(
                <div></div>
            );
        }
 }

export default DishDetail;