const pptxgen = require("pptxgenjs");
const Proposal = require("../models/Proposal");

exports.generatePPT = async (req, res) => {
    try {

        const proposal = await Proposal.findById(req.params.id);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        const pptx = new pptxgen();

        pptx.layout = "LAYOUT_WIDE";
        pptx.author = "ProposalGen AI";
        pptx.company = "ProposalGen AI";

        const slide = pptx.addSlide();

        slide.addText(proposal.projectTitle, {
            x: 0.5,
            y: 0.5,
            w: 8,
            h: 0.6,
            fontSize: 24,
            bold: true
        });

        slide.addText(
            proposal.proposal.content.replace(/[#*]/g, ""),
            {
                x: 0.5,
                y: 1.3,
                w: 8.5,
                h: 5,
                fontSize: 16
            }
        );

        const buffer = await pptx.write("nodebuffer");

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        );

        res.setHeader(
            "Content-Disposition",
            `attachment; filename="${proposal.projectTitle}.pptx"`
        );

        res.send(buffer);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};