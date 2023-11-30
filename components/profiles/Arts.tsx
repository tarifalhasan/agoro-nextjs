const Arts = () => {
  const arts = [
    {
      image: "/images/2.png",
    },
    {
      image: "/images/3.png",
    },
    {
      image: "/images/4.png",
    },
  ];
  return (
    <div>
      <ul className="max-w-[85%] space-y-7 pt-7 mx-auto">
        {arts.map((data, i) => (
          <li key={i}>
            <div
              style={{
                background: `url(${data.image}), lightgray 50%`,
              }}
              className=" w-full m-0 p-0 !bg-contain relative !bg-top !bg-no-repeat  !max-w-full block !mx-auto pb-[113%] "
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arts;
