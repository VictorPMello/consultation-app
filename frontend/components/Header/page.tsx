import Image from 'next/image';
import Menu from '../Menu/page';

const Header = () => {
  const login: string | undefined = undefined;

  return (
    <header>
      <section>
        <Image
          src={login ? '' : ''}
          alt='Logo'
          width={50}
          height={50}
          className='bg-white'
        />
        <h1>{login ? 'Bem vindo, ' + login : 'Bem vindo'}</h1>
      </section>

      <section>
        <Menu />
      </section>
    </header>
  );
};

export default Header;
