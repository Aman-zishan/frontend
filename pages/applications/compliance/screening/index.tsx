import { PortalIcons } from "@components/icons";
import ComplianceLayout from "@components/layouts/compliance_layout";
import { Button, ScreeningTable } from "@taraldefi/tariala-component-library";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { tableFormScreening } from "types/form";
import TableData from "./data";
function Company() {
  var x: number = Object.keys(TableData).length;
  const [fields, setFields] = useState<tableFormScreening[]>(TableData);
  const { register, handleSubmit, reset } = useForm<tableFormScreening>();
  const onSubmit = handleSubmit((data) => {
    setFields([data!, ...fields]);
    reset();
  });
  return (
    <ComplianceLayout showexport={true}>
      <div className="personsTable">
        <div className="persons">
          <span className="title">ADD NEW</span>
          <form onSubmit={onSubmit} action="" className="complianceAddBox">
            <div className="name">
              <span>Person</span>
              <input
                {...register("persons")}
                placeholder="Name..."
                type="text"
                className="inputs"
              />
            </div>
            <div className="hit">
              <span>Hit</span>
              <input
                {...register("Hit")}
                placeholder="Hit..."
                type="text"
                className="inputs"
              ></input>
            </div>
            <div className="position">
              <span>Source</span>
              <input
                {...register("Source")}
                placeholder="Add link..."
                type="text"
                className="inputs"
              ></input>
            </div>

            <div className="buttonContainer">
              <Button
                primary={true}
                backgroundColor="#1AB98B"
                icon={<PortalIcons selected={false} icon={"add"}></PortalIcons>}
                label="Add"
              ></Button>
            </div>
          </form>
        </div>
      </div>

      <div className="screening--table">
        <span className="title" style={{ fontSize: "13.5px" }}>
          OUTLETS
        </span>
        <br />
        <br />
        <ScreeningTable screeningTableData={fields}></ScreeningTable>
      </div>
    </ComplianceLayout>
  );
}

export default Company;
