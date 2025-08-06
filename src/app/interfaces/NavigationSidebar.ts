export interface NavigationSidebar {
    id: number,
    title: string;
    items: NavifationSidebarItem[];
}

interface NavifationSidebarItem {
    icon: string,
    text: string,
    route?: string;
}