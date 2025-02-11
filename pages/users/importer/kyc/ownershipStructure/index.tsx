import { PortalIcons } from "@components/icons";
import KYCLayout from "@components/layouts/kycLayout";
import Layout from "@components/layouts/layout";
import { Button } from "@taraldefi/tariala-component-library";
import React from "react";

function index() {
  return (
    <KYCLayout>
      <div className="kycContainer">
        <div className="outerContainerKyc">
          <div className="innerContainer1">
            <div className="mainTitle">OWNER INFO</div>
            <div className="inputContainer">
              <span>Name</span>
              <input type="text" className="inputs" placeholder="John Smith" />
            </div>
            <div className="inputContainer">
              <span>Ownership</span>
              <input
                type="text"
                className="inputs"
                id="percentage"
                placeholder="22.73"
              />
            </div>
            <div className="splitBox">
              <div className="inputContainer">
                <div className="radioBack">
                  <span>Potilically exposed person?</span>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="kycExposedYes"
                        name="kycRadio"
                        value="Yes"
                      />
                      <label>YES</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="kycExposedNO"
                        name="kycRadio"
                        value="No"
                      />
                      <label>NO</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inputContainer"></div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="innerContainer2">
            <div className="mainTitle">LEGAL INFO</div>
            <div className="inputContainer">
              <span>Sanctions, Investigations or Immunity</span>
              <select name="" className="inputs" id="">
                <option value="">Select legal status...</option>
                <option value=""></option>
              </select>
            </div>
            <div className="inputContainer">
              <span>Imposed by</span>
              <input
                type="text"
                id="greyed"
                className="inputs"
                placeholder="Imposed by..."
              />
            </div>
          </div>
          <div className="vLine"></div>
          <div className="dummyWrapper">
            <div className="mainTitle">ID</div>
            <div className="pdfWrapper">
              <div className="pdfContainer">
                <span>id-john-smith-legal.pdf</span>
                <PortalIcons selected={false} icon={"delete"}></PortalIcons>
              </div>
              <div className="buttonContainer">
                <Button label={"+ Upload New"} onClick={() => null}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </KYCLayout>
  );
}
export default index;
