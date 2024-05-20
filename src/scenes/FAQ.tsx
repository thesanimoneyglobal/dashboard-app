import Header from "../components/header/Header.tsx";
import {Box} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useColors} from "../common/theme/hooks/useMode.ts";
import {faqData} from "../data/faqData.ts";

function Faq() {
    const colors = useColors()

    return <>
        <Header title={'FAQ '} subtitle={'Frequently Asked Questions'}/>
        <Box mt={'2rem'} sx={{'& .MuiCollapse-root': {textAlign: 'start'} }}>
            {faqData.map((el, index) => <Accordion sx={{bgcolor: colors.primary[400], mb: '0.5rem'}} key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    color={colors.greenAccent[300]}
                    sx={{color: colors.greenAccent[300]}}>
                    {el.question}
                </AccordionSummary>
                <AccordionDetails>
                    {el.answer}
                </AccordionDetails>
            </Accordion>)}
        </Box>
    </>
}

export default Faq;