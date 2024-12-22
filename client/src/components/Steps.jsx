import React from "react";
import { motion } from "motion/react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32 "
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">How it works</h1>
      <p className="text-lg text-gray-600 mb-8 ">
        Transform Words Into Stunnig Images
      </p>

      <div className="space-y-4 w-full max-w-3xl text-sm ">
        {stepsData.map((item, index) => (
          <div
            className="flex rounded-lg items-center gap-4 p-5 px-8 bg-white/20 shadow-medium border cursor-pointer hover:scale-[1.02] transition-all duration-300"
            key={index}
          >
            <img className="w-40 " src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
