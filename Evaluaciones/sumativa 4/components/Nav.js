import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';


const Nav = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        const success = await login(username, password);
        if (success) {
            router.push('/login');
        }
    };

    const handleLogout = () => {
        // Limpiar los campos de entrada
        setUsername('');
        setPassword('');
        logout();
        router.push('/');
    };

    return (
        <nav className="navi">
            <div className="logo-text" style={{ fontFamily: 'Oswald' }}>
                <ul className="inacap-info">
                    <li>
                        <Image
                            className="inacap"
                            src="/logo_inacap.png"
                            alt="Logo Inacap"
                            width={122}
                            height={30}
                        />
                        <h1 className="inacap-ludi">
                            <Image
                                src="/chess-svgrepo-com.svg"
                                alt="Chess"
                                width={50}
                                height={50}
                            />
                            <u style={{ textDecorationColor: 'rgb(0, 0, 0)' }}>
                                Inacap<span className="g">-</span>
                                <span className="ludi">Ludi</span>
                            </u>
                            <Image
                                src="/chess-svgrepo-com.svg"
                                alt="Chess"
                                width={50}
                                height={50}
                            />
                        </h1>
                    </li>
                </ul>
            </div>

            <div className="get-user-info">
                {!isAuthenticated ? (
                    <div id="form">
                        <label htmlFor="username">Usuario: </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">Contraseña: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={handleLogin}>
                            Ingresar
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            className='btn-logout'
                            type="button"
                            id="disconnect"
                            onClick={handleLogout}
                        >
                            <img src="/off-svgrepo-com.svg" alt="Desconectar" width="20" />
                        </button>
                        <button type="button" id="btn-carrito" className='btn-cart' >
                            <Link href="#carrito">
                                <img
                                    src="/cart-2-svgrepo-com.svg"
                                    alt="Carrito"
                                    width="20"
                                />
                            </Link>
                        </button>
                    </>
                )}
                <div className="contact-about">
                    <button>
                        <Link href={isAuthenticated ? "/login" : "/"}>Inicio</Link>
                    </button>
                    <div>
                        {isAuthenticated && (
                            <Link href="/selectionform">
                                <button>Administrador</button>
                            </Link>
                        )}
                        {!isAuthenticated && (
                            <Link href="/">
                            </Link>
                        )}
                    </div>
                    <div>
                        {isAuthenticated && (
                            <Link href="/buy">
                                <button>Compra</button>
                            </Link>
                        )}
                        {!isAuthenticated && (
                            <Link href="/">
                            </Link>
                        )}
                    </div>
                    <button>
                        <Link href="/about">Acerca de</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;


