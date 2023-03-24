import AWS from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ca-central-1',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await s3.getObject({
      Bucket: 'cakestore',
      Key: 'path/to/object'
    }).promise();
    
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
