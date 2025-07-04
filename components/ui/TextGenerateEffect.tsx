// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/utils/cn";

// export const TextGenerateEffect = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const [scope, animate] = useAnimate();
//   let wordsArray = words.split(" ");
//   useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//       },
//       {
//         duration: 2,
//         delay: stagger(0.2),
//       }
//     );
//   }, [scope.current]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope} >
//         {
//           wordsArray.map((word, idx) => {
//             return (
//               <motion.span
//                 key={word + idx
//                 }
//                 className={`${idx > 3 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}
//               >
//                 {word}{" "}
//               </motion.span>
//             );
//           })
//         }
//       </motion.div>
//     );
//   };

//   return (
//     <div className={cn("font-bold", className)} >
//       <div className="my-4" >
//         <div className=" dark:text-white text-black leading-snug tracking-wide" >
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      { duration: 0.5, delay: stagger(0.08) }
    );
  }, [animate]);

  const renderWords = () => {
    if (typeof children === "string") {
      // Split string into words and animate
      return children.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`inline-block mr-2 opacity-0 translate-y-2 ${idx > 3 ? "text-purple" : "dark:text-white text-black"
            }`}
        >
          {word}
        </motion.span>
      ));
    }

    if (Array.isArray(children)) {
      // Handle React children array
      return children.map((child, idx) =>
        typeof child === "string" ? (
          child.split(" ").map((word, i) => (
            <motion.span
              key={`${word}-${idx}-${i}`}
              className={`inline-block mr-2 opacity-0 translate-y-2 dark:text-white text-black`}
            >
              {word}
            </motion.span>
          ))
        ) : (
          <motion.span
            key={idx}
            className="inline-block opacity-0 translate-y-2"
          >
            {child}
          </motion.span>
        )
      );
    }

    // Single JSX node
    return (
      <motion.span className="inline-block opacity-0 translate-y-2">
        {children}
      </motion.span>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div
          ref={scope}
          className="dark:text-white text-black leading-snug tracking-wide flex flex-wrap gap-2"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
