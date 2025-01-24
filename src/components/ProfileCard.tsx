const ProfileCard = () => {
  return (
    <div className="flex w-[17rem] flex-col items-center justify-center rounded-3xl bg-white/50 p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:h-[32rem] lg:w-[22rem] lg:rotate-2">
      <div className="rounded-3xl pt-6 md:pt-10">
        <img
          src="/assets/dev-oh profile.png"
          alt="Ohjanghoon"
          className="h-52 w-full lg:h-72"
        />
      </div>
      {/* 이름 */}
      <h2 className="my-2 hidden text-xl font-semibold text-gray-800 lg:block">
        오장훈
      </h2>
      {/* 직책 */}
      <p className="hidden text-sm text-gray-600 lg:block">
        Frontend Developer
      </p>
      {/* 추가 정보 */}
      <div className="mt-4 w-full rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
        <p>
          <span className="hidden lg:inline">E-mail:</span>
          <span className="tracking-wider">ojh9502@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
