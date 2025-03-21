import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  RiSettings3Line,
  RiLogoutBoxLine,
  RiHomeLine,
  RiBankLine,
  RiTeamLine,
  RiFlagLine,
  RiAppsLine,
  RiArticleLine,
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiBookLine,
  RiBroadcastLine,
  RiCalendarEventLine,
  RiChat1Line,
  RiEditBoxLine,
  RiFileListLine,
  RiSearchLine,
  RiShoppingBagLine,
  RiUserLine,
} from "@remixicon/react";

// This is sample data.
const data = {
  teams: [
    {
      name: "InnovaCraft",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Acme Corp.",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
    {
      name: "Evil Corp.",
      logo: "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345507/logo-01_kp2j8x.png",
    },
  ],
  navMain: [
    {
      title: "Main",
      url: "#",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: RiHomeLine,
          isActive: false,
        },
        {
          title: "Finance",
          url: "/dashboard/finance",
          icon: RiBankLine,
        },
        {
          title: "Members",
          url: "/dashboard/members",
          icon: RiTeamLine,
        },
      ],
    },
    {
      title: "Engagement",
      url: "#",
      items: [
        {
          title: "Challenges",
          url: "/dashboard/challenges",
          icon: RiFlagLine,
          isActive: false,
        },
        {
          title: "Blogs",
          url: "/dashboard/blogs",
          icon: RiArticleLine,
        },
        {
          title: "Posts",
          url: "/dashboard/posts",
          icon: RiEditBoxLine,
        },
        {
          title: "Events",
          url: "/dashboard/events",
          icon: RiCalendarEventLine,
        },
        {
          title: "Courses",
          url: "/dashboard/courses",
          icon: RiBookLine,
        },
        {
          title: "Commerce",
          url: "/dashboard/commerce",
          icon: RiShoppingBagLine,
        },
        {
          title: "Livestream",
          url: "/dashboard/livestream",
          icon: RiBroadcastLine,
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      items: [
        {
          title: "Magic Reach",
          url: "/dashboard/magic-reach",
          icon: RiSearchLine,
          isActive: false,
        },
        {
          title: "Promotion",
          url: "/dashboard/promotion",
          icon: RiBarChartBoxLine,
        },
      ],
    },
    {
      title: "Moderation",
      url: "#",
      items: [
        {
          title: "People",
          url: "/dashboard/people",
          icon: RiUserLine,
          isActive: false,
        },
        {
          title: "Content",
          url: "/dashboard/content",
          icon: RiFileListLine,
        },
        {
          title: "Comments",
          url: "/dashboard/comments",
          icon: RiChat1Line,
        },
      ],
    },
    {
      title: "Manage",
      url: "/manage",
      items: [
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: RiSettings3Line,
          isActive: false,
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
          icon: RiBarChart2Line,
        },
        {
          title: "Category",
          url: "/dashboard/category",
          icon: RiAppsLine,
        },
      ],
    },
  ]
};



export function AppSidebar({ pathname, ...props }: React.ComponentProps<typeof Sidebar> & { pathname: string }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <hr className="border-t border-border mx-2 -mt-px" />
        <SearchForm className="mt-3" />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="uppercase text-muted-foreground/60">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="group/menu-button font-medium gap-3 h-9 rounded-md bg-gradient-to-r hover:bg-transparent hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 [&>svg]:size-auto"
                      isActive={item.url === pathname}
                    >
                      <a href={item.url}>
                        {item.icon && (
                          <item.icon
                            className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                            size={22}
                            aria-hidden="true"
                          />
                        )}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <hr className="border-t border-border mx-2 -mt-px" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="font-medium gap-3 h-9 rounded-md bg-gradient-to-r hover:bg-transparent hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/5 [&>svg]:size-auto">
              <RiLogoutBoxLine
                className="text-muted-foreground/60 group-data-[active=true]/menu-button:text-primary"
                size={22}
                aria-hidden="true"
              />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
