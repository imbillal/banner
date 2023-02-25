import React from "react";
import {Tabs} from "antd";
import RenderIcon from "../RenderIcon";

function Tab({path, value, options}) {
    const handleChange = (value) => {};

    return (
        <>
            <Tabs
                onChange={handleChange}
                defaultActiveKey="1"
                style={{height: 220}}
                items={options.map((opts, i) => {
                    return {
                        label: <RenderIcon icon={opts.icon} />,
                        key: opts.value,
                    };
                })}
            >
                <Tabs.TabPane>fdsafsa</Tabs.TabPane>
                <Tabs.TabPane>fdsafsa</Tabs.TabPane>
            </Tabs>
        </>
    );
}

export default Tab;
