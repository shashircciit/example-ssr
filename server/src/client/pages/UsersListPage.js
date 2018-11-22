import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  abc(){
   return <h1>{JSON.stringify(this.props.login)}</h1>;
  }


  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
        <title>{
          `${this.props.login?(this.props.login._id):("test")}`
          // "pkj"
        }
        </title>
      </Helmet>
    );
  }

  render() {
    console.log("",this.props.login);
    //const aa=  this.props.login !==undefined?(<h1> {JSON.stringify(this.props.login)}</h1>):(<h1> </h1>);
    const aa = "Dhondu";
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
        <ul>{this.abc()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users,login:state.login };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
