import { AppSidebar } from "@/components/app-sidebar"
import FeedbackDialog from "@/components/feedback-dialog";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import UserDropdown from "@/components/user-dropdown";
import { RiScanLine } from "@remixicon/react";
import { headers } from 'next/headers';

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."



const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const headersList = await headers();
    const pathname = headersList.get('x-current-path');

    return (
        <SidebarProvider>
            <AppSidebar pathname={`${pathname}`} />
            <SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger className="-ms-4" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        <RiScanLine size={22} aria-hidden="true" />
                                        <span className="sr-only">Dashboard</span>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Contacts</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex gap-3 ml-auto">
                        <FeedbackDialog />
                        <UserDropdown />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout;