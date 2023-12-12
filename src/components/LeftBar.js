import React, { useState } from "react";
import Field from "./Field";
import fieldsData from "../data/fieldsData.js";

export default function LeftBar() {
    const [active, setActive] = useState(true);
    const fieldsArray = fieldsData.map((field) => {
        return (
            <Field
                key={field.id}
                name={field.name}
                url={field.url}
            />
        );
    });

    return (
        <div className="leftbar--container">
            <div className="leftbar--headers">
                <div className="leftbar--headers--elements" style={{ marginRight: "50px" }}>
                    <p
                        onClick={() => setActive(true)}
                        style={{
                            borderBottom: active ? "1px solid #24a68a" : "none",
                        }}
                    >
                        Frequently used
                    </p>
                </div>
                <p>|</p>
                <div className="leftbar--headers--elements" style={{ marginLeft: "50px" }}>
                <p
                        onClick={() => setActive(false)}
                        style={{
                            borderBottom: !active ? "1px solid #24a68a" : "none",
                        }}
                    >
                        More Fields
                    </p>
                </div>
            </div>
            <div className="fields--container">{fieldsArray}</div>
        </div>
    );
}
