'use client';
import React, { useState } from 'react';

export default function Calculator() {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);
  return (
    <div className="text-black px-4">
      <form action="" className="space-x-4">
        <input type="text" placeholder="angka1" onChange={(e) => setAngka1(Number(e.target.value))} />
        <input type="text" placeholder="angka2" onChange={(e) => setAngka2(Number(e.target.value))} />
        <button className="bg-blue-300" type="button" onClick={() => setHasil(angka1 * angka2)}>
          Hitung
        </button>
        <p className="text-white">Hasil : {hasil}</p>
      </form>
    </div>
  );
}
