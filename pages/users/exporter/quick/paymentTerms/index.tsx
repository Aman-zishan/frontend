import ApplicationLayout from "@components/layouts/new_application_layout";
import BottomBar from "@components/newApplicationBottom";
import React from "react";

function Index() {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("No");
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn(e.currentTarget.value);
  const [selectedRadioBtn1, setSelectedRadioBtn1] = React.useState("No");
  const handleRadioClick1 = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn1(e.currentTarget.value);
  const [selectedRadioBtn2, setSelectedRadioBtn2] = React.useState("No");
  const handleRadioClick2 = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioBtn2(e.currentTarget.value);
  return (
    <ApplicationLayout>
      <div className="ptContainer">
        <div className="ptItemsContainer">
          <div className="ptDetails">
            <div className="maintitle">DETAILS</div>
            <div className="radioBack">
              <span>Have payment terms already been concluded?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    name="ptConcludeRadio"
                    value="Yes"
                    // onChange={}
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="ptConcludeRadio"
                    value="No"
                    // onChange={}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
            <div className="radioBack">
              <span>Would you accept a partial refinancing?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    name="ptRefinancingRadio"
                    value="Yes"
                    // onChange={}
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="ptRefinancingRadio"
                    value="No"
                    // onChange={}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="vLine"></div>
          <div className="ptInterest">
            <div className="maintitle">INTEREST</div>
            <div className="radioBack">
              <span>
                Are you charging your importer interest/have you agreed a
                premium for extended payment terms?
              </span>
              <div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumRadio"
                    value="Yes"
                    onChange={handleRadioClick}
                  />
                  <label>YES</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumRadio"
                    value="No"
                    onChange={handleRadioClick}
                  />
                  <label>NO</label>
                </div>
              </div>
              {selectedRadioBtn == "Yes" ? (
                <>
                  <div className="inputContainer">
                    <span>
                      Which currency is the interest/premium charged in?
                    </span>
                    <select name="" id="" className="inputs">
                      <option value="">Select currency</option>
                      <option value="">INR</option>
                    </select>
                  </div>
                  <div className="inputContainer">
                    <span>
                      What is the total value of the interest/premium?
                    </span>
                    <input
                      type="text"
                      id="percentage"
                      placeholder="Percentage..."
                      className="inputs"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="radioBack">
              <span>Is the interest rate/premium fixed?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumFixedRadio"
                    value="Yes"
                    onChange={handleRadioClick1}
                  />
                  <label>YES</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumFixedRadio"
                    value="No"
                    onChange={handleRadioClick1}
                  />
                  <label>NO</label>
                </div>
              </div>
              {selectedRadioBtn1 == "Yes" ? (
                <div className="inputContainer">
                  <span>Fixed interest rate value</span>
                  <input
                    type="text"
                    className="inputs"
                    id="percentage"
                    placeholder="Percentage..."
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="radioBack">
              <span>Is the interest rate/premium degressive?</span>
              <div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumDegressiveRadio"
                    value="Yes"
                    onChange={handleRadioClick2}
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="ptPremiumDegressiveRadio"
                    value="No"
                    onChange={handleRadioClick2}
                  />
                  <label>No</label>
                </div>
              </div>
              {selectedRadioBtn2 == "Yes" ? (
                <div className="inputContainer">
                  <span>Degressiv interest rate description</span>
                  <input
                    type="text"
                    className="inputs"
                    placeholder="Description..."
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="vLine"></div>
          <div className="ptVID">
            <div className="maintitle">PAYMENT TYPE</div>
            <div className="radioBack">
              <span>
                What is the payment type agreed upon for this transaction?
                (Short, Medium, or Short-Medium)
              </span>
              <div></div>
              <div className="inputContainer">
                <span>Payment Type</span>
                <select name="" className="inputs" id="">
                  <option value="">Payment type...</option>
                </select>
              </div>
            </div>
            <div className="inputContainer">
              <span>Payment Duration</span>
              <input
                type="text"
                className="inputs"
                placeholder="Payment duration..."
              />
            </div>
          </div>
        </div>
      </div>
      <BottomBar></BottomBar>
    </ApplicationLayout>
  );
}

export default Index;
