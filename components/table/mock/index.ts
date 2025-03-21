import { faker } from "@faker-js/faker";
import { BlogItemSchemaType } from "../schema/blog-item-schema";

export const generateFakeBlogItems = async (count: number = 10): Promise<BlogItemSchemaType[]> => {
    return Array.from({ length: count }, () => ({
        image: faker.image.dataUri({ width: 300, height: 300 }),
        blogTitle: faker.lorem.sentence(),
        author: faker.person.fullName(),
        engagement: faker.number.int({ min: 0, max: 1000 }).toString(),
        date: faker.date.past({ years: 2 }).toISOString(),
    }));
};
