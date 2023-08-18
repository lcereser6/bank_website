import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

export default async function getData(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const result = await query('SELECT * FROM loan_types', []);
    return res.json(result.rows);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}
