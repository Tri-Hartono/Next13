'use client';
import React, { useState } from 'react';
import SectionResult from './sectionResult';

export default function Search() {
  const [query, setQuery] = useState('');
  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div className="py-10 mx-auto ">
      <form action="" onSubmit={onSearch} className=" mx-auto flex gap-4 ">
        <input type="" placeholder="Cari User Github" className="w-5/6 rounded-md bg-zinc-100 p-2" />
        <button className="bg-zinc-800 text-zinc-100 w-1/6 rounded-md p-2">Cari Orang</button>
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
