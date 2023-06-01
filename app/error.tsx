'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Disini ada error</h1>
      <button className="bg-blue-300 p-4">Coba Ulang</button>
    </div>
  );
}
