import { motion } from "framer-motion";
import { ease, staggerContainer, staggerChild } from "../../utils/motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import Tag from "../ui/Tag";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../data/portfolioData";

const projects = featuredProjects.slice(0, 3);

const PortfolioSection = () => (
  <SectionWrapper id="portafolio">
    <SectionHeading
      badge="Portafolio"
      title="Proyectos reales, resultados medibles"
      gradient="resultados"
    />

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      {...staggerContainer(0.12)}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={staggerChild} className="group">
          <DeviceMockup type="desktop">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[16/10] object-cover object-top"
              loading="lazy"
            />
          </DeviceMockup>
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Tag variant="primary">{project.category}</Tag>
            </div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-txt">
              {project.title}
            </h3>
            <p className="text-txt-2 text-sm mt-1.5 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag} variant="neutral">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div
      className="flex justify-center mt-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5, ease: ease.out }}
    >
      <Link
        to="/portafolio"
        className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors group text-lg"
      >
        Ver Todos los Proyectos
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.div>
  </SectionWrapper>
);

export default PortfolioSection;
