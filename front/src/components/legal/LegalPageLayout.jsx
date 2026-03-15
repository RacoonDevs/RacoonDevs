import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AnimatedBackground from "../layout/AnimatedBackground";
import { ease } from "../../utils/motion";

const LegalPageLayout = ({
  badge,
  title,
  highlight,
  description,
  lastUpdated,
  summary,
  sections,
  contactTitle,
  contactDescription,
}) => {
  return (
    <div className="min-h-screen bg-surface text-txt relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-16 sm:pt-18 lg:pt-20">
        <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-10">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] lg:gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: ease.out }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.15] mb-6">
                    <span className="text-sm tracking-widest uppercase text-primary font-medium">
                      {badge}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-txt leading-tight mb-6">
                    {title} <span className="gradient-text">{highlight}</span>
                  </h1>

                  <p className="text-txt-2 text-lg sm:text-xl leading-relaxed max-w-3xl">
                    {description}
                  </p>
                </motion.div>

                <motion.aside
                  className="glass-panel rounded-[28px] border border-primary/[0.08] p-6 sm:p-7"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: ease.out }}
                >
                  <div className="inline-flex items-center gap-2 text-sm text-txt-2 mb-5">
                    <Clock3 className="w-4 h-4 text-primary" />
                    <span>Ultima actualizacion: {lastUpdated}</span>
                  </div>

                  <div className="space-y-4">
                    {summary.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-primary/[0.08] bg-surface-deep/65 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-txt-4 mb-2">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-base text-txt-2 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="grid gap-6 lg:gap-8">
                {sections.map((section, index) => (
                  <motion.article
                    key={section.title}
                    className="glass-panel rounded-[28px] border border-primary/[0.08] p-6 sm:p-8 lg:p-10"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                      ease: ease.out,
                    }}
                  >
                    <div className="max-w-4xl">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-txt mb-5">
                        {section.title}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-txt-2 leading-relaxed mb-4 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets?.length ? (
                        <ul className="space-y-3 mt-6">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-txt-2 leading-relaxed"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </motion.article>
                ))}

                <motion.section
                  className="rounded-[28px] border border-primary/[0.12] bg-gradient-to-r from-primary/[0.09] via-surface-deep/80 to-secondary/[0.09] p-6 sm:p-8 lg:p-10"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: ease.out }}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-2 text-primary mb-3">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm uppercase tracking-[0.22em]">
                          Contacto Legal
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-txt mb-3">
                        {contactTitle}
                      </h2>
                      <p className="text-txt-2 leading-relaxed">
                        {contactDescription}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:admin@racoondevs.com"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/[0.15] text-txt hover:border-primary/[0.28] hover:bg-surface-deep/60 transition-colors duration-200"
                      >
                        admin@racoondevs.com
                      </a>
                      <Link
                        to="/contacto"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 gradient-primary text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
                      >
                        Contactar al equipo
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
