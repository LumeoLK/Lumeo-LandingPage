import { motion, AnimatePresence } from "framer-motion";

export const LiquidButton = ({
  isSubmitting,
  isSuccess,
  children,
  className = "",
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || isSuccess}
      className={`
              inline-block mt-3 w-full py-2
              border-1 border-[#231f20]
              font-[Anton] text-2xl uppercase
              text-[#231f20]
              relative overflow-hidden group
              transition-[border-color,color] duration-300
              rounded-[5px]
              hover:border-[#fbb040]
            " ${className}`}
    >
      {/* 1. The Liquid Fill Layer (Your Brand Orange) */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "90%", // Fakes progress up to 90%
              transition: { duration: 2, ease: "easeInOut" },
            }}
            exit={{
              width: "100%", // Snaps to 100% on success
              transition: { duration: 0.2 },
            }}
            className="absolute left-0 top-0 h-full bg-[#fbb040] z-0"
          />
        )}
      </AnimatePresence>

      {/* 2. Success Full Fill Layer (Green) */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-0 top-0 h-full w-full bg-green-500 z-0"
        />
      )}

      {/* 3. Text Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isSubmitting ? (
          "Sending..."
        ) : isSuccess ? (
          <>
            Sent Successfully
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
};
