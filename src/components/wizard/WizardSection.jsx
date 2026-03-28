import { useReducer, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  MessageSquare,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import WizardProgress from "./WizardProgress";
import WizardStep from "./WizardStep";
import StepTipoProyecto from "./steps/StepTipoProyecto";
import StepIdea from "./steps/StepIdea";
import StepFuncionalidades from "./steps/StepFuncionalidades";
import StepEstiloVisual from "./steps/StepEstiloVisual";
import StepTiempoPresupuesto from "./steps/StepTiempoPresupuesto";
import StepContacto from "./steps/StepContacto";
import StepResumen from "./steps/StepResumen";
import {
  WIZARD_STEPS,
  INITIAL_WIZARD_DATA,
  validateStep,
  formatBudgetWithCurrency,
} from "../../data/wizardData";
import { submitWizardForm } from "../../services/wizardFormClient";
import { useCurrency } from "../../hooks/useCurrency";
import { cn } from "../../utils/cn";
import { ease } from "../../utils/motion";

const TOTAL_STEPS = WIZARD_STEPS.length;

const initialState = {
  currentStep: 0,
  direction: 1,
  data: { ...INITIAL_WIZARD_DATA },
  stepErrors: {},
  isSubmitting: false,
  feedbackModal: { open: false, status: "success", message: "", details: [] },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        stepErrors: { ...state.stepErrors, [state.currentStep]: undefined },
      };
    case "NEXT_STEP": {
      const errors = validateStep(state.currentStep, state.data);
      if (errors.length > 0) {
        return {
          ...state,
          stepErrors: { ...state.stepErrors, [state.currentStep]: errors },
        };
      }
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS - 1),
        direction: 1,
        stepErrors: { ...state.stepErrors, [state.currentStep]: undefined },
      };
    }
    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0),
        direction: -1,
        stepErrors: {},
      };
    case "GO_TO_STEP":
      return {
        ...state,
        currentStep: action.step,
        direction: action.step < state.currentStep ? -1 : 1,
        stepErrors: {},
      };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.value };
    case "SET_FEEDBACK":
      return { ...state, feedbackModal: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

const WizardSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { convert, currencyInfo } = useCurrency();
  const { currentStep, direction, data, stepErrors, isSubmitting, feedbackModal } =
    state;

  const currentErrors = stepErrors[currentStep] || [];
  const isLastStep = currentStep === TOTAL_STEPS - 1;
  const isFirstStep = currentStep === 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  useEffect(() => {
    const hasData = Object.values(data).some((v) =>
      Array.isArray(v) ? v.length > 0 : Boolean(v),
    );
    if (!hasData) return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [data]);

  const handleChange = useCallback((field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  const handleNext = useCallback(() => {
    dispatch({ type: "NEXT_STEP" });
  }, []);

  const handlePrev = useCallback(() => {
    dispatch({ type: "PREV_STEP" });
  }, []);

  const handleGoToStep = useCallback((step) => {
    dispatch({ type: "GO_TO_STEP", step });
  }, []);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;

    dispatch({ type: "SET_SUBMITTING", value: true });

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("wizard_form_submit");
      }

      const presupuestoLabel = data.presupuesto
        ? formatBudgetWithCurrency(data.presupuesto, convert, currencyInfo)
        : null;

      const result = await submitWizardForm({
        formData: data,
        recaptchaToken,
        presupuestoLabel,
      });

      dispatch({
        type: "SET_FEEDBACK",
        payload: {
          open: true,
          status: "success",
          message: result.message,
          details: result.details,
        },
      });
    } catch (err) {
      dispatch({
        type: "SET_FEEDBACK",
        payload: {
          open: true,
          status: "error",
          message: err.message || "Ocurrió un error inesperado.",
          details: err.details || [],
        },
      });
    } finally {
      dispatch({ type: "SET_SUBMITTING", value: false });
    }
  }, [data, executeRecaptcha, isSubmitting, convert, currencyInfo]);

  const closeFeedbackModal = useCallback(() => {
    if (feedbackModal.status === "success") {
      dispatch({ type: "RESET" });
    } else {
      dispatch({
        type: "SET_FEEDBACK",
        payload: { open: false, status: "success", message: "", details: [] },
      });
    }
  }, [feedbackModal.status]);

  const renderStep = () => {
    const stepProps = { data, onChange: handleChange };

    switch (currentStep) {
      case 0:
        return <StepTipoProyecto {...stepProps} />;
      case 1:
        return <StepIdea {...stepProps} />;
      case 2:
        return <StepFuncionalidades {...stepProps} />;
      case 3:
        return <StepEstiloVisual {...stepProps} />;
      case 4:
        return <StepTiempoPresupuesto {...stepProps} />;
      case 5:
        return <StepContacto {...stepProps} />;
      case 6:
        return (
          <StepResumen data={data} onGoToStep={handleGoToStep} />
        );
      default:
        return null;
    }
  };

  return (
    <>
    <SectionWrapper id="wizard" noBorder>
      <SectionHeading
        badge="Tu idea, nuestro siguiente proyecto"
        title="Cuéntanos sobre tu idea"
        gradient="tu idea"
        subtitle="Responde unas preguntas sencillas y te ayudamos a darle forma a tu proyecto. Sin compromisos, sin términos complicados."
      />

      {/* Cross-reference to contact */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: ease.out }}
      >
        <MessageSquare className="w-4 h-4 text-txt-3" />
        <p className="text-sm text-txt-3">
          ¿Ya sabes exactamente lo que necesitas?{" "}
          <Link
            to="/contacto"
            className="text-primary font-medium hover:underline"
          >
            Contáctanos directamente
          </Link>
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <WizardProgress currentStep={currentStep} />

        {/* Step title */}
        <motion.h3
          key={`title-${currentStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: ease.out }}
          className="text-2xl sm:text-3xl font-bold text-txt text-center mb-2"
        >
          {WIZARD_STEPS[currentStep].title}
        </motion.h3>

        {/* Errors */}
        <AnimatePresence>
          {currentErrors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: ease.out }}
              className="max-w-2xl mx-auto mt-4"
            >
              <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <ul className="text-sm text-red-300 space-y-1">
                  {currentErrors.map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step content */}
        <div className="mt-8 mb-8 min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <WizardStep key={currentStep} direction={direction}>
              {renderStep()}
            </WizardStep>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div>
            {!isFirstStep && (
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-txt-2 hover:text-txt glass-panel border border-white/[0.08] hover:border-primary/20 transition-all duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </motion.button>
            )}
          </div>

          <div>
            {isLastStep ? (
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                className={cn(
                  "flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold gradient-primary text-white shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar propuesta
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold gradient-primary text-white shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>

    </SectionWrapper>

      {/* Feedback Modal - rendered via portal to avoid z-index stacking context issues */}
      {createPortal(
        <AnimatePresence>
          {feedbackModal.open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              onClick={closeFeedbackModal}
            >
              <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: ease.out }}
                className="relative z-10 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <GlassCard hover={false} className="text-center">
                  <button
                    type="button"
                    onClick={closeFeedbackModal}
                    className="absolute top-4 right-4 text-txt-3 hover:text-txt transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center mb-4">
                    {feedbackModal.status === "success" ? (
                      <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center">
                        <AlertCircle className="w-8 h-8 text-red-400" />
                      </div>
                    )}
                  </div>

                  {feedbackModal.status === "success" ? (
                    <>
                      <h4 className="text-xl font-bold text-txt mb-2">
                        Recibimos tu idea
                      </h4>
                      <p className="text-txt-2 mb-1">
                        Gracias por compartir tu proyecto con nosotros.
                      </p>
                      <p className="text-txt-2 mb-4">
                        Nuestro equipo revisará tu propuesta y{" "}
                        <span className="font-semibold text-primary">
                          te contactaremos en menos de 24 horas
                        </span>{" "}
                        para platicar sobre los siguientes pasos.
                      </p>
                      <motion.button
                        type="button"
                        onClick={closeFeedbackModal}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 rounded-xl text-sm font-semibold gradient-primary text-white cursor-pointer"
                      >
                        Entendido
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <h4 className="text-xl font-bold text-txt mb-2">
                        Ocurrió un error
                      </h4>
                      <p className="text-txt-2 mb-4">{feedbackModal.message}</p>
                      {feedbackModal.details.length > 0 && (
                        <ul className="text-sm text-left text-red-300 space-y-1 mb-4 bg-red-500/10 rounded-xl p-4">
                          {feedbackModal.details.map((d) => (
                            <li key={d}>- {d}</li>
                          ))}
                        </ul>
                      )}
                      <motion.button
                        type="button"
                        onClick={closeFeedbackModal}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 rounded-xl text-sm font-semibold gradient-primary text-white cursor-pointer"
                      >
                        Intentar de nuevo
                      </motion.button>
                    </>
                  )}
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default WizardSection;
