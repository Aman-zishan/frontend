import NewLayoutNM from "@components/layouts/testLayoutNoMenue";
import {
  ApplicationTable,
  ReceiptTable,
} from "@taraldefi/tariala-component-library";
import { ArrowLeft } from "react-feather";

import Layout from "@components/layouts/layout";
import { ReceiptTableData } from "bin/mockData";
import Topbar from "@components/topBar";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Topbar></Topbar>

      <div
        onClick={() => {
          router.back();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "3% 10%",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <ArrowLeft size={"40px"} color="#65768D"></ArrowLeft>
        <h1>Receipts</h1>
      </div>

      <div
        style={{
          width: "100%",
          padding: "1% 10%",
          overflow: "auto",
          maxHeight: "600px",
        }}
      >
        <ReceiptTable receiptTableData={ReceiptTableData} />
      </div>
    </div>
  );
}

export default Index;
