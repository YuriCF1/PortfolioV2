import React from "react";

const SkillsCard = ({
  icon = null,
  title = "",
  description = "",
  iconColor = "blue"
}: {
  icon?: React.ReactNode,
  title?: string,
  description?: string,
  iconColor?: "blue" | "green" | "purple" | "pink" | "red" | "orange"
}) => {
  const colorClasses = {
    blue: "text-blue-500 bg-blue-100",
    green: "text-green-500 bg-green-100",
    purple: "text-purple-500 bg-purple-100",
    pink: "text-pink-500 bg-pink-100",
    red: "text-red-500 bg-red-100",
    orange: "text-orange-500 bg-orange-100"
  };

  return (
    <div className="border border-gray-400 dark:border-gray-700 hover:border-gray-300 rounded-xl px-7 py-8">      {icon && (
      <span className={`${colorClasses[iconColor]} text-5xl flex items-center justify-center w-16 h-16 mb-4 p-3 rounded-xl`}>
        {icon}
      </span>
    )}
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-lg mt-2">{description}</p>
    </div>
  )
}

export default SkillsCard