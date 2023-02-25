import React from "react";
import {Slider, Row, Col, InputNumber} from "antd";

function Range({path, value: inputValue, onChange, ...rest}) {
    const handleChange = (value) => {
        onChange({path, value: parseInt(value || 0, 10)});
    };

    return (
        <Row>
            <Col span={16}>
                <Slider
                    {...rest}
                    onChange={handleChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                />
            </Col>
            <Col span={8}>
                <InputNumber
                    {...rest}
                    style={{margin: "0 16px"}}
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={({target}) => handleChange(target.value)}
                />
            </Col>
        </Row>
    );
}

export default Range;
