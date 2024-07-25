import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/userform.module.css';

export default function EditUser() {
    const router = useRouter();
    const { id } = router.query;

    const [user, setUser] = useState({
        username: '',
        password: '',
        real_name: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            fetchUser();
        }
    }, [id]);

    const fetchUser = async () => {
        try {
            const response = await fetch(`/api/users/${id}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                router.push('/admin/users');
            } else {
                console.error('Error updating user:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className={styles.general}>
            <h1 className={styles.editext}>EDITAR USUARIO</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.labels}>
                    <h1>Nombre de usuario: </h1>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={styles.inputs}/>
                </label>
                <label className={styles.labels}>
                    <h1>Contraseña</h1>
                    <input type="text" name="password" value={user.password} onChange={handleChange} className={styles.inputs} />
                </label>
                <label className={styles.labels}>
                    <h1>Nombre real</h1>
                    <input type="text" name="real_name" value={user.real_name} onChange={handleChange} className={styles.inputs} />
                </label>
                <label className={styles.labels}>
                    <h1>Email</h1>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className={styles.inputs} />
                </label>
                <button type="submit" className={styles.updatebtn}>Actualizar Usuario</button>
            </form>
            <button onClick={() => router.back()} className={styles.updatebtn}>Volver</button>
        </div>
    );
}