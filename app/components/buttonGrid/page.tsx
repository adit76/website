"use client";
import { useState, useMemo } from "react";
import { Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceSelector() {
    const services = useMemo(
        () => [
            { id: "web-design", label: "Web Design & UI", description: "We design modern, responsive websites focused on UX and performance." },
            { id: "seo", label: "SEO Services", description: "Improve your search engine rankings with proven SEO strategies." },
            { id: "web-app", label: "Web Application Development", description: "Custom web applications tailored to your business needs." },
            { id: "microsoft", label: "Microsoft Solutions", description: "Microsoft 365, Azure, and enterprise productivity solutions." },
            { id: "pos", label: "POS Solutions", description: "Reliable point-of-sale systems for retail and hospitality." },
            { id: "it", label: "IT Software & Hardware", description: "End-to-end IT infrastructure and hardware solutions." },
            { id: "graphic", label: "Graphic Design", description: "Branding, logos, and marketing design services." },
            { id: "mobile", label: "Mobile Application Development", description: "Native and cross-platform mobile app development." },
            { id: "marketing", label: "Digital Marketing", description: "Social media, PPC, and online growth strategies." },
            { id: "security", label: "Security & Managed IT Services", description: "Secure, monitored, and managed IT services." },
            { id: "print", label: "Managed Print Services", description: "Cost-effective and managed printing solutions." }
        ],
        []
    );

    const [activeService, setActiveService] = useState(services[0]);

    return (
        <div className="w-full flex flex-col items-center">

            {/* DESKTOP DESCRIPTION */}
            <div
                className="hidden md:block mb-6 p-4 rounded-lg shadow-md text-center"
                style={{ background: "#252525", color: "#fff", width: "100%", maxWidth: 600 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Typography variant="subtitle1">
                            {activeService.description}
                        </Typography>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* MOBILE ACCORDION */}
            <div className="w-full md:hidden">
                {services.map((service) => (
                    <Accordion
                        key={service.id}
                        onChange={() => setActiveService(service)}
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "1px solid #CC1D2E",
                            boxShadow: "none",
                            "&:before": { display: "none" },
                            "&.Mui-expanded": {
                                margin: 0,
                                borderColor: "#CC1D2E"
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CC1D2E" }} />}
                            sx={{
                                paddingY: 1.5,
                                "& .MuiAccordionSummary-content": {
                                    margin: 0
                                },
                                "&.Mui-expanded": {
                                    color: "#CC1D2E"
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1.05rem",
                                    letterSpacing: "0.3px"
                                }}
                            >
                                {service.label}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                backgroundColor: "#000",
                                color: "#fff",
                                borderTop: "1px solid #CC1D2E",
                                paddingTop: 2,
                                paddingBottom: 2
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                    opacity: 0.85
                                }}
                            >
                                {service.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}
            </div>


            {/* DESKTOP BUTTON GRID */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                    <Button
                        key={service.id}
                        variant={activeService.id === service.id ? "contained" : "outlined"}
                        size="medium"
                        onClick={() => setActiveService(service)}
                    >
                        {service.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}
