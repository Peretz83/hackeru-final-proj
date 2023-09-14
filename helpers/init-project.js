import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import products from "../helpers/starting-products.json" assert {type: "json"};
import categories from "../helpers/starting-categories.json" assert {type: "json"};

const initializProject = async () => {
  const existingCategories = await Category.countDocuments();
  try {
    if (existingCategories === 0) {
      const newCategories = await Category.insertMany(categories);

      const allProducts = products.map((prod) => ({
        ...prod,
        category: newCategories.find(
          (oneCat) => oneCat.name === prod.category
        )._id,
      }));

      await Product.insertMany(allProducts);
      console.log("Database populated with starting data.".bgGreen);
    } else {
      console.log("Starting data already exists in the database.".bgYellow);
    }
  } catch (error) {
    console.error("Error populating database:", error);
  }
};

initializProject();