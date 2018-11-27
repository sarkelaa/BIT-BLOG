import React, { Component } from 'react';
import { fetchAuthor } from './services/authorServices'

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        fetchAuthor().then((myAuthor) => {
            this.setState({
                author: myAuthor
            });
        });
    }
    render() {

        return (

            <div>
                <img className="authorPicture" />
                <h2>`{this.state.author.name}`</h2>
                <p>`username: {this.state.author.username}`</p>
                <p>`email: {this.state.author.email}`</p>
                <p>`phone: {this.state.author.phone}`</p>
                <hr />
                <h2>Address</h2>
                <p>`street: {this.state.author.street}`</p>
                <p>`city: {this.state.author.city}`</p>
                <p>`zipcode: {this.state.author.zipcode}`</p>
                <img className="imageOfAuthorLocation" />
                <hr />
                <h2>Company</h2>
                <p>`name: {this.state.author.company}`</p>
                <p>`slogan: {}`</p>
            </div >
        )
    }


}


export { AuthorDetails }