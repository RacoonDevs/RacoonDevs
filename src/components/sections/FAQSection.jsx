import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AccordionItem from "../ui/AccordionItem";
import Button from "../ui/Button";
import { staggerContainer, staggerChild } from "../../utils/motion";
import { faqs } from "../../data/faqData";
import { WHATSAPP_URL } from "../../utils/constants";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column */}
        <div>
          <SectionHeading
            badge="FAQ"
            title="Preguntas Frecuentes"
            gradient="Frecuentes"
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-txt-2 text-base sm:text-lg leading-relaxed mb-6">
              Si no encuentras la respuesta que buscas, no dudes en escribirnos.
              Estamos para ayudarte.
            </p>
            <Button
              variant="secondary"
              href={WHATSAPP_URL}
              icon={<MessageCircle className="w-4 h-4" />}
              iconPosition="left"
            >
              ¿Tienes más preguntas?
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Accordion */}
        <motion.div {...staggerContainer(0.06)}>
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} variants={staggerChild}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
