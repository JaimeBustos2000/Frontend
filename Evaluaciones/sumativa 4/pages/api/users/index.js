import { openDb } from '../../../db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'GET') {
    const { username, password } = req.query;

    if (username && password) {
      try {
        const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Database error', error });
      }
    } else {
      try {
        const users = await db.all('SELECT * FROM users');
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: 'Database error', error });
      }
    }
  } else if (req.method === 'POST') {
    const { id, username, password, real_name, email } = req.body;
    try {
      await db.run('INSERT INTO users (id, username, password, real_name, email) VALUES (?, ?, ?, ?, ?)', [id, username, password, real_name, email]);
      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ message: 'Database error', error });
    }
  }
}
