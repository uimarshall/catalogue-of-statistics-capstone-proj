/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import UserInfoItems from './UserInfoItems';
import '../assets/css/UserInfo.css';
import { getGithubUsers } from '../actions/githubUserAction';

const UserInfo = ({ match }) => {
  const userId = match.params.user;
  const githubUser = useSelector(state => state.githubuser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGithubUsers(userId));
  }, []);
  console.log(githubUser);
  const {
    public_repos, followers, following, public_gists,
  } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];
  return (
    <section className="section">
      <div className="section-center">
        {items && items.map(item => <UserInfoItems key={item.id} {...item} />)}
      </div>
    </section>
  );
};

UserInfo.propTypes = {

  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }),
  }),
};

UserInfo.defaultProps = {
  match: () => {},
};

// const mapStateToProps = state => ({
//   githubuser: state.githubuser,

// });

// const mapDispatchToProps = dispatch => ({
//   getGithubUser: wesbos => {
//     dispatch(getGithubUsers(wesbos));
//   },
// });

// UserInfo.propTypes = {

//   githubuser: PropTypes.instanceOf(Object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
export default UserInfo;
