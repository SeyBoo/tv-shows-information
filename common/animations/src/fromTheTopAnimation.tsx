import React, { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FromTheTopAnimationProps {
  delay?: number;
  startY?: number;
  duration?: number;
  bounce?: number;
}

export const FromTheTopAnimation: FunctionComponent<
  PropsWithChildren<FromTheTopAnimationProps>
> = ({
  delay = 0.25,
  startY = -100,
  children,
  duration = 1.5,
  bounce = 0.3,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        type: "spring",
        bounce: bounce,
        duration: duration,
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: startY, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
