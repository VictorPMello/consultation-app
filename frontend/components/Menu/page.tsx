'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Menu = () => {
  const login: string | undefined = undefined;
  const [test, setTest]: [boolean, Function] = useState(false);

  if (test) {
    return (
      <>
        <div>
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

          <span onClick={() => setTest(!test)}>
            <AiOutlineClose />
          </span>
        </div>

        <nav>
          {/* Links de navegação */}
          <ul>
            <li>
              <Link href='?'>Test</Link>
            </li>
            <li>
              <Link href='?'>Test</Link>
            </li>
            <li>
              <Link href='?'>Test</Link>
            </li>
            <li>
              <Link href='?'>Test</Link>
            </li>
          </ul>
        </nav>

        {/* Login */}
        {login ? (
          <div>
            {/* Logado */}
            <Link href='?'>Sair</Link>
          </div>
        ) : (
          <div>
            {/* Não Logado */}
            <Link href='?'>Entrar</Link>
            <Link href='?'>Criar Conta</Link>
          </div>
        )}
      </>
    );
  } else {
    return (
      <span onClick={() => setTest(!test)}>
        <AiOutlineMenu />
      </span>
    );
  }
};

export default Menu;
