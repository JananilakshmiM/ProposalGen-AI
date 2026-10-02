const Proposal = require("../models/Proposal");
const { generateProposal } = require("../services/openRouterService");
const buildPrompt = require("../utils/promptBuilder");


// Generate Proposal
exports.generate = async (req, res) => {

  try {

    const prompt = buildPrompt(req.body);


    const aiResponse = await generateProposal(prompt);



    const proposal = await Proposal.create({

      user: req.user.id,

      projectTitle: req.body.projectTitle,

      domain: req.body.domain,

      technology: req.body.technology,

      teamSize: req.body.teamSize,

      duration: req.body.duration,

      difficulty: req.body.difficulty,


      proposal: {

        content: aiResponse,

      },


    });



    res.status(201).json({

      success: true,

      proposal,

    });



  } catch (error) {


    console.log("GENERATE ERROR:", error);


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }

};

const { sendProposal } = require("../services/mailService");

exports.shareProposal = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        await sendProposal(
            req.body.email,
            proposal.projectTitle,
            proposal.proposal.content
        );

        res.json({
            success: true,
            message: "Proposal shared successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateRoadmap = async (req, res) => {
    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert software architect.

Based on the following project proposal, generate a complete implementation roadmap.

Include:

1. Week-wise timeline
2. Development phases
3. Technologies to learn
4. Backend tasks
5. Frontend tasks
6. Database tasks
7. Testing plan
8. Deployment
9. Documentation

Proposal:

${proposal.proposal.content}
`;

        const roadmap = await generateProposal(prompt);

        res.json({
            success: true,
            roadmap
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.generateLiteratureSurvey = async (req, res) => {
    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an engineering research expert.

Based on the following project proposal, generate a professional Literature Survey.

Include:

1. Introduction
2. Existing Systems
3. Research Papers Summary
4. Limitations
5. Research Gap
6. Proposed System
7. Future Scope
8. References (APA style)

Proposal:

${proposal.proposal.content}
`;

        const survey = await generateProposal(prompt);

        res.json({
            success: true,
            survey
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.generateReport = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert engineering project documentation writer.

Using the following proposal, generate a complete B.Tech project report.

Include:

1. Cover Page
2. Certificate
3. Acknowledgement
4. Abstract
5. Introduction
6. Literature Survey
7. Existing System
8. Proposed System
9. Objectives
10. Methodology
11. System Architecture
12. Modules
13. Database Design
14. Algorithms
15. Advantages
16. Applications
17. Future Scope
18. Conclusion
19. References

Proposal:

${proposal.proposal.content}
`;

        const report = await generateProposal(prompt);

        res.json({
            success: true,
            report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateRiskAnalysis = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced software project consultant.

Based on the following engineering project proposal, generate a complete Risk Analysis Report.

Include:

1. Technical Risks
2. Security Risks
3. Budget Risks
4. Timeline Risks
5. Team Risks
6. Deployment Risks
7. Risk Level (Low / Medium / High)
8. Mitigation Strategies
9. Contingency Plan

Proposal:

${proposal.proposal.content}
`;

        const riskAnalysis = await generateProposal(prompt);

        res.json({
            success: true,
            riskAnalysis
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generatePresentationSpeech = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert engineering project mentor.

Based on the following proposal, generate a professional presentation speech.

Include:

1. Self Introduction
2. Project Introduction
3. Problem Statement
4. Objectives
5. Methodology
6. Technologies Used
7. Expected Output
8. Conclusion
9. Viva Tips
10. 10 Frequently Asked Viva Questions with Answers

Proposal:

${proposal.proposal.content}
`;

        const speech = await generateProposal(prompt);

        res.json({
            success: true,
            speech
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateStarterCode = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert full-stack software developer.

Based on the following engineering project proposal, generate starter code guidance.

Include:

1. Recommended project folder structure
2. Backend architecture
3. Frontend architecture
4. Database schema
5. API endpoints
6. Sample code snippets
7. Installation commands
8. Steps to run the project

Proposal:

${proposal.proposal.content}
`;

        const code = await generateProposal(prompt);

        res.json({
            success: true,
            code
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.evaluateProposal = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are a B.Tech project evaluator.

Evaluate the following project proposal.

Return the evaluation in Markdown.

Include:

1. Innovation (Score /10)
2. Technical Feasibility (Score /10)
3. Problem Statement (Score /10)
4. Objectives (Score /10)
5. Technology Selection (Score /10)
6. Scalability (Score /10)
7. Security (Score /10)
8. Documentation Quality (Score /10)
9. Overall Score (/100)
10. Strengths
11. Weaknesses
12. Suggestions for Improvement

Proposal:

${proposal.proposal.content}
`;

        const evaluation = await generateProposal(prompt);

        res.json({
            success: true,
            evaluation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateTimeline = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced software project manager.

Based on the following proposal, generate a detailed project timeline.

Include:

1. Week-wise schedule
2. Major milestones
3. Deliverables
4. Task dependencies
5. Testing schedule
6. Documentation schedule
7. Final submission timeline

Proposal:

${proposal.proposal.content}
`;

        const timeline = await generateProposal(prompt);

        res.json({
            success: true,
            timeline
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateDiagrams = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert Software Architect.

Based on the following project proposal generate professional software design documentation.

Generate:

1. System Architecture
2. Use Case Diagram
3. Data Flow Diagram
4. ER Diagram
5. Class Diagram
6. Activity Diagram
7. Sequence Diagram
8. Deployment Diagram

Represent every diagram using Mermaid syntax.

Proposal:

${proposal.proposal.content}
`;

        const diagrams = await generateProposal(prompt);

        res.json({
            success: true,
            diagrams
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateSWOT = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert project evaluator.

Analyze the following engineering project.

Generate a detailed SWOT Analysis.

Include:

1. Strengths
2. Weaknesses
3. Opportunities
4. Threats
5. Final Recommendation

Proposal:

${proposal.proposal.content}

Return in Markdown format.
`;

        const swot = await generateProposal(prompt);

        res.json({
            success: true,
            swot
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateAPIDocumentation = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced backend software architect.

Based on the following engineering project proposal, generate professional REST API documentation.

Include:

1. API Overview
2. Authentication
3. Base URL
4. Endpoints
5. Request Body
6. Response Body
7. Status Codes
8. Error Responses
9. Example Requests
10. Example Responses

Proposal:

${proposal.proposal.content}

Return everything in Markdown format.
`;

        const apiDocs = await generateProposal(prompt);

        res.json({
            success: true,
            apiDocs
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateTestCases = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced Software QA Engineer.

Based on the following project proposal, generate comprehensive software test cases.

Include:

1. Functional Test Cases
2. UI Test Cases
3. Authentication Test Cases
4. Validation Test Cases
5. Performance Test Cases
6. Security Test Cases
7. API Test Cases
8. Edge Cases
9. Expected Results

Return everything in Markdown format.

Project Proposal:

${proposal.proposal.content}
`;

        const testCases = await generateProposal(prompt);

        res.json({
            success: true,
            testCases
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateDatabaseSchema = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an expert Database Architect.

Based on the following engineering project proposal, generate a complete database design.

Include:

1. Database Type
2. Collections / Tables
3. Fields
4. Data Types
5. Primary Keys
6. Foreign Keys
7. Relationships
8. Index Suggestions
9. Sample Records
10. Best Practices

Return everything in Markdown format.

Proposal:

${proposal.proposal.content}
`;

        const schema = await generateProposal(prompt);

        res.json({
            success: true,
            schema
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateUML = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced Software Architect.

Based on the following engineering project proposal, generate UML documentation.

Include:

1. Use Case Diagram
2. Class Diagram
3. Sequence Diagram
4. Activity Diagram
5. Component Diagram
6. Deployment Diagram

Generate diagrams in Mermaid syntax.

Project Proposal:

${proposal.proposal.content}

Return everything in Markdown format.
`;

        const uml = await generateProposal(prompt);

        res.json({
            success: true,
            uml
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateMilestones = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced Software Project Manager.

Based on the following engineering project proposal, generate a professional milestone plan.

Include:

1. Milestone Name
2. Description
3. Estimated Duration
4. Tasks
5. Deliverables
6. Completion Criteria

Present everything in Markdown table format.

Proposal:

${proposal.proposal.content}
`;

        const milestones = await generateProposal(prompt);

        res.json({
            success: true,
            milestones
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.recommendTechStack = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are a Senior Software Solution Architect.

Analyze the following project proposal and recommend the best technology stack.

Include:

1. Frontend Technologies
2. Backend Technologies
3. Database
4. Authentication
5. AI/ML Libraries
6. Cloud Platform
7. Deployment Method
8. DevOps Tools
9. Security Recommendations
10. Alternative Technologies
11. Reason for each recommendation

Proposal:

${proposal.proposal.content}

Return in Markdown format.
`;

        const techStack = await generateProposal(prompt);

        res.json({
            success: true,
            techStack
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


exports.generateCostEstimate = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced software project consultant.

Based on the following proposal, estimate the project cost.

Include:

1. Software Requirements
2. Hardware Requirements
3. API or AI Service Costs
4. Cloud Hosting Cost
5. Team Size Recommendation
6. Development Duration
7. Approximate Total Cost
8. Cost Saving Suggestions

Proposal:

${proposal.proposal.content}
`;

        const estimate = await generateProposal(prompt);

        res.json({
            success: true,
            estimate
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



exports.getAll = async (req, res) => {
    try {

        const keyword = req.query.search || "";
        const domain = req.query.domain || "";

        const query = {
            user: req.user.id
        };

        if (keyword) {
            query.projectTitle = {
                $regex: keyword,
                $options: "i"
            };
        }

        if (domain) {
            query.domain = domain;
        }

        const proposals = await Proposal.find(query)
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            proposals
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.toggleFavorite = async (req, res) => {
    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        proposal.favorite = !proposal.favorite;

        await proposal.save();

        res.json({
            success: true,
            proposal
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.generateDeploymentGuide = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are a Senior DevOps Engineer.

Based on the following project proposal, generate a complete deployment guide.

Include:

1. Project Requirements
2. Software Prerequisites
3. Local Installation Steps
4. Environment Variables
5. Database Setup
6. Docker Setup
7. CI/CD Pipeline
8. Cloud Deployment (AWS/Azure/GCP/Vercel/Render)
9. Security Best Practices
10. Monitoring and Logging
11. Backup Strategy
12. Scaling Recommendations

Return everything in Markdown format.

Project Proposal:

${proposal.proposal.content}
`;

        const deploymentGuide = await generateProposal(prompt);

        res.json({
            success: true,
            deploymentGuide
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateSkillAnalysis = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced Software Engineering Mentor.

Analyse the following project proposal and determine the skills required to successfully complete it.

Include:

1. Programming Languages
2. Frameworks
3. Databases
4. AI/ML Skills
5. Cloud Skills
6. DevOps Skills
7. Soft Skills
8. Difficulty of each skill
9. Learning Resources
10. Suggested Learning Roadmap

Proposal:

${proposal.proposal.content}

Return everything in Markdown format.
`;

        const skills = await generateProposal(prompt);

        res.json({
            success: true,
            skills
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateVivaQuestions = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an experienced Engineering Project Examiner.

Based on the following project proposal, generate viva preparation material.

Include:

1. 30 Frequently Asked Viva Questions
2. Best Answers
3. Technical Questions
4. HR Questions
5. Architecture Questions
6. Database Questions
7. Future Scope Questions
8. Advantages & Limitations
9. Common Mistakes During Presentation
10. Tips to Impress the Panel

Return everything in Markdown format.

Project Proposal:

${proposal.proposal.content}
`;

        const viva = await generateProposal(prompt);

        res.json({
            success: true,
            viva
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.reviewProposal = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an Engineering Project Review Committee Member.

Review the following project proposal.

Provide scores (out of 10) and comments for:

1. Project Idea
2. Innovation
3. Technical Complexity
4. Feasibility
5. Research Value
6. Implementation Difficulty
7. Market Potential
8. Documentation Quality
9. Presentation Quality
10. Overall Rating

Also include:

• Strengths
• Weaknesses
• Suggestions for Improvement
• Final Verdict

Return everything in Markdown format.

Proposal:

${proposal.proposal.content}
`;

        const review = await generateProposal(prompt);

        res.json({
            success: true,
            review
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get Single Proposal
exports.getOne = async(req,res)=>{


try{


const proposal = await Proposal.findById(

req.params.id

);



if(!proposal){


return res.status(404).json({

success:false,

message:"Proposal not found"

});


}




res.json({

success:true,

proposal

});



}

catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};

exports.checkProjectReadiness = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const prompt = `
You are an Engineering Project Evaluation Expert.

Evaluate the following project proposal and determine whether it is ready for submission.

Provide:

1. Overall Readiness Percentage
2. Proposal Completeness
3. Technical Readiness
4. Documentation Quality
5. Testing Readiness
6. Deployment Readiness
7. Security Readiness
8. Presentation Readiness
9. Missing Components
10. Final Checklist
11. Suggestions to achieve 100% readiness

Return everything in Markdown format.

Proposal:

${proposal.proposal.content}
`;

        const readiness = await generateProposal(prompt);

        res.json({
            success: true,
            readiness
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateProjectTitles = async (req, res) => {

    try {

        const { domain, technology } = req.body;

        const prompt = `
You are an expert engineering project consultant.

Generate 20 unique and professional project titles.

Requirements:
- Suitable for B.Tech/M.Tech
- Modern
- Industry-oriented
- AI/ML based if applicable
- Include latest technologies

Domain:
${domain}

Technology:
${technology}

Return only the titles as a numbered list.
`;

        const titles = await generateProposal(prompt);

        res.json({
            success: true,
            titles
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateMarketAnalysis = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {

            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });

        }

        const prompt = `
You are an experienced Business Analyst.

Analyze the following engineering project.

Generate:

1. Target Users
2. Target Industries
3. Market Size
4. Existing Competitors
5. Competitive Advantages
6. Business Opportunities
7. Revenue Model
8. Future Market Trends
9. Commercial Feasibility
10. Final Market Rating (out of 10)

Project:

${proposal.proposal.content}

Return everything in Markdown.
`;

        const marketAnalysis = await generateProposal(prompt);

        res.json({
            success: true,
            marketAnalysis
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.generateBudgetPlan = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {

            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });

        }

        const prompt = `
You are an experienced IT Project Cost Consultant.

Based on the following engineering project proposal, prepare a detailed project budget.

Include:

1. Software Cost
2. Hardware Cost
3. Cloud Services
4. API Cost
5. Development Cost
6. Testing Cost
7. Deployment Cost
8. Maintenance Cost
9. Total Estimated Cost
10. Cost Saving Suggestions

Present everything in Markdown table format.

Project Proposal:

${proposal.proposal.content}
`;

        const budget = await generateProposal(prompt);

        res.json({
            success: true,
            budget
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};






// Delete Proposal
exports.deleteProposal = async(req,res)=>{


try{


await Proposal.findByIdAndDelete(

req.params.id

);



res.json({

success:true,

message:"Proposal deleted successfully"

});



}

catch(error){


console.log("DELETE ERROR:",error);



res.status(500).json({

success:false,

message:error.message

});


}


};

exports.chatWithProposal = async (req, res) => {

    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {

            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });

        }

        const { question } = req.body;

        const prompt = `

You are an expert engineering project mentor.

Below is a project proposal.

${proposal.proposal.content}

User Question:

${question}

Answer clearly and professionally.

`;

        const answer = await generateProposal(prompt);

        res.json({

            success: true,

            answer

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// Improve Proposal using AI
exports.improveProposal = async(req,res)=>{


try{


const proposal = await Proposal.findById(

req.params.id

);



if(!proposal){


return res.status(404).json({

success:false,

message:"Proposal not found"

});


}




const prompt = `


You are an expert engineering project reviewer.


Improve the following project proposal.


Requirements:

- Make it more professional
- Add technical depth
- Improve explanation
- Suitable for B.Tech project review
- Keep proper sections
- Use Markdown format



Existing Proposal:



${proposal.proposal.content}



Return only the improved proposal.


`;





const improvedProposal = await generateProposal(prompt);





proposal.proposal.content = improvedProposal;



await proposal.save();





res.json({

success:true,

proposal

});



}


catch(error){


console.log("IMPROVE ERROR:",error);



res.status(500).json({

success:false,

message:error.message

});


}


};

exports.getStats = async (req, res) => {
    try {

        const total = await Proposal.countDocuments({
            user: req.user.id
        });

        const latestProposal = await Proposal.findOne({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.json({
            success: true,
            totalProposals: total,
            latestProposal
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};