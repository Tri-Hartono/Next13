import ListItemSearch from '@/components/ListSearch';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  query: string;
}
export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
  var loading = !data && !error;
  console.log(data);

  return (
    <div className=" ">
      <p className="text-lg font-bold py-4">Hasil Pencarian : {query}</p>
      {loading && 'Tunggu Sebentar...'}
      {data && data.items.map((user: any, index: number) => <ListItemSearch key={index} name={user.login} imageUrl={user.avatar_url} reposUrl={user.repos_url} />)}
    </div>
  );
}
