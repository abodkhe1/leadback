const Lead = require('../model/leadModel')

const saveLead = async (req, res) => {
    try {
        const addDate = new Date();
        const fullDate = new Date(addDate.getFullYear(), addDate.getMonth(), addDate.getDate()); // Only year, month, and date
        
        const { name, email, number, product } = req.body;
        
        
        const saveLead = new Lead({ name, email, number, product, createdon: fullDate });
        await saveLead.save();
        
        res.status(201).json({ message: 'Lead saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving lead' });
    }
};

const updateLead = async (req, res) => {
    try {
       
        const { name, email, number, product } = req.body;
        const id = req.params.id;
        
        const updatedLead = await Lead.findByIdAndUpdate(
            id, 
            { name, email, number, product }, 
            { new: true, runValidators: true } 
        );

        if (!updatedLead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        res.status(200).json({ message: 'Lead updated successfully', data: updatedLead });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating lead' });
    }
};
const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const findByIdAndOne = await Lead.findById(
            id
        ).populate('product');

        if (!findByIdAndOne) {
            return res.status(404).json({ message: 'Lead not found' });
        }
        res.status(200).json({ message: 'Lead get successfully', data: findByIdAndOne });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error get lead' });
    }
};
const deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);

        // Use findByIdAndDelete to delete the lead by its ID
        const deletedLead = await Lead.findByIdAndDelete(id);

        if (!deletedLead) {
            return res.status(404).json({ message: 'Lead not found, cannot delete' });
        }

        res.status(200).json({ message: 'Lead deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting lead' });
    }
};



const findAll = async (req, res) => {
    try {
        // Find all leads and populate the 'product' field if it's a reference
        const leads = await Lead.find().populate('product');

        if (!leads || leads.length === 0) {
            return res.status(404).json({ message: 'No leads found' });
        }

        res.status(200).json({ message: 'Leads retrieved successfully', data: leads });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving leads' });
    }
};



module.exports = { saveLead, updateLead, findOne, deleteOne, findAll}