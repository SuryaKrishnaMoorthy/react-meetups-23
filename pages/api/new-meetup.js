import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	try{
		if(req.method === 'POST') {
			console.log(req);
			const data = JSON.parse(req.body);
	
			const client = await MongoClient.connect('mongodb+srv://SuryaKrishnaMoorthy:oN2lNrSD8XTbfAf6@cluster0.zo7nb.mongodb.net/meetups?retryWrites=true&w=majority')
			const db = client.db();
	
			const meetupsCollection = db.collection('meetups');
	
			const result = await meetupsCollection.insertOne(data);
	
			client.close();
	
			res.status(201).json({message: 'Meetup inserted!'});
			
		};
	} catch(err){
		console.log(err.message);
	}
};

export default handler;