import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { BlogItemSchemaType } from "../schema/blog-item-schema";
import Link from "next/link";

export function getBlogItemColumnDef(): ColumnDef<BlogItemSchemaType>[] {
    return [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            size: 28,
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "blogTitle",
            header: "Blog Title",
            cell: ({ row }) => (
                <div className="flex items-center gap-4">
                    <div className=" relative overflow-clip rounded-md">
                        <Image
                            className=" "
                            src={row.original.image || ""}
                            width={40}
                            height={40}
                            alt={row.getValue("blogTitle")}
                        />
                    </div>
                    <div className=" flex flex-col gap-1">
                        <p className="font-medium max-w-xs truncate">{row.original.blogTitle}</p>
                        <div className="text-sm text-lime-500 font-medium space-x-2">
                            <Link className=" text-lime-500" href="#">Edit</Link> | <Link className=" text-lime-500" href="#">Duplicate</Link> |{" "}
                            <Link href="#" className="text-red-500">
                                Trash
                            </Link>{" "}
                            | <Link className=" text-lime-500" href="#">View</Link> | <Link className=" text-lime-500" href="#">Share</Link> |{" "}
                            <Link className=" text-lime-500" href="#">Copy link</Link>
                        </div>
                    </div>
                </div>
            ),
            size: 200
        },
        {
            accessorKey: "author",
            header: "Author",
            cell: ({ row }) => (
                <span className="text-muted-foreground">{row.original.author}</span>
            ),
        },
        {
            accessorKey: "engagement",
            header: "Engagement",
            cell: ({ row }) => (
                <span className="text-muted-foreground">
                    {row.getValue("engagement")}
                </span>
            ),
        },
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => (
                <span className="text-muted-foreground">{`Published at ${row.original.date}`}</span>
            ),
        },
    ];
}
