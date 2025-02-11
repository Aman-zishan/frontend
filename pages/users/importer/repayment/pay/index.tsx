import Layout from "@components/layouts/layout";
import {
  Button,
  LargeLoanCard,
  SmallLoanCard,
  RepaymentTable,
} from "@taraldefi/tariala-component-library";
import { useRouter } from "next/router";
import { RepaymentTableData } from "bin/mockData";
import RepaymentCard from "@components/widgets/RepaymentCard";

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
      <div className="viewbody">
        <div className="repaymentContainer">
          <div className="topContainer">
            <div className="titleContainer">
              <span>Loan Repayment</span>
              <span>
                Repay your trade finance loan with our USD-pegged stablecoin.
              </span>
            </div>
          </div>

          <div className="repaymentTableAndCardContainer">
            <div className="tableContainer">
              <RepaymentTable
                repaymentTableData={RepaymentTableData}
              ></RepaymentTable>
            </div>
            <div className="cardContainer">
              <RepaymentCard
                onAuthorize={() => {
                  router.push("/users/importer/repayment/successful");
                }}
              ></RepaymentCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
