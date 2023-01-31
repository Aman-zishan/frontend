import React, { useState } from "react";
import DashBoardLayout from "@components/layouts/dashboard_layout";
import ResearchLayout from "@components/layouts/rs_layout";
import { Button } from "@icodex-az/tariala-component-library";
import { SentimentsTable } from "@components/widgets/table/sentimentTable";
import { TableData } from "./data";
import { tableFormSentiments } from "types/form";
import { useForm } from "react-hook-form";
import { PortalIcons } from "@components/icons";
function Research() {
  var x: number = Object.keys(TableData).length;
  const [fields, setFields] = useState<tableFormSentiments[]>(TableData);
  const { register, handleSubmit, reset } = useForm<tableFormSentiments>();
  const onSubmit = handleSubmit((data) => {
    setFields([data!, ...fields]);
    reset();
  });
  return (
    <>
      <ResearchLayout showexport={true}>
        <div className="personsTable">
          <div className="persons">
            <span className="title">ADD NEW</span>
            <form onSubmit={onSubmit} action="" className="complianceAddBox">
              <div className="name">
                <span>Person</span>
                <input
                  {...register("person")}
                  placeholder="Name..."
                  type="text"
                  className="inputs"
                />
              </div>
              <div className="hit">
                <span>Hit</span>
                <input
                  {...register("hit")}
                  placeholder="Hit..."
                  type="text"
                  className="inputs"
                ></input>
              </div>
              <div className="position">
                <span>Source</span>
                <input
                  {...register("source")}
                  placeholder="Add link..."
                  type="text"
                  className="inputs"
                ></input>
              </div>

              <div className="buttonContainer">
                <Button
                  primary={true}
                  backgroundColor="#1AB98B"
                  icon={
                    <PortalIcons selected={false} icon={"add"}></PortalIcons>
                  }
                  label="Add"
                ></Button>
              </div>
            </form>
          </div>
        </div>
        <SentimentsTable TableData={fields} value={x} />
      </ResearchLayout>
    </>
  );
}

export default Research;
