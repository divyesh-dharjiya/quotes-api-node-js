const categoryModel = require('./categoryModel');
const categoryController = {};

categoryController.addCategory = async (req, res) => {
    try {
        const category = new categoryModel(req.body);
        const categoryData = await category.save();
        const response = {
            message: "Category added successfully.",
            _id: categoryData._id
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({message: error});
    }
}

categoryController.getCategories = async (req, res) => {
    try {
        const query = {
            isDeleted: false
        };
        const allCategories = await categoryModel.find(query);
        const response = {
            message: "Success.",
            data: allCategories,
            totalCategory: allCategories.length
        }
        res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({message: error})
    }
};

categoryController.updateCategory = async (req, res) => {
    try {
        const categoryId = await categoryModel.findOne({ _id: req.body.id });
        if (categoryId) {
            const query = {
                categoryName: req.body.categoryName,
                updatedAt: new Date()
            }
            await categoryModel.updateOne({ _id: req.body.id }, query);
            const response = {
                message: "Category updated successfully."
            }
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Category id is not available." });
        }
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

categoryController.deleteCategory = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ _id: req.body.id });
        if (category) {
            const query = {
                isDeleted: true
            };
            await categoryModel.updateOne({ _id: req.body.id }, query);
            const response = {
                message: "Category deleted successfully."
            }
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Category not available." });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: error})
    }
}

module.exports = categoryController;