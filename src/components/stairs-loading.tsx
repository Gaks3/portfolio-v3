import { motion, AnimatePresence } from "motion/react";

interface StairsLoadingProps {
  loading: boolean;
}

const STAIRS = [1, 2, 3, 4, 5];

const BAR_COUNT = 4;
const BAR_MAX_HEIGHT = 40; // px
const BAR_MIN_HEIGHT = 10; // px

export default function StairsLoading({ loading }: StairsLoadingProps) {
  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* 5 black stair columns */}
          {STAIRS.map((stair, i) => (
            <motion.div
              key={stair}
              className="fixed top-0 h-screen bg-background"
              style={{
                left: `${(i / 5) * 100}%`,
                width: "20%",
                zIndex: 40,
              }}
              initial={{ y: 0 }}
              exit={{
                y: "-100%",
                transition: {
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.08,
                },
              }}
            />
          ))}

          {/* 4 animated bars — bottom-right */}
          <div
            className="fixed bottom-5 right-5 flex items-end"
            style={{ zIndex: 60, height: `${BAR_MAX_HEIGHT}px` }}
          >
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 origin-bottom bg-foreground"
                style={{ height: BAR_MIN_HEIGHT }}
                animate={{
                  height: [BAR_MIN_HEIGHT, BAR_MAX_HEIGHT, BAR_MIN_HEIGHT],
                }}
                transition={{
                  duration: 1.0,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i * 0.15,
                  times: [0, 0.43, 1],
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              />
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
