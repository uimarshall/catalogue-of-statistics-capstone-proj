import React from 'react';
import { connect } from 'react-redux';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import UserInfoItems from './UserInfoItems';
import '../assets/css/UserInfo.css'

const UserInfo = ({ githubuser }) => {
  const {
    public_repos, followers, following, public_gists,
  } = githubuser;

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

const mapStateToProps = state => ({
  githubuser: state.githubuser,

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
