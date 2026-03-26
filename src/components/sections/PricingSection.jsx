import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import CurrencySelector from "../ui/CurrencySelector";
import { cn } from "../../utils/cn";
import { staggerContainer, staggerChild } from "../../utils/motion";
import { pricingPlans } from "../../data/pricingData";
import { useCurrency } from "../../hooks/useCurrency";

const PricingSection = () => {
  const { currency, selectCurrency, convert, currencyInfo } = useCurrency();

  return (
    <SectionWrapper id="planes">
      <SectionHeading
        badge="Planes"
        title="Planes claros, sin sorpresas"
        gradient="claros"
        subtitle="Elige el plan que mejor se adapte a tu negocio. Siempre puedes escalar."
      />

      <div className="flex justify-center mb-8">
        <CurrencySelector currency={currency} onSelect={selectCurrency} />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        {...staggerContainer(0.1)}
      >
        {pricingPlans.map((plan) => {
          const Icon = plan.icon;
          const isPopular = plan.popular;
          const converted = plan.basePriceMXN ? convert(plan.basePriceMXN) : null;

          return (
            <motion.div
              key={plan.id}
              variants={staggerChild}
              className={cn("relative", isPopular && "md:-mt-4 md:mb-[-1rem]")}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <Tag variant="primary">Popular</Tag>
                </div>
              )}

              <GlassCard
                className={cn(
                  "h-full flex flex-col relative overflow-hidden",
                  isPopular &&
                    "border-primary/30 shadow-lg shadow-primary/10 glow-primary",
                )}
                hover={!isPopular}
              >
                {/* Gradient glow for popular */}
                {isPopular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        isPopular ? "gradient-primary" : "bg-primary/10",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          isPopular ? "text-white" : "text-primary",
                        )}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-txt font-[family-name:var(--font-display)]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.prefix && (
                      <span className="text-sm text-txt-3 block mb-1">
                        {plan.prefix}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      {converted ? (
                        <>
                          <motion.span
                            key={`${plan.id}-${currency}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                              "text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]",
                              isPopular ? "gradient-text" : "text-txt",
                            )}
                          >
                            {currencyInfo.symbol}
                            {converted.formatted}
                          </motion.span>
                          <motion.span
                            key={`${plan.id}-code-${currency}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-sm text-txt-3"
                          >
                            {currency}
                          </motion.span>
                        </>
                      ) : (
                        <span
                          className={cn(
                            "text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]",
                            isPopular ? "gradient-text" : "text-txt",
                          )}
                        >
                          Personalizado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-txt-2 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={cn(
                            "w-4 h-4 flex-shrink-0 mt-0.5",
                            isPopular ? "text-primary" : "text-txt-3",
                          )}
                        />
                        <span className="text-sm text-txt-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={isPopular ? "primary" : "outline"}
                    to="/cuentanos-tu-idea"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default PricingSection;
