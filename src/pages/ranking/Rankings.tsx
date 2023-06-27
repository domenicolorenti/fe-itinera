import React, { useEffect, useState } from 'react'
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';
import RankingCard from './RankingCard';


interface Vote {
  email: string,
  vote: number
};

const Rankings = () => {

  const api = new APIManager();


  const [votes, setVotes] = useState<Vote[]>([]);

  const sortList = (list: Record<string, number>): void => {
    const emailArray = Object.entries(list);

    emailArray.sort((a, b) => b[1] - a[1]);

    const emailList: Vote[] = [];

    emailArray.forEach(([email, vote]) => {
      const voteObj: Vote = {
        email,
        vote,
      };
      emailList.push(voteObj);
    });

    setVotes(emailList);
  };


  useEffect(() => {

    api.get(APIConfig.RANKINGADDRESS, "/getAllVotes/")
      .then((res) => res.json())
      .then((result) => sortList(result['votes']),
        (error) => console.log("Error", error));
  }, []);


  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col my-24 w-3/4 ">
        <h1 className="text-4xl border-b">Ranking</h1>
        <div className="flex flex-col my-6 space-y-6">
          {(
            <>
              {votes?.map((item, val) => (
                <RankingCard
                  key={val}
                  item={item}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Rankings