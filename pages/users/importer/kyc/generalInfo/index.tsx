import { PortalIcons } from "@components/icons";
import KYCLayout from "@components/layouts/kycLayout";
import Layout from "@components/layouts/layout";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@taraldefi/tariala-component-library";
import React, { useEffect, useRef, useState } from "react";

function Index() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<String>();
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);
  type FormValues = {
    branch: {
      nationality: string;
      headquaters: string;
    }[];
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      branch: [{ nationality: "American", headquaters: "New York" }],
    },
    mode: "onBlur",
  });
  const { fields, append, remove } = useFieldArray({
    name: "branch",
    control,
  });

  return (
    <KYCLayout>
      <div className="kycContainer">
        <div className="genInfo">
          <div className="infoWrapper">
            <div className="mainTitle">INFO</div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Nationality</span>
                <select className="inputs" name="" id="">
                  <option value="">German</option>
                </select>
              </div>
              <div className="inputContainer">
                <span>Headquarters Location</span>
                <select className="inputs" name="" id="">
                  <option value="">German</option>
                </select>
              </div>
            </div>
            <div className="inputContainer">
              <span>Industry Type</span>
              <select name="" className="inputs" id="">
                <option value="">Information Technology</option>
              </select>
            </div>
            <div className="inputContainer">
              <span>Core Business</span>
              <select name="" className="inputs" id="">
                <option value="">Software Development</option>
              </select>
            </div>
            <div className="inputContainer">
              <span>Nature of Business</span>
              <textarea
                ref={textareaRef}
                onChange={textAreaChange}
                name=""
                rows={4}
                cols={40}
                className="inputs"
                id=""
                placeholder="Software development refers to the design, documentation, programming, testing, and ongoing maintenance of a software deliverable."
              ></textarea>
            </div>
            <div className="splitBox">
              <div className="inputContainer">
                <span>Incorporation Date</span>
                <input type="date" className="inputs" id="calendar" />
              </div>
              <div className="inputContainer">
                <span>Legal Form</span>
                <select name="" className="inputs" id="">
                  <option value="">Limited</option>
                </select>
              </div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="branchWrapper">
            <div className="mainTitle">BRANCHES</div>
            <div className="allWrapper">
              <div>
                {fields.map((field, index) => {
                  return (
                    <div id={field.id} key={index} className="splitBox">
                      <div className="inputContainer">
                        <span>Nationality</span>
                        <select
                          {...register(`branch.${index}.nationality` as const, {
                            required: true,
                          })}
                          className="inputs"
                          name=""
                          id=""
                        >
                          <option value="">Switzerland</option>
                        </select>
                      </div>
                      <div className="inputContainer">
                        <span>Headquarters Location</span>
                        <div className="specialWrapper">
                          <select
                            {...register(
                              `branch.${index}.headquaters` as const,
                              {
                                required: true,
                              }
                            )}
                            className="inputs"
                            name=""
                            id=""
                          >
                            <option value="">Berlin</option>
                          </select>
                          <div onClick={() => remove(index)}>
                            <PortalIcons
                              selected={false}
                              icon={"delete"}
                            ></PortalIcons>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="buttonContainer">
                <Button
                  label={"+ New Branch"}
                  onClick={() =>
                    append({
                      nationality: "",
                      headquaters: "",
                    })
                  }
                ></Button>
              </div>
            </div>
          </div>
          <div className="dummyWrapper"></div>
        </div>
      </div>
    </KYCLayout>
  );
}

export default Index;
