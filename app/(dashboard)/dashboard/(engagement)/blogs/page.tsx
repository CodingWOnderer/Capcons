import { DataTableSkeleton } from "@/components/table/skeletons/data-table-skeleton";
import React from "react";
import BlogItemTable from "./_components/blog-table";
import { generateFakeBlogItems } from "@/components/table/mock";


const BlogsPage = () => {
    return (
        <div>
            <React.Suspense
                fallback={
                    <DataTableSkeleton
                        columnCount={8}
                        searchableColumnCount={1}
                        filterableColumnCount={2}
                        cellWidths={[
                            "2rem",
                            "12.5rem",
                            "8rem",
                            "8rem",
                            "8rem",
                            "8rem",
                            "8rem",
                            "8rem",
                        ]}
                        shrinkZero
                    />
                }
            >
                <BlogItemTable promise={generateFakeBlogItems(20)} />
            </React.Suspense>
        </div>
    );
};

export default BlogsPage;
