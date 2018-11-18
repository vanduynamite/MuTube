import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../main/user_image';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.userId);
    }
  }

  render() {

    if (!this.props.user) {
      return (<div>
        Please wait while loading
      </div>);
    }

    const userId = this.props.userId;
    const user = this.props.user;

    return (
      <div>
        <UserImage user={user} />
        {`Hello from User Show, you a viewing user #${userId}`}
      </div>
    );
  }

}

export default UserShow;
