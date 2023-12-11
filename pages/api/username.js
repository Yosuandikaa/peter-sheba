// pages/api/wishes.js
// import dbConnect from '../../utils/dbConnect';
// import Wish from '../../models/Wish';

// import Wish from "../../models/wishSchema";
import Username from '../../models/linkSchema';
import dbConnect from '../../utils/dbConnect';


export default async function handle(req, res) {
  await dbConnect();


  if (req.method === 'POST') {
    const { name } = req.body;

    try {
      const newLink = new Username({ name });
      await newLink.save();

      return res.status(201).json({ success: true, data: newLink });
    } catch (error) {
      console.error('Error creating wish:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const userLink = await Username.find({});
      return res.status(200).json({ success: true, data: userLink });
    } catch (error) {
      console.error('Error fetching wishes:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
