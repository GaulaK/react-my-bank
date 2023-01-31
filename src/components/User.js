import imagePath from "../assets/img/profile-picture.png";

const User = (props) => {
  return (
    <div className="user">
      <p>{props.userName}</p>
      <div>
        <img alt="default character" src={imagePath} />
      </div>
    </div>
  );
};

export default User;
