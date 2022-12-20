import { FunctionComponent, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import calculateDelay from "../../utils/calculateAnimationDelay";

export const TextAnimation: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const text = children as string;

  interface WordWrapperProps {
    index: number;
  }

  const WordWrapper: FunctionComponent<PropsWithChildren<WordWrapperProps>> = ({
    children,
    index,
  }) => {
    return (
      <motion.div
        className="flex gap-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delayChildren: calculateDelay(index),
          staggerChildren: 0.025,
        }}
      >
        {children}
      </motion.div>
    );
  };

  const CharacterWrapper: FunctionComponent<PropsWithChildren> = ({
    children,
  }) => {
    return (
      <span className="overflow-hidden">
        <motion.span
          variants={{
            hidden: {
              y: "200%",
              color: "#0055FF",
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
              },
            },
            visible: {
              y: 0,
              color: "#FF0088",
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.75,
              },
            },
          }}
          className="inline-block overflow-hidden"
        >
          {children}
        </motion.span>
      </span>
    );
  };

  return (
    <h3 className="flex gap-3 text-4xl">
      {text.split(" ").map((word, index) => (
        <WordWrapper key={index} index={index}>
          {word.split("").map((character, index) => (
            <CharacterWrapper key={index}>{character}</CharacterWrapper>
          ))}
        </WordWrapper>
      ))}
    </h3>
  );
};
