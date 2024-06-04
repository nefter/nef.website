import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../public/images/logoImage.png';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4">
        <Image src={logoImage} alt="Logo Nef"/>
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
