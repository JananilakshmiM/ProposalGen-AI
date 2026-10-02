import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";
import "../styles/dashboard.css";
import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

function ProposalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [asking, setAsking] = useState(false);
  const [email, setEmail] = useState("");

  const [roadmap, setRoadmap] = useState("");
  const [loadingRoadmap, setLoadingRoadmap] = useState(false);

  const [survey, setSurvey] = useState("");
  const [loadingSurvey, setLoadingSurvey] = useState(false);

  const [estimate, setEstimate] = useState("");
  const [loadingEstimate, setLoadingEstimate] = useState(false);

  const [report, setReport] = useState("");
  const [loadingReport, setLoadingReport] = useState(false);

  const [riskAnalysis, setRiskAnalysis] = useState("");
  const [loadingRisk, setLoadingRisk] = useState(false);

  const [speech, setSpeech] = useState("");
  const [loadingSpeech, setLoadingSpeech] = useState(false);

  const [starterCode, setStarterCode] = useState("");
  const [loadingCode, setLoadingCode] = useState(false);

  const [evaluation, setEvaluation] = useState("");
  const [loadingEvaluation, setLoadingEvaluation] = useState(false);

  const [timeline, setTimeline] = useState("");
  const [loadingTimeline, setLoadingTimeline] = useState(false);

  const [diagrams, setDiagrams] = useState("");
  const [loadingDiagrams, setLoadingDiagrams] = useState(false);

  const [swot, setSwot] = useState("");
  const [loadingSWOT, setLoadingSWOT] = useState(false);

  const [apiDocs, setApiDocs] = useState("");
  const [loadingApiDocs, setLoadingApiDocs] = useState(false);

  const [testCases, setTestCases] = useState("");
  const [loadingTestCases, setLoadingTestCases] = useState(false);

  const [databaseSchema, setDatabaseSchema] = useState("");
  const [loadingDatabase, setLoadingDatabase] = useState(false);

  const [uml, setUml] = useState("");
  const [loadingUML, setLoadingUML] = useState(false);

  const [milestones, setMilestones] = useState("");
  const [loadingMilestones, setLoadingMilestones] = useState(false);

  const [techStack, setTechStack] = useState("");
  const [loadingTechStack, setLoadingTechStack] = useState(false);

  const [skills, setSkills] = useState("");
  const [loadingSkills, setLoadingSkills] = useState(false);

  const [budget, setBudget] = useState("");
  const [loadingBudget, setLoadingBudget] = useState(false);

  const [deploymentGuide, setDeploymentGuide] = useState("");
  const [loadingDeployment, setLoadingDeployment] = useState(false);

  const [viva, setViva] = useState("");
  const [loadingViva, setLoadingViva] = useState(false);

  const [review, setReview] = useState("");
  const [loadingReview, setLoadingReview] = useState(false);

  const [readiness, setReadiness] = useState("");
  const [loadingReadiness, setLoadingReadiness] = useState(false);

  const [titles, setTitles] = useState("");
  const [loadingTitles, setLoadingTitles] = useState(false);

  const [marketAnalysis, setMarketAnalysis] = useState("");
  const [loadingMarket, setLoadingMarket] = useState(false);


  useEffect(() => {
    getProposal();
  }, []);

  <div className="markdown-content">
    <ReactMarkdown>
        {proposal.proposal.content}
    </ReactMarkdown>
</div>

  const shareByEmail = async () => {

    try {

        const token = localStorage.getItem("token");

        await axios.post(
            `http://localhost:5000/api/proposals/share/${id}`,
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert("Proposal sent successfully.");

    } catch (error) {

        alert("Unable to send proposal.");

    }

};

const generateSWOT = async () => {

    try {

        setLoadingSWOT(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/swot/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setSwot(res.data.swot);

    } catch (error) {

        alert("Unable to generate SWOT analysis.");

    } finally {

        setLoadingSWOT(false);

    }

};

const generateTimeline = async () => {

    try {

        setLoadingTimeline(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/timeline/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTimeline(res.data.timeline);

    } catch (error) {

        alert("Unable to generate timeline.");

    } finally {

        setLoadingTimeline(false);

    }

};

const generateSkills = async () => {

    try {

        setLoadingSkills(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/skills/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setSkills(res.data.skills);

    } catch (error) {

        alert("Unable to generate skill analysis.");

    } finally {

        setLoadingSkills(false);

    }

};

const generateReview = async () => {

    try {

        setLoadingReview(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/review/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setReview(res.data.review);

    } catch (error) {

        alert("Unable to generate project review.");

    } finally {

        setLoadingReview(false);

    }

};


const generateRiskAnalysis = async () => {

    try {

        setLoadingRisk(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/risk/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setRiskAnalysis(res.data.riskAnalysis);

    } catch (error) {

        alert("Unable to generate risk analysis.");

    } finally {

        setLoadingRisk(false);

    }

};

const generateDeploymentGuide = async () => {

    try {

        setLoadingDeployment(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/deployment/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setDeploymentGuide(res.data.deploymentGuide);

    } catch (error) {

        alert("Unable to generate deployment guide.");

    } finally {

        setLoadingDeployment(false);

    }

};


const generateUML = async () => {

    try {

        setLoadingUML(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/uml/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setUml(res.data.uml);

    } catch (error) {

        alert("Unable to generate UML diagrams.");

    } finally {

        setLoadingUML(false);

    }

};

const generateReadiness = async () => {

    try {

        setLoadingReadiness(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/readiness/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setReadiness(res.data.readiness);

    } catch (error) {

        alert("Unable to check project readiness.");

    } finally {

        setLoadingReadiness(false);

    }

};

const generateApiDocs = async () => {

    try {

        setLoadingApiDocs(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/apidocs/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setApiDocs(res.data.apiDocs);

    } catch (error) {

        alert("Unable to generate API documentation.");

    } finally {

        setLoadingApiDocs(false);

    }

};

const generateViva = async () => {

    try {

        setLoadingViva(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/viva/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setViva(res.data.viva);

    } catch (error) {

        alert("Unable to generate viva questions.");

    } finally {

        setLoadingViva(false);

    }

};


const generateBudget = async () => {

    try {

        setLoadingBudget(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/budget/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setBudget(res.data.budget);

    } catch (error) {

        alert("Unable to generate budget plan.");

    } finally {

        setLoadingBudget(false);

    }

};

const generateMarketAnalysis = async () => {

    try {

        setLoadingMarket(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/market/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setMarketAnalysis(res.data.marketAnalysis);

    } catch {

        alert("Unable to generate market analysis.");

    } finally {

        setLoadingMarket(false);

    }

};


const generateTestCases = async () => {

    try {

        setLoadingTestCases(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/testcases/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTestCases(res.data.testCases);

    } catch (error) {

        alert("Unable to generate test cases.");

    } finally {

        setLoadingTestCases(false);

    }

};

const generateTechStack = async () => {

    try {

        setLoadingTechStack(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/techstack/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTechStack(res.data.techStack);

    } catch (error) {

        alert("Unable to generate technology recommendations.");

    } finally {

        setLoadingTechStack(false);

    }

};

const generateDiagrams = async () => {

    try {

        setLoadingDiagrams(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/diagrams/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setDiagrams(res.data.diagrams);

    } catch (error) {

        alert("Unable to generate diagrams.");

    } finally {

        setLoadingDiagrams(false);

    }

};

  const getProposal = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/proposals/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProposal(res.data.proposal);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const copyProposal = () => {
    navigator.clipboard.writeText(proposal.proposal.content);
    alert("Copied Successfully");
  };

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(proposal.projectTitle, 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(
        proposal.proposal.content.replace(/[#*]/g, ""),
        170
    );

    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const lineHeight = 7;

    let y = 35;

    lines.forEach((line) => {

        if (y + lineHeight > pageHeight - margin) {

            doc.addPage();
            y = margin;

        }

        doc.text(line, margin, y);

        y += lineHeight;

    });

    doc.save(`${proposal.projectTitle}.pdf`);

};


const downloadWord = async () => {

  const doc = new Document({

    sections: [

      {
        children: [

          new Paragraph({
            text: proposal.projectTitle,
            heading: HeadingLevel.HEADING_1,
          }),

          new Paragraph(""),

          new Paragraph({
            text: proposal.proposal.content.replace(/[#*]/g, ""),
          }),

        ],
      },

    ],

  });

    const blob = await Packer.toBlob(doc);

  saveAs(blob, `${proposal.projectTitle}.docx`);
};


const downloadPPT = async () => {

    try {

        const token = localStorage.getItem("token");

        const response = await axios.get(

            `http://localhost:5000/api/ppt/${id}`,

            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                responseType: "blob"
            }

        );

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;

        link.download = `${proposal.projectTitle}.pptx`;

        link.click();

    }

    catch (error) {

        alert("Unable to generate presentation.");

    }

};

const generateTitles = async () => {

    try {

        setLoadingTitles(true);

        const token = localStorage.getItem("token");

        const res = await axios.post(

            "http://localhost:5000/api/proposals/titles",

            {
                domain: formData.domain,
                technology: formData.technology
            },

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        );

        setTitles(res.data.titles);

    }

    catch {

        alert("Unable to generate titles.");

    }

    finally {

        setLoadingTitles(false);

    }

};


const generateMilestones = async () => {

    try {

        setLoadingMilestones(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/milestones/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setMilestones(res.data.milestones);

    } catch (error) {

        alert("Unable to generate milestones.");

    } finally {

        setLoadingMilestones(false);

    }

};


const generateDatabaseSchema = async () => {

    try {

        setLoadingDatabase(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/database/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setDatabaseSchema(res.data.schema);

    } catch (error) {

        alert("Unable to generate database schema.");

    } finally {

        setLoadingDatabase(false);

    }

};


const evaluateProposal = async () => {

    try {

        setLoadingEvaluation(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/evaluate/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setEvaluation(res.data.evaluation);

    } catch (error) {

        alert("Unable to evaluate proposal.");

    } finally {

        setLoadingEvaluation(false);

    }

};

const generateStarterCode = async () => {

    try {

        setLoadingCode(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/code/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setStarterCode(res.data.code);

    } catch (error) {

        alert("Unable to generate starter code.");

    } finally {

        setLoadingCode(false);

    }

};


const generateReport = async () => {

    try {

        setLoadingReport(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/report/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setReport(res.data.report);

    } catch (error) {

        alert("Unable to generate report.");

    } finally {

        setLoadingReport(false);

    }

};


const generateCostEstimate = async () => {

    try {

        setLoadingEstimate(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/cost/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setEstimate(res.data.estimate);

    } catch (error) {

        alert("Unable to generate cost estimate.");

    } finally {

        setLoadingEstimate(false);

    }

};

const generateSpeech = async () => {

    try {

        setLoadingSpeech(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/speech/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setSpeech(res.data.speech);

    } catch (error) {

        alert("Unable to generate presentation speech.");

    } finally {

        setLoadingSpeech(false);

    }

};

  const askAI = async () => {
    try {
      setAsking(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/proposals/chat/${id}`,
        {
          question,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnswer(res.data.answer);
    } catch (error) {
      alert("Unable to get AI response");
      console.log(error);
    } finally {
      setAsking(false);
    }
  };

  const generateSurvey = async () => {

    try {

        setLoadingSurvey(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/literature/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setSurvey(res.data.survey);

    } catch (error) {

        alert("Unable to generate literature survey.");

    } finally {

        setLoadingSurvey(false);

    }

};

  const generateRoadmap = async () => {

    try {

        setLoadingRoadmap(true);

        const token = localStorage.getItem("token");

        const res = await axios.get(
            `http://localhost:5000/api/proposals/roadmap/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setRoadmap(res.data.roadmap);

    } catch (error) {

        alert("Unable to generate roadmap.");

    } finally {

        setLoadingRoadmap(false);

    }

};

  const deleteProposal = async () => {
    if (!window.confirm("Delete this proposal?")) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/proposals/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Proposal Deleted");

      navigate("/history");
    } catch (error) {
      alert("Delete Failed");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>{proposal.projectTitle}</h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >

            <button onClick={copyProposal}>
  Copy
</button>

<button onClick={downloadPDF}>
  Download PDF
</button>

<button onClick={downloadWord}>
  Download Word
</button>

<button onClick={deleteProposal}>
  Delete
</button>

<button onClick={shareByEmail}>
    Share via Email
</button>

<button onClick={generateRoadmap}>
    {loadingRoadmap ? "Generating..." : "Generate Roadmap"}
</button>

<button onClick={generateSurvey}>
    {loadingSurvey ? "Generating..." : "Literature Survey"}
</button>

<button onClick={generateCostEstimate}>
    {loadingEstimate ? "Calculating..." : "Cost Estimation"}
</button>

<button onClick={generateReport}>
    {loadingReport ? "Generating..." : "Generate Full Report"}
</button>

<button onClick={generateRiskAnalysis}>
    {loadingRisk ? "Generating..." : "Risk Analysis"}
</button>

<button onClick={generateSpeech}>
    {loadingSpeech ? "Generating..." : "Presentation Speech"}
</button>

<button onClick={generateStarterCode}>
    {loadingCode ? "Generating..." : "Starter Code"}
</button>

<button onClick={evaluateProposal}>
    {loadingEvaluation ? "Evaluating..." : "Evaluate Proposal"}
</button>

<button onClick={generateTimeline}>
    {loadingTimeline ? "Generating..." : "Project Timeline"}
</button>

<button onClick={generateDiagrams}>
    {loadingDiagrams ? "Generating..." : "Generate Diagrams"}
</button>

<button onClick={generateSWOT}>
    {loadingSWOT ? "Generating..." : "SWOT Analysis"}
</button>

<button onClick={generateApiDocs}>
    {loadingApiDocs ? "Generating..." : "API Docs"}
</button>

<button onClick={generateTestCases}>
    {loadingTestCases ? "Generating..." : "Test Cases"}
</button>

<button onClick={generateDatabaseSchema}>
    {loadingDatabase ? "Generating..." : "Database Schema"}
</button>

<button onClick={generateUML}>
    {loadingUML ? "Generating..." : "UML Diagrams"}
</button>

<button onClick={generateMilestones}>
    {loadingMilestones ? "Generating..." : "Project Milestones"}
</button>

<button onClick={generateTechStack}>
    {loadingTechStack ? "Generating..." : "Tech Stack"}
</button>

<button onClick={generateSkills}>
    {loadingSkills ? "Generating..." : "Skill Analysis"}
</button>

<button onClick={generateBudget}>
    {loadingBudget ? "Generating..." : "Budget Plan"}
</button>

<button onClick={generateDeploymentGuide}>
    {loadingDeployment ? "Generating..." : "Deployment Guide"}
</button>

<button onClick={generateViva}>
    {loadingViva ? "Generating..." : "Viva Preparation"}
</button>

<button onClick={generateReview}>
    {loadingReview ? "Reviewing..." : "AI Review"}
</button>

<button onClick={generateReadiness}>
    {loadingReadiness ? "Checking..." : "Project Readiness"}
</button>

<button onClick={generateTitles}>
    {loadingTitles ? "Generating..." : "Generate Project Titles"}
</button>

<button onClick={generateMarketAnalysis}>
    {loadingMarket ? "Generating..." : "Market Analysis"}
</button>


<button onClick={downloadPPT}>
    Download PPT
</button>


        </div>

        <div className="markdown-content">
          <ReactMarkdown>
            {proposal.proposal.content}
          </ReactMarkdown>
        </div>

        <hr />

        <h2>🤖 AI Proposal Assistant</h2>

        {roadmap && (
    <>
        <hr />

        <h2>📅 AI Project Roadmap</h2>

        {survey && (
    <>
        <hr />

        <h2>📚 AI Literature Survey</h2>

        {estimate && (
    <>
        <hr />

        <h2>💰 AI Project Cost Estimation</h2>

        {report && (
    <>
        <hr />

        <h2>📘 AI Project Report</h2>

        {riskAnalysis && (
    <>
        <hr />

        <h2>⚠️ AI Risk Analysis</h2>

        {speech && (
    <>
        <hr />

        <h2>🎤 AI Presentation Speech</h2>

        {starterCode && (
    <>
        <hr />

        <h2>💻 AI Starter Code</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {starterCode}
            </ReactMarkdown>
        </div>
    </>
)}

{evaluation && (
    <>
        <hr />

        <h2>📊 AI Project Evaluation</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {evaluation}
            </ReactMarkdown>
        </div>
    </>
)}

{marketAnalysis && (
    <>
        <hr />

        <h2>🌍 AI Market Analysis</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {marketAnalysis}
            </ReactMarkdown>
        </div>
    </>
)}


{timeline && (
    <>
        <hr />

        <h2>📅 AI Project Timeline</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {timeline}
            </ReactMarkdown>
        </div>
    </>
)}

{databaseSchema && (
    <>
        <hr />

        <h2>🗄️ AI Database Schema</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {databaseSchema}
            </ReactMarkdown>
        </div>
    </>
)}

{uml && (
    <>
        <hr />

        <h2>📐 AI UML Diagrams</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {uml}
            </ReactMarkdown>
        </div>
    </>
)}

{milestones && (
    <>
        <hr />

        <h2>📅 AI Project Milestones</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {milestones}
            </ReactMarkdown>
        </div>
    </>
)}

{techStack && (
    <>
        <hr />

        <h2>💻 AI Technology Recommendation</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {techStack}
            </ReactMarkdown>
        </div>
    </>
)}

{skills && (
    <>
        <hr />

        <h2>🎯 AI Skill Analysis</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {skills}
            </ReactMarkdown>
        </div>
    </>
)}

{budget && (
    <>
        <hr />

        <h2>💰 AI Project Budget Planner</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {budget}
            </ReactMarkdown>
        </div>
    </>
)}

{titles && (
    <>
        <hr />

        <h2>💡 AI Project Title Suggestions</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {titles}
            </ReactMarkdown>
        </div>
    </>
)}

{deploymentGuide && (
    <>
        <hr />

        <h2>🚀 AI Deployment Guide</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {deploymentGuide}
            </ReactMarkdown>
        </div>
    </>
)}

{viva && (
    <>
        <hr />

        <h2>🎤 AI Viva Preparation</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {viva}
            </ReactMarkdown>
        </div>
    </>
)}

{review && (
    <>
        <hr />

        <h2>📝 AI Project Review</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {review}
            </ReactMarkdown>
        </div>
    </>
)}

{readiness && (
    <>
        <hr />

        <h2>✅ AI Project Readiness Checker</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {readiness}
            </ReactMarkdown>
        </div>
    </>
)}

{swot && (
    <>
        <hr />

        <h2>📈 AI SWOT Analysis</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {swot}
            </ReactMarkdown>
        </div>
    </>
)}

{apiDocs && (
    <>
        <hr />

        <h2>📘 AI API Documentation</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {apiDocs}
            </ReactMarkdown>
        </div>
    </>
)}

{testCases && (
    <>
        <hr />

        <h2>🧪 AI Test Cases</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {testCases}
            </ReactMarkdown>
        </div>
    </>
)}


{diagrams && (
    <>
        <hr />

        <h2>📐 AI System Diagrams</h2>

        <div className="proposal-card">
            <ReactMarkdown>
                {diagrams}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {speech}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {riskAnalysis}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {report}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {estimate}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {survey}
            </ReactMarkdown>
        </div>
    </>
)}

        <div className="proposal-card">
            <ReactMarkdown>
                {roadmap}
            </ReactMarkdown>
        </div>
    </>
)}

        <textarea
          rows="4"
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="Ask anything about this proposal..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <br />
        <br />

        <button onClick={askAI}>
          {asking ? "Thinking..." : "Ask AI"}
        </button>

        <br />
        <br />

        {answer && (
          <div className="proposal-card">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProposalDetails;