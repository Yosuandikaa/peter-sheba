// pages/api/wishes.js
// import dbConnect from '../../utils/dbConnect';
// import Wish from '../../models/Wish';

import Wish from "../../models/wishSchema";
import dbConnect from '../../utils/dbConnect';


export default async function handler(req, res) {
  await dbConnect();


  if (req.method === 'POST') {
    const { name, message } = req.body;

    try {
      const newWish = new Wish({ name, message });
      await newWish.save();

      return res.status(201).json({ success: true, data: newWish });
    } catch (error) {
      console.error('Error creating wish:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const wishes = await Wish.find({});
      return res.status(200).json({ success: true, data: wishes });
    } catch (error) {
      console.error('Error fetching wishes:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
