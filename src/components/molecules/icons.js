import { shallowRef } from "vue";
//ICONS
import IconDashboard from "@/components/icons/icon-dashboard.vue";
import IconApplications from "@/components/icons/icon-applications.vue";
import IconPages from "@/components/icons/icon-pages.vue";
import IconThemes from "@/components/icons/icon-themes.vue";
import IconSubheaders from "@/components/icons/icon-subheaders.vue";
import IconGeneral from "@/components/icons/icon-general.vue";
import IconBuilder from "@/components/icons/icon-builder.vue";
import IconBootstrap from "@/components/icons/icon-bootstrap.vue";
import IconCustom from "@/components/icons/icon-custom.vue";
import IconForms from "@/components/icons/icon-forms.vue";
import IconKTDatatable from "@/components/icons/icon-ktdatatable.vue";
import IconDatatablesDotNet from "@/components/icons/icon-datatablesdotnet.vue";
import IconFileUpload from "@/components/icons/icon-fileupload.vue";
import IconCards from "@/components/icons/icon-cards.vue";
import IconWidgets from "@/components/icons/icon-widgets.vue";
import IconIcons from "@/components/icons/icon-icons.vue";
import IconCalendar from "@/components/icons/icon-calendar.vue";
import IconCharts from "@/components/icons/icon-charts.vue";
import IconMaps from "@/components/icons/icon-maps.vue";
import IconMiscellaneous from "@/components/icons/icon-miscellaneous.vue";

const icons = shallowRef([
  {
    name: "dashboard",
    component: IconDashboard,
  },
  {
    name: "applications",
    component: IconApplications,
  },
  {
    name: "pages",
    component: IconPages,
  },
  {
    name: "themes",
    component: IconThemes,
  },
  {
    name: "subheaders",
    component: IconSubheaders,
  },
  {
    name: "general",
    component: IconGeneral,
  },
  {
    name: "builder",
    component: IconBuilder,
  },
  {
    name: "bootstrap",
    component: IconBootstrap,
  },
  {
    name: "custom",
    component: IconCustom,
  },
  {
    name: "forms",
    component: IconForms,
  },
  {
    name: "KTDatatable",
    component: IconKTDatatable,
  },
  {
    name: "datatables.net",
    component: IconDatatablesDotNet,
  },
  {
    name: "file upload",
    component: IconFileUpload,
  },
  {
    name: "cards",
    component: IconCards,
  },
  {
    name: "widgets",
    component: IconWidgets,
  },
  {
    name: "icons",
    component: IconIcons,
  },
  {
    name: "calendar",
    component: IconCalendar,
  },
  {
    name: "charts",
    component: IconCharts,
  },
  {
    name: "maps",
    component: IconMaps,
  },
  {
    name: "miscellaneous",
    component: IconMiscellaneous,
  },
]);

export default icons;
