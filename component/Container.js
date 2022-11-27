import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import styles from "../styles/Home.module.css";
import { Input, Button, Row, Col, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function Container() {
  const [types, setTypes] = useState(null);
  const { componentRender, buttonRender } = useSelector(
    (state) => state.component
  );

  const handleDrop = useCallback((type) => setTypes(type), []);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.BUTTON, ItemTypes.INPUT],
    drop(_item, monitor) {
      handleDrop(monitor.getItemType());
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  console.log("redux", componentRender);
  console.log("reduxB", buttonRender);

  return (
    <div ref={drop} data-testid="dustbin" className={styles.layout_style}>
      {isActive ? "Release to drop" : "Drag a component here"}
      <div>
        <Row>
          <Col md={6} lg={6} xs={24}>
            {componentRender === "input" && (
              <Form
                name="dynamic_input"
                layout="vertical"
                initialValues={{
                  component: [""],
                }}
              >
                <Form.List name="component">
                  {(fields, { add, remove }) => (
                    <div style={{ marginTop: "2rem" }}>
                      {fields.map((field, index) => (
                        <div key={index}>
                          <Form.Item
                            label="Input"
                            key={field.key}
                            name={[field.name, "input"]}
                          >
                            <div className={styles.input_wrapper}>
                              <Input
                                placeholder="Enter Here"
                                style={{ marginRight: "1rem" }}
                              />
                              <MinusCircleOutlined
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            </div>
                          </Form.Item>
                        </div>
                      ))}
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          width: "100%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Input
                      </Button>
                    </div>
                  )}
                </Form.List>
              </Form>
            )}

            {componentRender === "button" && (
              <Form
                name="dynamic_button"
                layout="vertical"
                initialValues={{
                  componentButton: [""],
                }}
              >
                <Form.List name="componentButton">
                  {(fields, { add, remove }) => (
                    <div style={{ marginTop: "2rem" }}>
                      {fields.map((field, index) => (
                        <div key={index}>
                          <Form.Item
                            label="Button"
                            key={field.key}
                            name={[field.name, "button"]}
                          >
                            <div className={styles.button_wrapper}>
                              <Button
                                type="primary"
                                style={{ marginRight: "2rem" }}
                              >
                                Submit
                              </Button>
                              <MinusCircleOutlined
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            </div>
                          </Form.Item>
                        </div>
                      ))}
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          width: "100%",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add Button
                      </Button>
                    </div>
                  )}
                </Form.List>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
