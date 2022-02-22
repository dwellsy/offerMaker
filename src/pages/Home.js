import React, { useEffect, useState } from "react"
import { PDFViewer } from "@react-pdf/renderer"
import { ConstrainedBox } from "../atoms/containers/ConstrainedBox"
import { Spacer } from "../atoms/Spacer"
import DataInput from "../templates/dataInput/DataInput"
import { OfferDocument } from "../templates/dataInput/PDFOutput"
import { testNoEmptyKeysInJSON } from "../functions/testNoEmptyKeys"

const user = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
  postCode: "",
  title: "",
  salary: "",
  stockOptions: "",
  startDate: "",
  supervisor: "",
  supervisorTitle: "",
}

const Home = () => {
  const [data, setData] = useState(user)
  const [ showViewer, setShowViewer ] = useState(true)

  useEffect(() => {
    if(process.env.NODE_ENV === "test")
      setShowViewer(false);
    else 
      setShowViewer(testNoEmptyKeysInJSON(data))
  }, [data])


  return (
    <ConstrainedBox>
      <h1>OfferMaker</h1>
      <p>All values are required</p>
      <DataInput data={data} onChange={(v) => setData(v)} />

      <Spacer height="1em" />
      <hr />
      <Spacer height="1em" />

      {showViewer === true && (
        <PDFViewer
          style={{ width: "100%", minHeight: "800px", height: "100%" }}
          data={data}
        >
          <OfferDocument data={data} />
        </PDFViewer>
      )}
    </ConstrainedBox>
  )
}

export default Home
