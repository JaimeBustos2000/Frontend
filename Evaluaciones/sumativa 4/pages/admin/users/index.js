import Link from 'next/link';
import styles from '../../../styles/users.module.css';

export default function Users({ users }) {
    return (
        <div className={styles.users}>
            
            <div className={styles.userbox}>
            <h1>Usuarios</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th className={styles.ths}>Nombre de Usuario</th>
                        <th className={styles.ths} >Contraseña</th>
                        <th className={styles.ths} >Nombre Real</th>
                        <th className={styles.ths} >Email</th>
                        <th className={styles.ths} >Acciones</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className={styles.tds} >{user.username}</td>
                            <td className={styles.tds} >{user.password}</td>
                            <td className={styles.tds} >{user.real_name}</td>
                            <td className={styles.tds} >{user.email}</td>
                            <td className={styles.tds} >
                                <Link href={`/admin/users/${user.id}/edit`}>
                                    <button className={styles.btnedt}>
                                        Editar
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();
    return {
        props: {
            users,
        },
    };
}
