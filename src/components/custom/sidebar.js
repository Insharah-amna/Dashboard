import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
	{
		title: "Packing",
		url: "/dashboard/packing",
		icon: Home,
	},
	{
		title: "Shop Stock",
		url: "/dashboard/stock",
		icon: Inbox,
	},
	{
		title: "Emboridery Details",
		url: "/dashboard/embroidery",
		icon: Calendar,
	},
	{
		title: "Reports",
		url: "/dashboard/reports",
		icon: Settings,
	},
	{
		title: "Crinkle Stack",
		url: "/dashboard/crinkle",
		icon: Search,
	},
	{
		title: "Fabric details",
		url: "/dashboard/fabric",
		icon: Search,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
