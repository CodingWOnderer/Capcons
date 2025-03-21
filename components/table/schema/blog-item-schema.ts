import { z } from "zod";

export const BlogItemSchemaType = z.object({
    image: z.string().url().optional(),
    blogTitle: z.string().min(1, "Blog title is required"),
    author: z.string().min(1, "Author is required"),
    engagement: z.string().optional(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
});

export type BlogItemSchemaType = z.infer<typeof BlogItemSchemaType>
