import React, { Suspense } from 'react';
import RepoList from './sectionResult';

const getDataUsers = async (param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
};

export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUsers = await getDataUsers(params.slug);

  //Jika mau langsung berbarengan muncul datanya
  // const dataRepos = await getDataRepos(params.slug)
  // const [user, repos] = await Promise.all([dataUsers, dataRepos])

  return (
    <div className=" space-y-6 ">
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataUsers)}</div>
      <Suspense fallback={<div> Loading data Repository....</div>}>
        {/*@ts-ignore*/}
        <RepoList slug={params.slug} />
      </Suspense>
    </div>
  );
}
