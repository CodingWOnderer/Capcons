"use client"
import { getBlogItemColumnDef } from "@/components/table/column";
import { DataTable } from "@/components/table/data-tables";
import { generateFakeBlogItems } from "@/components/table/mock";
import { BlogItemSchemaType } from "@/components/table/schema/blog-item-schema";
import { useDataTable } from "@/hooks/use-data-table";
import React from "react";

interface BlogItemDataTableProps {
    promise: Promise<Awaited<ReturnType<typeof generateFakeBlogItems>>>;
}

const BlogItemTable = ({ promise }: BlogItemDataTableProps) => {
    const data = React.use(promise);
    const column = getBlogItemColumnDef();
    const { table } = useDataTable<BlogItemSchemaType>({
        data: data,
        columns: column,
    });

    return <DataTable table={table}></DataTable>;
};

export default BlogItemTable;
