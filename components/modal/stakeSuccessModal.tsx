import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AppContext from "@components/appContext";
import { Button } from "@icodex-az/tariala-component-library";
import { globalState } from "types/global";

type Props = {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function StakeSuccessModal({ modal, setModal }: Props) {
  const myContext = useContext<globalState>(AppContext);
  return (
    <div className={"lockSuccessModal " + (modal && "active")}>
      {modal && (
        <div className="modalMenue">
          <div
            onClick={() => {
              myContext.setStakeSuccessModal(!myContext.stakeSuccessModal);
            }}
            className="close"
          >
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </div>

          <div className="form">
            <div className="lock-success-modal">
              <div className="main-title">Stake Success!</div>
              <div className="sub-title">
                Successfully broadcasted transaction!
              </div>
              <div className="status">STATUS: PENDING</div>
              <div className="button-container">
                <Button
                  label={"View Transaction"}
                  onClick={() => {
                    myContext.setLockSuccessModal(!myContext.lockSuccessModal);
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StakeSuccessModal;
