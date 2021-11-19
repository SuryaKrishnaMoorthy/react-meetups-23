import { MongoClient } from 'mongodb';

const handler = (req, res) => {
	if(req.method === 'POST') {
		const data = req.body;
		const {title, image, address, description} = data;
		MongoClient.connect('mongodb+srv://SuryaKrishnaMoorthy:cPHPIZr5Zd4shVg5@cluster0.zo7nb.mongodb.net/meetups?retryWrites=true&w=majority')
		
	};
};

export default handler;