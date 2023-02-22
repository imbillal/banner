import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
} from "@ant-design/icons";
import Loaing from "./components/Loaing";

const items = {
    route: {
        path: "/",
        name: "hello",
        routes: [
            {
                path: "/app",
                name: "App",
                icon: <SmileFilled />,
                component: {Loaing},
            },
            {
                path: "/admin",
                name: "Admin",
                icon: <CrownFilled />,
                component: "./components/Loainsg",
            },
            {
                name: "ListTableList",
                icon: <TabletFilled />,
                path: "/list",
                component: "./ListTableLists",
            },
            {
                path: "/builder",
                name: "Builder",
                icon: <ChromeFilled />,
                component: "./Builder",
            },
        ],
    },
    location: {
        pathname: "/",
    },
    appList: [
        {
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
            title: "Pro Components",
            desc: "Pro Components",
            url: "https://procomponents.ant.design/",
        },
    ],
};

export default items;
