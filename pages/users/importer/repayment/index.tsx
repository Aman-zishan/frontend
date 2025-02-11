import Layout from "@components/layouts/layout";
import {
  Button,
  LargeLoanCard,
  SmallLoanCard,
} from "@taraldefi/tariala-component-library";
import { useRouter } from "next/router";

export enum LoanCardTypes {
  INTEREST_RATE = "INTEREST_RATE",
  INTEREST_ACCRUED = "INTEREST_ACCRUED",
  TOTAL_REPAYMENT = "TOTAL_REPAYMENT",
  DUE_DATE = "DUE_DATE",
  LOAN_AMT = "LOAN_AMT",
  OUTSTANDING_AMT = "OUTSTANDING_AMT",
}

function Index() {
  const router = useRouter();
  return (
    <Layout>
      <div className="repaymentContainer">
        <div className="topContainer">
          <div className="titleContainer">
            <span>Welcome Back, John!</span>
            <span>Here’s an overview of your loan details:</span>
          </div>
          <div>
            <Button
              onClick={() => {
                router.push("/users/importer/repayment/receipts");
              }}
              label={"VIEW RECEIPTS"}
            ></Button>
          </div>
        </div>

        <div className="gridContainer">
          <div>
            <LargeLoanCard type={LoanCardTypes.LOAN_AMT} value="15,000.00" />
          </div>
          <div>
            <LargeLoanCard
              type={LoanCardTypes.OUTSTANDING_AMT}
              value="12,345.67"
            />
          </div>
          <div className="repaymentButtonContainer">
            <span>Ready to pay?</span>
            <Button
              onClick={() => {
                router.push("/users/importer/repayment/pay");
              }}
              primary={true}
              backgroundColor="#1AB98B"
              label={"GO TO LOAN PAYMENT"}
            />
          </div>
          <div>
            <SmallLoanCard
              value="12,345.67"
              type={LoanCardTypes.INTEREST_ACCRUED}
            />
          </div>

          <div>
            <SmallLoanCard value="6.5%" type={LoanCardTypes.INTEREST_RATE} />
          </div>

          <div>
            <SmallLoanCard
              value="17,580.23"
              type={LoanCardTypes.TOTAL_REPAYMENT}
            />
          </div>
          <div>
            <SmallLoanCard value="May 20th" type={LoanCardTypes.DUE_DATE} />
          </div>
          <div className="repaymentLogoutContainer">
            <span>
              Remember to log out to keep your account information secure.
            </span>
            <Button label={"LOGOUT"}></Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
