const model = require('./model');

exports.processCallback = async (req, res) => {
    const { payerPhoneNumber, referalCode, payerName, rail, amount, paymentChannel, serviceCode } = req.body;

    try {
        const newData = new model({
            payerPhoneNumber,
            referalCode,
            payerName,
            rail,
            amount,
            paymentChannel,
            serviceCode
        });

        await newData.save();

        console.log('Data saved to MongoDB');

        res.status(200).json({ status: true, message: 'Callback processed and data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ status: false, error: 'Failed to save data' });
    }
};

exports.fetchData =(async (req, res) => {
    try {
        const data = await model.find({});

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

exports.clearData = async (req, res) => {
    try {
        await model.deleteMany({}); 
        console.log('All data cleared from MongoDB');
        res.json({ message: 'All data cleared successfully' });
    } catch (error) {
        console.error('Error clearing data:', error);
        res.status(500).json({ error: 'Failed to clear data' });
    }
};
