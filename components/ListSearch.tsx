import Image from 'next/image';
import Link from 'next/link';
import { StringLiteralLike } from 'typescript';

interface Props {
  name: string;
  imageUrl: string;
  reposUrl: string;
}
const ListItemSearch = ({ name, imageUrl, reposUrl }: Props) => {
  return (
    <div className="inline-flex w-full space-x-4">
      <Image src={imageUrl} width={50} height={50} alt={'img'} className="rounded-full border-zinc-100" />
      <div>
        <p className="text-lg">
          <Link href={`/search/${name}`}>{name}</Link>
        </p>
        <p className="text-sm hover:text-blue-300 text-zinc-800">
          <Link href={reposUrl}>Lihat Repo</Link>
        </p>
      </div>
    </div>
  );
};
export default ListItemSearch;
