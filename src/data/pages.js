const pages = [
  {
    id: 0,
    label: "My Account",
    isCollapsible: false,
    isLink: true,
    bulletType: null,
    url: null,
    hasNotification: false,
    items: [],
  },
  {
    id: 1,
    label: "task manager",
    isCollapsible: false,
    isLink: true,
    bulletType: null,
    url: null,
    hasNotification: true,
    items: [],
  },
  {
    id: 2,
    label: "team manager",
    isCollapsible: true,
    isLink: false,
    bulletType: null,
    url: null,
    hasNotification: false,
    items: [
      {
        id: 0,
        label: "add team member",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 1,
        label: "edit team member",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 2,
        label: "delete team member",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 3,
        label: "team member reports",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 4,
        label: "assign tasks",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 5,
        label: "promote team member",
        isCollapsible: false,
        isLink: true,
        bulletType: "dot",
        hasNotification: false,
        url: null,
        items: [],
      },
    ],
  },
  {
    id: 3,
    label: "projects manager",
    isCollapsible: true,
    isLink: false,
    bulletType: null,
    url: null,
    hasNotification: false,
    items: [
      {
        id: 0,
        label: "latest projects",
        isCollapsible: false,
        isLink: true,
        bulletType: "dash",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 1,
        label: "ongoing projects",
        isCollapsible: false,
        isLink: true,
        bulletType: "dash",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 2,
        label: "urgent projects",
        isCollapsible: false,
        isLink: true,
        bulletType: "dash",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 3,
        label: "completed projects",
        isCollapsible: false,
        isLink: true,
        bulletType: "dash",
        hasNotification: false,
        url: null,
        items: [],
      },
      {
        id: 4,
        label: "dropped projects",
        isCollapsible: false,
        isLink: true,
        bulletType: "dash",
        hasNotification: false,
        url: null,
        items: [],
      },
    ],
  },
  {
    id: 4,
    label: "create new project",
    isCollapsible: false,
    isLink: true,
    bulletType: null,
    url: null,
    hasNotification: false,
    items: [],
  },
];

export default pages;