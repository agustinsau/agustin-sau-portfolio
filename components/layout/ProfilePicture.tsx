import Image from "next/image";

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
        <Image className="w-full h-full object-cover" src="/images/profile.jpg" alt="Agustin Sau" width={200} height={100} />
      </div>
    </div>
  );
};

export default ProfilePicture;
