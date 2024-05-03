interface sideberItemTo {
  name: string;
}

interface SidebarItem {
  header?: string;
  group?: string;
  title?: string;
  icon?: string;
  model?: boolean;
  children?: SidebarItem[];
  to?: string | sideberItemTo;
}

const items: SidebarItem[] = [
  { header: "Home" },
  {
    title: "Analytical",
    icon: "pie-chart",
    to: "/dashboards/analytical",
  },
  {
    header: "Apps",
  },
  {
    title: "Chat",
    icon: "message-square",
    to: "/apps/chat",
  },
  {
    title: "Estados de negociación",
    icon: "disc",
    to: { name: "NegotiationStatuses" },
  },
  {
    title: "Catálogos",
    icon: "disc",
    to: { name: "CloudStorageLinks" },
  },
  {
    title: "Audios",
    icon: "disc",
    to: { name: "CloudStorageLinksAudios" },
  },
  {
    title: "Cerrar sesión",
    icon: "log-in",
  },
];

export default items;
