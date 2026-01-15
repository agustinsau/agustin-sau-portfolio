type ProfilePictureProps = {
  className?: string;
};

const ProfilePicture = ({ className = "" }: ProfilePictureProps) => {
  return (
    <div
      className={`
        relative
        w-64 h-64
        md:w-full md:h-full
        mx-auto
        ${className}
      `}
    >
      <div
        className="
          w-full h-full
          rounded-2xl
          overflow-hidden
          border-2 border-primary/30
        "
      >
        <img
          src="/images/profile.jpg"
          alt="Agustin Sau"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
