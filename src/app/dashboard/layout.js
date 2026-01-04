import { AppSidebar } from "@/components/custom/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="flex flex-col w-full mr-2">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
