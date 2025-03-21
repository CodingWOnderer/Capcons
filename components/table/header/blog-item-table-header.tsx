"use client"
import * as React from "react";
import type { Table } from "@tanstack/react-table";
import { CalendarIcon, ListFilter, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator";

interface DataTableToolbarProps<TData>
    extends React.HTMLAttributes<HTMLDivElement> {
    table: Table<TData>;
}

export function BlogItemDataTableToolbar<TData>({
    table,
    className,
    ...props
}: DataTableToolbarProps<TData>) {
    const [date, setDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();
    return (
        <div
            className={cn(
                "flex w-full items-center gap-2 overflow-auto p-1",
                className
            )}
            {...props}
        >
            <div className=" gap-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant={"outline"}
                            className=" text-xs h-8 border-[#F5F5F5]/20 bg-transparent"
                        >
                            <ListFilter /> Filter
                        </Button>
                    </SheetTrigger>
                    <SheetContent className=" bg-transparent p-3 border-none">
                        <div className=" rounded-md bg-neutral-800 h-full p-6 w-full">
                            <ScrollArea className=" h-[calc(100svh-5svh)]">
                                <SheetHeader className=" sr-only">
                                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                                    <SheetDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </SheetDescription>
                                </SheetHeader>


                                <div>
                                    <div className="flex justify-between items-center11">
                                        <div>Filters</div>
                                        <SheetClose>
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Close</span>
                                        </SheetClose>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 py-8">
                                        <div className=" ">
                                            <RadioGroup className=" grid grid-cols-1 gap-6" defaultValue="subscribed">
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="subscribed" id={"subscribed"} />
                                                    <Label htmlFor={"subscribed"}>subscribed</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="pending" id={"pending_approval"} />
                                                    <Label htmlFor={"pending_approval"}>Pending Approval</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="removed" id={"removed_unsubscribed"} />
                                                    <Label htmlFor={"removed_unsubscribed"}>Removed/Unsubscribed</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="moderator" id={"moderator"} />
                                                    <Label htmlFor={"moderator"}>Moderator</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <RadioGroupItem value="invited" id={"invited"} />
                                                    <Label htmlFor={"invited"}>Invited</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        <Separator className=" bg-neutral-400/20" />
                                        <div className=" grid grid-cols-1 gap-4">
                                            <div className=" grid grid-col-2 gap-4">
                                                <Label >Join Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                " justify-start cursor-pointer border border-[#F5F5F5]/30 hover:border-[#F5F5F5]/30 bg-transparent w-full text-left font-normal",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon />
                                                            {date ? format(date, "PPP") : <span>Join date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>

                                            <div className=" grid grid-col-2 gap-4">
                                                <Label>End Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "justify-start cursor-pointer border border-[#F5F5F5]/30 hover:border-[#F5F5F5]/30 bg-transparent w-full text-left font-normal",
                                                                !endDate && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon />
                                                            {endDate ? format(endDate, "PPP") : <span>End date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={endDate}
                                                            onSelect={setEndDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                        <Separator className=" bg-neutral-400/20" />
                                        <div className=" grid grid-col-2 gap-4">
                                            <Label htmlFor={"country"}>Country</Label>

                                        </div>

                                        <div className=" grid grid-col-2 gap-4">
                                            <Label htmlFor={"Interest"}>Interest</Label>
                                            <Select >
                                                <SelectTrigger id="interest" className="border border-[#F5F5F5]/30">
                                                    <SelectValue placeholder="Select Interest" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Product">Product</SelectItem>
                                                    <SelectItem value="Blog">Blog</SelectItem>
                                                    <SelectItem value="Data">Data</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                </div>
                                <SheetFooter className=" absolute inset-x-0 border-white/20  px-4 py-8 bottom-0 z-10">
                                    <div className=" mx-auto grid grid-cols-2 gap-3">
                                        <Button variant={"outline"} className=" bg-transparent rounded-full border-[#C6F806] text-primary">Cancel</Button>
                                        <Button className=" rounded-full">Apply Filter</Button>
                                    </div>
                                </SheetFooter>
                            </ScrollArea>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative border border-[#F5F5F5]/20 rounded-full overflow-clip">
                <Input
                    className="peer ps-9 h-8"
                    placeholder="Search..."
                    type="search"
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Search size={16} strokeWidth={2} />
                </div>
            </div>
        </div>
    );
}
