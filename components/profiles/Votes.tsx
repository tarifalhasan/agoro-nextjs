import VoteCard from "../common/VoteCard";

const Votes = () => {
  const votes = [
    {
      name: "vote",
    },
    {
      name: "vote2",
    },
  ];
  return (
    <div>
      <ul className="max-w-[85%] space-y-7 pt-7 mx-auto">
        {votes.map((vote, index) => (
          <VoteCard key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Votes;
