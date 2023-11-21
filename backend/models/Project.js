import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    features: [
      {
        icon: {
          type: String,
        },
        title: {
          type: String,
        },
        desc: {
          type: String,
        },
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
