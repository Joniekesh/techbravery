import Value from "../models/Value.js";
import createError from "../utils/createError.js";

// Create Value (Admin) Only
export const createValue = async (req, res, next) => {
  const newValue = new Value(req.body);

  if (!req.body.title || !req.body.desc || !req.body.img) {
    return next(createError(400, "All input fields are required!"));
  }

  if (req.body.title.length > 100) {
    return next(
      createError(400, "Title should not be more than 100 characters.")
    );
  }

  try {
    const value = await Value.findOne({ title: req.body.title });

    if (value) {
      return next(
        createError(400, `A value with title: ${value.title} already exist!`)
      );
    }

    const savedValue = await newValue.save();
    res.status(201).json(savedValue);
  } catch (err) {
    next(err);
  }
};

// Update Value (Admin) only
export const updateValue = async (req, res, next) => {
  try {
    const updatedValue = await Value.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (updatedValue) {
      return res.status(200).json(updatedValue);
    }
  } catch (err) {
    next(err);
  }
};

// Get Values
export const getValues = async (req, res, next) => {
  try {
    const values = await Value.find();

    if (values.length > 0) {
      return res.status(200).json(values);
    } else {
      next(createError(404, "Values not found!"));
    }
  } catch (err) {
    next(err);
  }
};

// Get Value
export const getValue = async (req, res, next) => {
  try {
    const value = await Value.findById(req.params.id);

    if (value) {
      return res.status(200).json(value);
    } else {
      next(createError(404, "Value not found!"));
    }
  } catch (err) {
    next(err);
  }
};

// Delete Value (Admin) Only
export const deleteValue = async (req, res, next) => {
  try {
    const deletedValue = await Value.findByIdAndDelete(req.params.id);

    if (deletedValue) {
      return res.status(200).json("Value deleted.");
    }
  } catch (err) {
    next(err);
  }
};
