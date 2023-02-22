import {LogoutOutlined} from "@ant-design/icons";
import {
    PageContainer,
    ProConfigProvider,
    ProLayout,
} from "@ant-design/pro-components";
import {Dropdown} from "antd";
import React, {useState} from "react";
import defaultProps from "./_defaultProps";

const settings = {
    fixSiderbar: true,
    layout: "mix",
    splitMenus: false,
    navTheme: "light",
    contentWidth: "Fluid",
    colorPrimary: "#1677FF",
    siderMenuType: "sub",
    footerRender: false,
    menuHeaderRender: false,
    fixedHeader: false,
};
const AppComp = ({children}) => {
    const [pathname, setPathname] = useState("");
    return (
        <div
            style={{
                height: "100vh",
            }}
        >
            <ProConfigProvider hashed={false}>
                <ProLayout
                    prefixCls="dorik_banner"
                    {...defaultProps}
                    location={{
                        pathname,
                    }}
                    contentStyle={{background: " #dedede"}}
                    avatarProps={{
                        src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
                        size: "small",
                        title: "Title",
                        render: (props, dom) => {
                            return (
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: "logout",
                                                icon: <LogoutOutlined />,
                                                label: "logout",
                                            },
                                        ],
                                    }}
                                >
                                    {dom}
                                </Dropdown>
                            );
                        },
                    }}
                    actionsRender={(props) => {
                        return [];
                    }}
                    headerTitleRender={(logo, title, _) => {
                        const defaultDom = (
                            <a>
                                {logo}
                                Dorik
                            </a>
                        );
                        if (document.body.clientWidth < 1400) {
                            return defaultDom;
                        }
                        if (_.isMobile) return defaultDom;
                        return <>{defaultDom}</>;
                    }}
                    menuFooterRender={(props) => {
                        if (props?.collapsed) return undefined;
                        return (
                            <div
                                style={{
                                    textAlign: "center",
                                    paddingBlockStart: 12,
                                }}
                            >
                                <div>Dorik</div>
                            </div>
                        );
                    }}
                    onMenuHeaderClick={(e) => console.log(e)}
                    menuItemRender={(item, dom) => {
                        return (
                            <div
                                onClick={() => {
                                    console.log(item.path);
                                }}
                            >
                                {dom}
                            </div>
                        );
                    }}
                    {...settings}
                >
                    <PageContainer
                        token={{
                            paddingInlinePageContainerContent: 40,
                        }}
                    >
                        {children}
                    </PageContainer>
                </ProLayout>
            </ProConfigProvider>
        </div>
    );
};

export default AppComp;
