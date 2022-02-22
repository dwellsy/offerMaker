import React from "react"
import {
  Page,
  Image,
  Text,
  Document,
  StyleSheet,
} from "@react-pdf/renderer"

export const OfferDocument = ({ data }) => (
  <Document style={{ width: "100%" }}>
    <Page style={styles.body}>
      <Image style={styles.image} src="/images/logo.png" fixed/>

      <Text style={styles.text}>{data.firstName || "ReplaceMe"},</Text>
      <Text style={styles.text}>
        Yay! We are super-excited to present the following offer of employment.
        This letter will summarize and confirm the details of our offer for you
        to join Dwellsy, in the position of {data.title || "ReplaceMe"} working remotely in{" "}
        {data.city || "ReplaceMe"}, {data.state || "ReplaceMe"} commencing on {data.startDate || "ReplaceMe"}, and reporting
        to {data.supervisor || "ReplaceMe"}, {data.supervisorTitle || "ReplaceMe"}. In this position, you will
        build and maintain essential software tools and functionality necessary
        for Dwellsy to operate.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.underline}>Orientation Information</Text>: On your
        first day of work, you should plan to connect with {data.supervisor || "ReplaceMe"} for
        details on how to get working.
      </Text>
      <Text style={styles.text}>
        Here are the specific details of our offer:
      </Text>
      <Text style={styles.text}>
        <Text style={styles.underline}>TriNet HR Corporation</Text>: This letter
        and accompanying enclosure will summarize important details of matters
        pertaining to your employment. Also enclosed is information about
        current benefits, which are provided to the workforce here at Dwellsy.
        Our benefits, payroll, and other human resource management services are
        provided through TriNet HR Corporation, a professional employer
        organization. As a result of Dwellsy’s arrangement with TriNet, TriNet
        will be considered your employer of record for these purposes and your
        managers here at Dwellsy will be responsible for directing your work,
        reviewing your performance, setting your schedule, and otherwise
        directing your work at Dwellsy.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.underline}>Base Compensation</Text>: Your base
        compensation will be ${data.salary || "ReplaceMe"}annually, less payroll deductions and
        required taxes and withholdings, and will be paid twice monthly (on or
        about the 15th and last day of the month). This is an exempt position
        and you are expected to work during the core hours of 9am to 5pm Monday
        through Friday as well as those hours necessary to get the job done.
      </Text>

      {/* 
        TODO: Make this work.
        Based on your start date of January 17, 2022, your first opportunity for a 
        review of your compensation will be in January 2023. 
      */}

      {data.stockOptions !== "0" && (
        <Text style={styles.text}>
          <Text style={styles.underline}>Option Compensation</Text>: In addition
          to your base compensation, you will be granted {data.stockOptions || "ReplaceMe"}{" "}
          options in the company.
        </Text>
      )}

      <Text style={styles.text}>
        <Text style={styles.underline}>Benefits</Text>: Dwellsy, through TriNet,
        offers a full range of benefits for you (including four weeks of paid
        time off) and your qualified dependents as outlined in the attached
        Summary of Benefits. A presentation of our benefits program will be
        given to you during your first week of employment. Information about
        these benefits is included with this letter, and additional information
        will be available on-line on the terms and conditions included in the
        Terms and Conditions Agreement (TCA) each new employee must accept in
        order to access TriNet’s on-line self-service portal, TriNet Passport.
      </Text>

      <Text style={styles.text}>
        This offer of employment is contingent upon you fulfilling each of the
        following terms:
      </Text>

      <Text style={styles.text}>
        <Text style={styles.underline}>
          Acknowledgement of Company Handbook and Confidentiality Agreement
        </Text>
        : As a Dwellsy employee, you are required to follow its rules and
        regulations. Therefore you will be asked to acknowledge in writing that
        you have read the Dwellsy employee handbook and you will be asked to
        sign our standard Confidentiality and Invention Assignment Agreement. In
        order to retain necessary flexibility in the administration of its
        policies and procedures, Dwellsy reserves the right to change or revise
        its policies, procedures, and benefits at any time.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.underline}>Required Documentation</Text>: To comply
        with the government-mandated confirmation of employment eligibility,
        please review the enclosed I-9 Form and “Lists of Acceptable Documents”
        as approved by the United States Department of Justice for establishing
        identity and employment eligibility. Please bring the required I-9
        documents with you on your first day of employment.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.underline}>At Will Employment</Text>: Please
        understand, as stated in all job offers, Dwellsy is an
        employment-at-will company. That means that you or the Company may
        terminate your employment at any time, with or without cause and with or
        without prior notice.
      </Text>

      <Text style={styles.text}>
        This offer letter, together with the TCA, forms the complete and
        exclusive agreement as to your employment with Dwellsy. It supersedes
        any other agreements or promises made to you by anyone, whether oral or
        written, regarding your employment with Dwellsy. Changes to the terms of
        this letter require a written modification signed by an authorized
        employee of Dwellsy.
      </Text>

      <Text style={styles.text}>
        If you wish to accept employment at Dwellsy under the terms described
        above, please sign and date this letter and return it. Please
        retain a copy for your records.
      </Text>

      <Text style={styles.text}>
        {data.firstName || "ReplaceMe"}, we are so excited that you are joining Dwellsy’s team!
        We’re going to do amazing things together. If you have any questions,
        please feel free to call me at any time.
      </Text>

      <Text style={styles.text}> </Text>

      <Text style={styles.smallMargin}>
        <Text style={styles.underline}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
      </Text>
      <Text style={styles.smallMargin}>{ data.firstName  || "ReplaceMe"} { data.lastName  || "ReplaceMe"}</Text>

      <Text style={styles.smallMargin}>
        <Text style={styles.underline}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
      </Text>
      <Text style={styles.smallMargin}>Date</Text>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
)

const styles = StyleSheet.create({
  view: {},
  body: {
    paddingTop: 95,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  image: {
    marginVertical: 15,
    width: '40mm',
    position: 'absolute',
    top: 20,
    right: 50,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  author: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Times-Roman",
  },
  text: {
    margin: 12,
    fontSize: 13,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  smallMargin: {
    marginHorizontal: 12,
    marginVertical: 1,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "black",
  },
  underline: {
    textDecoration: "underline",
  },
})

export default OfferDocument
