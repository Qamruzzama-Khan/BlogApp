import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true, 
        },
        blogImage: {
            type: String, // cloudinary url
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Blog = mongoose.model("Blog", blogSchema)